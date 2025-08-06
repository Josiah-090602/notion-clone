"use client";
import { FormEvent, useState, useTransition, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "@/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore"; // Adjust the import path as necessary
function Document({ id }: { id: string }) {
  const [title, setTitle] = useState("");
  const [isUpdating, startTransition] = useTransition();
  const [data] = useDocumentData(doc(db, "documents", id));

  useEffect(() => {
    if (data) {
      setTitle(data.title);
    }
  }, [data]);

  const updateTitle = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      startTransition(async () => {
        await updateDoc(doc(db, "documents", id), {
          title: title,
        });
      });
    }
  };

  return (
    <div>
      <div>
        {/* Main Header of the Document */}
        <div>{/* Manage Users and Avatars */}</div>
        <div>
          {/* Update Title Form*/}
          <form onSubmit={updateTitle} className="flex items-center gap-2">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            <Button type="submit" disabled={isUpdating}>
              {isUpdating ? "Updating..." : "Update Title"}
            </Button>
          </form>
        </div>
      </div>
      {/* This is a collaborative editor */}
      Document
    </div>
  );
}
export default Document;
