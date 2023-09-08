import ProjectCards from "./components/ProjectCards";
import SideBar from "./components/SideBar";
import Announcements from "./components/Announcements";
import Trending from "./components/Trending";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="grid grid-cols-5">
        <SideBar />
        <div className="col-span-4 flex flex-col">
          <Navbar />
          <div className="grid grid-cols-4">
            <ProjectCards />
            <div className="bg-slate-200">
              <Announcements />
              <Trending />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
