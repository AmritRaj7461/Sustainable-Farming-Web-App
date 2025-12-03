import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

const Input = ({ value, placeholder, onChange, type = "text", label }) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => setShowPassword((prev) => !prev)

  return (
    <div className="relative w-full space-y-1">
      <label className="text-sm font-semibold text-black">{label}</label>

      <input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pr-10 text-sm text-black rounded px-4 py-3 mb-4 mt-1 border border-slate-200 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-300"
      />

      {type === "password" && (
        <div
          onClick={toggleShowPassword}
          className="absolute right-3 top-12.5 -translate-y-1/2 text-slate-400 hover:text-green-500 cursor-pointer"
        >
          {showPassword ? <FaRegEye size={20} /> : <FaRegEyeSlash size={20} />}
        </div>
      )}
    </div>
  )
}

export default Input
