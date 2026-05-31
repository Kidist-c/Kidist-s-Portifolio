/**
 * About Section - personal bio, key traits, and professional summary.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Rocket, Users } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { personalInfo } from '../../data/portfolioData';
import './About.css';

interface TraitCard {
  readonly icon: React.ReactNode;
  readonly title: string;
  readonly description: string;
}

const traits: TraitCard[] = [
  {
    icon: <Brain size={22} />,
    title: 'AI Enthusiast',
    description: 'Deeply passionate about artificial intelligence, AGI research, and building intelligent systems.',
  },
  {
    icon: <Code2 size={22} />,
    title: 'TypeScript Engineer',
    description: 'Strong TypeScript/React developer who writes clean, typed, maintainable code.',
  },
  {
    icon: <Rocket size={22} />,
    title: 'Fast Learner',
    description: 'Continuously expanding skills across ML, web dev, and software engineering best practices.',
  },
  {
    icon: <Users size={22} />,
    title: 'Collaborative',
    description: 'Experienced working in cross-functional teams on real-world AI and software projects.',
  },
];

export const About: React.FC = () => {
  const { ref, hasAnimated } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="container">
        <div
          ref={ref}
          className={`about__inner fade-section ${hasAnimated ? 'fade-section--visible' : ''}`}
        >
          <div className="about__header">
            <p className="section-label">About Me</p>
            <h2 id="about-heading" className="section-title">
              Software Engineer &<br />
              <span className="about__title-accent">AI Explorer</span>
            </h2>
          </div>

          <div className="about__layout">
            <div className="about__bio">
              {personalInfo.bio.map((paragraph, i) => (
                <motion.p
                  key={i}
                  className="about__bio-paragraph"
                  initial={{ opacity: 0, y: 16 }}
                  animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.55 }}
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.div
                className="about__highlights"
                initial={{ opacity: 0, y: 16 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.48, duration: 0.55 }}
              >
                {[
                  'iCog Labs Contributor',
                  '10 Academy Graduate',
                  'TypeScript Expert',
                  'AI/ML Practitioner',
                ].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </motion.div>
            </div>

            <div className="about__traits">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  className="about__trait-card"
                  initial={{ opacity: 0, x: 20 }}
                  animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                >
                  <div className="about__trait-icon" aria-hidden="true">
                    {trait.icon}
                  </div>
                  <div>
                    <h3 className="about__trait-title">{trait.title}</h3>
                    <p className="about__trait-desc">{trait.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
