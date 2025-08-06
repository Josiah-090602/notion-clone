"use client";
import SidebarOptions from "./SidebarOptions";

function Sidebar() {
  supressHydrationWarning: true;

  return (
    <div className="p-2 relative hidden md:inline w-64 bg-background h-screen">
      <SidebarOptions />
    </div>
  );
}
export default Sidebar;
