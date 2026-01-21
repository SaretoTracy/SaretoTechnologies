import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", path: "/" },
    { name: "Services", path: "/service" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="border-b border-gray-800 pb-4">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        {/* Links (desktop) */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-accent transition whitespace-nowrap ${
                  isActive
                    ? "text-accent border-b-2 border-accent pb-1"
                    : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 focus:outline-none"
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

      {/* Mobile menu (same link design) */}
      {open && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `hover:text-accent transition ${
                  isActive
                    ? "text-accent border-b-2 border-accent w-fit pb-1"
                    : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
