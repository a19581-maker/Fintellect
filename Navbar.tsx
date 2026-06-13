import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Exam Pathways', href: '#pathways' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
          boxShadow: scrolled ? '0 1px 3px rgba(10, 61, 145, 0.1)' : 'none',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#0A3D91' }}
              >
                <span className="font-bold text-lg" style={{ color: '#F4B400', fontFamily: 'Poppins, sans-serif' }}>
                  F
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-[1.1rem] font-bold leading-tight"
                  style={{ color: '#0A3D91', fontFamily: 'Poppins, sans-serif' }}
                >
                  FINTELLECT
                </span>
                <span
                  className="text-[0.7rem] font-medium tracking-[2px] leading-tight"
                  style={{ color: '#F4B400', fontFamily: 'Inter, sans-serif' }}
                >
                  ACADEMY
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-[0.85rem] font-medium transition-colors duration-300 hover:text-[#0A3D91]"
                  style={{ color: '#102A43', fontFamily: 'Inter, sans-serif' }}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#courses"
                className="px-5 py-2 rounded-full text-[0.8rem] font-semibold border-[1.5px] transition-all duration-300 hover:bg-[#0A3D91] hover:text-white"
                style={{
                  borderColor: '#0A3D91',
                  color: '#0A3D91',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Explore Courses
              </a>
              <a
                href="#home"
                className="px-5 py-2 rounded-full text-[0.8rem] font-semibold text-white transition-all duration-300 hover:bg-[#008F5B] hover:-translate-y-[1px]"
                style={{
                  backgroundColor: '#00A86B',
                  fontFamily: 'Inter, sans-serif',
                  boxShadow: '0 4px 14px rgba(0, 168, 107, 0.35)',
                }}
              >
                Start Learning
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} style={{ color: '#102A43' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}>
        <button
          className="absolute top-6 right-6 p-2 text-white"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-menu-link text-white text-2xl font-semibold hover:text-[#F4B400] transition-colors duration-300"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 mt-12">
          <a
            href="#courses"
            className="mobile-menu-link px-8 py-3 rounded-full text-[0.9rem] font-semibold border-[1.5px] border-white text-white hover:bg-white hover:text-[#102A43] transition-all duration-300"
            onClick={handleLinkClick}
          >
            Explore Courses
          </a>
          <a
            href="#home"
            className="mobile-menu-link px-8 py-3 rounded-full text-[0.9rem] font-semibold text-white hover:bg-[#008F5B] transition-all duration-300"
            style={{ backgroundColor: '#00A86B' }}
            onClick={handleLinkClick}
          >
            Start Learning
          </a>
        </div>
      </div>
    </>
  );
}
