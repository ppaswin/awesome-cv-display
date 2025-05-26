
const Projects = () => {
  const projects = [
    {
      title: "Ramadpay",
      description: "Developed and maintained a React.js-based payment platform, achieving a 30% improvement in processing efficiency. Integrated Zoho CRM forms and created Node.js APIs to handle dynamic form submissions.",
      technologies: ["React.js", "Node.js", "Zoho CRM"]
    },
    {
      title: "Technostore360",
      description: "Enhanced an Angular-based e-commerce website, improving load times and user experience. Utilized Django REST API to manage and serve product data reliably.",
      technologies: ["Angular", "Django REST API"]
    },
    {
      title: "Sahara Technologies",
      description: "Collaborated on building dynamic interfaces using React.js, connecting seamlessly with a Django backend. Implemented responsive design practices, ensuring optimal performance across devices and integrating a chatbot to boost user engagement.",
      technologies: ["React.js", "Django", "Responsive Design"]
    },
    {
      title: "Bathootha Travels",
      description: "Developed a travel booking website with React.js, focusing on usability and performance. Employed React hooks and Context API for effective state management, with backend operations handled via Node.js.",
      technologies: ["React.js", "Node.js", "Context API"]
    },
    {
      title: "Room Booking Website",
      description: "Created a fully responsive room booking interface using React.js. Integrated backend functionality with Node.js to streamline booking processes.",
      technologies: ["React.js", "Node.js"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-cyan-50/30 via-white to-purple-50/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-700 to-purple-700 bg-clip-text text-transparent">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-gray-200/50 hover:border-cyan-300/50">
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-cyan-700 to-purple-700 bg-clip-text text-transparent">{project.title}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-purple-100 text-gray-800 rounded-full text-sm border border-cyan-200/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
