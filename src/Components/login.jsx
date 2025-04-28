import React, { useState } from "react";
import FloatingLabelInput from "./input_style";
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#484c65] to-[#251233] px-4 font-tagesschrift">
      <div className="bg-gradient-to-br from-[#1d2732] to-[#0a0f17] rounded-2xl shadow-2xl w-full max-w-[1000px] flex overflow-hidden  min-h-[600px]">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 p-10 relative flex flex-col justify-center">
          {/* SyncBoard Badge */}
          <div className="absolute top-6 left-6 bg-[#1d2732] border-[0.1px] border-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md">
          Syncboard
          </div>

          {/* Welcome Text */}
          <div className="mb-5 text-center mt-10">
            <div className="flex gap-2 items-center justify-center">
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#cec2c4] to-[#c68bd4] mb-2">
                Welcome
              </h1>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c283d6] to-[#8a45ad] mb-2">
                Back
              </h1>
            </div>
            <p className="text-gray-400">Please login to continue</p>
          </div>

          {/* Inputs */}
          {/* <div className="mt-3">
            <FloatingLabelInput
              id="username"
              name="username"
              type="text"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div> */}

          <div className="mt-3">
            <FloatingLabelInput
              id="email"
              name="email"
              type="email"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mt-3">
            <FloatingLabelInput
              id="password"
              name="password"
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="#forgot"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#463ec6] to-[#b23575] text-white rounded-lg 
              transform transition-all duration-300 ease-out 
              hover:scale-105 hover:-translate-y-1 hover:from-purple-700 hover:to-pink-600 hover:shadow-xl 
              active:scale-95 active:shadow-md 
              focus:outline-none focus:ring-0"
            >
              Log In
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-purple-400 hover:text-purple-300 underline">
              Sign Up
            </Link>
            </p>
          </div>
        </div>

        {/* Right side - Empty */}
        <div className="hidden md:block md:w-300 relative overflow-hidden">
          <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-[#04080e] via-[#110d22] to-[#2c0f25] flex items-center justify-center">
          <img
          src="public/syncboard-hero.png"
          className="h-130"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
