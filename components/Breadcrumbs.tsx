import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "@/firebase";

function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const [data] = useDocumentData(doc(db, "documents", segments[2] || ""));
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, index) => {
          if (!segment) return null;

          const href = `/${segments.slice(1, index + 1).join("/")}`;

          return (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href={href}>
                {index === 2 && data ? data.title : segment}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
export default Breadcrumbs;
