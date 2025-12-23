import Prism from "@/components/background/prismBg";
import LoginCard from "@/components/login/LoginCard";
import React from "react";

function Login() {
  return (
    <div className="flex justify-center relative">
      {" "}
      <div
        className="absolute inset-0 h-dvh"
        style={{ width: "100%", position: "relative" }}
      >
        <Prism
          animationType="rotate"
          timeScale={1}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={0.5}
          noise={0.1}
          glow={0.5}
        />
      </div>
      <div className="absolute in w-full top-[20%] flex justify-center items-center">
        <LoginCard></LoginCard>
      </div>
    </div>
  );
}

export default Login;
