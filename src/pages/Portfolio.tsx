import { useState } from "react";
import { Eye } from "lucide-react";

import project1 from "../assets/Eltera.png";
import project2 from "../assets/Expresscare.png";
import project3 from "../assets/Membskin.png";
import project4 from "../assets/Flexpes.png";
import project5 from "../assets/Sundown.png"


const projects = [
  {
    id: 1,
    title: "Eltera",
    category: "Web Development",
    image: project1,
    link: "https://elteraenterprises.co.ke/",
  },
  {
    id: 2,
    title: "ExpressCare",
    category: "Web Development",
    image: project2,
    link: "https://expresscareteam.saretotech.co.ke/",
  },
  {
    id: 3,
    title: "Membskin",
    category: "Web Development",
    image: project3,
    link: "https://www.membaskins.co.ke/",
  },
  {
    id: 4,
    title: "Flex",
    category: "Applications",
    image: project4,
    link: "https://app.flexpesaexchange.co.ke/",
  },
  {
    id: 5,
    title: "SunDown",
    category: "Web Development",
    image: project5,
    link: "https://expresscareteam.saretotech.co.ke.sundownhaul.com.au/",
  },


];

const categories = ["All", "Web Design", "Applications", "Web Development"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="text-3xl font-semibold mb-2">Portfolio</h2>
        <div className="w-20 h-[2px] bg-accent mb-6"></div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-6 text-gray-400">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-medium transition ${
                activeCategory === cat
                  ? "text-accent border-b-2 border-accent pb-1"
                  : "hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="relative group overflow-hidden rounded-xl bg-card border border-gray-800 hover:border-accent transition"
          >
            {/* Project Image */}
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />

        
            <div
              className="
                absolute inset-0 bg-black/60 
                opacity-0 group-hover:opacity-100 
                flex items-center justify-center 
                transition
              "
            >
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-dark p-3 rounded-full hover:scale-110 transition"
              >
                <Eye size={22} />
              </a>
            </div>

            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <p className="text-sm text-gray-400">{proj.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
