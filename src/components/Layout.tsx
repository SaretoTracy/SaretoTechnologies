import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white">
      
     
      <aside className="hidden md:block w-80 flex-shrink-0">
        <Sidebar />
      </aside>

     
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
         
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSidebarOpen(false)}
          />

       
          <aside className="relative w-80 h-full">
            <Sidebar />
          </aside>
        </div>
      )}

     
      <div className="flex flex-1 flex-col">
        
     
        <div className="border-b border-zinc-800">
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
        </div>

        
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
