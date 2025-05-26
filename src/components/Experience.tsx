
const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Febno Technologies",
      period: "09/2023 – present",
      description: "I develop and maintain high-performance web applications using React.js and Angular, focusing on reusable components, scalability, and seamless front-end integration. By optimizing performance and ensuring code efficiency, I contribute to delivering robust and engaging user experiences."
    },
    {
      title: "Full Stack Developer",
      company: "MaiTexa Info Solutions LLP",
      period: "02/2023 – 07/2023",
      description: "Previously worked as a MERN Stack Developer Intern at MaiTexa Technologies, where I built full-stack applications using MongoDB, Express.js, React.js, and Node.js."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-purple-50/50 via-white to-cyan-50/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-700 to-cyan-700 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border-l-4 border-gradient-to-b from-cyan-500 to-purple-500 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-sm md:text-base bg-gray-100 px-3 py-1 rounded-full">{exp.period}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
