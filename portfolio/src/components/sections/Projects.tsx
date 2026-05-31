/**
 * Projects Section - filterable grid of project cards.
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitFork, ExternalLink, Star } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { projects } from '../../data/portfolioData';
import { Project, ProjectStatus } from '../../types';
import './Projects.css';

type FilterCategory = Project['category'] | 'all';

interface FilterOption {
  readonly value: FilterCategory;
  readonly label: string;
}

const filters: FilterOption[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'ai-ml', label: 'AI / ML' },
  { value: 'web', label: 'Web Dev' },
  { value: 'algorithm', label: 'Algorithms' },
];

const statusConfig: Record<ProjectStatus, { label: string; color: string }> = {
  [ProjectStatus.Live]: { label: 'Live', color: '#10b981' },
  [ProjectStatus.Completed]: { label: 'Completed', color: '#00d4ff' },
  [ProjectStatus.InProgress]: { label: 'In Progress', color: '#f59e0b' },
};

interface ProjectCardProps {
  readonly project: Project;
  readonly index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const status = statusConfig[project.status];

  return (
    <motion.article
      className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      aria-label={project.title}
    >
      {/* Header */}
      <div className="project-card__header">
        <div className="project-card__header-left">
          {project.featured && (
            <div className="project-card__featured" aria-label="Featured project">
              <Star size={11} />
              <span>Featured</span>
            </div>
          )}
          <div
            className="project-card__status"
            style={{ '--status-color': status.color } as React.CSSProperties}
          >
            <span className="project-card__status-dot" aria-hidden="true" />
            {status.label}
          </div>
        </div>

        <div className="project-card__links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitFork size={16} />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <ul className="project-card__highlights" aria-label="Project highlights">
          {project.highlights.map((h, i) => (
            <li key={i} className="project-card__highlight">
              <span aria-hidden="true">→</span> {h}
            </li>
          ))}
        </ul>
      )}

      {/* Technologies */}
      <div className="project-card__techs">
        {project.technologies.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
    </motion.article>
  );
};

export const Projects: React.FC = () => {
  const { ref, hasAnimated } = useIntersectionObserver<HTMLDivElement>();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filtered = useMemo<Project[]>(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-heading">
      <div className="container">
        <div ref={ref} className={`fade-section ${hasAnimated ? 'fade-section--visible' : ''}`}>
          <p className="section-label">What I've Built</p>
          <h2 id="projects-heading" className="section-title">Projects</h2>
          <p className="section-desc">
            A selection of projects spanning AI/ML, algorithms, and web development.
          </p>

          {/* Filters */}
          <div className="projects__filters" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f.value}
                role="tab"
                aria-selected={activeFilter === f.value}
                className={`projects__filter-btn ${activeFilter === f.value ? 'projects__filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div className="projects__grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
