import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact"; 
import Services from "./pages/Service";

export default function App() {
  const location = useLocation();

 
  const pageMotion = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  return (
    <div className="flex min-h-screen bg-dark text-white">
      {/* Sidebar */}
      <aside className="w-72 fixed left-0 top-0 h-full bg-card border-r border-gray-800">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="ml-72 flex-1 p-8 overflow-y-auto">
        <Navbar />

        {/* Animated Route Container */}
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
