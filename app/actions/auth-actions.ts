"use server";

import prisma from "@/lib/db";
import { createSession } from "@/lib/session";
import bcrypt from "bcryptjs";

export async function signup(registerData: {
  name: string;
  email: string;
  password: string;
}) {
  // check email is already registered

  const currentUser = await prisma.user.findUnique({
    where: {
      email: registerData.email,
    },
  });
  if (currentUser) {
    // throw new Error("Email is already registered.");
    return {
      error: true,
      status: 409,
    };
  }

  // create new user

  const hashedPassword = await bcrypt.hash(registerData.password, 10);
  const user = await prisma.user.create({
    data: {
      name: registerData.name,
      email: registerData.email,
      password: hashedPassword,
    },
  });

  // create a session

  await createSession(user.id);
}

export async function login(loginData: { email: string; password: string }) {
  // Retrieve user by email
  const user = await prisma.user.findUnique({
    where: {
      email: loginData.email,
    },
  });

  // Check if user exists
  if (!user) {
    // throw new Error("Invalid email or password.");
    return {
      error: true,
      status: 404,
    };
  }

  // Compare the provided password with the hashed password
  const isPasswordValid = await bcrypt.compare(
    loginData.password,
    user.password
  );

  if (!isPasswordValid) {
    // throw new Error("Invalid password.");
    return {
      error: true,
      status: 403,
    };
  }

  // Create a session for the authenticated user
  await createSession(user.id);

  return {
    message: "Login successful.",
    userId: user.id,
  };
}
