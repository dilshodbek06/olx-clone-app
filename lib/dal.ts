import "server-only";

import { cache } from "react";
import { verifySession } from "./session";
import prisma from "./db";

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const users = await prisma.user.findMany({
      where: {
        id: session?.userId as string,
      },
    });

    return users[0];
  } catch (error) {
    console.log("Failed to fetch user", error);
    return null;
  }
});
