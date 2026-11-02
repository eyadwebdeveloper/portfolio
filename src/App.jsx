import { useEffect } from 'react';
import { trackPointer } from '@/lib/pointer';
import CustomCursor from '@/components/ui/CustomCursor/CustomCursor';
import BackToTop from '@/components/ui/BackToTop/BackToTop';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import Hero from '@/sections/Hero/Hero';
import Work from '@/sections/Work/Work';
import About from '@/sections/About/About';
import Collaborations from '@/sections/Collaborations/Collaborations';
import Services from '@/sections/Services/Services';
import Letters from '@/sections/Letters/Letters';
import Contact from '@/sections/Contact/Contact';

import '@/styles/theme.css';
import '@/styles/base.css';

export default function App() {
  useEffect(trackPointer, []);

  return (
    <>
      <CustomCursor />
      <Header />
      <main id="top">
        <Hero />
        <Work />
        <About />
        <Collaborations />
        <Services />
        <Letters />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
