import { useState } from "react";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";

import project1 from "../assets/Eltera.png";
import project2 from "../assets/Expresscare.png";
import project3 from "../assets/Membskin.png";
import project4 from "../assets/Flexpes.png";
import project5 from "../assets/Sundown.png";

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
    link: "https://membaskins.co.ke/",
  },
  {
    id: 4,
    title: "FlexPesa Exchange App",
    category: "Applications",
    image: project4,
    link: "https://app.flexpesaexchange.co.ke/",
  },
  {
    id: 5,
    title: "Sundown Aussie Haul",
    category: "Web Development",
    image: project5,
    link: "https://sundownhaul.com.au/",

  },
   {
    id: 6,
    title: "FlexPesa Exchange Website",
    category: "Web Development",
    image: project4,
    link: "https://flexpesaexchange.co.ke/",
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
    <section id="portfolio" className="space-y-10">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-semibold mb-2">Portfolio</h2>

        {/* Gradient underline */}
        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 mb-8"></div>

        {/* Filters */}
        <div className="flex flex-wrap gap-6">
          {categories.map((cat) => {
            const active = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative text-sm font-medium transition ${
                  active ? "text-red-500" : "text-gray-400 hover:text-red-400"
                }`}
              >
                {cat}

                {active && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj) => (
          <motion.div
            key={proj.id}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="
              relative group overflow-hidden rounded-xl 
              bg-card border border-gray-800
              hover:border-red-500/60
              hover:shadow-[0_10px_30px_rgba(239,68,68,0.25)]
            "
          >
            {/* Image */}
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
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
                className="
                  bg-gradient-to-br from-red-600 to-red-500
                  text-black p-3 rounded-full
                  shadow-lg shadow-red-500/30
                  hover:scale-110 transition
                "
              >
                <Eye size={22} />
              </a>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <p className="text-sm text-gray-400">{proj.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
