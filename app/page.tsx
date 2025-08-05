import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="font-primary">Hello World</h1>
      <Button>Sign In</Button>
    </>
  );
}
