/**
 * Skills Section - grouped skill bars by TechCategory with animated progress.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { skills } from '../../data/portfolioData';
import { Skill, TechCategory } from '../../types';
import './Skills.css';

/** Groups skills by their category */
const groupSkillsByCategory = (skillList: Skill[]): Map<TechCategory, Skill[]> => {
  return skillList.reduce((map, skill) => {
    const existing = map.get(skill.category) ?? [];
    map.set(skill.category, [...existing, skill]);
    return map;
  }, new Map<TechCategory, Skill[]>());
};

const categoryColors: Record<TechCategory, string> = {
  [TechCategory.Language]: '#00d4ff',
  [TechCategory.Frontend]: '#7c3aed',
  [TechCategory.Backend]: '#f59e0b',
  [TechCategory.AI_ML]: '#10b981',
  [TechCategory.Tools]: '#f97316',
  [TechCategory.Testing]: '#ec4899',
};

interface SkillBarProps {
  readonly skill: Skill;
  readonly animate: boolean;
  readonly delay: number;
  readonly color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, animate, delay, color }) => (
  <div className="skill-bar">
    <div className="skill-bar__header">
      <span className="skill-bar__name">{skill.name}</span>
      <span className="skill-bar__level">{skill.level}%</span>
    </div>
    <div className="skill-bar__track" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} proficiency ${skill.level}%`}>
      <motion.div
        className="skill-bar__fill"
        style={{ '--skill-color': color } as React.CSSProperties}
        initial={{ width: 0 }}
        animate={animate ? { width: `${skill.level}%` } : { width: 0 }}
        transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      />
    </div>
  </div>
);

export const Skills: React.FC = () => {
  const { ref, hasAnimated } = useIntersectionObserver<HTMLDivElement>();
  const grouped = groupSkillsByCategory(skills);
  const categories = Array.from(grouped.keys());
  const [activeCategory, setActiveCategory] = useState<TechCategory | 'all'>('all');

  const filteredGrouped = activeCategory === 'all'
    ? grouped
    : new Map([[activeCategory, grouped.get(activeCategory) ?? []]]);

  return (
    <section id="skills" className="section skills" aria-labelledby="skills-heading">
      <div className="container">
        <div ref={ref} className={`fade-section ${hasAnimated ? 'fade-section--visible' : ''}`}>
          <p className="section-label">Technical Expertise</p>
          <h2 id="skills-heading" className="section-title">Skills & Technologies</h2>
          <p className="section-desc">
            A curated overview of the technologies and tools I work with regularly.
          </p>

          {/* Filter tabs */}
          <div className="skills__filter" role="tablist" aria-label="Filter skills by category">
            <button
              role="tab"
              aria-selected={activeCategory === 'all'}
              className={`skills__filter-btn ${activeCategory === 'all' ? 'skills__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`skills__filter-btn ${activeCategory === cat ? 'skills__filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                style={{ '--cat-color': categoryColors[cat] } as React.CSSProperties}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skill groups */}
          <div className="skills__grid">
            {Array.from(filteredGrouped.entries()).map(([category, catSkills], groupIndex) => (
              <motion.div
                key={category}
                className="skills__group"
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
              >
                <div
                  className="skills__group-header"
                  style={{ '--cat-color': categoryColors[category] } as React.CSSProperties}
                >
                  <span className="skills__group-dot" aria-hidden="true" />
                  <h3 className="skills__group-name">{category}</h3>
                </div>
                <div className="skills__group-bars">
                  {catSkills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      animate={hasAnimated}
                      delay={groupIndex * 0.1 + i * 0.06}
                      color={categoryColors[category]}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
