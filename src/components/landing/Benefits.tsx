import { Clock, DollarSign, TrendingUp, Users, Headphones, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Ahorro de Tiempo",
    description: "Automatiza tareas repetitivas y libera hasta 40 horas semanales de tu equipo para actividades estratégicas.",
    metric: "40+ hrs/semana",
  },
  {
    icon: DollarSign,
    title: "Reducción de Costos",
    description: "Minimiza gastos operativos con automatización inteligente que reemplaza procesos manuales costosos.",
    metric: "Hasta 70%",
  },
  {
    icon: TrendingUp,
    title: "Mayor Eficiencia",
    description: "Procesos optimizados que funcionan 24/7 sin errores humanos y con tiempos de respuesta instantáneos.",
    metric: "3x más rápido",
  },
  {
    icon: Users,
    title: "Mejor Experiencia",
    description: "Clientes más satisfechos con respuestas inmediatas, personalizadas y disponibles en cualquier momento.",
    metric: "+95% satisfacción",
  },
  {
    icon: Headphones,
    title: "Soporte Continuo",
    description: "Atención al cliente automatizada que nunca duerme, respondiendo consultas y cerrando ventas 24/7.",
    metric: "24/7 disponible",
  },
  {
    icon: Shield,
    title: "Escalabilidad Segura",
    description: "Crece sin límites. Nuestras soluciones escalan con tu negocio manteniendo seguridad empresarial.",
    metric: "100% seguro",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Beneficios Clave
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 text-foreground">
            Resultados <span className="gradient-text">medibles</span> para tu negocio
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada implementación está diseñada para generar impacto real y retorno de inversión comprobable.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl border border-border card-shadow card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {benefit.metric}
                  </span>
                  <h3 className="text-xl font-bold font-display mt-1 mb-2 text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
