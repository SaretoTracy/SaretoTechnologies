import { Code, Layout, Smartphone, Camera, Briefcase, Palette } from "lucide-react";

const services = [
  {
    icon: < Palette size={28} className="text-accent" />,
    title: "Graphic Design",
    desc: "Creating visually stunning designs that bring your brand identity to life.",
  },
  {
    icon: <Code size={28} className="text-accent" />,
    title: "Web Development",
    desc: "Building responsive, high-performance websites tailored to your business needs.",
  },
  {
    icon: <Smartphone size={28} className="text-accent" />,
    title: "Mobile Apps",
    desc: "Developing intuitive mobile applications for iOS and Android platforms.",
  },
  {
    icon: <Briefcase size={28} className="text-accent" />,
    title: "Business Software Development",
    desc: "Custom software solutions that streamline operations and boost productivity.",
  },

];

export default function About() {
  return (
    <section id="about" className="space-y-10">
      {/* Section Title */}
      <div>
        <h2 className="text-3xl font-semibold mb-2">About us</h2>
        <div className="w-20 h-[2px] bg-accent mb-6"></div>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
        Sareto Technologies delivers comprehensive digital solutions including web development, mobile app development, graphic design, business software, and database management systems. We transform ideas into powerful technology that drives your business forward..
        </p>
        <p className="text-gray-300 leading-relaxed max-w-3xl mt-4">
        We build websites that are functional, user-friendly, and visually compelling. Our team adds a personal touch to every project, ensuring your digital presence is both eye-catching and intuitive. We bring your message and brand identity to life through creative design solutions. Sareto Technologies has delivered exceptional web design for numerous leading brand companies.
        </p>
      </div>

      {/* What I'm Doing */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">What We Doing</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-xl border border-gray-800 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg">{service.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{service.title}</h4>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
