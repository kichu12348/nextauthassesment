"use client";

import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import Image from "next/image";

export default function GoogleAuth({ onAuth }) {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      onAuth(result.user);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <Button
      variant="contained"
      onClick={handleLogin}
      fullWidth
      sx={{
        background: "rgba(25, 25, 40, 0.8)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
        color: "rgba(255, 255, 255, 0.9)",
        "&:hover": {
          background: "rgba(138, 43, 226, 0.8)",
          transform: "translateY(-2px)",
          boxShadow: "0 6px 25px rgba(138, 43, 226, 0.3)",

           ".google-logo": {
            transform:"translateY(-2px) rotate(-20deg)",
           }
        },
        transition: "all 0.3s ease",
      }}
    >
      <Image
        src="/google.svg"
        alt="Google Logo"
        className="google-logo"
        width={20}
        height={20}
        style={{ marginRight: "8px",transition:"all 0.3s ease" }}
      />
      Sign in with Google
    </Button>
  );
}
