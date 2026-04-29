"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/auth/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const result = await signIn.email({ email, password });
      if (result.error) {
        setError(result.error.message || "Login failed. Please try again.");
      } else {
        // Login successful, you can redirect or show a success message
        //console.log("Login successful:", result);
        router.push("/dashboard"); // Redirect to dashboard or home page after successful login
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex min-h-[calc(100vh-4rem)]  items-center  justify-center bg-white p-4">
      <Card className="w-full max-w-md border border-accent shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-2xl font-bold">
            Log In
          </CardTitle>
          <CardDescription className="text-muted-primary">
            Log in to your account to access your job applications.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <CardContent className="space-y-4">
            {error && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <div>
              <Label className="text-foreground" htmlFor="email">
                Email
              </Label>
              <Input
                className="border-gray-300 focus:border-primary focus:ring-primary"
                id="email"
                type="email"
                value={email}
                placeholder="john.doe@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label className="text-foreground" htmlFor="password">
                Password
              </Label>
              <Input
                className="border-gray-300 focus:border-primary focus:ring-primary"
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col  space-y-4">
            <Button
              className="w-full bg-primary hover:bg-primary/70"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
            <p className="text-center text-sm text-muted-primary">
              No account?{" "}
              <Link
                href="/register"
                className="font-medium text-primary hover:underline"
              >
                Register
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default LogIn;
