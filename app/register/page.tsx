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
import Link from "next/link";
import { useState } from "react";
import { signUp } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

const Register = () => {
  const [name, setName] = useState<string>("");
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
      const result = await signUp.email({ name, email, password });
      if (result.error) {
        setError(
          result.error.message || "Registration failed. Please try again.",
        );
      } else {
        // Registration successful, you can redirect or show a success message
        //console.log("Registration successful:", result);
        router.push("/log-in"); // Redirect to log-in page after successful registration
      }
    } catch (err) {
      setError("An error occurred during registration. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex min-h-[calc(100vh-4rem)]  items-center  justify-center bg-white p-4">
      <Card className="w-full max-w-md border border-accent shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-center text-2xl font-bold">
            Register
          </CardTitle>
          <CardDescription className="text-muted-primary">
            Create a new account to get started with tracking your job
            applications.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <CardContent className="space-y-4">
             {error && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label className="text-foreground" htmlFor="name">
                Name
              </Label>
              <Input
                className="border-gray-300 focus:border-primary focus:ring-primary"
                id="name"
                type="text"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-foreground" htmlFor="email">
                Email
              </Label>
              <Input
                className="border-gray-300 focus:border-primary focus:ring-primary"
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col  space-y-4">
            <Button
              className="w-full bg-primary hover:bg-primary/70"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Creating an account..." : "Register"}
            </Button>
            <p className="text-center text-sm text-muted-primary">
              Already have an account?{" "}
              <Link
                href="/log-in"
                className="font-medium text-primary hover:underline"
              >
                Log in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Register;
