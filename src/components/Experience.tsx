
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
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-sm md:text-base">{exp.period}</span>
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
