import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Services from "./pages/Service";

export default function App() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pageMotion = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  return (
    <div className="flex min-h-screen bg-dark text-white">
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-72 fixed left-0 top-0 h-full bg-card border-r border-gray-800">
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="relative w-72 h-full bg-card border-r border-gray-800">
            <Sidebar />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto md:ml-72">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="mt-8 space-y-12">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div {...pageMotion}>
                    <About />
                    <Clients />
                  </motion.div>
                }
              />
              <Route
                path="/service"
                element={
                  <motion.div {...pageMotion}>
                    <Services />
                  </motion.div>
                }
              />
              <Route
                path="/portfolio"
                element={
                  <motion.div {...pageMotion}>
                    <Portfolio />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div {...pageMotion}>
                    <Contact />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
