import { useCounterAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { target: 5000, suffix: '+', label: 'Students Enrolled' },
  { target: 120, suffix: '+', label: 'Video Courses' },
  { target: 50000, suffix: '+', label: 'Practice Questions' },
  { target: 98, suffix: '%', label: 'Success Rate' },
];

export default function SuccessMetrics() {
  useCounterAnimation(
    stats.map((s) => ({ target: s.target, suffix: s.suffix })),
    'success-metrics'
  );

  return (
    <section
      id="resources"
      className="py-14 md:py-16"
      style={{
        background: 'linear-gradient(135deg, #0A3D91 0%, #102A43 100%)',
      }}
    >
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8" id="success-metrics">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`reveal reveal-delay-${index + 1} text-center relative`}
            >
              {/* Divider */}
              {index < stats.length - 1 && (
                <div
                  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12"
                  style={{
                    width: '1px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  }}
                />
              )}

              <p
                className="counter-value text-[clamp(2rem,4vw,3rem)] font-bold"
                style={{ color: '#F4B400', fontFamily: 'Poppins, sans-serif' }}
              >
                0{stat.suffix}
              </p>
              <p
                className="text-[0.85rem] md:text-[0.9rem] mt-1"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
