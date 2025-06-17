import { ChevronFirst, ChevronLast } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen bg-gray-900 text-white shadow-lg">
      <nav className="h-full flex flex-col border-r border-gray-800">
        {/* Logo + Toggle */}
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="BeatFlow_Logo.jpg"
            alt="Logo"
            className={`rounded-full transition-all duration-300 ${
              expanded ? "w-28 h-28" : "w-0 h-0"
            }`}
          />
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* Sidebar Items */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 space-y-1">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, path, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <NavLink
      to={path}
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-gray-800 to-gray-700 text-green-400"
            : "hover:bg-gray-800 text-gray-300"
        }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "w-40 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>

      {/* Optional Alert Dot */}
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded-full bg-green-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {/* Tooltip when collapsed */}
      {!expanded && (
        <span
          className={`absolute left-full whitespace-nowrap rounded-md px-2 py-1 ml-4 bg-gray-700 text-gray-100 text-xs opacity-0 invisible translate-x-2 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all`}
        >
          {text}
        </span>
      )}
    </NavLink>
  );
}
