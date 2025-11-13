import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <aside className={`fixed top-0 left-0 h-full bg-gray-900 w-64 p-5 transition-transform z-50 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
      <button
        className="md:hidden absolute top-4 right-4 text-gray-300"
        onClick={() => setOpen(false)}
      >
        <X size={24} />
      </button>

      <div className="text-center mb-10">
        <img
          src="/your-avatar.jpg"
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full border-4 border-gray-700"
        />
        <h1 className="mt-4 text-xl font-semibold">Your Name</h1>
        <p className="text-gray-400">Frontend Developer</p>
      </div>

      <nav className="space-y-4">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition-colors ${
                isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800"
              }`
            }
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
