
const skills = {
  Frontend: ['React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL'],
  Database: ['MongoDB', 'Mongoose', 'SQL', 'Redis'],
  DevOps: ['Git', 'Docker', 'CI/CD', 'AWS', 'Security Best Practices'],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white min-h-screen relative flex items-center justify-center bg-gradient-radial from-gray-900 via-gray-800 to-black text-black overflow-hidden bg-[url('/image4.jpg')] opacity-8 bg-cover bg-center">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-transparent p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 ">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="bg-cyan-600 px-3 py-2 rounded shadow-sm text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;