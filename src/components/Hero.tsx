
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-teal-500/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Aswin PP
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            Software Developer
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Frontend Developer skilled in Angular and React.js, building scalable web applications. 
            Experienced in backend integration with Node.js and Django REST API.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-600">
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full">
            <Mail className="w-4 h-4 text-cyan-600" />
            <span>aswinpp684@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full">
            <Phone className="w-4 h-4 text-purple-600" />
            <span>6238984917</span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full">
            <MapPin className="w-4 h-4 text-teal-600" />
            <span>Calicut, Kerala</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" size="lg" className="flex items-center gap-2 border-cyan-300 text-cyan-700 hover:bg-cyan-50">
            <Github className="w-5 h-5" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="flex items-center gap-2 border-purple-300 text-purple-700 hover:bg-purple-50">
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </Button>
        </div>
        
        <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white">
          View My Work
        </Button>
      </div>
    </section>
  );
};

export default Hero;
