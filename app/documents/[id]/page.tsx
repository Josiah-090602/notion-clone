"use client";
import Document from "@/components/Document";

function DocumentPage({ params: { id } }: { params: { id: string } }) {
  console.log("DocumentPage props:", { id });
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      This is a Document Page for ID: {id}
      <Document id={id} />
    </div>
  );
}
export default DocumentPage;
