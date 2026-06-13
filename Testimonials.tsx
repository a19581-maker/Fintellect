import { useState, useEffect, useCallback } from 'react';
import { BookOpen, Scale, BarChart3, Clock, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'FINTELLECT completely transformed my approach to studying for my CIMA exams. The micro-learning videos made complex topics so much easier to understand.',
    name: 'Dinesh Perera',
    detail: 'CIMA Student',
    initial: 'D',
  },
  {
    quote: 'The practical Excel and QuickBooks training gave me the confidence to secure my first job at a leading audit firm in Colombo.',
    name: 'Tharushi Silva',
    detail: 'AAT Graduate',
    initial: 'T',
  },
  {
    quote: 'Having access to both Sinhala explanations and English terminology helped me bridge the gap between my university studies and professional requirements.',
    name: 'Chamod Fernando',
    detail: 'University Undergraduate',
    initial: 'C',
  },
];

const latestCourses = [
  {
    icon: BookOpen,
    iconBg: '#0A3D91',
    name: 'Advanced Financial Reporting (LKAS/IFRS)',
    category: 'Accounting',
    duration: '24 hours',
  },
  {
    icon: Scale,
    iconBg: '#00A86B',
    name: 'Sri Lankan Income Tax Masterclass',
    category: 'Taxation',
    duration: '18 hours',
  },
  {
    icon: BarChart3,
    iconBg: '#F4B400',
    name: 'Business Statistics & Data Analysis',
    category: 'Quantitative',
    duration: '20 hours',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, goNext]);

  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: '#F5F7FA' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12">
          {/* Testimonials Column */}
          <div className="lg:w-1/2">
            <p
              className="reveal text-[0.7rem] font-medium tracking-[2px] uppercase mb-2"
              style={{ color: '#F4B400', fontFamily: 'Inter, sans-serif' }}
            >
              Student Stories
            </p>
            <h2
              className="reveal reveal-delay-1 text-[1.5rem] font-bold mb-8"
              style={{ color: '#0A3D91', fontFamily: 'Poppins, sans-serif' }}
            >
              What Our Students Say
            </h2>

            {/* Testimonial Carousel */}
            <div className="reveal reveal-delay-2 relative">
              <div className="relative overflow-hidden" style={{ minHeight: '220px' }}>
                {testimonials.map((t, i) => (
                  <div
                    key={t.name}
                    className="transition-opacity duration-500 absolute w-full"
                    style={{
                      opacity: activeIndex === i ? 1 : 0,
                      position: activeIndex === i ? 'relative' : 'absolute',
                    }}
                  >
                    <div
                      className="bg-white rounded-xl p-7 relative"
                      style={{
                        boxShadow: '0 4px 6px -1px rgba(10, 61, 145, 0.08), 0 2px 4px -2px rgba(10, 61, 145, 0.04)',
                      }}
                    >
                      {/* Quote Icon */}
                      <Quote
                        size={40}
                        className="absolute top-4 left-4 opacity-10"
                        style={{ color: '#0A3D91' }}
                      />

                      {/* Quote Text */}
                      <p
                        className="text-[0.95rem] italic leading-relaxed relative z-10 pt-6"
                        style={{ color: '#1A202C', fontFamily: 'Inter, sans-serif' }}
                      >
                        "{t.quote}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 mt-5">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: 'linear-gradient(135deg, #0A3D91 0%, #1E3A5F 100%)',
                          }}
                        >
                          <span
                            className="text-white text-sm font-semibold"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          >
                            {t.initial}
                          </span>
                        </div>
                        <div>
                          <p
                            className="text-[0.9rem] font-semibold"
                            style={{ color: '#102A43', fontFamily: 'Inter, sans-serif' }}
                          >
                            {t.name}
                          </p>
                          <p
                            className="text-[0.8rem]"
                            style={{ color: '#718096', fontFamily: 'Inter, sans-serif' }}
                          >
                            {t.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-5">
                {/* Dots */}
                <div className="flex gap-2" aria-live="polite">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
                      style={{
                        backgroundColor: activeIndex === i ? '#0A3D91' : 'rgba(10, 61, 145, 0.2)',
                        transform: activeIndex === i ? 'scale(1.3)' : 'scale(1)',
                      }}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={goPrev}
                    className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 hover:bg-[#0A3D91] hover:text-white cursor-pointer"
                    style={{ borderColor: 'rgba(10, 61, 145, 0.15)', color: '#0A3D91' }}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={goNext}
                    className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 hover:bg-[#0A3D91] hover:text-white cursor-pointer"
                    style={{ borderColor: 'rgba(10, 61, 145, 0.15)', color: '#0A3D91' }}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Courses Column */}
          <div className="lg:w-1/2">
            <p
              className="reveal text-[0.7rem] font-medium tracking-[2px] uppercase mb-2"
              style={{ color: '#F4B400', fontFamily: 'Inter, sans-serif' }}
            >
              New on the Platform
            </p>
            <h2
              className="reveal reveal-delay-1 text-[1.5rem] font-bold mb-8"
              style={{ color: '#0A3D91', fontFamily: 'Poppins, sans-serif' }}
            >
              Latest Courses
            </h2>

            {/* Course Cards */}
            <div className="space-y-4">
              {latestCourses.map((course, i) => (
                <div
                  key={course.name}
                  className={`reveal reveal-delay-${i + 2} card-hover bg-white rounded-xl p-4 md:p-5 flex items-center gap-4 border cursor-pointer`}
                  style={{
                    borderColor: 'rgba(10, 61, 145, 0.06)',
                    boxShadow: '0 4px 6px -1px rgba(10, 61, 145, 0.04), 0 2px 4px -2px rgba(10, 61, 145, 0.02)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: course.iconBg }}
                  >
                    <course.icon size={22} color="white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4
                      className="text-[0.9rem] font-semibold truncate"
                      style={{ color: '#102A43', fontFamily: 'Inter, sans-serif' }}
                    >
                      {course.name}
                    </h4>
                    <p
                      className="text-[0.75rem] mt-0.5"
                      style={{ color: '#718096', fontFamily: 'Inter, sans-serif' }}
                    >
                      {course.category}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock size={12} style={{ color: '#718096' }} />
                      <span
                        className="text-[0.75rem]"
                        style={{ color: '#718096', fontFamily: 'Inter, sans-serif' }}
                      >
                        {course.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
