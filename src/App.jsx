import './App.css'
import Main from './components/Main'
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/SideBar"
import SongInfo from './components/SongInfo'
import ExploreInfo from './components/Explore/ExploreInfo';
import { Outlet } from 'react-router-dom';




function App() {

  return (
    
   <>
   <div className='flex'>
   <div className="flex w-[23%]">
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard"   />
          <SidebarItem icon={<StickyNote size={20} />} text="Playlist"  />
          <SidebarItem icon={<Calendar size={20} />} text="Liked" />
        </Sidebar>
      </div>
    <div className='w-[320%]'>
    <Outlet/>
    </div>
    <div className='w-[23%]'>
    <SongInfo/>
    <ExploreInfo/>
    
    </div>
  



    </div>

  
   <div>
    {/* <audio src="Level.mp3" controls></audio> */}
   </div>
   </>
  )
}

export default App
