import Seo from "./components/Seo";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import Starfield from "./components/Starfield";
import BackToTop from "./components/BackToTop";
import ClickSparks from "./components/ClickSparks";
import Sidenav from "./components/Sidenav";
import Toast from "./components/Toast";
import { ToastProvider } from "./components/ToastContext";
import ProjectModal from "./components/modals/ProjectModal";
import { ProjectModalProvider } from "./components/modals/ProjectModalContext";
import LetterModal from "./components/modals/LetterModal";
import { LetterModalProvider } from "./components/modals/LetterModalContext";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Collaborations from "./components/sections/Collaborations";
import Services from "./components/sections/Services";
import Letters from "./components/sections/Letters";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToastProvider>
      <ProjectModalProvider>
        <LetterModalProvider>
          <Seo />

          <CustomCursor />
          <Loader />
          <ScrollProgress />
          <Starfield />
          <div className="stripe-bg" />
          <BackToTop />
          <ClickSparks />
          <Toast />

          <Sidenav theme={theme} onToggleTheme={toggleTheme} />

          <main>
            <Hero />
            <About />
            <Projects />
            <Collaborations />
            <Services />
            <Letters />
            <Contact />
            <Footer />
          </main>

          <ProjectModal />
          <LetterModal />
        </LetterModalProvider>
      </ProjectModalProvider>
    </ToastProvider>
  );
}
