
const Skills = () => {
  const frontendSkills = ["React.js", "Angular", "JavaScript", "HTML"];
  const backendSkills = ["Node.js", "Express.js", "REST API Development", "MongoDB"];
  const tools = ["Micro-Frontend Architecture", "Git"];

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Frontend</h3>
            <ul className="space-y-2">
              {frontendSkills.map((skill) => (
                <li key={skill} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-800">Backend</h3>
            <ul className="space-y-2">
              {backendSkills.map((skill) => (
                <li key={skill} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Tools & Technologies</h3>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li key={tool} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
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
