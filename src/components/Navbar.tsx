import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home, User, Briefcase, FolderOpen, Mail, Menu, X } from "lucide-react";

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/", end: true, icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Services", path: "/service", icon: Briefcase },
    { name: "Portfolio", path: "/portfolio", icon: FolderOpen },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-lg border-b border-zinc-800 shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
         

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-red-500 bg-red-500/10"
                      : "text-gray-300 hover:text-white hover:bg-zinc-800/50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <link.icon
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                    />
                    <span className="font-medium whitespace-nowrap">
                      {link.name}
                    </span>
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

       

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-zinc-800/50"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-zinc-800">
            {links.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-red-500 bg-red-500/10 border-l-4 border-red-500"
                      : "text-gray-300 hover:text-white hover:bg-zinc-800/50 hover:translate-x-1"
                  }`
                }
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {({ isActive }) => (
                  <>
                    <link.icon
                      className={`w-5 h-5 ${
                        isActive ? "text-red-500" : "text-gray-400"
                      }`}
                    />
                    <span className="font-medium">{link.name}</span>
                  </>
                )}
              </NavLink>
            ))}

       
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}