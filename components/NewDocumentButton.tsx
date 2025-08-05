"use client";
import { Button } from "./ui/button";
import { LucidePlus } from "lucide-react";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { createNewDocument } from "../actions/actions"; // Adjust the import path as necessary

function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleCreateNewDocument = () => {
    startTransition(async () => {
      const { docId } = await createNewDocument();
      router.push(`/documents/${docId}`);
    });
  };

  return (
    <Button
      variant={"default"}
      className="w-full"
      onClick={handleCreateNewDocument}
      disabled={isPending}
    >
      {isPending ? (
        <>Loading ...</>
      ) : (
        <>
          <LucidePlus className="mr-2" /> New Document
        </>
      )}
    </Button>
  );
}
export default NewDocumentButton;
