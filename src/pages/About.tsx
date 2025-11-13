import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
  ];

  const services = [
    {
      title: "Web Development",
      description:
        "I build responsive, accessible, and performant web applications with modern technologies.",
    },
    {
      title: "UI/UX Design",
      description:
        "I focus on creating intuitive and aesthetic interfaces with user-centered design principles.",
    },
  ];

  return (
    <section className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-gray-400 leading-relaxed max-w-3xl">
          I'm a passionate front-end developer with experience building modern web
          applications using React and Tailwind CSS. I love transforming ideas
          into digital experiences that are beautiful and functional.
        </p>
      </div>

      {/* Tabs */}
      <div>
        <div className="flex space-x-6 border-b border-gray-700">
          <button
            onClick={() => setActiveTab("skills")}
            className={`pb-2 transition-colors ${
              activeTab === "skills"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveTab("services")}
            className={`pb-2 transition-colors ${
              activeTab === "services"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Services
          </button>
        </div>

        {/* Skills */}
        {activeTab === "skills" && (
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span className="text-gray-400">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Services */}
        {activeTab === "services" && (
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
