"use client";
import { logOutUser } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";

export default function LogoutButton() {

  const handleLogout = async () => {
    await logOutUser();
    redirect('/sign-in');
  };


  return (
    <button onClick={() => handleLogout()} className="cursor-pointer bg-blue-400 text-white rounded p-1 hover:bg-blue-900">
      Logout
    </button>
  );
}