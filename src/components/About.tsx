
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-teal-50/30 via-white to-purple-50/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-700 to-purple-700 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-gray-200/50">
          <p className="text-lg text-gray-700 leading-relaxed">
            Frontend Developer skilled in Angular and React.js, building scalable web applications. 
            Experienced in backend integration with Node.js and Django REST API. Passionate about 
            performance optimization and creating reusable components for future use. Committed to 
            writing clean, maintainable code that delivers exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
