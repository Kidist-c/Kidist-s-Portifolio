/**
 * Experience Section - work and training timeline.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { experiences } from '../../data/portfolioData';
import { Experience } from '../../types';
import './Experience.css';

interface ExperienceCardProps {
  readonly experience: Experience;
  readonly index: number;
  readonly animate: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index, animate }) => {
  const [expanded, setExpanded] = useState(index === 0);
  const isPresent = experience.endDate === 'Present';

  const formatDate = (date: string): string => {
    if (date === 'Present') return 'Present';
    const [year, month] = date.split('-');
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <motion.article
      className={`exp-card ${isPresent ? 'exp-card--current' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.55 }}
      aria-label={`${experience.role} at ${experience.organization}`}
    >
      {/* Timeline dot */}
      <div className="exp-card__timeline" aria-hidden="true">
        <div className={`exp-card__dot ${isPresent ? 'exp-card__dot--active' : ''}`} />
        {index < experiences.length - 1 && <div className="exp-card__line" />}
      </div>

      <div className="exp-card__body">
        {/* Header */}
        <div className="exp-card__header">
          <div className="exp-card__meta">
            <div className="exp-card__title-row">
              <h3 className="exp-card__role">{experience.role}</h3>
              {isPresent && <span className="exp-card__badge">Current</span>}
            </div>
            <a
              href={experience.organizationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="exp-card__org"
            >
              {experience.organization}
              <ExternalLink size={12} />
            </a>
            <div className="exp-card__details">
              <span className="exp-card__detail">
                <Calendar size={12} aria-hidden="true" />
                {formatDate(experience.startDate)} — {formatDate(experience.endDate)}
              </span>
              <span className="exp-card__detail">
                <MapPin size={12} aria-hidden="true" />
                {experience.location}
              </span>
            </div>
          </div>

          <button
            className="exp-card__expand-btn"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-label={expanded ? 'Collapse details' : 'Expand details'}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Description */}
        <p className="exp-card__description">{experience.description}</p>

        {/* Expandable highlights */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ overflow: 'hidden' }}
            >
              <ul className="exp-card__highlights" aria-label="Key highlights">
                {experience.highlights.map((h, i) => (
                  <li key={i} className="exp-card__highlight">
                    <span className="exp-card__highlight-dot" aria-hidden="true" />
                    <span className="exp-card__highlight-text">{h.text}</span>
                    {h.tags && (
                      <div className="exp-card__highlight-tags">
                        {h.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Technologies */}
        <div className="exp-card__technologies">
          {experience.technologies.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export const ExperienceSection: React.FC = () => {
  const { ref, hasAnimated } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="experience" className="section experience" aria-labelledby="exp-heading">
      <div className="container">
        <div ref={ref} className={`fade-section ${hasAnimated ? 'fade-section--visible' : ''}`}>
          <p className="section-label">Where I've Worked</p>
          <h2 id="exp-heading" className="section-title">Experience</h2>
          <p className="section-desc">
            My professional journey in software engineering and AI research.
          </p>

          <div className="experience__timeline" role="list">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={i}
                animate={hasAnimated}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
