import React, { useState } from 'react';
import { ExternalLink, Code, Palette, Smartphone, Monitor, Filter, ArrowUpRight } from 'lucide-react';
import project1 from "../assets/Eltera.png";
import project2 from "../assets/Expresscare.png";
import project3 from "../assets/Membskin.png";
import project4 from "../assets/Flexpes.png";
import project5 from "../assets/Sundown.png";

const ProjectCard = ({ project, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  

  const getIconByCategory = (category) => {
    switch(category) {
      case 'Web Development':
        return Code;
      case 'Mobile Apps':
        return Smartphone;
      case 'Design':
        return Palette;
      default:
        return Monitor;
    }
  };
  
  const Icon = getIconByCategory(project.category);

  return (
    <div
      className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-red-500/10"
      style={{
        animation: `fadeInUp 0.6s ease-out ${delay}s both`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden bg-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon className="w-20 h-20 text-zinc-700 group-hover:text-red-500 transition-colors duration-500" />
          </div>
        )}
        

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
      /

     
        {project.link && (
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white hover:bg-red-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg group/btn"
            >
              <ExternalLink className="w-5 h-5 text-black group-hover/btn:text-white transition-colors" />
            </a>
          </div>
        )}
      </div>

   
      <div className="p-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4">
          {project.category} Project
        </p>

      
        <div className="flex items-center justify-between">
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300"
            >
              View Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    { name: 'All', icon: Monitor },
    { name: 'Web Development', icon: Code },
    { name: 'Mobile Apps', icon: Smartphone },
    { name: 'Design', icon: Palette }
  ];

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
    category: "Mobile Apps",
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

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="relative h-full rounded-2xl pt-24 pb-16 px-4 sm:px-6 lg:px-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-800 overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
      `}</style>

    
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10" style={{ animation: 'glow 4s ease-in-out infinite' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-500/3 rounded-full blur-3xl -z-10" style={{ animation: 'glow 5s ease-in-out infinite 1s' }} />

      <div className="max-w-7xl mx-auto ">
        {/* Header Section */}
        <div className="text-center mb-12" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
          <div className="inline-block mb-4">
            <span className="text-red-500 font-semibold text-sm tracking-wider uppercase bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20">
              Our Work
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our latest projects and see how we've helped businesses transform their digital presence with innovative solutions.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
          </div>
        </div>

        {/* Filter Buttons */}
        <div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
        >
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.name
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                  : 'bg-zinc-900 text-gray-400 border border-zinc-800 hover:border-red-500/50 hover:text-white'
              }`}
            >
              <filter.icon className={`w-4 h-4 transition-transform duration-300 ${
                activeFilter === filter.name ? 'scale-110' : 'group-hover:scale-110'
              }`} />
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <Filter className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div 
          className="mt-20 text-center bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl"
          style={{ animation: 'fadeInUp 0.6s ease-out 1s both' }}
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-900 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. We're excited to hear about your project and help bring your vision to life.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-black text-red-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}