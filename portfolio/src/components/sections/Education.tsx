/**
 * Education Section - academic and training background.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { education } from '../../data/portfolioData';
import { Education } from '../../types';
import './Education.css';

const iconForType = (field: string): React.ReactNode => {
  if (field.toLowerCase().includes('computer') || field.toLowerCase().includes('science')) {
    return <GraduationCap size={22} />;
  }
  if (field.toLowerCase().includes('ai') || field.toLowerCase().includes('data')) {
    return <BookOpen size={22} />;
  }
  return <Award size={22} />;
};

interface EducationCardProps {
  readonly edu: Education;
  readonly index: number;
  readonly animate: boolean;
}

const EducationCard: React.FC<EducationCardProps> = ({ edu, index, animate }) => (
  <motion.article
    className="edu-card"
    initial={{ opacity: 0, y: 20 }}
    animate={animate ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: index * 0.14, duration: 0.55 }}
    aria-label={`${edu.degree} from ${edu.institution}`}
  >
    <div className="edu-card__icon" aria-hidden="true">
      {iconForType(edu.field)}
    </div>

    <div className="edu-card__content">
      <div className="edu-card__header">
        <h3 className="edu-card__institution">{edu.institution}</h3>
        <span className="edu-card__years">
          {edu.startYear} — {edu.endYear}
        </span>
      </div>

      <p className="edu-card__degree">
        {edu.degree} · <span className="edu-card__field">{edu.field}</span>
      </p>

      {edu.description && (
        <p className="edu-card__description">{edu.description}</p>
      )}

      {edu.achievements && edu.achievements.length > 0 && (
        <ul className="edu-card__achievements" aria-label="Achievements">
          {edu.achievements.map((achievement, i) => (
            <li key={i} className="edu-card__achievement">
              <span className="edu-card__achievement-mark" aria-hidden="true">✓</span>
              {achievement}
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.article>
);

export const EducationSection: React.FC = () => {
  const { ref, hasAnimated } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="education" className="section education" aria-labelledby="edu-heading">
      <div className="container">
        <div ref={ref} className={`fade-section ${hasAnimated ? 'fade-section--visible' : ''}`}>
          <p className="section-label">Learning Journey</p>
          <h2 id="edu-heading" className="section-title">Education</h2>
          <p className="section-desc">
            My academic background and continuous learning through specialised programs.
          </p>

          <div className="education__grid">
            {education.map((edu, i) => (
              <EducationCard key={edu.id} edu={edu} index={i} animate={hasAnimated} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
