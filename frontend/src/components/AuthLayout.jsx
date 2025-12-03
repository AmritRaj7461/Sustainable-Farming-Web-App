import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full">

      {/* Left Image Section */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1000')",
        }}
      />

      {/* Right Content Section */}
      <div className="flex-1 flex items-center justify-center p-10">
        <div className="w-full max-w-[400px]">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
