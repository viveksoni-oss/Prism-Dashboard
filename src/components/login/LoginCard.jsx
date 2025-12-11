import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useAuth } from "./AuthContext" // adjust path if needed

export function LoginCard() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const allowedEmails = [
    "Krishlay@iitkfirst.com",
    "vikve@iitk.com",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Direct comparison — no trim(), no toLowerCase()
    if (!allowedEmails.includes(email)) {
      setError("User not found");
      return;
    }

    setError("");

    // Use context login which also persists to localStorage
    login(email);

    toast("Login successful");
    navigate("/");
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-center text-2xl">PRISM</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <CardFooter className="flex-col gap-2 p-0">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
