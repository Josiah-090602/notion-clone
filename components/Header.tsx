"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useUser,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

import NewDocumentButton from "./NewDocumentButton";
import Menu from "./Menu";

function Header() {
  const { user } = useUser();
  const menuOptions = [
    <>
      <NewDocumentButton />
      //My Documents // List ... //Shared with me // List ...
    </>,
  ];

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white ">
      <div className="flex items-center gap-5">
        <Menu />

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
      </div>
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
