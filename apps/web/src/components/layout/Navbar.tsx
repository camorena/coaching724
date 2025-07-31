import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from '../theme';
import { LanguageSelector } from '../language';

interface NavItem {
  labelKey: string;
  href: string;
  isButton?: boolean;
}

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { labelKey: 'navigation.home', href: '/' },
    { labelKey: 'navigation.about', href: '/about' },
    { labelKey: 'navigation.services', href: '/services' },
    { labelKey: 'navigation.pricing', href: '/pricing' },
    { labelKey: 'navigation.blog', href: '/blog' },
    { labelKey: 'navigation.contact', href: '/contact' },
    { labelKey: 'navigation.login', href: '/login', isButton: true },
  ];

  // Check if the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-[4px] shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-primary">
              Coaching<span className="text-secondary">724</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) =>
              item.isButton ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="btn-primary"
                >
                  {t(item.labelKey, item.labelKey.split('.').pop())}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium hover:text-primary transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-foreground/80'
                  }`}
                >
                  {t(item.labelKey, item.labelKey.split('.').pop())}
                </Link>
              )
            )}
            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <LanguageSelector />
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/80 backdrop-blur-[4px] shadow-md transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden py-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navItems.map((item) =>
            item.isButton ? (
              <Link
                key={item.href}
                to={item.href}
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.labelKey, item.labelKey.split('.').pop())}
              </Link>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`py-2 text-sm font-medium hover:text-primary transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.labelKey, item.labelKey.split('.').pop())}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
};
