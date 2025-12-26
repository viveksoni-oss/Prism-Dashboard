import React, { useEffect } from "react";
import LoginCard from "@/components/login/LoginCard";

export default function Login() {
  
  // Scroll down 150px on load
  useEffect(() => {
    window.scrollTo({
      top: 150,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-50 pt-[150px] pb-20">
      
      {/* 1. LIGHT BACKGROUND EFFECTS */}
      {/* Soft Gradient Mesh */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-blue-200/40 rounded-full blur-[80px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-200/40 rounded-full blur-[80px]" />
      <div className="absolute top-[40%] left-[30%] w-[25vw] h-[25vw] bg-emerald-100/50 rounded-full blur-[60px]" />

      {/* Grid Pattern (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] z-0 pointer-events-none" />

      {/* 2. CENTERED CARD */}
      <div className="relative z-10 w-full max-w-3xl px-4 animate-in fade-in zoom-in duration-500">
        <LoginCard />
      </div>
    </div>
  );
}
