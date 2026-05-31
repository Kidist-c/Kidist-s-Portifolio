/**
 * Contact Section - call to action with social links and contact info.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitFork, Briefcase, Mail, Send, MapPin, Download } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

interface FormState {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

const iconComponents: Record<string, React.ReactNode> = {
  github: <GitFork size={20} />,
  linkedin: <Briefcase size={20} />,
  email: <Mail size={20} />,
};

export const Contact: React.FC = () => {
  const { ref, hasAnimated } = useIntersectionObserver<HTMLDivElement>();
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /** Simulates form submission — in production, connect to a backend or service like Formspree. */
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');
    await new Promise<void>((resolve) => setTimeout(resolve, 1400));
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="container">
        <div ref={ref} className={`fade-section ${hasAnimated ? 'fade-section--visible' : ''}`}>
          {/* Header */}
          <div className="contact__header">
            <p className="section-label">Get in Touch</p>
            <h2 id="contact-heading" className="section-title contact__title">
              Let's Work Together
            </h2>
            <p className="section-desc contact__desc">
              I'm open to Software Engineering, AI Training, and ML Engineering opportunities.
              Whether you have a role, a project, or just want to connect — I'd love to hear from you.
            </p>
          </div>

          <div className="contact__layout">
            {/* Left: Info */}
            <motion.div
              className="contact__info"
              initial={{ opacity: 0, x: -24 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.55 }}
            >
              <div className="contact__detail">
                <MapPin size={18} aria-hidden="true" />
                <div>
                  <p className="contact__detail-label">Location</p>
                  <p className="contact__detail-value">{personalInfo.location}</p>
                </div>
              </div>

              <div className="contact__detail">
                <Mail size={18} aria-hidden="true" />
                <div>
                  <p className="contact__detail-label">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="contact__detail-value contact__email-link"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact__socials">
                <p className="contact__socials-label">Find me on</p>
                <div className="contact__socials-list">
                  {personalInfo.socials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target={social.platform !== 'email' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="contact__social-link"
                      aria-label={`${social.label} profile`}
                    >
                      {iconComponents[social.platform]}
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={personalInfo.resumeUrl}
                download
                className="contact__resume-btn"
                aria-label="Download resume PDF"
              >
                <Download size={16} />
                Download My Resume
              </a>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              className="contact__form-wrap"
              initial={{ opacity: 0, x: 24 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.55 }}
            >
              <div className="contact__form" role="form" aria-label="Contact form">
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="contact-name" className="contact__label">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="contact__input"
                      placeholder="Your name"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="contact-email" className="contact__label">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="contact__input"
                      placeholder="your@email.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-message" className="contact__label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="contact__textarea"
                    placeholder="Tell me about the opportunity or project..."
                    rows={5}
                    required
                  />
                </div>

                <button
                  className={`contact__submit ${status === 'sending' ? 'contact__submit--loading' : ''} ${status === 'sent' ? 'contact__submit--sent' : ''}`}
                  onClick={handleSubmit}
                  disabled={status === 'sending' || status === 'sent'}
                  type="button"
                  aria-live="polite"
                >
                  {status === 'idle' && <><Send size={15} /> Send Message</>}
                  {status === 'sending' && <><span className="contact__spinner" aria-hidden="true" /> Sending...</>}
                  {status === 'sent' && <>✓ Message Sent!</>}
                  {status === 'error' && <>Try Again</>}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
