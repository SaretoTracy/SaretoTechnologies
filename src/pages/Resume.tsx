const Resume = () => {
    const education = [
      {
        title: "Bachelor of Computer Science",
        school: "University of Nairobi",
        year: "2018 - 2022",
      },
      {
        title: "Frontend Development Certification",
        school: "FreeCodeCamp",
        year: "2022",
      },
    ];
  
    const experience = [
      {
        title: "Frontend Developer",
        company: "TechHub Ltd",
        year: "2023 - Present",
        details:
          "Building user interfaces with React, integrating APIs, and maintaining responsive design systems.",
      },
      {
        title: "Web Designer",
        company: "Creative Studio",
        year: "2021 - 2023",
        details:
          "Designed modern websites and landing pages with a focus on accessibility and performance.",
      },
    ];
  
    return (
      <section className="space-y-10">
        <h1 className="text-3xl font-bold">Resume</h1>
  
        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-blue-600 transition-all"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400">{item.school}</p>
                <p className="text-sm text-gray-500 mt-1">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-blue-600 transition-all"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400">{item.company}</p>
                <p className="text-sm text-gray-500 mb-2">{item.year}</p>
                <p className="text-gray-400">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Resume;
  