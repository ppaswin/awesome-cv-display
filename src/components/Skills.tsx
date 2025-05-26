
const Skills = () => {
  const frontendSkills = ["React.js", "Angular", "JavaScript", "HTML"];
  const backendSkills = ["Node.js", "Express.js", "REST API Development", "MongoDB"];
  const tools = ["Micro-Frontend Architecture", "Git"];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-white via-cyan-50/30 to-purple-50/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-700 to-purple-700 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-cyan-800">Frontend</h3>
            <ul className="space-y-2">
              {frontendSkills.map((skill) => (
                <li key={skill} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mr-3"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Backend</h3>
            <ul className="space-y-2">
              {backendSkills.map((skill) => (
                <li key={skill} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-teal-800">Tools & Technologies</h3>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li key={tool} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mr-3"></div>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
