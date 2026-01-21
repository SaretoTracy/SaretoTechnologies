import React, { useState } from 'react';
import { Palette, Code, Smartphone, Settings } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="group relative"
      style={{
        animation: `fadeInUp 0.6s ease-out ${delay}s both`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full bg-zinc-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-800 overflow-hidden">
      
        <div 
          className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-red-600/5 to-red-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
     
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/20 to-red-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
        
        <div className="relative z-10">
        
          <div className="mb-6 relative">
            <div 
              className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg"
              style={{
                animation: isHovered ? 'float 3s ease-in-out infinite' : 'none'
              }}
            >
              <Icon className="w-8 h-8 text-black" strokeWidth={2} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          </div>
          
     
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-red-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {title}
          </h3>
          
      
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
       
        
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creating visually stunning designs that bring your brand identity to life with creative excellence and attention to detail."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, high-performance websites tailored to your business needs with cutting-edge technologies."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Developing intuitive mobile applications for iOS and Android platforms that users love to engage with."
    },
    {
      icon: Settings,
      title: "Business Software",
      description: "Custom software solutions that streamline operations and boost productivity for your growing business."
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(12deg) scale(1.1);
          }
          50% {
            transform: translateY(-10px) rotate(12deg) scale(1.1);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
          <div className="inline-block mb-4">
            <span className="text-red-500 font-semibold text-sm tracking-wider uppercase bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20">
              What We Do
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
            Sareto Technologies delivers comprehensive digital solutions that transform ideas into powerful technology, driving your business forward with innovation and excellence.
          </p>
          
          
          <div className="flex justify-center mt-8" style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.4 + index * 0.1}
            />
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <div 
          className="mt-20 text-center bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl"
          style={{ animation: 'fadeInUp 0.6s ease-out 1s both' }}
        >
         
          <div className="absolute top-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl" style={{ animation: 'pulse 4s ease-in-out infinite' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" style={{ animation: 'pulse 4s ease-in-out infinite 2s' }} />
          
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-900 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and creative excellence.
            </p>
            <button className="bg-black text-red-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
             <a href="/contact">Get Started Today</a> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}