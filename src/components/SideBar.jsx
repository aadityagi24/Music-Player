// import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
// import { createContext, useContext, useState } from "react"
// import { NavLink } from "react-router-dom";

// const SidebarContext = createContext();

// export default function Sidebar({ children }) {
//     const [expanded, setExpanded] = useState(true)
//     return (
//         <>
//             <aside className="h-screen">
//                 <nav className="h-full flex flex-col bg-white border-r shadow-sm">
//                     <div className="p-4 pb-2 flex justify-between items-center">
//                         <img src="" className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} />
//                         <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
//                             {expanded ? <ChevronFirst /> : <ChevronLast />}
//                         </button>
//                     </div>

//                     <SidebarContext.Provider value={{ expanded }}>

//                         <ul className="flex-1 px-3">{children}</ul>
//                     </SidebarContext.Provider>

                    
//                 </nav>
//             </aside>
//         </>
//     )
// }

// export function SidebarItem({ icon, text, active, alert }) {
//     const { expanded } = useContext(SidebarContext)
//     return (
//         <NavLink to={`${text}`} className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
//             {icon}
//             <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
//             {alert && (
//                 <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}>

//                 </div>
//             )}

//             {!expanded && (
//                 <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
//                     {text}
//                 </div>
//             )}
//         </NavLink>
//     )
// }




import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <aside className=" bg-gray-900 text-white shadow-lg">
        <nav className="h-full flex flex-col border-r border-gray-700">
          <div className="p-4 pb-2 flex justify-between items-center">
            {/* Logo or Image */}
            <img
              src="BeatFlow_Logo.jpg"
              className={`overflow-hidden  rounded-full transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
              alt="Logo"
            />
            {/* Expand/Collapse Button */}
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            {/* Sidebar Menu */}
            <ul className="flex-1 px-3 space-y-2">{children}</ul>
          </SidebarContext.Provider>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <NavLink
      to={`${text}`}
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-gray-800 to-gray-700 text-indigo-400"
          : "hover:bg-gray-800 text-gray-300"
      }`}
    >
      {icon}
      {/* Sidebar Text */}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {/* Notification Alert */}
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded-full bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {/* Tooltip when collapsed */}
      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-gray-700 text-indigo-400 text-sm invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </NavLink>
  );
}
