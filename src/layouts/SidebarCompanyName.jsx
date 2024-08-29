import CompanyName from "../components/CompanyName";
import Sidebar from "../components/Sidebar";

function SidebarCompanyName() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <CompanyName />
        
      </div>
        
    </>
  );
}

export default SidebarCompanyName;
