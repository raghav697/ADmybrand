import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { PricingSection } from "@/components/sections/pricing";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}
