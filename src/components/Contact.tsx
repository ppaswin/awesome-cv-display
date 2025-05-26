
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-50/50 via-cyan-50/30 to-teal-50/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-700 to-cyan-700 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8 border border-gray-200/50">
          <p className="text-lg text-gray-700 mb-8">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center p-4 bg-cyan-50/50 rounded-lg">
              <Mail className="w-8 h-8 text-cyan-600 mb-2" />
              <span className="text-gray-700">aswinpp684@gmail.com</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-purple-50/50 rounded-lg">
              <Phone className="w-8 h-8 text-purple-600 mb-2" />
              <span className="text-gray-700">6238984917</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-teal-50/50 rounded-lg">
              <MapPin className="w-8 h-8 text-teal-600 mb-2" />
              <span className="text-gray-700">Calicut, Kerala</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="flex items-center gap-2 border-cyan-300 text-cyan-700 hover:bg-cyan-50">
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button variant="outline" className="flex items-center gap-2 border-purple-300 text-purple-700 hover:bg-purple-50">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white">
              Send Email
            </Button>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p className="text-gray-300">
            Bachelor of Computer Application, Calicut University (2019 – 2022)
          </p>
          <p className="text-gray-300">
            Higher Secondary, Kerala Board (2017 – 2019)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
