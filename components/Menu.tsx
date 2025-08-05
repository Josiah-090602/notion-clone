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
import NewDocumentButton from "./NewDocumentButton";
import { useCollection } from "react-firebase-hooks/firestore";
import { useUser } from "@clerk/nextjs"; // Adjust the import path as necessary
import { db } from "@/firebase";
import { collectionGroup, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase-admin/firestore";

interface RoomDocument extends DocumentData {
  createdAt: string;
  userId: string;
  role: "owner" | "editor";
  roomId: string;
}
function Menu() {
  const { user } = useUser();
  const [groupedData, setGroupedData] = useState<{
    owner: RoomDocument[];
    editor: RoomDocument[];
  }>({
    owner: [],
    editor: [],
  });

  //Query Documents for the current user
  const [data, loading, error] = useCollection(
    user &&
      query(
        collectionGroup(db, "rooms"),
        where("userId", "==", user.emailAddresses[0].toString())
      )
  );

  //Group documents by role
  useEffect(() => {
    if (!data) return;
    const grouped = data.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>(
      (acc, curr) => {
        const roomData = curr.data() as RoomDocument;
        if (roomData.role === "owner") {
          acc.owner.push({ ...roomData, id: curr.id });
        } else if (roomData.role === "editor") {
          acc.editor.push({ ...roomData, id: curr.id });
        }
        return acc;
      },
      {
        owner: [],
        editor: [],
      }
    );
    setGroupedData(grouped);
  }, [data]);

  const menuOptions = [
    <>
      <NewDocumentButton />

      {/***<MyDocuments /> */}
      {groupedData.owner.length > 0 ? (
        <div className="w-full p-2">
          <h3 className="text-lg font-semibold">My Documents</h3>
          <ul>
            {groupedData.owner.map((doc) => (
              <li key={doc.roomId} className="py-1">
                {doc.roomId}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="w-full p-2">No documents found.</div>
      )}

      {/***<SharedWithMe /> */}
    </>,
  ];

  return (
    <div className="md:hidden flex">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="w-64 flex flex-col">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex flex-col  items-center  gap-2">
              {menuOptions.map((option, index) => (
                <div key={index} className="w-full gap-2  p-2">
                  {option}
                </div>
              ))}
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
export default Menu;
