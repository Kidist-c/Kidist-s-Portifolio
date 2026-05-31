/**
 * Navbar - sticky top navigation with theme toggle, mobile menu, and scroll state.
 */

import React, { useState } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../../types';
import { useTheme } from '../../hooks/useTheme';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { Theme } from '../../types';
import { navItems, personalInfo } from '../../data/portfolioData';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { isPast } = useScrollProgress(60);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string): void => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${isPast ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={() => handleNavClick('#hero')}>
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">KM</span>
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {navItems.map((item: NavItem) => (
            <button
              key={item.href}
              className="navbar__link"
              onClick={() => handleNavClick(item.href)}
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          <a
            href={personalInfo.resumeUrl}
            download
            className="navbar__resume-btn"
            aria-label="Download resume"
          >
            <Download size={14} />
            <span>Resume</span>
          </a>

          <button
            className="navbar__theme-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === Theme.Dark ? 'light' : 'dark'} mode`}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.2 }}
              >
                {theme === Theme.Dark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Mobile toggle */}
          <button
            className="navbar__hamburger"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            {navItems.map((item: NavItem, i: number) => (
              <motion.button
                key={item.href}
                className="navbar__mobile-link"
                onClick={() => handleNavClick(item.href)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="navbar__mobile-index mono">{String(i + 1).padStart(2, '0')}.</span>
                {item.label}
              </motion.button>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download
              className="navbar__mobile-resume"
            >
              <Download size={14} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
