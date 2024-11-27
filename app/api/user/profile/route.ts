import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { verifySession } from "@/lib/session";
import prisma from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, password, profileImage } = await req.json();

    const session = await verifySession();
    if (!session?.userId) {
      return new NextResponse("Session not found", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.userId as string },
    });

    if (!user) {
      return new NextResponse("Not found", { status: 404 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        name,
        email,
        password: hashedPassword,
        profileImage,
      },
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log("[UPDATE_PROFILE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
