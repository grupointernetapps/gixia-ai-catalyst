import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroAi from "@/assets/hero-ai.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroAi} 
          alt="Inteligencia Artificial y Automatización"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-180px)] py-16 lg:py-24">
          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Transformación Digital con IA 2025
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight animate-fade-up text-foreground" style={{ animationDelay: "0.1s" }}>
              Automatiza tu negocio con{" "}
              <span className="gradient-text">Inteligencia Artificial</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Implementamos soluciones de IA, automatización y bots inteligentes que 
              reducen costos hasta un <span className="text-foreground font-semibold">70%</span>, 
              aumentan ventas y transforman la experiencia de tus clientes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" className="group">
                Solicitar Cotización
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "+150", label: "Clientes" },
                { value: "70%", label: "Ahorro" },
                { value: "24/7", label: "Soporte" },
                { value: "3x", label: "Ventas" },
              ].map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-2xl md:text-3xl font-bold font-display text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Empty for image background to show through */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
