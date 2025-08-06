"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
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
        <SheetContent side="left" className="w-64">
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
