import { motion } from "motion/react";
import { ArrowRight, Code, Smartphone, Palette, Database, Briefcase, Sparkles } from "lucide-react";

export default function Home() {
  const services = [
    { icon: Code, label: "Web Development" },
    { icon: Smartphone, label: "Mobile Apps" },
    { icon: Palette, label: "Graphic Design" },
    { icon: Briefcase, label: "Business Software" },
    { icon: Database, label: "Database Systems" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-red-950 to-black">
  
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/2 w-72 h-72 bg-red-700 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

   
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
  
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-red-500/30 mb-8"
        >
          <Sparkles className="w-4 h-4 text-red-400" />
          <span className="text-sm text-white/90">Transforming Ideas into Powerful Technology</span>
        </motion.div>

 
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          <span className="block">Sareto</span>
          <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </motion.h1>

    
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We deliver comprehensive digital solutions including web development, mobile app development, 
          graphic design, business software, and database management systems. We transform ideas into 
          powerful technology that drives your business forward.
        </motion.p>


     
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-red-500/20 hover:bg-white/10 hover:border-red-500/40 transition-all cursor-pointer"
            >
              <div className="p-3 rounded-full bg-gradient-to-br from-red-600/20 to-red-800/20">
                <service.icon className="w-6 h-6 text-red-400" />
              </div>
              <span className="text-sm text-white/90 text-center">{service.label}</span>
            </motion.div>
          ))}
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-red-500/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ height: ["20%", "80%", "20%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 bg-red-500/50 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}