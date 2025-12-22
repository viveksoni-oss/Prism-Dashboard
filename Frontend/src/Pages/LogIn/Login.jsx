import Prism from "@/components/background/prismBg";
import LoginCard from "@/components/login/LoginCard";
import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center relative">
      {" "}
      <div
        className="absolute inset-0 -top-15 "
        style={{ width: "100%", height: "800px", position: "relative" }}
      >
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>
      <div className="absolute w-full flex justify-center items-center">
        <LoginCard></LoginCard>
      </div>
    </div>
  );
}

export default Login;
