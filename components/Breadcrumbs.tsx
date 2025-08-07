import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { doc } from "firebase/firestore";
import { db } from "@/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { Fragment } from "react";

function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const documentId = segments[2];
  const [data] = useDocumentData(
    documentId ? doc(db, "documents", documentId) : null
  );

  console.log("Breadcrumbs data:", segments);

  return (
    <>
      {pathname === "/" ? null : (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            {segments.map((segment, index) => {
              if (!segment) return null;

              const href = `/${segments.slice(1, index + 1).join("/")}`;

              return (
                <Fragment key={index}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href={href}>
                      {index === 2 && data ? data.title : segment}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </>
  );
}
export default Breadcrumbs;
