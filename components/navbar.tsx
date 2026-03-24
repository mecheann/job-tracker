import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="border-b border-secondary/50 bg-primary dark:bg-foreground-dark">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground text-lg font-semibold"
        >
          <Briefcase /> Job App Tracker
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/sign-in">
            <Button
              variant="ghost"
              className="text-foreground hover:text-card-foreground hover:bg-secondary/90"
            >
              Log In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-primary hover:text-card-foreground hover:bg-secondary/90">
              Start for free
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
