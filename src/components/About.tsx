import { Code2, Database, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-[url('/image3.jpg')] opacity-3 bg-cover bg-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-transparent p-6 opacity-100 border-4 rounded-lg shadow-md transform hover:bg-purple-600 hover:opacity-90 hover:-translate-y-1 transition-all duration-300 text-white hover:text-white">
            <Code2 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-white ">
              Passionate about creating intuitive and responsive user interfaces using
              modern React.js and related technologies.
            </p>
          </div>
          <div className="bg-transparent p-6 opacity-100 border-4 rounded-lg shadow-md transform hover:bg-blue-600 hover:opacity-90 hover:-translate-y-1 transition-all duration-300 text-white hover:text-white">
            <Server className="w-12 h-12 text-green-600 mb-4 " />
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-white">
              Experienced in building robust server-side applications with Node.js
              and Express, focusing on scalability and performance.
            </p>
          </div>
          <div className="bg-transparent p-6 opacity-100 border-4 rounded-lg shadow-md transform hover:bg-green-600 hover:opacity-90 hover:-translate-y-1 transition-all duration-300 text-white hover:text-white">
            <Database className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Database Management</h3>
            <p className="text-white">
              Proficient in designing and implementing database solutions using
              MongoDB and other modern database technologies.
            </p>
          </div>
        </div>
        <div className="mt-24 text-center max-w-3xl mx-auto text-2xl font-bold">
          <p className="text-white leading-relaxed">
            As a self-taught developer, I've dedicated myself to mastering the full
            stack development process. My journey has equipped me with a deep
            understanding of both frontend and backend technologies, enabling me to
            build complete, production-ready applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;