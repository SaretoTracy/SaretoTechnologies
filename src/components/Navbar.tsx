export default function Navbar() {
    const links = ["About", "Resume", "Portfolio", "Blog", "Contact"];
    return (
      <nav className="flex gap-8 border-b border-gray-800 pb-4">
        {links.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="hover:text-accent transition"
          >
            {link}
          </a>
        ))}
      </nav>
    );
  }
  