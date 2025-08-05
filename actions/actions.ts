"use server";
import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
  auth.protect();
  const { sessionClaims } = await auth();

  const docCollection = adminDb.collection("documents");
  const docRef = await docCollection.add({
    title: "New Document",
  });

  await adminDb
    .collection("users")
    .doc(sessionClaims?.email!)
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userId: sessionClaims?.email,
      role: "owner",
      email: sessionClaims?.email,
      createdAt: new Date(),
      roomId: docRef.id,
    });

  return { docId: docRef.id };
}
