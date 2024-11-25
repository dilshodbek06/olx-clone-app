import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";
import { decrypt } from "./lib/session";

// 1. Specify protected and public routes
const protectedRoutes = ["/create"];
// const publicRoutes = ["/sign-in", "/sign-up", "/", "/detail/*"];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  // const isPublicRoute = publicRoutes.includes(path);
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie!);

  if (isProtectedRoute) {
    // 3. Decrypt the session from the cookie

    // 4. Redirect to /login if the user is not authenticated
    if (!session?.userId) {
      return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
    }
  }

  // if (isPublicRoute && session?.userId) {
  //   return NextResponse.redirect(new URL("/", req.nextUrl));
  // }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
