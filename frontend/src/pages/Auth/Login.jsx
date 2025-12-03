import React, { useState } from "react";
import AuthLayout from "../../components/AuthLayout";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <AuthLayout>
      <div className="bg-white rounded-2xl p-10 border border-gray-200 shadow-lg w-full max-w-sm h-[500px] flex flex-col justify-between">

        <div>
          <h2 className="text-center mb-8 text-3xl font-bold text-black">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email Input */}
            <Input
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />

            {/* Password Input WITH eye toggle */}
            <Input
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-3 rounded-lg transition-all duration-200"
            >
              Login
            </button>

          </form>
        </div>

        {/* Footer */}
        <div className="flex justify-center mt-6 gap-2 text-sm text-gray-700">
          <p>Don't have an account?</p>
          <span
            onClick={() => navigate("/signup")}
            className="text-purple-500 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </div>

      </div>
    </AuthLayout>
  );
};

export default Login;
