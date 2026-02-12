'use client';

import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[450px] flex flex-col gap-8">
        {/* Brand Logo */}
        <Link href="/" className="relative w-[110px] h-[36px] block hover:opacity-80 transition-opacity">
          <Image
            src="/images/mljv0756-l1515i6.svg"
            alt="Brand Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Title */}
        <h1 className="text-white text-xl font-semibold -tracking-[0.5px]">
          Sign up to your account
        </h1>

        {/* Google Sign Up Button */}
        <button className="flex items-center justify-center gap-3 bg-white rounded-xl py-[14px] w-full hover:bg-gray-100 transition-colors">
          <div className="relative w-[31px] h-[32px]">
            <Image
              src="/images/mljv0756-yp6yosj.svg"
              alt="Google Icon"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-black text-base font-semibold -tracking-[0.4px]">
            Sign up with Google
          </span>
        </button>

        {/* Divider Text */}
        <p className="text-white/60 text-base font-medium">
          Or continue with email
        </p>

        {/* Email Form */}
        <form className="flex flex-col gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="bg-white/20 rounded-xl px-5 py-4 w-full transition-colors focus-within:bg-white/30">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent w-full text-white placeholder:text-white/60 text-base font-medium outline-none"
              required
            />
          </div>
          <div className="bg-white/20 rounded-xl px-5 py-4 w-full transition-colors focus-within:bg-white/30">
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent w-full text-white placeholder:text-white/60 text-base font-medium outline-none"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="bg-white rounded-full py-4 px-10 w-fit mt-0 font-semibold text-black text-base hover:bg-gray-100 transition-colors"
          >
            Sign up
          </button>
        </form>

        {/* Sign In Link */}
        <Link
          href="/login"
          className="text-white text-base font-medium underline hover:text-gray-300 transition-colors w-fit"
        >
          I want to sign in
        </Link>
      </div>
    </div>
  );
}
