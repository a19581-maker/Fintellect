import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navbar from '../sections/Navbar';
import HeroBanner from '../sections/HeroBanner';
import FeaturedCategories from '../sections/FeaturedCategories';
import ExamPathways from '../sections/ExamPathways';
import WhyChoose from '../sections/WhyChoose';
import SuccessMetrics from '../sections/SuccessMetrics';
import Testimonials from '../sections/Testimonials';
import Footer from '../sections/Footer';

export default function Home() {
  useScrollAnimation(0.15);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroBanner />
        <FeaturedCategories />
        <ExamPathways />
        <WhyChoose />
        <SuccessMetrics />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
