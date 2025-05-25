
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Aswin PP
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Software Developer
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Frontend Developer skilled in Angular and React.js, building scalable web applications. 
            Experienced in backend integration with Node.js and Django REST API.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>aswinpp684@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>6238984917</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Calicut, Kerala</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            <Github className="w-5 h-5" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" className="flex items-center gap-2">
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </Button>
        </div>
        
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          View My Work
        </Button>
      </div>
    </section>
  );
};

export default Hero;
