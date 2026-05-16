'use client';

import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/bg/logo-2.png";
import { useState } from "react";
import { SignInFormData } from "@/app/types/auth-types";
import { loginUser } from "@/lib/actions/auth.actions";
import { redirect } from 'next/navigation';

const initialState = {
    email: '',
    password: '',
}

export function SignInForm() {

    const [formData,setFormData] = useState<SignInFormData>(initialState);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormData(oldState => (
            {...oldState, [e.target.name]: e.target.value}
        ))
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await loginUser(null,formData);
        redirect('/');
    }

    return (
        
        <form className="flex flex-col" onSubmit={submitHandler}>

            <h1 className="text-md font-bold mb-6 text-left text-blue-950 flex items-center">
                <Image src={logo} alt="Dental Appointment App" width={30} height={30} className="p-1" /> Dental Appointment App</h1>
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Sign In.</h2>

            <div className="form-g flex flex-col mb-4">
                <label htmlFor="email" className="block text-md font-bold text-gray-700 mb-1">
                    Email
                </label>
                <input type="email" name="email" id="email" placeholder="Your email..." className="p-2 border border-gray-400 text-black rounded text-md" value={formData.email} onChange={changeHandler} />
            </div>

            <div className="form-g flex flex-col mb-4">
                <label htmlFor="password" className="block text-md font-bold text-gray-700 mb-1">
                    Password
                </label>
                <input type="password" name="password" id="password" placeholder="Your password..." className="p-2 border border-gray-400 text-black rounded text-md" value={formData.password} onChange={changeHandler} />
            </div>

            <div className="form-g">
                <button type="submit" className="w-full py-2 rounded-md bg-blue-400 text-white text-md hover:bg-blue-900 transition-colors cursor-pointer">
                    Sign In
                </button>

                <p className="text-black mt-2 text-md">Don&apos;t have an account? <Link href="/sign-up" className="text-blue-600 hover:underline cursor-pointer">Sign Up</Link></p>
            </div>

        </form>
    )
}