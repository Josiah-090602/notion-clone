"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "@/firebase";
import { usePathname } from "next/navigation";
function SidebarLinks({ href, id }: { href: string; id: string }) {
  const pathname = usePathname();
  const isActive = href.includes(pathname) && pathname !== "/";
  const [data] = useDocumentData(doc(db, "documents", id));

  if (!data) return null;

  return (
    <Link href={href} id={id}>
      <Button
        variant={isActive ? "secondary" : "ghost"}
        className="w-full text-accent-foreground flex justify-start"
      >
        <p className="truncate">{data.title || "Untitled Document"}</p>
      </Button>
    </Link>
  );
}
export default SidebarLinks;
