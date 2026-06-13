import { useState } from 'react';
import { CheckCircle, BookOpen, FileText, TrendingUp } from 'lucide-react';

interface Pathway {
  id: string;
  label: string;
  title: string;
  description: string;
  subjects: string[];
}

const pathways: Pathway[] = [
  {
    id: 'university',
    label: 'University Degree',
    title: 'University Degree Support',
    description:
      'Comprehensive support for undergraduate and postgraduate students in Accounting, Finance, and Business Administration degrees across Sri Lankan universities.',
    subjects: [
      'Higher Accounting (Advanced Financial & Management)',
      'Advanced Finance & Investment',
      'Advanced Statistics & Data Analysis',
      'Management Accounting (Strategic Level)',
      'Business Economics',
      'Research Methodology',
    ],
  },
  {
    id: 'professional',
    label: 'CA / CIMA / ACCA',
    title: 'CA Sri Lanka / CIMA / ACCA Preparation',
    description:
      'Structured preparation for Sri Lanka\'s most prestigious professional accounting qualifications. Aligned with the latest syllabi and examination standards.',
    subjects: [
      'Audit Standards & Practice (SLAuS/LKAS/IFRS)',
      'Strategic Risk Management',
      'Advanced Taxation (Income Tax, VAT, WHT)',
      'Corporate Reporting & Financial Analysis',
      'Business Strategy & Leadership',
      'Advanced Performance Management',
    ],
  },
  {
    id: 'aat',
    label: 'AAT / IBSL',
    title: 'AAT / IBSL Banking Qualifications',
    description:
      'Foundation and intermediate level preparation for AAT Sri Lanka and the Institute of Bankers. Building strong fundamentals for a career in accounting and banking.',
    subjects: [
      'Basic Accounting & Bookkeeping',
      'Sri Lankan Tax & VAT Fundamentals',
      'Business Mathematics & Statistics',
      'Banking Law & Practice',
      'Economics for Finance',
      'Business Communication',
    ],
  },
];

export default function ExamPathways() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="pathways" className="py-20 md:py-24" style={{ backgroundColor: '#F5F7FA' }}>
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p
            className="reveal text-[0.75rem] font-medium tracking-[3px] uppercase mb-3"
            style={{ color: '#F4B400', fontFamily: 'Inter, sans-serif' }}
          >
            Your Path to Success
          </p>
          <h2
            className="reveal reveal-delay-1 text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold mb-4"
            style={{ color: '#0A3D91', fontFamily: 'Poppins, sans-serif' }}
          >
            Exam Pathways Tailored For You
          </h2>
          <p
            className="reveal reveal-delay-2 text-[1rem] max-w-[600px] mx-auto leading-relaxed"
            style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}
          >
            Whether you're pursuing a university degree or a professional qualification, we have structured pathways to guide your success.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="reveal reveal-delay-2 flex justify-center mb-8">
          <div
            className="inline-flex rounded-full p-1 gap-1"
            style={{
              backgroundColor: 'white',
              border: '1px solid rgba(10, 61, 145, 0.1)',
              boxShadow: '0 4px 6px -1px rgba(10, 61, 145, 0.08), 0 2px 4px -2px rgba(10, 61, 145, 0.04)',
            }}
          >
            {pathways.map((pathway, index) => (
              <button
                key={pathway.id}
                onClick={() => setActiveTab(index)}
                className="px-5 md:px-7 py-3 rounded-full text-[0.8rem] md:text-[0.85rem] font-semibold transition-all duration-300 cursor-pointer"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  backgroundColor: activeTab === index ? '#0A3D91' : 'transparent',
                  color: activeTab === index ? 'white' : '#4A5568',
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== index) {
                    e.currentTarget.style.backgroundColor = 'rgba(10, 61, 145, 0.05)';
                    e.currentTarget.style.color = '#0A3D91';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== index) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#4A5568';
                  }
                }}
              >
                {pathway.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="reveal reveal-delay-3 relative">
          {pathways.map((pathway, index) => (
            <div
              key={pathway.id}
              className={`tab-panel ${activeTab === index ? 'active' : ''}`}
            >
              <div
                className="bg-white rounded-2xl p-6 md:p-10"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(10, 61, 145, 0.08), 0 2px 4px -2px rgba(10, 61, 145, 0.04)',
                }}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left Content */}
                  <div className="flex-1 md:w-[60%]">
                    <h3
                      className="text-[1.3rem] font-semibold mb-3"
                      style={{ color: '#0A3D91', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {pathway.title}
                    </h3>
                    <p
                      className="text-[1rem] leading-relaxed mb-6"
                      style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}
                    >
                      {pathway.description}
                    </p>

                    {/* Subject List */}
                    <div className="space-y-3">
                      {pathway.subjects.map((subject) => (
                        <div key={subject} className="flex items-start gap-3">
                          <CheckCircle
                            size={18}
                            style={{ color: '#00A86B', flexShrink: 0, marginTop: '2px' }}
                          />
                          <span
                            className="text-[0.9rem]"
                            style={{ color: '#1A202C', fontFamily: 'Inter, sans-serif' }}
                          >
                            {subject}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href="#courses"
                      className="inline-block mt-6 text-[0.85rem] font-semibold transition-all duration-300 hover:underline"
                      style={{ color: '#00A86B', fontFamily: 'Inter, sans-serif' }}
                    >
                      View Full Syllabus →
                    </a>
                  </div>

                  {/* Right Visual - Decorative Card Stack */}
                  <div className="hidden md:flex md:w-[40%] items-center justify-center">
                    <div className="relative w-full h-[240px]">
                      {/* Card 1 */}
                      <div
                        className="absolute top-4 left-4 w-[120px] h-[150px] rounded-xl flex flex-col items-center justify-center gap-2"
                        style={{
                          background: 'linear-gradient(135deg, #0A3D91 0%, #1E3A5F 100%)',
                          transform: 'rotate(-5deg)',
                          boxShadow: '0 8px 24px rgba(10, 61, 145, 0.25)',
                        }}
                      >
                        <BookOpen size={28} color="white" />
                        <span className="text-white text-[0.7rem] font-medium text-center px-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Study Notes
                        </span>
                      </div>
                      {/* Card 2 */}
                      <div
                        className="absolute top-2 left-[90px] w-[120px] h-[150px] rounded-xl flex flex-col items-center justify-center gap-2"
                        style={{
                          background: 'linear-gradient(135deg, #F4B400 0%, #D9A000 100%)',
                          transform: 'rotate(2deg)',
                          boxShadow: '0 8px 24px rgba(244, 180, 0, 0.25)',
                        }}
                      >
                        <FileText size={28} color="white" />
                        <span className="text-white text-[0.7rem] font-medium text-center px-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Past Papers
                        </span>
                      </div>
                      {/* Card 3 */}
                      <div
                        className="absolute top-6 left-[170px] w-[120px] h-[150px] rounded-xl flex flex-col items-center justify-center gap-2"
                        style={{
                          background: 'linear-gradient(135deg, #00A86B 0%, #008F5B 100%)',
                          transform: 'rotate(7deg)',
                          boxShadow: '0 8px 24px rgba(0, 168, 107, 0.25)',
                        }}
                      >
                        <TrendingUp size={28} color="white" />
                        <span className="text-white text-[0.7rem] font-medium text-center px-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Mock Exams
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
