'use client';

import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/bg/logo-2.png";
import { ProfilePicturePicker } from "@/components/profile-picture-picker/ProfilePicturePicker";
import { useState } from "react";
import { SignUpFormData } from "@/app/types/auth-types";
import { registerUser } from "@/lib/actions/auth.actions";
import { imageUpload } from "@/components/profile-picture-picker/image-upload";

const initialState = {
    name: '',
    email: '',
    phone: '',
    password: '',
    profilePictureUrl:  '',
}

export function SignUpForm() {

    const [profilePictureUrl, setProfilePictureUrl] = useState<string>('');
    const [profilePictureFile, setProfilePictureFile] = useState<File | null>(null);
    const [formData,setFormData] = useState<SignUpFormData>(initialState);

    const handleImageChange = async (file: File) => {
        const url = URL.createObjectURL(file);
        setProfilePictureUrl(url);
        setProfilePictureFile(file);
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(oldState => (
            {...oldState, [e.target.name]: e.target.value}
        ))
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const uploadedImageUrl = await imageUpload(profilePictureFile!);
            const response = await registerUser({...formData, profilePictureUrl: uploadedImageUrl});
        }catch(err){
            console.error("Error registering user:", err);
        }
    }

    return (
          <form className="flex flex-col" onSubmit={submitHandler}>

            <h1 className="text-md font-bold mb-6 text-left text-blue-950 flex items-center">
                <Image src={logo} alt="Dental Appointment App" width={30} height={30} className="p-1" /> Dental Appointment App</h1>
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Create Account.</h2>

            <div className="form-g flex flex-col mb-4 justify-center items-center">
                <ProfilePicturePicker imageUrl={profilePictureUrl} onImageChange={handleImageChange} />
                <label htmlFor="name" className="block text-md font-bold text-gray-700 mb-1 mt-3">
                    Select Profile Picture
                </label>
            </div>

            <div className="form-g flex flex-col mb-4">
                <label htmlFor="name" className="block text-md font-bold text-gray-700 mb-1 ">
                    First Name and Last Name
                </label>
                <input type="text" name="name" id="name" placeholder="Your first and last name..." className="p-2 border border-gray-400 text-black rounded text-md" value={formData.name} onChange={changeHandler} />
            </div>


            <div className="form-g flex flex-col mb-4">
                <label htmlFor="email" className="block text-md font-bold text-gray-700 mb-1">
                    Email
                </label>
                <input type="email" name="email" id="email" placeholder="Your email..." className="p-2 border border-gray-400 text-black rounded text-md" value={formData.email} onChange={changeHandler} />
            </div>

              <div className="form-g flex flex-col mb-4">
                <label htmlFor="phone" className="block text-md font-bold text-gray-700 mb-1">
                    Phone
                </label>
                <input type="number" name="phone" id="phone" placeholder="Your phone number..." className="p-2 border border-gray-400 text-black rounded text-md" value={formData.phone} onChange={changeHandler} />
            </div>

            <div className="form-g flex flex-col mb-4">
                <label htmlFor="password" className="block text-md font-bold text-gray-700 mb-1">
                    Password
                </label>
                <input type="password" name="password" id="password" placeholder="Your password..." className="p-2 border border-gray-400 text-black rounded text-md" value={formData.password} onChange={changeHandler} />
            </div>

             <div className="form-g flex flex-col mb-4">
                <label htmlFor="confirmPassword" className="block text-md font-bold text-gray-700 mb-1">
                    Confirm Password
                </label>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm your password..." className="p-2 border border-gray-400 text-black rounded text-md" />
            </div>

            <div className="form-g">
                <button type="submit" className="w-full py-2 rounded-md bg-blue-400 text-white text-md hover:bg-blue-900 transition-colors cursor-pointer">
                    Sign In
                </button>

                <p className="text-black mt-2 text-md">Already have an account? <Link href="/sign-in" className="text-blue-600 hover:underline cursor-pointer">Sign In here.</Link></p>
            </div>

        </form>
    )
}