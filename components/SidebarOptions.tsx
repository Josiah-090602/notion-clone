"use client";
import SidebarLinks from "./SidebarLinks";
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

function SidebarOptions() {
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
        <ul className="w-full  flex justify-center flex-col gap-2">
          {groupedData.owner.map((doc) => (
            <SidebarLinks
              key={doc.id}
              href={`/documents/${doc.id}`}
              id={doc.id}
            />
          ))}
        </ul>
      ) : (
        <div className="w-full p-2">No documents found.</div>
      )}

      {/***<SharedWithMe /> */}
    </>,
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      {menuOptions.map((option, index) => (
        <div
          key={index}
          className="w-full gap-2 flex justify-center flex-col p-2"
        >
          {option}
        </div>
      ))}
    </div>
  );
}
export default SidebarOptions;
