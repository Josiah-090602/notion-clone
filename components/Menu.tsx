import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";

function Menu() {
  const menuOptions = [
    <>
      <NewDocumentButton />

      {/***<MyDocuments /> */}
      {/***<SharedWithMe /> */}
    </>,
  ];

  return (
    <div className="md:hidden flex">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="w-64 flex flex-col items-center">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col  items-center  gap-2">
            {menuOptions.map((option, index) => (
              <div key={index} className="w-full gap-2">
                {option}
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
export default Menu;
