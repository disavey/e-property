import Sidebar from "../components/Sidebar";
import Dashboard from "../layouts/Dashboard";
function Home() {


  return (
    <>
      <div className="flex">
        <Sidebar />
        <Dashboard/>
      </div>
    </>
  );
}

export default Home;
