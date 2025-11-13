import { Mail, Phone, Calendar, MapPin } from "lucide-react";
import logo from "../assets/avatar.jpg";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <img
        src={logo}
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-gray-700 mb-4"
      />
      <h2 className="text-xl font-semibold">Sareto Technologies</h2>
      <p className="bg-gray-800 px-3 py-1 rounded-md text-sm mt-2">Web Developer</p>

      <div className="w-full mt-6 space-y-3 text-sm text-gray-300">
        <div className="flex items-center gap-3">
          <Mail size={16} /> saretotechnologies@gmail.com
        </div>
        <div className="flex items-center gap-3">
          <Phone size={16} /> +254 715 691 186
        </div>
        <div className="flex items-center gap-3">
          <Phone size={16} /> +254 745 939 721
        </div>
        <div className="flex items-center gap-3">
          <Calendar size={16} /> June 23, 2022
        </div>
        <div className="flex items-center gap-3">
          <MapPin size={16} /> Nairobi, Kenya
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <a href="#" className="hover:text-accent transition">🌐</a>
        <a href="#" className="hover:text-accent transition">🐦</a>
        <a href="#" className="hover:text-accent transition">💼</a>
      </div>
    </div>
  );
}
