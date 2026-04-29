"use client";
import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import LogOutButton from "./ui/logout-btn";
import { useSession } from "@/lib/auth/auth-client";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="border-b border-accent bg-secondary dark:bg-foreground-dark">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground text-lg font-semibold"
        >
          <Briefcase /> Job App Tracker
        </Link>
        <div className="flex items-center gap-3">
          {session ? (
            <>
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-card-foreground hover:bg-primary/90"
                >
                  Dashboard
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full p-0"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary-foreground text-primary">
                        {session.user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-primary-foreground w-auto">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel className="font-normal text-accent-foreground">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {session.user.name}
                        </p>
                        <p className="text-sm font-medium leading-none text-accent-foreground">
                          {session.user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <LogOutButton />
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/log-in">
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-card-foreground hover:bg-primary/90"
                >
                  Log In
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-primary hover:text-card-foreground hover:bg-primary/90">
                  Start for free
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
