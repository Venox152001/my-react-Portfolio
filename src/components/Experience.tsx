
const experiences = [
  {
    period: '2021 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    description:
      'Lead developer for enterprise-level web applications. Implemented authentication systems and RESTful APIs serving millions of requests.',
  },
  {
    period: '2019 - 2021',
    title: 'Full Stack Developer',
    company: 'Digital Innovations Ltd.',
    description:
      'Developed and maintained multiple web applications using the MERN stack. Improved application performance by 40%.',
  },
  {
    period: '2018 - 2019',
    title: 'Junior Developer',
    company: 'StartUp Hub',
    description:
      'Started as a frontend developer and quickly expanded to full stack development. Built and deployed several successful web applications.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white min-h-screen relative flex items-center justify-center bg-gradient-radial from-gray-900 via-gray-800 to-black text-black overflow-hidden bg-[url('/image6.jpg')] opacity-8 bg-cover bg-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between"
              >
                <div className="flex-1 mr-4 md:mr-8 text-right">
                  <p className="text-gray-500">{exp.period}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
                <div className="flex-1 ml-4 md:ml-8 bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-600 mb-2">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;