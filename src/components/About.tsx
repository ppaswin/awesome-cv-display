
const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-purple-50/60 to-pink-50/60 backdrop-blur-sm"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 bg-clip-text text-transparent animate-fade-in-up">
          About Me
        </h2>
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-purple-200/50 hover:shadow-2xl transition-all duration-500 animate-slide-in-left">
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
