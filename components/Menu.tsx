"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetClose,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Sidebar from "./Sidebar";
import SidebarOptions from "./SidebarOptions";

function Menu() {
  return (
    <div className="md:hidden flex">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>

        <SheetContent side="left" className="w-64 p-2 bg-background">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <SidebarOptions />
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}
export default Menu;
