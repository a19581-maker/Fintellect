import { useState } from 'react';
import { Phone, Mail, Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'All Courses', href: '#courses' },
  { label: 'Exam Pathways', href: '#pathways' },
  { label: 'Resource Center', href: '#resources' },
  { label: 'Discussion Forums', href: '#resources' },
  { label: 'Contact Us', href: '#contact' },
];

const popularCourses = [
  'Financial Accounting Fundamentals',
  'Sri Lankan Taxation',
  'Audit & Assurance',
  'Business Statistics',
  'Advanced Excel for Finance',
  'QuickBooks Training',
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer id="contact" style={{ backgroundColor: '#102A43' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top Row - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Brand */}
          <div className="reveal">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#0A3D91' }}
              >
                <span
                  className="font-bold text-lg"
                  style={{ color: '#F4B400', fontFamily: 'Poppins, sans-serif' }}
                >
                  F
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-[1rem] font-bold leading-tight text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  FINTELLECT
                </span>
                <span
                  className="text-[0.65rem] font-medium tracking-[2px] leading-tight"
                  style={{ color: '#F4B400', fontFamily: 'Inter, sans-serif' }}
                >
                  ACADEMY
                </span>
              </div>
            </div>

            <p
              className="text-[0.85rem] mb-5"
              style={{ color: 'rgba(255, 255, 255, 0.6)', fontFamily: 'Inter, sans-serif' }}
            >
              Finance Meets Intelligence
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[Facebook, Youtube, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#F4B400]"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  aria-label={`Social link ${i + 1}`}
                >
                  <Icon size={16} color="white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="reveal reveal-delay-1">
            <h4
              className="text-[0.9rem] font-semibold text-white mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.85rem] transition-all duration-300 hover:text-[#F4B400] hover:translate-x-1 inline-block"
                    style={{ color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Popular Courses */}
          <div className="reveal reveal-delay-2">
            <h4
              className="text-[0.9rem] font-semibold text-white mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Popular Courses
            </h4>
            <ul className="space-y-2.5">
              {popularCourses.map((course) => (
                <li key={course}>
                  <a
                    href="#courses"
                    className="text-[0.85rem] transition-colors duration-300 hover:text-[#F4B400]"
                    style={{ color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact & Newsletter */}
          <div className="reveal reveal-delay-3">
            <h4
              className="text-[0.9rem] font-semibold text-white mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contact Us
            </h4>

            <div className="space-y-3 mb-6">
              <p
                className="text-[0.85rem] font-medium"
                style={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Inter, sans-serif' }}
              >
                A.W. Akila Ranasinghe
              </p>
              <div className="flex items-center gap-2">
                <Phone size={14} style={{ color: 'rgba(255, 255, 255, 0.7)', flexShrink: 0 }} />
                <a
                  href="tel:0761891108"
                  className="text-[0.85rem] transition-colors duration-300 hover:text-[#F4B400]"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'Inter, sans-serif' }}
                >
                  076 189 1108
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} style={{ color: 'rgba(255, 255, 255, 0.7)', flexShrink: 0 }} />
                <a
                  href="mailto:avrranasinghe@gmail.com"
                  className="text-[0.85rem] transition-colors duration-300 hover:text-[#F4B400]"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'Inter, sans-serif' }}
                >
                  avrranasinghe@gmail.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5
                className="text-[0.85rem] font-semibold text-white mb-2.5"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Subscribe to Newsletter
              </h5>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3.5 py-2.5 text-[0.85rem] rounded-l-md outline-none text-white placeholder:text-[rgba(255,255,255,0.4)]"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    fontFamily: 'Inter, sans-serif',
                    border: 'none',
                  }}
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 text-[0.8rem] font-semibold rounded-r-md transition-colors duration-300 cursor-pointer"
                  style={{
                    backgroundColor: '#F4B400',
                    color: '#102A43',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#D9A000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#F4B400';
                  }}
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <p
            className="text-[0.8rem]"
            style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'Inter, sans-serif' }}
          >
            © 2025 FINTELLECT ACADEMY. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-[0.8rem] transition-colors duration-300 hover:text-[#F4B400]"
              style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'Inter, sans-serif' }}
            >
              Privacy Policy
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>·</span>
            <a
              href="#"
              className="text-[0.8rem] transition-colors duration-300 hover:text-[#F4B400]"
              style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'Inter, sans-serif' }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
