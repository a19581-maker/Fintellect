import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroBanner() {
  const [scrollY, setScrollY] = useState(0);
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowIndicator(window.scrollY < 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ minHeight: '600px' }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 hero-parallax"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <img
          src="/hero-bg.jpg"
          alt="Professional finance educator in modern office"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(10, 61, 145, 0.92) 0%, rgba(16, 42, 67, 0.88) 50%, rgba(10, 61, 145, 0.85) 100%)',
        }}
      />

      {/* Diagonal clip overlay for desktop */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background: 'linear-gradient(135deg, rgba(10, 61, 145, 0.95) 0%, rgba(16, 42, 67, 0.9) 55%, transparent 55%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="max-w-[600px]">
          {/* Eyebrow */}
          <p
            className="hero-animate-1 text-[0.7rem] font-medium tracking-[3px] uppercase mb-6"
            style={{ color: '#F4B400', fontFamily: 'Inter, sans-serif' }}
          >
            Sri Lanka's Premier Finance Education Platform
          </p>

          {/* Headline */}
          <h1
            className="hero-animate-2 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] mb-6 text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Master Accounting, Finance &amp; Professional Skills in One Place
          </h1>

          {/* Subheadline */}
          <p
            className="hero-animate-3 text-[1rem] md:text-[1.1rem] leading-relaxed mb-8 max-w-[520px]"
            style={{ color: 'rgba(255, 255, 255, 0.85)', fontFamily: 'Inter, sans-serif' }}
          >
            Learn through expert-led video lessons, interactive quizzes, comprehensive notes, and real-world practical training designed for Sri Lankan students and professionals.
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate-4 flex flex-wrap gap-4 mb-12">
            <a
              href="#courses"
              className="inline-flex items-center px-8 py-4 rounded-lg text-[1rem] font-semibold text-white transition-all duration-300 hover:-translate-y-[2px]"
              style={{
                backgroundColor: '#00A86B',
                fontFamily: 'Poppins, sans-serif',
                boxShadow: '0 4px 20px rgba(0, 168, 107, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#008F5B';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 168, 107, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#00A86B';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 168, 107, 0.4)';
              }}
            >
              Start Learning — It's Free
            </a>
            <a
              href="#courses"
              className="inline-flex items-center px-8 py-4 rounded-lg text-[1rem] font-semibold border-2 transition-all duration-300"
              style={{
                borderColor: '#F4B400',
                color: '#F4B400',
                fontFamily: 'Poppins, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(244, 180, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Explore Courses
            </a>
          </div>

          {/* Stats Row */}
          <div className="hero-animate-5 flex flex-wrap gap-8 md:gap-12">
            {[
              { number: '5,000+', label: 'Students Enrolled' },
              { number: '120+', label: 'Video Courses' },
              { number: '50,000+', label: 'Practice Questions' },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-[1.6rem] md:text-[1.8rem] font-bold"
                  style={{ color: '#F4B400', fontFamily: 'Poppins, sans-serif' }}
                >
                  {stat.number}
                </p>
                <p
                  className="text-[0.8rem]"
                  style={{ color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'Inter, sans-serif' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard Mockup - Desktop Only */}
      <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-10 w-[45%] max-w-[580px]">
        <div className="hero-animate-6 float-animation">
          <img
            src="/dashboard-mockup.png"
            alt="Financial learning dashboard preview"
            className="w-full h-auto rounded-2xl shadow-2xl"
            style={{
              boxShadow: '0 25px 60px rgba(10, 61, 145, 0.3)',
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-500"
        style={{ opacity: showIndicator ? 1 : 0 }}
      >
        <div className="bounce-indicator">
          <ChevronDown size={28} style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
        </div>
      </div>
    </section>
  );
}
