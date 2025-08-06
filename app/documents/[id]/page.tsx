"use client";
import Document from "@/components/Document";
import React from "react";

function DocumentPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const documentId = resolvedParams.id;

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Document id={documentId} />
    </div>
  );
}
export default DocumentPage;
