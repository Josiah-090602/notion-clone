import { Button } from "./ui/button";
import { MdAdd } from "react-icons/md";
import { LucidePlus } from "lucide-react";
function NewDocumentButton() {
  return (
    <Button variant={"default"} className="w-full">
      <LucidePlus className="mr-2" />
      New Document
    </Button>
  );
}
export default NewDocumentButton;
