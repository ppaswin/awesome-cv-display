
const Skills = () => {
  const frontendSkills = ["React.js", "Angular", "JavaScript", "HTML"];
  const backendSkills = ["Node.js", "Express.js", "REST API Development", "MongoDB"];
  const tools = ["Micro-Frontend Architecture", "Git"];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-white/80 to-blue-50/60 backdrop-blur-sm"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 bg-clip-text text-transparent animate-fade-in-up">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-100/80 to-purple-200/60 border border-purple-300/50 rounded-xl p-6 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-500 animate-slide-in-left hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Frontend</h3>
            <ul className="space-y-2">
              {frontendSkills.map((skill, index) => (
                <li key={skill} className="flex items-center text-gray-700 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-pink-100/80 to-pink-200/60 border border-pink-300/50 rounded-xl p-6 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-pink-800">Backend</h3>
            <ul className="space-y-2">
              {backendSkills.map((skill, index) => (
                <li key={skill} className="flex items-center text-gray-700 animate-fade-in-up" style={{animationDelay: `${index * 0.1 + 0.2}s`}}>
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mr-3"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100/80 to-blue-200/60 border border-blue-300/50 rounded-xl p-6 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-500 animate-slide-in-right hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Tools & Technologies</h3>
            <ul className="space-y-2">
              {tools.map((tool, index) => (
                <li key={tool} className="flex items-center text-gray-700 animate-fade-in-up" style={{animationDelay: `${index * 0.1 + 0.4}s`}}>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
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
