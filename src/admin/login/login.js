"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { API_BASE_URL } from "../config";

export default function BlogsLogin() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(API_BASE_URL + "/auth/login", {
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
                    const roleNormalized = data.role ? String(data.role).toLowerCase().replace(/[^a-z]/g, "") : "";
                    if (roleNormalized === "superadmin") {
                        localStorage.setItem("super_admin_token", data.access_token);
                        localStorage.setItem("superadmin_token", data.access_token);
                    }
                }

                // Route depending on credentials/role
                router.push("/admin/dashboard");
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
        <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white select-none">
            {/* Left Column: Login Form */}
            <div className="w-full lg:w-1/2 p-8 sm:p-12 md:p-20 xl:p-32 flex flex-col justify-center">
                {/* Top Logo */}
                <div className="mb-8">
                    <Link href="/">
                        <img
                            src="/securxpertslogo.png"
                            alt="SecurXpert Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Form Content */}
                <div className="my-auto max-w-[360px] w-full mx-auto lg:mx-0">
                    <div className="mb-8 text-left">
                        <h2 className="text-[#333333] text-[32px] font-bold tracking-tight mb-2 font-inter">
                            Welcome Back
                        </h2>
                        <p className="text-[#999999] text-sm font-medium">
                            Please login your account
                        </p>
                    </div>

                    <form onSubmit={handlesubmit} className="space-y-5">
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="block text-[#4A4A4A] text-sm font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@gmail.com"
                                required
                                className="w-full px-4 py-3 bg-white border border-[#D5D9E2] rounded-[14px] text-sm text-slate-800 focus:outline-none focus:border-[#3D5BE5] focus:ring-1 focus:ring-[#3D5BE5] transition-all placeholder:text-[#A0A5B5]"
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="block text-[#4A4A4A] text-sm font-bold">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="enter your password"
                                    required
                                    className="w-full px-4 py-3 bg-white border border-[#D5D9E2] rounded-[14px] text-sm text-slate-800 focus:outline-none focus:border-[#3D5BE5] focus:ring-1 focus:ring-[#3D5BE5] transition-all placeholder:text-[#A0A5B5] pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#A0A5B5] hover:text-[#4A4A4A] transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-4 h-4" />
                                    ) : (
                                        <Eye className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end">
                            <Link
                                href="#"
                                className="text-[#3D5BE5] text-[13px] font-bold hover:text-blue-800 transition-colors"
                            >
                                Forgot Password
                            </Link>
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#3D5BE5] hover:bg-[#2C48D4] text-white font-bold text-sm py-3.5 rounded-[14px] shadow-[0_4px_12px_rgba(61,91,229,0.25)] transition-all active:scale-[0.98] mt-2 cursor-pointer text-center"
                        >
                            Sign in
                        </button>
                    </form>
                </div>

            </div>

            {/* Right Column: Banner Image */}
            <div className="hidden lg:block lg:w-1/3 h-screen sticky top-0">
                <img
                    src="/blogs/login/loginimage.png"
                    alt="Powering Businesses with Secure Digital Innovation"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
