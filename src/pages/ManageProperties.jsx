import CompanyName from "../components/CompanyName";
import Sidebar from "../components/Sidebar";

function ManageProperties() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <CompanyName />
          <div className="bg-slate-100 h-dvh">
            <div className="p-4 ">
              <h1 className="text-2xl font-bold">Manage Properties</h1>
              <div className="flex gap-28 p-2 justify-center items-center ">
                <div>
                  CARD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageProperties;
