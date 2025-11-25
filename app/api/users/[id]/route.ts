import User from "@/database/user.model";
import handleError from "@/lib/handlers/errors";
import { NotFoundError } from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";
import { UserSchema } from "@/lib/validation";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  //sprawdzenie id jest zbedne i powinno byc ewentulanie w bloku try zeby zostal dobrze obsluzony
  const { id } = await params;
  if (!id) throw new NotFoundError('User')
  
  try { 
    await dbConnect()
    const user = await User.findById(id)
    if(!user) throw new NotFoundError('User')

    return NextResponse.json({success: true, data: user}, {status: 200})
  }
  catch (error) {
    return handleError(error, 'api')
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  try { 
    await dbConnect()
    const user = await User.findByIdAndDelete(id)
    if(!user) throw new NotFoundError('User')

    return NextResponse.json({success: true, data: user}, {status: 200})
  }
  catch (error) {
    return handleError(error, 'api')
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;
  
  try { 
    await dbConnect()

    const body = await request.json()
    const validatedData = UserSchema.partial().parse(body)

    const userUpdate = await User.findByIdAndUpdate(id, validatedData, { new: true })
    
    if(!userUpdate) throw new NotFoundError('User')

    return NextResponse.json({success: true, data: userUpdate}, {status: 200})
  }
  catch (error) {
    return handleError(error, 'api')
  }
}