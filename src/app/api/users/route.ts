import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import crypto from "crypto";

import { createAdminClient } from "@/lib/supabase/server/client";

const emailSchema = z.object({
  email: z.string().email("Invalid email format").trim().toLowerCase(),
});

/**
 * When an email is saved on the browser extension, this route is called to save it on the database.
 *
 * @param request - The request object containing the email to save.
 *
 * @returns The response object containing the saved user or an error message.
 */
export async function POST(request: NextRequest) {
  const { email } = await request.json();
  const trackingId = crypto
    .createHash("sha256")
    .update(email.toLowerCase().trim())
    .digest("hex");

  const supabase = createAdminClient();

  const { data: existingUser, error: existingUserError } = await supabase
    .from("users")
    .select("*")
    .eq("tracking_id", trackingId)
    .maybeSingle();

  if (existingUserError) {
    console.error("Error checking existing user:", existingUserError);
    return NextResponse.json(
      {
        error: "Failed to check if user exists",
        details: existingUserError.message,
      },
      { status: 500 }
    );
  }

  if (existingUser) {
    return NextResponse.json(
      {
        data: existingUser,
        message: "User already exists",
      },
      { status: 200 }
    );
  }

  let { data: newUser, error: newUserError } = await supabase
    .from("users")
    .insert({ tracking_id: trackingId })
    .select();

  if (newUserError) {
    console.error("Error creating new user:", newUserError);
    return NextResponse.json(
      {
        error: "Failed to create user",
        details: newUserError.message,
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      data: newUser,
      message: "User created successfully",
    },
    { status: 201 }
  );
}
