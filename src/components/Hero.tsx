
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-blue-500/20 animate-pulse-glow"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4 animate-float">
            Aswin PP
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 font-medium animate-slide-in-left">
            Software Developer
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 animate-slide-in-right">
            Frontend Developer skilled in Angular and React.js, building scalable web applications. 
            Experienced in backend integration with Node.js and Django REST API.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-700 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-purple-200/50 hover:shadow-xl transition-all duration-300">
            <Mail className="w-4 h-4 text-purple-600" />
            <span>aswinpp684@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-pink-200/50 hover:shadow-xl transition-all duration-300">
            <Phone className="w-4 h-4 text-pink-600" />
            <span>6238984917</span>
          </div>
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-blue-200/50 hover:shadow-xl transition-all duration-300">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>Calicut, Kerala</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mb-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <Button variant="outline" size="lg" className="flex items-center gap-2 border-purple-300 text-purple-700 hover:bg-purple-50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Github className="w-5 h-5" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="flex items-center gap-2 border-pink-300 text-pink-700 hover:bg-pink-50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </Button>
        </div>
        
        <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          View My Work
        </Button>
      </div>
    </section>
  );
};

export default Hero;
