import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    company: "Clínica Dental Premium",
    industry: "Salud",
    challenge: "Pérdida del 30% de citas por falta de confirmación y seguimiento manual ineficiente.",
    solution: "Bot de WhatsApp para confirmación automática, recordatorios y reagendamiento.",
    results: [
      "95% de citas confirmadas automáticamente",
      "Reducción del 80% en tiempo de recepción",
      "Aumento del 25% en citas mensuales",
    ],
  },
  {
    company: "AutoParts Express",
    industry: "E-commerce",
    challenge: "Alto volumen de consultas repetitivas saturando el equipo de ventas.",
    solution: "Asistente IA que responde consultas de stock, precios y compatibilidad 24/7.",
    results: [
      "3,000+ consultas atendidas por mes automáticamente",
      "Tiempo de respuesta de 5 segundos vs 2 horas",
      "40% más conversiones nocturnas",
    ],
  },
  {
    company: "Inmobiliaria Costa Este",
    industry: "Bienes Raíces",
    challenge: "Agentes perdían tiempo con prospectos no calificados.",
    solution: "Bot que pre-califica leads, muestra propiedades y agenda visitas solo con prospectos serios.",
    results: [
      "Calificación automática del 100% de leads",
      "70% reducción en tiempo de agentes",
      "2x más cierres por agente al mes",
    ],
  },
];

const UseCases = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Casos de Éxito
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 text-foreground">
            Resultados <span className="gradient-text">reales</span> de nuestros clientes
          </h2>
          <p className="text-muted-foreground text-lg">
            Empresas en República Dominicana ya están transformando sus operaciones con nuestras soluciones.
          </p>
        </div>

        {/* Use Cases */}
        <div className="space-y-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 md:p-10 border border-border card-shadow card-hover"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Company Info */}
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-4">
                    {useCase.industry}
                  </span>
                  <h3 className="text-2xl font-bold font-display mb-4 text-foreground">{useCase.company}</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-semibold text-destructive">Desafío:</span>
                      <p className="text-muted-foreground text-sm mt-1">{useCase.challenge}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary">Solución:</span>
                      <p className="text-muted-foreground text-sm mt-1">{useCase.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="lg:col-span-2">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Resultados Obtenidos
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {useCase.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="bg-secondary/50 rounded-xl p-5 border border-border"
                      >
                        <CheckCircle className="w-5 h-5 text-primary mb-3" />
                        <p className="text-sm font-medium text-foreground">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="group">
            Ver Más Casos de Éxito
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
