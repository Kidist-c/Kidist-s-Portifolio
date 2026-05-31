/**
 * Footer - minimal footer with copyright and social links.
 */

import React from 'react';
import { GitFork, Briefcase, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

const iconMap: Record<string, React.ReactNode> = {
  github: <GitFork size={17} />,
  linkedin: <Briefcase size={17} />,
  email: <Mail size={17} />,
};

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__left">
          <a href="#hero" className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            KM
            <span className="footer__logo-bracket">/&gt;</span>
          </a>
          <p className="footer__copy">
            © {year} Kidist Mulualem. Built with{' '}
            <Heart size={12} className="footer__heart" aria-label="love" />{' '}
            using React + TypeScript.
          </p>
        </div>

        <nav className="footer__socials" aria-label="Social links">
          {personalInfo.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target={social.platform !== 'email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="footer__social"
              aria-label={social.label}
            >
              {iconMap[social.platform]}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
