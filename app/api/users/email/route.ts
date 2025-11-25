import User from "@/database/user.model";
import handleError from "@/lib/handlers/errors";
import { ValidationError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { UserSchema } from "@/lib/validation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await dbConnect()

    const body = await request.json()
    const validatedData = UserSchema.partial().safeParse(body)

    if (!validatedData.success) throw new ValidationError(validatedData.error.flatten().fieldErrors)

    const { email } = validatedData.data
    
    const user = await User.findOne({ email })
    return NextResponse.json({ success: true, data: user }, { status: 200 })

  } catch(error) {
    return handleError(error, 'api')
  }
}