import { Play, Brain, Download, Clock, MessageCircle, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Play,
    title: 'Micro-Learning Videos',
    description: 'Bite-sized 10-15 minute video lessons designed for maximum retention. Learn at your own pace, anytime, anywhere.',
  },
  {
    icon: Brain,
    title: 'Interactive Quizzes',
    description: 'Instant MCQ assessments with detailed explanations. Track your progress and identify areas for improvement.',
  },
  {
    icon: Download,
    title: 'Downloadable Resources',
    description: 'Short notes, mind maps, and comprehensive PDF guides. Study offline with professionally curated materials.',
  },
  {
    icon: Clock,
    title: 'Exam Simulation',
    description: 'Timed mock exams and past paper discussions. Build confidence with realistic exam conditions.',
  },
  {
    icon: MessageCircle,
    title: 'Community Forums',
    description: 'Engage with fellow students and instructors. Ask questions, share insights, and learn collaboratively.',
  },
  {
    icon: TrendingUp,
    title: 'AI-Powered Assistant',
    description: 'Guided by FinBot — your friendly AI finance assistant. Get instant answers to your accounting and finance questions.',
  },
];

export default function WhyChoose() {
  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="reveal text-[0.75rem] font-medium tracking-[3px] uppercase mb-3"
            style={{ color: '#F4B400', fontFamily: 'Inter, sans-serif' }}
          >
            Why Fintellect
          </p>
          <h2
            className="reveal reveal-delay-1 text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold mb-4"
            style={{ color: '#0A3D91', fontFamily: 'Poppins, sans-serif' }}
          >
            The FINTELLECT Advantage
          </h2>
          <p
            className="reveal reveal-delay-2 text-[1rem] max-w-[550px] mx-auto leading-relaxed"
            style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}
          >
            We combine cutting-edge technology with expert instruction to deliver an unmatched learning experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-hover relative bg-white rounded-xl p-7 border overflow-hidden group`}
              style={{ borderColor: 'rgba(10, 61, 145, 0.08)' }}
              onMouseEnter={(e) => {
                const bar = e.currentTarget.querySelector('.accent-bar') as HTMLElement;
                if (bar) bar.style.width = '6px';
              }}
              onMouseLeave={(e) => {
                const bar = e.currentTarget.querySelector('.accent-bar') as HTMLElement;
                if (bar) bar.style.width = '4px';
              }}
            >
              {/* Left Accent Bar */}
              <div
                className="accent-bar absolute left-0 top-0 bottom-0 rounded-r-sm transition-all duration-300"
                style={{ width: '4px', backgroundColor: '#F4B400' }}
              />

              {/* Icon */}
              <div
                className="w-10 h-10 flex items-center justify-center mb-4"
              >
                <feature.icon
                  size={28}
                  style={{ color: '#0A3D91' }}
                  strokeWidth={1.8}
                />
              </div>

              {/* Title */}
              <h3
                className="text-[1rem] font-semibold mb-2"
                style={{ color: '#102A43', fontFamily: 'Inter, sans-serif' }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="text-[0.875rem] leading-relaxed"
                style={{ color: '#4A5568', fontFamily: 'Inter, sans-serif' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
