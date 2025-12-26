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
import { Loader2, ArrowRight } from "lucide-react";

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
    <div className="flex flex-col md:flex-row w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
      {/* --- LEFT SIDE: GRADIENT BACKGROUND --- */}
      <div className="relative w-full md:w-5/12 p-8 flex flex-col justify-center text-center  overflow-hidden bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        {/* Abstract shapes for depth */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl -ml-16 -mb-16 mix-blend-overlay"></div>

        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2 text-white mb-10">
            PRISM Pulse connect
          </h2>
          <p className="text-blue-50 text-sm leading-relaxed opacity-90 font-medium">
            Secure portal for proposal management and fund tracking.
          </p>
        </div>
      </div>

      {/* --- RIGHT SIDE: COMPACT FORM --- */}
      <div className="w-full md:w-7/12 p-8 bg-white">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900">Sign In</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Portal Selection */}
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-slate-500">
              Portal Type
            </Label>
            <Select value={userType} onValueChange={setUserType}>
              <SelectTrigger className="w-full bg-slate-50 border-slate-200 focus:ring-blue-500 focus:border-blue-500">
                <SelectValue placeholder="Select Portal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dsir">DSIR Admin Portal</SelectItem>
                <SelectItem value="tocic">TOCIC Center Portal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label
              htmlFor="email"
              className="text-xs font-semibold text-slate-500"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-slate-50 border-slate-200 focus:bg-white transition-all"
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-xs font-semibold text-slate-500"
              >
                Password
              </Label>
              <a
                href="#"
                className="text-xs text-blue-600 hover:underline font-medium"
              >
                Forgot?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-slate-50 border-slate-200 focus:bg-white transition-all"
            />
          </div>

          {error && (
            <div className="text-xs text-red-600 font-medium bg-red-50 p-2 rounded border border-red-100">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white mt-2 h-10 shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <>
                Login to Dashboard
                <ArrowRight className="ml-2 h-3 w-3" />
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
