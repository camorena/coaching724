import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Career Coaching', href: '/services#career' },
      { label: 'Leadership Development', href: '/services#leadership' },
      { label: 'Life Coaching', href: '/services#life' },
      { label: 'Business Coaching', href: '/services#business' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Guides', href: '/resources/guides' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Support', href: '/support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-display font-semibold mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-muted-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-2xl font-display font-bold text-primary">
                Coaching<span className="text-secondary">724</span>
              </span>
            </div>

            <div className="flex space-x-4">
              {/* Simplified social links */}
              <a href="https://twitter.com/coaching724" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com/company/coaching724" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://instagram.com/coaching724" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                Instagram
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-foreground/60">
            <p>
              &copy; {currentYear} Coaching724. All rights reserved.
            </p>
            <p className="mt-1">
              Helping you achieve your goals through professional coaching.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
