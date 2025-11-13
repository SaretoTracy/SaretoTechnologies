import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="md:hidden flex justify-between items-center mb-6">
      <h2 className="text-lg font-semibold">My Portfolio</h2>
      <button
        className="text-gray-300"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu size={28} />
      </button>
    </header>
  );
};

export default Navbar;
