"use client";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "./dropdown-menu";
import { signOut } from "@/lib/auth/auth-client";

const LogOutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const result = await signOut();
    if (result?.data) {
      router.push("/log-in");
    } else {
      alert("Logout failed. Please try again.");
    }
  };
  return <DropdownMenuItem className="text-accent-foreground" onClick={handleLogout}>Logout</DropdownMenuItem>;
};

export default LogOutButton;
