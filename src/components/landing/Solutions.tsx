import { Store, Building2, Stethoscope, Scale, GraduationCap, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Store,
    title: "Bot para Empresas",
    subtitle: "Ventas, Soporte y Reservas",
    description: "Asistente virtual completo que maneja consultas, cierra ventas y gestiona reservas automáticamente.",
    color: "from-blue-500 to-cyan-500",
    features: ["Catálogo de productos", "Carrito de compras", "Agenda automatizada", "Seguimiento post-venta"],
  },
  {
    icon: Building2,
    title: "Bot Inmobiliario",
    subtitle: "Bienes Raíces Inteligente",
    description: "Califica prospectos, muestra propiedades, agenda visitas y da seguimiento a compradores potenciales.",
    color: "from-emerald-500 to-teal-500",
    features: ["Filtros de búsqueda", "Tours virtuales", "Pre-calificación", "CRM integrado"],
  },
  {
    icon: Stethoscope,
    title: "Bot para Clínicas",
    subtitle: "Sector Salud",
    description: "Gestiona citas médicas, envía recordatorios, responde preguntas frecuentes y maneja emergencias.",
    color: "from-rose-500 to-pink-500",
    features: ["Agenda médica", "Recordatorios SMS", "Historial de citas", "Triaje básico"],
  },
  {
    icon: Scale,
    title: "Bot Legal",
    subtitle: "Bufetes y Abogados",
    description: "Atiende consultas legales iniciales, agenda reuniones y clasifica casos por área de práctica.",
    color: "from-amber-500 to-orange-500",
    features: ["Consultas iniciales", "Clasificación de casos", "Documentos automáticos", "Seguimiento"],
  },
  {
    icon: GraduationCap,
    title: "Bot Académico",
    subtitle: "Instituciones Educativas",
    description: "Responde consultas de admisión, información de cursos, horarios y procesos de inscripción.",
    color: "from-violet-500 to-purple-500",
    features: ["Info de programas", "Proceso de inscripción", "Calendario académico", "Soporte estudiantil"],
  },
  {
    icon: ShoppingCart,
    title: "Bot E-commerce",
    subtitle: "Tiendas Online",
    description: "Asistente de compras que recomienda productos, procesa pedidos y maneja devoluciones.",
    color: "from-cyan-500 to-blue-500",
    features: ["Recomendaciones IA", "Tracking de pedidos", "Devoluciones", "Upselling automático"],
  },
];

const Solutions = () => {
  return (
    <section id="soluciones" className="py-24 relative bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Plantillas IA Listas para Usar
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Soluciones <span className="gradient-text">por industria</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Bots pre-configurados para tu sector. Implementación en días, no meses. 
            Personalización completa incluida.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500"
            >
              {/* Top Gradient Bar */}
              <div className={`h-1 bg-gradient-to-r ${solution.color}`} />
              
              <div className="p-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <solution.icon className="w-7 h-7 text-white" />
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">{solution.subtitle}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.color}`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                  Ver Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿No ves tu industria? Creamos soluciones personalizadas.
          </p>
          <Button variant="hero" size="lg">
            Solicitar Solución Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
