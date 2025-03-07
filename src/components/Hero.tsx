import { Github, Linkedin, Mail, ChevronDown, FileDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-radial from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/image2.jpg')] opacity-25 bg-cover bg-center" />
      
      <div className="relative max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center z-10">
        <div className="mb-8">
        <img
          src="/image.jpg"
          alt="Profile"
          className="w-64 h-64 rounded-full mx-auto border-4 border-blue-500 shadow-xl"
        />

      </div>

        <h1 className="text-4xl sm:text-6xl font-bold mb-4 animate-fade-in">
          Hi, I'm Abelfattah Atef
        </h1>

        <div className="text-xl sm:text-3xl text-cyan-200 mb-8 h-12 animate-fade-in-delay-1">
          <TypeAnimation
            sequence={[
              'Senior Full Stack Developer',
              2000,
              'React.js Expert',
              2000,
              'Node.js Specialist',
              2000,
              'MongoDB Expert',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
          2+ years of experience building scalable web applications
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12 animate-fade-in-delay-2">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-12 py-2 bg-cyan-400 text-black rounded-full shadow-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-transparent text-white border-2 border-gray-800 rounded-full hover:bg-gray-400 hover:text-gray-900 hover:border-gray-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Contact Me
          </button>
        </div>



        <div className="flex justify-center space-x-6 mb-16 animate-fade-in-delay-2">
        <a
          href="https://github.com/Venox152001"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
          title="Visit my GitHub profile"
        >
  <Github size={24} />
</a>

          <a
            href="https://www.linkedin.com/in/abdelfattah-atef-28437a270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
            title="Visit my linkedin profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:atefabdo5555@gmail.com"
            className="text-white hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
            title="Visit my gmail profile"
          >
            <Mail size={24} />
          </a>
          <a
            href="/cv.pdf"
            download
            className="text-white hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
            title="Read My CV and download it"
          >
            <FileDown size={24} />
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={() => scrollToSection('about')}
          className="text-white hover:text-cyan-400 transition-colors duration-300"
          aria-label="Scroll down to About section"
          title="Scroll down"
        >
          <ChevronDown size={32} />
        </button>

        </div>
      </div>
    </div>
  );
};

export default Hero;