import { BookOpen, Scale, BarChart3, Globe, Code } from 'lucide-react';

const categories = [
  {
    icon: BookOpen,
    title: 'Accounting & Financial Management',
    sinhala: 'ගිණුම්කරණය හා මුල්‍ය කළමනාකරණය',
    topics: 'Financial Accounting (Double Entry to LKAS/IFRS), Management Accounting (Costing, Budgeting), Corporate Finance',
  },
  {
    icon: Scale,
    title: 'Audit, Tax & Compliance',
    sinhala: 'විධිමත් තත්ත්ව පරීක්ෂණය, බදු හා අනුකූලතාව',
    topics: 'Auditing & Assurance (SLAuS), Sri Lankan Taxation (Income Tax, WHT), VAT & SSCL (RAMIS system), Corporate & Commercial Law',
  },
  {
    icon: BarChart3,
    title: 'Quantitative & Analytical Skills',
    sinhala: 'ප්‍රමාණාත්මක හා විශ්ලේෂණාත්මක කුසලතා',
    topics: 'Business Mathematics, Business Statistics (Probability, Hypothesis Testing), Risk Management',
  },
  {
    icon: Globe,
    title: 'Professional & Language Skills',
    sinhala: 'වෘත්තීය හා භාෂා කුසලතා',
    topics: 'Business English (Email Etiquette, Report Writing), Professional Communication for Case Studies',
  },
  {
    icon: Code,
    title: 'Practical Software Skills',
    sinhala: 'ප්‍රායෝගික මෘදුකාංග කුසලතා',
    topics: 'Accounting Software (QuickBooks, Sage, Xero), Advanced Excel for Finance',
  },
];

export default function FeaturedCategories() {
  return (
    <section id="courses" className="py-20 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="reveal text-[0.75rem] font-medium tracking-[3px] uppercase mb-3"
            style={{ color: '#F4B400', fontFamily: 'Inter, sans-serif' }}
          >
            What We Offer
          </p>
          <h2
            className="reveal reveal-delay-1 text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold mb-4"
            style={{ color: '#0A3D91', fontFamily: 'Poppins, sans-serif' }}
          >
            Comprehensive Learning Categories
          </h2>
          <p
            className="reveal reveal-delay-2 text-[1rem] max-w-[600px] mx-auto leading-relaxed"
            style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}
          >
            From foundational accounting to advanced professional skills — everything you need to excel in finance.
          </p>
        </div>

        {/* Grid: 3+2 layout on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal reveal-delay-${i + 1} card-hover group bg-white rounded-xl p-8 text-center border cursor-pointer`}
              style={{ borderColor: 'rgba(10, 61, 145, 0.08)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10, 61, 145, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10, 61, 145, 0.08)';
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:bg-[rgba(244,180,0,0.1)]"
                style={{ backgroundColor: 'rgba(10, 61, 145, 0.06)' }}
              >
                <cat.icon
                  size={26}
                  className="transition-colors duration-300"
                  style={{ color: '#0A3D91' }}
                  strokeWidth={1.8}
                />
              </div>

              {/* Title */}
              <h3
                className="text-[1.1rem] font-semibold mb-2"
                style={{ color: '#102A43', fontFamily: 'Inter, sans-serif' }}
              >
                {cat.title}
              </h3>

              {/* Sinhala */}
              <p
                className="text-[0.85rem] italic mb-3"
                style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}
              >
                {cat.sinhala}
              </p>

              {/* Topics */}
              <p
                className="text-[0.8rem] leading-relaxed"
                style={{ color: '#718096', fontFamily: 'Inter, sans-serif' }}
              >
                {cat.topics}
              </p>
            </div>
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-[66%] mx-auto">
          {categories.slice(3).map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal reveal-delay-${i + 4} card-hover group bg-white rounded-xl p-8 text-center border cursor-pointer`}
              style={{ borderColor: 'rgba(10, 61, 145, 0.08)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10, 61, 145, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(10, 61, 145, 0.08)';
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:bg-[rgba(244,180,0,0.1)]"
                style={{ backgroundColor: 'rgba(10, 61, 145, 0.06)' }}
              >
                <cat.icon
                  size={26}
                  className="transition-colors duration-300"
                  style={{ color: '#0A3D91' }}
                  strokeWidth={1.8}
                />
              </div>

              {/* Title */}
              <h3
                className="text-[1.1rem] font-semibold mb-2"
                style={{ color: '#102A43', fontFamily: 'Inter, sans-serif' }}
              >
                {cat.title}
              </h3>

              {/* Sinhala */}
              <p
                className="text-[0.85rem] italic mb-3"
                style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}
              >
                {cat.sinhala}
              </p>

              {/* Topics */}
              <p
                className="text-[0.8rem] leading-relaxed"
                style={{ color: '#718096', fontFamily: 'Inter, sans-serif' }}
              >
                {cat.topics}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
