import "server-only";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const key = new TextEncoder().encode(process.env.SECRET);

const cookie = {
  name: "session",
  options: {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  },
  duration: 24 * 60 * 60 * 1000,
};

export async function encrypt(payload: JWTPayload | undefined) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

export async function decrypt(session: string | Uint8Array) {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err);
    return null;
  }
}

export async function createSession(userId: string) {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({ userId, expires });
  const cookieStore = cookies();
  (await cookieStore).set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
  return redirect("/");
}

export async function verifySession() {
  const newCookie: string | Uint8Array | undefined = (await cookies()).get(
    cookie?.name
  )?.value;
  const session = await decrypt(newCookie!);
  if (!session?.userId) {
    redirect("/sign-in");
  }
  return { userId: session?.userId };
}
export async function verifySessionUserId() {
  const newCookie: string | Uint8Array | undefined = (await cookies()).get(
    cookie?.name
  )?.value;
  const session = await decrypt(newCookie!);
  if (!session?.userId) {
    return { userId: null };
  }
  return { userId: session?.userId };
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
