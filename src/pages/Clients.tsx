import React, { useState } from 'react';
import client1 from "../assets/sundown.svg";
import client2 from "../assets/eltera.webp";
import client3 from "../assets/flexpesa.jpeg";
import client4 from "../assets/express care.png";

export default function Clients() {
  const [hoveredClient, setHoveredClient] = useState(null);
  
  const clients = [
    { src: client1, name: "Sundown" },
    { src: client2, name: "Eltera" },
    { src: client3, name: "Flexpesa" },
    { src: client4, name: "Express Care" }
  ];

  return (
    <section id="clients" className="space-y-6 mt-16 relative">
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
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
      `}</style>

      <div className="absolute -top-20 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10" />
      
      <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
        <h3 className="text-3xl font-bold text-white mb-3">Clients</h3>
        <div className="relative w-20 h-[3px] mb-8 overflow-hidden rounded-full bg-zinc-800">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-red-400 via-red-500 to-red-600"
            style={{
              animation: 'shimmer 2s infinite',
              backgroundSize: '1000px 100%'
            }}
          />
        </div>
      </div>

      <div 
        className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center"
        style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
      >
        {clients.map((client, index) => (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setHoveredClient(index)}
            onMouseLeave={() => setHoveredClient(null)}
          >
            {/* Card container */}
            <div className="relative p-6 bg-zinc-900 rounded-xl border border-zinc-800 group-hover:border-red-500/50 transition-all duration-500 overflow-hidden">
           
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image container */}
              <div className="relative z-10 flex items-center justify-center h-16">
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              </div>
       
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
            
       
            <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
          </div>
        ))}
      </div>

      {/* Stats */}
      <div 
        className="mt-12 grid grid-cols-3 gap-6 p-8 bg-zinc-900 rounded-2xl border border-zinc-800"
        style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-red-500 mb-1">30+</div>
          <div className="text-sm text-gray-400">Projects Completed</div>
        </div>
        <div className="text-center border-x border-zinc-800">
          <div className="text-3xl font-bold text-red-500 mb-1">20+</div>
          <div className="text-sm text-gray-400">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-red-500 mb-1">3+</div>
          <div className="text-sm text-gray-400">Years Experience</div>
        </div>
      </div>
    </section>
  );
}