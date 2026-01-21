import React, { useState } from 'react';
import { Mail, Phone, Calendar, MapPin, Globe, Twitter, Linkedin, Github } from 'lucide-react';
import logo from '../assets/saretotech.png'
export default function Sidebar() {
  const [activeContact, setActiveContact] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      text: "saretotechnologies@gmail.com",
      link: "mailto:saretotechnologies@gmail.com",
      type: "email"
    },
    {
      icon: Phone,
      text: "+254 715 691 186",
      link: "tel:+254715691186",
      type: "phone"
    },
    {
      icon: Phone,
      text: "+254 745 939 721",
      link: "tel:+254745939721",
      type: "phone"
    },
    {
      icon: Calendar,
      text: "June 23, 2022",
      type: "date"
    },
    {
      icon: MapPin,
      text: "Nairobi, Kenya",
      type: "location"
    }
  ];

  const socialLinks = [
    { icon: Globe, label: "Website", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" }
  ];

  return (
    <div className="flex flex-col items-center text-center p-8 bg-zinc-900 border-r border-zinc-800 min-h-screen relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
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
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Animated background glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" style={{ animation: 'glow 4s ease-in-out infinite' }} />
      
      {/* Profile Image with glow effect */}
      <div className="relative mb-6 group" style={{ animation: 'slideIn 0.6s ease-out' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
        <div className="relative">
          <div className="absolute inset-0 rounded-full border-2 border-red-500 animate-pulse" />
          <img
            src={logo}
            alt="Sareto Technologies"
            className="w-36 h-36 rounded-full border-4 border-zinc-800 object-cover relative z-10 group-hover:border-red-500 transition-all duration-500 group-hover:scale-105"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          />
        </div>
      </div>

      {/* Name and Title */}
      <div style={{ animation: 'slideIn 0.6s ease-out 0.1s both' }}>
        <h2 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
          Sareto Technologies
        </h2>
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-red-500/20 rounded-lg blur-md" />
          <p className="relative bg-zinc-800 px-4 py-2 rounded-lg text-sm font-medium text-red-500 border border-red-500/30">
            Web Developer
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full my-8 relative" style={{ animation: 'slideIn 0.6s ease-out 0.2s both' }}>
        <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      </div>

      {/* Contact Information */}
      <div className="w-full space-y-4" style={{ animation: 'slideIn 0.6s ease-out 0.3s both' }}>
        {contactInfo.map((item, index) => {
          const Icon = item.icon;
          const isClickable = item.link;
          
          const content = (
            <div
              className={`flex items-center gap-4 text-sm text-gray-300 p-3 rounded-lg transition-all duration-300 ${
                isClickable ? 'hover:bg-zinc-800 hover:text-red-500 cursor-pointer hover:translate-x-1' : ''
              } ${activeContact === index ? 'bg-zinc-800 text-red-500' : ''} group`}
              onMouseEnter={() => setActiveContact(index)}
              onMouseLeave={() => setActiveContact(null)}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                activeContact === index ? 'bg-red-500/20 border-red-500' : 'bg-zinc-800 border-zinc-700'
              } border`}>
                <Icon size={18} className={`${activeContact === index ? 'text-red-500' : 'text-gray-400'} transition-colors duration-300`} />
              </div>
              <span className="text-left text-xs break-all">{item.text}</span>
            </div>
          );

          return isClickable ? (
            <a key={index} href={item.link} className="block">
              {content}
            </a>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="w-full mt-8" style={{ animation: 'slideIn 0.6s ease-out 0.4s both' }}>
        <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent mb-6" />
        
        <div className="flex justify-center gap-3">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="group relative w-11 h-11 rounded-lg bg-zinc-800 border border-zinc-700 hover:border-red-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 rounded-lg transition-all duration-300" />
                <Icon size={18} className="text-gray-400 group-hover:text-red-500 transition-colors duration-300 relative z-10" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
    </div>
  );
}