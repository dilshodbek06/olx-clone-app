import { NextResponse } from "next/server";
import { verifySession } from "@/lib/session";
import prisma from "@/lib/db";

export async function POST(req: Request) {
  try {
    const {
      title,
      description,
      images,
      location,
      category,
      email,
      personName,
      phoneNumber,
      price,
    } = await req.json();

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

    const ad = await prisma.ad.create({
      data: {
        category,
        description,
        email,
        location,
        personName,
        phoneNumber,
        title,
        images,
        userId: user.id,
        price
      },
    });

    return NextResponse.json(ad);
  } catch (error) {
    console.log("[CREATE_AD]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
