import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Transformación Digital con IA en República Dominicana
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Automatiza tu negocio con{" "}
            <span className="gradient-text">Inteligencia Artificial</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Implementamos soluciones de IA, automatización y bots inteligentes que 
            reducen costos hasta un <span className="text-foreground font-semibold">70%</span>, 
            aumentan ventas y transforman la experiencia de tus clientes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="group">
              Solicitar Cotización
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Agenda una Demo Gratis
            </Button>
          </div>

          {/* Slogan */}
          <p className="text-sm text-muted-foreground mb-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            ✦ Innovación que impulsa resultados reales ✦
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {[
              { value: "+150", label: "Clientes Satisfechos" },
              { value: "70%", label: "Reducción de Costos" },
              { value: "24/7", label: "Atención Automatizada" },
              { value: "3x", label: "Aumento en Ventas" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-display gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-10 hidden lg:block animate-float">
          <div className="glass-card p-4 rounded-xl">
            <Bot className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-32 right-10 hidden lg:block animate-float" style={{ animationDelay: "2s" }}>
          <div className="glass-card p-4 rounded-xl">
            <Zap className="w-8 h-8 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
