import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/Context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, ArrowRight, Lock, Mail } from "lucide-react";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("dsir");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await login(email, password, userType);

      if (result.success) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user.role === "DSIR_ADMIN") navigate("/dashboard");
        else if (user.role === "TOCIC_ADMIN") navigate("/dashboard");
        else navigate("/");
      } else {
        setError(result.message || "Invalid credentials.");
      }
    } catch (err) {
      setError("Connection failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden rounded-2xl border border-blue-100/50 bg-white/80 backdrop-blur-sm shadow-2xl shadow-blue-500/10">
      {/* --- LEFT SIDE: MODERN GRADIENT BACKGROUND --- */}
      <div className="relative w-full md:w-5/12 p-10 flex flex-col justify-center text-center overflow-hidden bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-500">
        {/* Modern floating orbs */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-cyan-300/20 rounded-full blur-3xl"></div>

        {/* Geometric patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

        <div className="relative z-10 space-y-4">
          <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl font-bold text-white drop-shadow-lg">
            PRISM Pulse
          </h2>
          <p className="text-blue-50 text-sm leading-relaxed font-medium max-w-xs mx-auto">
            Secure portal for proposal management, innovation tracking, and fund
            monitoring.
          </p>

          <div className="pt-6 flex items-center justify-center gap-2 text-xs text-blue-100">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>System Online</span>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: LIGHT FORM --- */}
      <div className="w-full md:w-7/12 p-10 bg-gradient-to-br from-white to-blue-50/30">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-1">
            Welcome Back
          </h3>
          <p className="text-sm text-slate-500">
            Sign in to access your dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Portal Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-slate-700">
              Portal Type
            </Label>
            <Select value={userType} onValueChange={setUserType}>
              <SelectTrigger className="w-full bg-white border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent h-11 rounded-lg">
                <SelectValue placeholder="Select Portal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dsir">DSIR Admin Portal</SelectItem>
                <SelectItem value="tocic">TOCIC Center Portal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-semibold text-slate-700"
            >
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 bg-white border-blue-200 focus:border-transparent focus:ring-2 focus:ring-blue-500 h-11 rounded-lg"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-sm font-semibold text-slate-700"
              >
                Password
              </Label>
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10 bg-white border-blue-200 focus:border-transparent focus:ring-2 focus:ring-blue-500 h-11 rounded-lg"
              />
            </div>
          </div>

          {error && (
            <div className="text-sm text-red-600 font-medium bg-red-50 p-3 rounded-lg border border-red-200 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6 h-12 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-200 rounded-lg font-semibold text-base"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                Login to Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          <p className="text-center text-xs text-slate-500 pt-4">
            Protected by DSIR Security Protocol
          </p>
        </form>
      </div>
    </div>
  );
}
