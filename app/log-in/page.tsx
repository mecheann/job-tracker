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

const LogIn = () => {
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
        <form className="space-y-4">
          <CardContent className="space-y-4">
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
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col  space-y-4">
            <Button
              className="w-full bg-primary hover:bg-primary/70"
              type="submit"
            >
              Log In
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
