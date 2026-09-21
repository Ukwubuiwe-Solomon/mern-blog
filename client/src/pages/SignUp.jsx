import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col sm:flex-row md:items-center gap-5">
        {/* Left Side */}
        <div className="flex-1">
          <Link to="/" className="font-bold text-4xl sm:text-xl ">
            <span className="px-2 py-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
              Solomon's
            </span>
            Blog
          </Link>
          <p className="mt-5 text-sm">
            Go ahead and sign up with your email and password or you can sign up
            with Google.
          </p>
        </div>
        {/* Right Side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <label className="font-bold text-sm text-gray-600">
                Your username
              </label>
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div>
              <label className="font-bold text-sm text-gray-600">
                Your email
              </label>
              <TextInput
                type="text"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            <div>
              <label className="font-bold text-sm text-gray-600">
                Your password
              </label>
              <TextInput type="text" placeholder="password" id="password" />
            </div>
            <Button className="bg-linear-to-br from-purple-600 to-pink-500 text-white hover:bg-linear-to-bl focus:ring-pink-300 dark:focus:ring-blue-800">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 mt-4 text-sm">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
