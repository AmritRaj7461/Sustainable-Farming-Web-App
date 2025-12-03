import React, { useState } from 'react'
import AuthLayout from '../../components/AuthLayout'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async () => { }

  return (
    <AuthLayout>
      <div className="bg-white rounded-2xl p-10 border border-gray-200 shadow-lg w-full max-w-sm h-[500px] flex flex-col justify-center">
        
        <h2 className='text-center mb-6 text-3xl font-bold text-black'>
          Create Your Account
        </h2>

        {/* Name Input */}
        <Input
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />

        {/* Email Input */}
        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />

        {/* Password Input WITH EYE TOGGLE */}
        <Input
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-3 rounded-lg mt-4 transition-all duration-200"
        >
          Sign Up
        </button>

        {/* Footer */}
        <div className="flex mt-4 gap-2 text-sm text-gray-700">
          <p>Already have an account?</p>
          <span
            onClick={() => navigate("/login")}
            className="text-purple-500 cursor-pointer hover:underline"
          >
            Login
          </span>
        </div>

      </div>
    </AuthLayout>
  )
}

export default Signup
