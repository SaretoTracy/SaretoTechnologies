import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    { name: "About", path: "/" },
    { name: "Services", path: "/service" },
    { name: "Portfolio", path: "/portfolio" },
 
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex gap-8 border-b border-gray-800 pb-4">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `hover:text-accent transition ${
              isActive ? "text-accent border-b-2 border-accent pb-1" : ""
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}
