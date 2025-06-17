import './App.css';
import { LayoutDashboard, StickyNote, Calendar } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/SideBar";
import SongInfo from './components/SongInfo';
import ExploreInfo from './components/Explore/ExploreInfo';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="flex w-[23%]">
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" path="/" />
          <SidebarItem icon={<StickyNote size={20} />} text="Playlist" path="/Playlist" />
          <SidebarItem icon={<Calendar size={20} />} text="Liked" path="/liked" />
        </Sidebar>
      </div>

      {/* Main */}
      <div className="flex-grow px-4 py-6 overflow-auto">
        <Outlet />
      </div>

      {/* Right */}
      <div className="w-[23%]">
        <SongInfo />
        <ExploreInfo />
      </div>
    </div>
  );
}

export default App;
