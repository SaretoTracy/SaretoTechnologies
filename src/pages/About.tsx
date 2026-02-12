import React, { useState } from 'react';
import { Code, Layout, Zap, Award, Users, Rocket, CheckCircle, Target } from "lucide-react";
import Clients from './Clients';

export default function About() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    { icon: Code, title: "Clean Code", description: "Well-structured & maintainable" },
    { icon: Layout, title: "Responsive", description: "Works on all devices" },
    { icon: Zap, title: "Fast Performance", description: "Optimized for speed" },
    { icon: Award, title: "Quality First", description: "Excellence in delivery" }
  ];

  const stats = [
    { value: "50+", label: "Projects Completed", icon: Rocket },
    { value: "40+", label: "Happy Clients", icon: Users },
    { value: "99%", label: "Client Satisfaction", icon: CheckCircle },
    { value: "24/7", label: "Support Available", icon: Target }
  ];

  const expertise = [
    "Web Development",
    "Mobile App Development", 
    "Graphic Design",
    "Business Software",
    "Database Management",
    "UI/UX Design"
  ];

  return (
    <section id="about" className="relative h-full rounded-2xl pt-24 pb-16 px-4 sm:px-6 lg:px-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-800 overflow-hidden">
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
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
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
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-border {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>

      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10" style={{ animation: 'glow 4s ease-in-out infinite' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-500/3 rounded-full blur-3xl -z-10" style={{ animation: 'glow 5s ease-in-out infinite 1s' }} />
      
      <div className="max-w-7xl mx-auto">
 
      <div className="text-center mb-16" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
        <div className="inline-block mb-4">
          <span className="text-red-500 font-semibold text-sm tracking-wider uppercase bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20">
            Who We Are
          </span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          About <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">Sareto Technologies</span>
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
        </div>
      </div>

   
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Left Column - Story */}
        <div className="space-y-6" style={{ animation: 'fadeInLeft 0.6s ease-out 0.2s both' }}>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed text-lg">
              Sareto Technologies delivers comprehensive digital solutions including web development, mobile app development, graphic design, business software, and database management systems. We transform ideas into powerful technology that drives your business forward.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              We build websites that are functional, user-friendly, and visually compelling. Our team adds a personal touch to every project, ensuring your digital presence is both eye-catching and intuitive.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              We bring your message and brand identity to life through creative design solutions. Sareto Technologies has delivered exceptional web design for numerous leading brand companies.
            </p>
          </div>

      
          <div className="pt-4">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-red-500" />
              Our Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {expertise.map((item, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-gray-300 hover:border-red-500 hover:text-red-500 transition-all duration-300 cursor-default"
                  style={{ animation: `fadeInUp 0.6s ease-out ${0.4 + index * 0.1}s both` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6" style={{ animation: 'fadeInRight 0.6s ease-out 0.2s both' }}>
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-8 rounded-2xl border border-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl" />
            
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
              Our Impact in Numbers
            </h3>
            
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="text-center p-4 bg-black/30 rounded-xl border border-zinc-800 hover:border-red-500/50 transition-all duration-300 group"
                    style={{ animation: `fadeInUp 0.6s ease-out ${0.5 + index * 0.1}s both` }}
                  >
                    <Icon className="w-8 h-8 text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-white mb-1 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

      
          <div className="bg-gradient-to-br from-red-500/10 to-transparent p-6 rounded-2xl border border-red-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_70%)]" />
            <h3 className="text-xl font-bold text-white mb-3 relative z-10 flex items-center gap-2">
              <Target className="w-5 h-5 text-red-500" />
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed relative z-10">
              To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8" style={{ animation: 'fadeInUp 0.6s ease-out 0.6s both' }}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="group relative p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-red-500/50 transition-all duration-500 cursor-pointer overflow-hidden"
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
              style={{ animation: `fadeInUp 0.6s ease-out ${0.7 + index * 0.1}s both` }}
            >
           
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-zinc-800 border border-zinc-700 group-hover:border-red-500 group-hover:bg-red-500/10 transition-all duration-500 mb-4 group-hover:scale-110">
                  <Icon size={24} className="text-gray-400 group-hover:text-red-500 transition-colors duration-500" style={{ animation: activeFeature === index ? 'float 2s ease-in-out infinite' : 'none' }} />
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
<Clients />
      {/* Call to Action */}
      <div 
        className="mt-16 text-center bg-gradient-to-r from-zinc-900 to-zinc-900/50 rounded-2xl p-10 border border-zinc-800 relative overflow-hidden"
        style={{ animation: 'fadeInUp 0.6s ease-out 1s both' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(239,68,68,0.1),transparent_50%)]" />
        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Next Project?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Let's work together to create something amazing. Get in touch and let's discuss how we can help bring your vision to life.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/50 hover:scale-105"
          >
            <Rocket className="w-5 h-5" />
            Let's Talk
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}