import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/", end: true },
    { name: "About", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `hover:text-red-500 transition whitespace-nowrap ${
                    isActive
                      ? "text-red-500 border-b-2 border-red-500 pb-1"
                      : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-4 flex flex-col gap-4 md:hidden">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `hover:text-red-500 transition w-fit ${
                    isActive
                      ? "text-red-500 border-b-2 border-red-500 pb-1"
                      : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
