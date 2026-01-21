import React, { useState } from 'react';
import { Code, Layout, Zap, Award } from "lucide-react";

export default function About() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    { icon: Code, title: "Clean Code", description: "Well-structured & maintainable" },
    { icon: Layout, title: "Responsive", description: "Works on all devices" },
    { icon: Zap, title: "Fast Performance", description: "Optimized for speed" },
    { icon: Award, title: "Quality First", description: "Excellence in delivery" }
  ];

  return (
    <section id="about" className="space-y-10 relative">
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
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
        
        @keyframes glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10" style={{ animation: 'glow 4s ease-in-out infinite' }} />
      
      {/* Section Title */}
      <div style={{ animation: 'fadeInLeft 0.6s ease-out' }}>
        <h2 className="text-4xl font-bold mb-3 text-white">About us</h2>
        <div className="relative w-20 h-[3px] mb-6 overflow-hidden rounded-full bg-zinc-800">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-red-400 via-red-500 to-red-600"
            style={{
              animation: 'shimmer 2s infinite',
              backgroundSize: '1000px 100%'
            }}
          />
        </div>
        
        <div className="space-y-4 max-w-4xl">
          <p className="text-gray-300 leading-relaxed text-base">
            Sareto Technologies delivers comprehensive digital solutions including web development, mobile app development, graphic design, business software, and database management systems. We transform ideas into powerful technology that drives your business forward.
          </p>
          <p className="text-gray-300 leading-relaxed text-base">
            We build websites that are functional, user-friendly, and visually compelling. Our team adds a personal touch to every project, ensuring your digital presence is both eye-catching and intuitive. We bring your message and brand identity to life through creative design solutions. Sareto Technologies has delivered exceptional web design for numerous leading brand companies.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8" style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="group relative p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-red-500/50 transition-all duration-500 cursor-pointer overflow-hidden"
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-zinc-800 border border-zinc-700 group-hover:border-red-500 group-hover:bg-red-500/10 transition-all duration-500 mb-4 group-hover:scale-110">
                  <Icon size={24} className="text-gray-400 group-hover:text-red-500 transition-colors duration-500" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-red-500 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-xs text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}