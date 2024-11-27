import prisma from "@/lib/db";
import { verifySession } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    const session = await verifySession();
    if (!session?.userId) {
      return new NextResponse("Session not found", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.userId as string },
    });
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const likedAd = await prisma.favorite.create({
      data: {
        adId: id,
        userId: user.id,
      },
    });

    return NextResponse.json(likedAd);
  } catch (error) {
    console.log("[CREATE_LIKED_AD]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
