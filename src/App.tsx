import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://your-backend-url/api/test")  // استبدل 'your-backend-url' بالرابط الفعلي
  .then((res) => res.json())
  .then((data) => setMessage(data.message))
  .catch((err) => console.error("Error fetching data:", err));

  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <p className="text-center mt-4 text-lg font-bold text-gray-600">
        Server says: {message}
      </p>
    </div>
  );
}

export default App;
