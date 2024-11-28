import { deleteSession } from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await deleteSession();
    return NextResponse.redirect("/sign-in");
  } catch (error) {
    console.log("[LOGOUT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
