import NewDocumentButton from "./NewDocumentButton";

function Sidebar() {
  supressHydrationWarning: true;

  const menuOptions = {};

  return (
    <div className="p-2 relative hidden md:inline">
      <NewDocumentButton />
    </div>
  );
}
export default Sidebar;
