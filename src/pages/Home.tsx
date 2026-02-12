import { motion } from "motion/react";
import {
  ArrowRight,
  Code,
  Smartphone,
  Palette,
  Database,
  Briefcase,
  Sparkles,
  Star,
  Users,
  Award,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function App() {
  const services = [
    { icon: Code, label: "Web Development" },
    { icon: Smartphone, label: "Mobile Apps" },
    { icon: Palette, label: "Graphic Design" },
    { icon: Briefcase, label: "Business Software" },
    { icon: Database, label: "Database Systems" },
  ];



  return (
    <section className="relative h-full rounded-2xl pt-17 shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-800 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-24 left-10 w-72 h-72 bg-red-600 rounded-full blur-xl opacity-20 mix-blend-multiply"
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-red-500 rounded-full blur-xl opacity-20 mix-blend-multiply"
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-red-700 rounded-full blur-xl opacity-20 mix-blend-multiply"
          animate={{ scale: [1, 1.25, 1], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/10 backdrop-blur-sm border border-red-500/30 mb-6
            hover:bg-white/15 hover:border-red-500/50 transition-all duration-300"
        >
          <Sparkles className="w-4 h-4 text-red-400" />
          <span className="text-sm text-white/90 font-medium">
            Transforming Ideas into Powerful Technology
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          <span className="block">Welcome to</span>
          <span className="block mt-2">
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              Sareto Technologies
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          We deliver comprehensive digital solutions including web development,
          mobile app development, graphic design, business software, and database
          systems — turning ideas into scalable technology that drives your business forward.
        </motion.p>

 

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            to="/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full
              bg-gradient-to-r from-red-600 to-red-700
              hover:from-red-700 hover:to-red-800
              text-white px-8 py-4 text-base md:text-lg font-semibold
              transition-all duration-300 group active:scale-95
              shadow-lg shadow-red-500/30 hover:shadow-red-500/50"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/portfolio"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-full
              bg-white/10 backdrop-blur-sm border-2 border-red-500/30
              text-white hover:bg-white/20 hover:border-red-500/50
              px-8 py-4 text-base md:text-lg font-semibold
              transition-all duration-300 active:scale-95"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* Section Label */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-block"
            >
              <span className="text-red-400 font-semibold text-sm tracking-wider uppercase">
                Our Expertise
              </span>
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mt-2" />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.08 }}
                whileHover={{ scale: 1.05, y: -6 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl
                  bg-white/5 backdrop-blur-sm border border-red-500/20
                  hover:bg-white/10 hover:border-red-500/40 transition-all duration-300
                  hover:shadow-lg hover:shadow-red-500/20 group cursor-pointer"
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-red-600/20 to-red-800/20
                  group-hover:from-red-600/30 group-hover:to-red-800/30 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm text-white/90 text-center font-medium group-hover:text-white transition-colors duration-300">
                  {service.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 inline-flex items-center gap-2 px-6 py-3 rounded-full
            bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm
            border border-red-500/30"
        >
          <Star className="w-5 h-5 text-red-400 fill-red-400" />
          <span className="text-sm text-white/90">
            Trusted by <strong className="text-white">40+ businesses</strong> across Kenya
          </span>
        </motion.div>
      </div>

 
    </section>
  );
}