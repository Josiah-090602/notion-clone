"use client";

import { CircleArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
function GoBackButton() {
  const pathname = usePathname();
  const handleGoBack = () => {
    if (pathname !== "/") {
      window.history.back();
    }
  };
  return (
    <div className="flex items-center gap-2">
      <Button onClick={handleGoBack}>
        <CircleArrowLeft />
        Go Back
      </Button>
    </div>
  );
}
export default GoBackButton;
