import { useRef } from 'react';
import { siteConfig } from '@/config/siteConfig';
import { useHeroWave } from '@/hooks/useHeroWave';
import Button from '@/components/ui/Button/Button';
import CvDownload from '@/components/ui/CvDownload/CvDownload';
import './Hero.css';

const LETTER_DELAY_STRIDE = 4;

export default function Hero() {
  const titleRef = useRef(null);
  useHeroWave(titleRef);

  return (
    <section className="section hero" aria-label="Introduction">
      <h1 ref={titleRef} className="hero__title">
        <span className="visually-hidden">{`${siteConfig.name} — ${siteConfig.headline}`}</span>
        {siteConfig.nameWords.map((word, wordIndex) => (
          <span key={word} className="hero__word" aria-hidden="true">
            {[...word].map((letter, letterIndex) => (
              <span
                key={letterIndex}
                className="hero__letter"
                style={{ '--i': wordIndex * LETTER_DELAY_STRIDE + letterIndex }}
              >
                {letter}
              </span>
            ))}
          </span>
        ))}
      </h1>
      <div className="hero__footer">
        <div>
          <p className="hero__lede">
            Full-stack developer in Cairo. I build fast, beautiful web experiences where every pixel has purpose and every interaction feels effortless — from idea to deployment.
          </p>
          <p className="hero__status">Open to new projects</p>
        </div>
        <div className="hero__actions">
          <Button href="#work" magnetic>See my work</Button>
          <CvDownload />
        </div>
      </div>
    </section>
  );
}