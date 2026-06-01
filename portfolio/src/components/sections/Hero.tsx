/**
 * Hero Section - the landing view with animated introduction,
 * call-to-action buttons, and scroll indicator.
 */

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GitFork, Briefcase, Mail, ArrowDown, Download, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { SocialLink } from '../../types';
import './Hero.css';


const iconMap: Record<SocialLink['platform'], React.ReactNode> = {
  github: <GitFork size={20} />,
  linkedin: <Briefcase size={20} />,
  email: <Mail size={20} />,
  twitter: null,
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export const Hero: React.FC = () => {
  const handleScroll = (): void => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      {/* Background effects */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__content">
        <motion.div
          className="hero__text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div className="hero__badge" variants={itemVariants}>
            <Sparkles size={12} />
            <span>Open to AI Engineering &amp; Software Roles</span>
          </motion.div>

          {/* Name */}
          <motion.h1 className="hero__name" variants={itemVariants}>
            <span className="hero__name-line">Hi, I&apos;m</span>{' '}
            <span className="hero__name-accent">Kidist</span>
            <br />
            <span className="hero__name-last">Mulualem</span>
          </motion.h1>

          {/* Title */}
          <motion.div className="hero__title" variants={itemVariants}>
            <span className="hero__title-text">{personalInfo.title}</span>
          </motion.div>

          {/* Tagline */}
          <motion.p className="hero__tagline" variants={itemVariants}>
            {personalInfo.tagline}
          </motion.p>

          {/* Location */}
          <motion.p className="hero__location" variants={itemVariants}>
            <span className="hero__location-dot" aria-hidden="true" />
            {personalInfo.location} · Currently at{' '}
            <a
              href="https://icog-labs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__location-link"
            >
              iCog Labs
            </a>
          </motion.p>

          {/* CTA */}
          <motion.div className="hero__cta" variants={itemVariants}>
            <a
              href={personalInfo.resumeUrl}
              download
              className="hero__btn hero__btn--primary"
              aria-label="Download Kidist's resume"
            >
              <Download size={16} />
              Download Resume
            </a>
            <button
              className="hero__btn hero__btn--secondary"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="View projects"
            >
              View Projects
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div className="hero__socials" variants={itemVariants}>
            {personalInfo.socials.map((social: SocialLink) => (
              <a
                key={social.platform}
                href={social.url}
                target={social.platform !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="hero__social-btn"
                aria-label={`Visit ${social.label}`}
              >
                {iconMap[social.platform]}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual Panel */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <div className="hero__avatar-wrap">
            <div className="hero__avatar-ring hero__avatar-ring--outer" />
            <div className="hero__avatar-ring hero__avatar-ring--inner" />
            <div className="hero__avatar">
  {personalInfo.avatarUrl ? (
    <img
  src={personalInfo.avatarUrl}
  alt="Kidist Mulualem"
  className="hero__avatar-img"
  onError={(e) => {
    e.currentTarget.style.display = 'none';
  }}
/>
  ) : (
    <span className="hero__avatar-initials">KM</span>
  )}
</div>
            {/* Orbit chips */}
            <div className="hero__orbit">
              {['TypeScript', 'React', 'Python', 'AI/ML'].map((tech) => (
                <div
                  key={tech}
                  className="hero__orbit-chip"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            {[
              { value: '2+', label: 'Years Exp.' },
              { value: '10+', label: 'Projects' },
              { value: 'AI', label: 'Focus' },
            ].map((stat) => (
              <div key={stat.label} className="hero__stat">
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="hero__scroll-indicator"
        onClick={handleScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-label="Scroll down to about section"
      >
        <span className="hero__scroll-text mono">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
};
