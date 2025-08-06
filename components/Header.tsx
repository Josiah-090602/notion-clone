"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useUser,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import Menu from "./Menu";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
function Header() {
  const { user } = useUser();

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white ">
      <div className="flex items-center gap-5">
        <Menu />
        <Link href="/">
          {user ? (
            <h2>
              Welcome to{" "}
              <span className="font-semibold">
                {user.firstName} {"'s"}
              </span>{" "}
              space!
            </h2>
          ) : (
            <h2>Welcome to Notion Clone</h2>
          )}
        </Link>
      </div>

      <Breadcrumbs />

      <div>
        <SignedOut>
          <SignInButton>
            <Button
              variant={"outline"}
              className="bg-accent-foreground cursor-pointer"
            >
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
export default Header;
