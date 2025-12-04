import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const GoogleLogin = ({ label = "Login with Google" }) => {
  const { signInGoogle } = useAuth();
  const location = useLocation()
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        console.log("Google user:", result.user);
        navigate(location?.state || '/')
      })
      .catch((error) => {
        console.error("Google login error:", error);
      });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full bg-[#EAECEF] hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg 
                 flex items-center justify-center gap-2 transition duration-200"
    >
      <FcGoogle className="w-5 h-5" />
      {label}
    </button>
  );
};

export default GoogleLogin;
