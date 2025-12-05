import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    description: "Ideal para pequeñas empresas que inician su transformación digital",
    price: "497",
    period: "/mes",
    popular: false,
    features: [
      "1 Bot de WhatsApp básico",
      "Hasta 1,000 conversaciones/mes",
      "Respuestas automáticas 24/7",
      "Integración básica con CRM",
      "Panel de métricas simple",
      "Soporte por email",
      "Configuración inicial incluida",
    ],
    cta: "Comenzar Ahora",
  },
  {
    name: "Pro",
    description: "Para empresas en crecimiento que buscan automatización avanzada",
    price: "997",
    period: "/mes",
    popular: true,
    features: [
      "Todo de Starter, más:",
      "3 Bots de WhatsApp avanzados",
      "Hasta 5,000 conversaciones/mes",
      "IA con GPT-4 integrado",
      "Automatizaciones low-code",
      "Integraciones API personalizadas",
      "Analytics avanzado + reportes",
      "Soporte prioritario 24/7",
      "Entrenamiento de equipo",
    ],
    cta: "Elegir Pro",
  },
  {
    name: "Enterprise",
    description: "Soluciones personalizadas para grandes empresas y corporativos",
    price: "Personalizado",
    period: "",
    popular: false,
    features: [
      "Todo de Pro, más:",
      "Bots ilimitados",
      "Conversaciones ilimitadas",
      "Agentes autónomos de IA",
      "Integraciones enterprise (ERP, SAP)",
      "Infraestructura dedicada",
      "SLA garantizado 99.9%",
      "Gerente de cuenta dedicado",
      "Desarrollo a medida",
      "Consultoría estratégica incluida",
    ],
    cta: "Contactar Ventas",
  },
];

const Pricing = () => {
  return (
    <section id="precios" className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Planes y Precios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 text-foreground">
            Inversión que <span className="gradient-text">se paga sola</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Planes flexibles diseñados para cada etapa de tu negocio. Sin contratos a largo plazo.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                plan.popular
                  ? "bg-primary text-primary-foreground scale-105 lg:scale-110 shadow-xl"
                  : "bg-card border border-border card-shadow card-hover"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 bg-background rounded-full text-primary text-sm font-semibold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Más Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold font-display mb-2 ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.price !== "Personalizado" && (
                    <span className={`text-2xl ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>US$</span>
                  )}
                  <span className={`text-5xl font-bold font-display ${plan.popular ? "text-primary-foreground" : "gradient-text"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={`text-sm ${plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "secondary" : "hero"}
                className={`w-full ${plan.popular ? "bg-background text-primary hover:bg-background/90" : ""}`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Todos los planes incluyen configuración inicial gratuita y garantía de satisfacción de 30 días.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
