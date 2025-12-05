import { X, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisons = [
  {
    aspect: "Atención al cliente",
    withoutAI: "Horario limitado (8am-6pm)",
    withAI: "Disponibilidad 24/7/365",
  },
  {
    aspect: "Tiempo de respuesta",
    withoutAI: "Minutos a horas",
    withAI: "Segundos instantáneos",
  },
  {
    aspect: "Capacidad de atención",
    withoutAI: "Limitada al personal",
    withAI: "Ilimitada y escalable",
  },
  {
    aspect: "Costo por interacción",
    withoutAI: "Alto (salarios, rotación)",
    withAI: "Mínimo (centavos)",
  },
  {
    aspect: "Consistencia",
    withoutAI: "Variable según el agente",
    withAI: "100% consistente siempre",
  },
  {
    aspect: "Procesamiento de datos",
    withoutAI: "Manual y propenso a errores",
    withAI: "Automático y preciso",
  },
  {
    aspect: "Escalabilidad",
    withoutAI: "Requiere más contrataciones",
    withAI: "Instantánea sin costo extra",
  },
  {
    aspect: "Análisis de clientes",
    withoutAI: "Básico o inexistente",
    withAI: "Profundo y en tiempo real",
  },
];

const Comparison = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            La Diferencia es Clara
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            <span className="text-muted-foreground">Sin IA</span> vs{" "}
            <span className="gradient-text">Con IA de GIXIA</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Compara cómo la inteligencia artificial transforma cada aspecto de tu operación empresarial.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden border border-border/50">
            {/* Header */}
            <div className="grid grid-cols-3 bg-secondary/50 p-4 border-b border-border/50">
              <div className="font-semibold text-sm">Aspecto</div>
              <div className="font-semibold text-sm text-center text-destructive">Sin IA</div>
              <div className="font-semibold text-sm text-center text-primary">Con IA</div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-4 items-center ${
                  index !== comparisons.length - 1 ? "border-b border-border/30" : ""
                } hover:bg-secondary/20 transition-colors`}
              >
                <div className="font-medium text-sm">{item.aspect}</div>
                <div className="flex items-center justify-center gap-2 text-center">
                  <X className="w-4 h-4 text-destructive shrink-0" />
                  <span className="text-sm text-muted-foreground">{item.withoutAI}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-center">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{item.withAI}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            ¿Listo para dar el salto a la automatización inteligente?
          </p>
          <Button variant="hero" size="lg" className="group">
            Transformar Mi Negocio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
