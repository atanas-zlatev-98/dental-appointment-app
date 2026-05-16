"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { SignInFormData, SignUpFormData } from "@/app/types/auth-types";
import {signIn, signOut} from '@/lib/auth';

export async function registerUser(formData: SignUpFormData) {

  const { name, email, password, phone } = formData;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "An account with this email already exists" };
  }

 const user =await prisma.user.create({
    data:{
      name,
      email,
      phone: phone || null,
      password: await bcrypt.hash(password, 10),
    },
    include:{
      appointments: true,
    }
  })

  return user;

}


export async function loginUser(prevState:unknown,formData: SignInFormData) {
  try{
    await signIn("credentials", {email: formData.email, password: formData.password, redirectTo: '/'});
    return { success: true };
  }catch(err){
    console.error("Error signing in:", err);
    return { error: "Invalid email or password" };
  }
}


export async function logOutUser() {
  try{
    await signOut({ redirectTo: '/' });
  }catch(err){
    return { error: "Error signing out", details: err };
  }
}
