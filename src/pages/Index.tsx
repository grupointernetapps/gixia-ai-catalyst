import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import Services from "@/components/landing/Services";
import Solutions from "@/components/landing/Solutions";
import UseCases from "@/components/landing/UseCases";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import Comparison from "@/components/landing/Comparison";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Solutions />
        <UseCases />
        <Testimonials />
        <Pricing />
        <Comparison />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
