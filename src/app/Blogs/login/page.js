"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function BlogsLogin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://192.168.1.42:9000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        
        // Securely store the token and role in localStorage for future API requests
        if (data.access_token) {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("role", data.role);
        }

        // If the API returns 200 OK, route to the create page
        router.push("/Blogs/create");
      } else if (res.status === 422) {
        alert("Validation Error: Please check your email and password.");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    }
  };




  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-[#FCFCFD] overflow-hidden">
      {/* Top Left Logo */}
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20">
        <Link href="/">
          <Image
            src="/securxpertslogo.png"
            alt="SecurXpert Logo"
            width={180}
            height={60}
            className="w-32 sm:w-40 lg:w-48 h-auto object-contain"
            priority
          />
        </Link>
      </div>

      {/* Main Content Wrapper */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10 mt-16 lg:mt-0">

        {/* Left Side: 3D Illustration */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[400px] sm:max-w-[550px] lg:max-w-[650px] aspect-square animate-float-slow">
            {/* Base Image: The circular rings pattern */}
            <Image
              src="/Blogs/login/login-image2.png"
              alt="Login Background Rings"
              fill
              className="object-contain"
              priority
            />
            {/* Top Image: The 3D Security Illustration stacked exactly in the center */}
            <Image
              src="/Blogs/login/login-image.png"
              alt="Login Security Illustration"
              fill
              className="object-contain drop-shadow-lg z-10 scale-[0.95]"
              priority
            />
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end xl:pr-16">
          <div className="w-full max-w-md bg-white/40 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none p-6 sm:p-8 rounded-2xl">

            <div className="text-center mb-10">
              <h2 className="text-[#3A3C42] text-3xl sm:text-[34px] font-bold mb-2 font-inter tracking-tight">
                Welcome Back
              </h2>
              <p className="text-[#A1A5B7] text-[15px] font-medium">
                Please login your account
              </p>
            </div>

            <form onSubmit={handlesubmit} className="space-y-6">

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-[#464E5F] text-[15px] font-bold">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@gmail.com"
                  required
                  className="w-full px-4 py-3.5 bg-white border border-[#E1E3EA] rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#4154F1] focus:ring-1 focus:ring-[#4154F1] transition-all placeholder:text-[#A1A5B7]"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-[#464E5F] text-[15px] font-bold">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="enter your password"
                    required
                    className="w-full px-4 py-3.5 bg-white border border-[#E1E3EA] rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#4154F1] focus:ring-1 focus:ring-[#4154F1] transition-all placeholder:text-[#A1A5B7] pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A1A5B7] hover:text-[#464E5F] transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end pt-1">
                <Link
                  href="#"
                  className="text-[#4154F1] text-[13px] font-bold hover:text-blue-800 transition-colors"
                >
                  Forgot Password
                </Link>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-[#4154F1] hover:bg-[#3444C9] text-white font-bold text-[15px] py-4 rounded-xl shadow-[0_4px_14px_rgba(65,84,241,0.3)] transition-all active:scale-[0.98] mt-4"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
