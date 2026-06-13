import { useEffect } from 'react';

export function useScrollAnimation(threshold = 0.15) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);
}

export function useNavbarScroll() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 1px 3px rgba(10, 61, 145, 0.1)';
      } else {
        navbar.classList.remove('scrolled');
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

export function useCounterAnimation(
  targetValues: { target: number; suffix: string }[],
  sectionId: string
) {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const counters = section.querySelectorAll('.counter-value');
    let hasAnimated = false;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const animateCounter = (
      element: Element,
      target: number,
      suffix: string,
      duration: number
    ) => {
      const startTime = performance.now();

      const update = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuart(progress);
        const current = Math.floor(eased * target);

        element.textContent = current.toLocaleString() + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            counters.forEach((counter, index) => {
              if (targetValues[index]) {
                setTimeout(() => {
                  animateCounter(
                    counter,
                    targetValues[index].target,
                    targetValues[index].suffix,
                    2000
                  );
                }, index * 200);
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [targetValues, sectionId]);
}
