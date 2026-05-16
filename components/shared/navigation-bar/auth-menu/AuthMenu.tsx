import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function AuthMenu() {
  const session = await auth();
  return(
    <div className="md:flex max-w-[200px] w-full h-16 items-center justify-center">

      {session ? (

        <div className="px-4 py-2 rounded-md text-lg font-medium text-black">
          <p>Welcome, <span className="font-bold">{session.user?.name}!</span></p>
        </div>

      ) : (
       <div className="flex gap-2 flex-row w-full items-center justify-center">

            <Link href="/login" className="rounded p-2 hover:bg-blue-900 hover:text-white border-blue-900 border bg-transparent text-blue-950">
              Login
            </Link>
            
            <Link href="/signup" className="bg-blue-400 rounded p-2 hover:bg-blue-900">
              Sign up
            </Link>

          </div>
      )}
      
    </div>
  );
}
