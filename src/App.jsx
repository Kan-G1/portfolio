import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Journey from "./components/Journey.jsx";
import Contact from "./components/Contact.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import { profile } from "./data.js";

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-glow text-[11px] font-bold text-white">
            KG
          </span>
          <span className="text-sm text-stone-500">
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
        <div className="flex items-center gap-5 text-sm text-stone-500">
          <a href="#work" className="hover:text-stone-300">Work</a>
          <a href="#about" className="hover:text-stone-300">About</a>
          <a href={`mailto:${profile.email}`} className="hover:text-stone-300">Email</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-stone-300">GitHub</a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-stone-300">LinkedIn</a>
          )}
        </div>
        <p className="text-xs text-stone-600">Built with React & Tailwind</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="grain relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
