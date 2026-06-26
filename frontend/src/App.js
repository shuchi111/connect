import "@/App.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Achievements from "@/components/Achievements";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";
import ScrollProgress from "@/components/ScrollProgress";

function App() {
  return (
    <div className="App">
      <Toaster theme="dark" position="bottom-center" richColors />
      <main data-testid="home" className="relative bg-black text-white min-h-screen overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Achievements />
        <Blog />
        <Contact />
        <Chatbot />
      </main>
    </div>
  );
}

export default App;
