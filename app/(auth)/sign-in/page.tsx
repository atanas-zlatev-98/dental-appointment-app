import { SignInForm } from "./sign-in-form/SignInForm";

export default function SignInPage() {
    return (
        <div className="w-full max-w-md rounded-lg bg-white border flex flex-col p-5">
            {/* <h2 className="text-2xl font-bold mb-6 text-center text-blue-950">Sign In</h2 */}
            <SignInForm/>
        </div>
    )
}