import { useState } from "react";

const Portfolio = () => {
  // Categories for filter buttons
  const categories = ["All", "Web App", "Design", "Mobile"];

  // Portfolio projects (example data — replace with your real ones)
  const projects = [
    {
      title: "Portfolio Website",
      category: "Web App",
      image: "/projects/portfolio.jpg",
      link: "#",
    },
    {
      title: "Mobile UI Design",
      category: "Design",
      image: "/projects/mobile-ui.jpg",
      link: "#",
    },
    {
      title: "E-commerce App",
      category: "Web App",
      image: "/projects/ecommerce.jpg",
      link: "#",
    },
    {
      title: "Social App",
      category: "Mobile",
      image: "/projects/social.jpg",
      link: "#",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtered project list
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Portfolio</h1>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm transition-all ${
              selectedCategory === cat
                ? "bg-blue-600 border-blue-600 text-white"
                : "border-gray-700 text-gray-400 hover:bg-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition-all"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm">{project.category}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
