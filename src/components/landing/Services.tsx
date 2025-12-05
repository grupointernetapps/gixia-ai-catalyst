import { Brain, MessageSquare, Workflow, Users, Plug, Bot } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Implementación de IA",
    description: "Integramos modelos de inteligencia artificial personalizados en tus procesos empresariales para automatizar decisiones y análisis complejos.",
    features: ["GPT-4 / Claude", "Procesamiento de documentos", "Análisis predictivo"],
  },
  {
    icon: MessageSquare,
    title: "Bots y Asistentes WhatsApp",
    description: "Chatbots inteligentes que atienden clientes, responden preguntas, agendan citas y cierran ventas automáticamente por WhatsApp.",
    features: ["Respuestas 24/7", "Lenguaje natural", "Integraciones CRM"],
  },
  {
    icon: Workflow,
    title: "Automatizaciones Low-Code",
    description: "Flujos de trabajo automatizados sin necesidad de programación compleja. Conecta tus herramientas y elimina tareas manuales.",
    features: ["Make / n8n / Zapier", "Sin código complejo", "Implementación rápida"],
  },
  {
    icon: Users,
    title: "Consultoría Empresarial",
    description: "Análisis estratégico de tus procesos para identificar oportunidades de automatización e implementar soluciones de alto impacto.",
    features: ["Diagnóstico profundo", "Roadmap personalizado", "ROI garantizado"],
  },
  {
    icon: Plug,
    title: "Integraciones con Sistemas",
    description: "Conectamos tu ecosistema digital: ERP, CRM, e-commerce, facturación y más. Todo trabajando en sincronía perfecta.",
    features: ["APIs personalizadas", "Sincronización en tiempo real", "Migración de datos"],
  },
  {
    icon: Bot,
    title: "Agentes Autónomos",
    description: "IA que trabaja por ti. Agentes inteligentes que ejecutan tareas complejas de forma autónoma: investigación, análisis y ejecución.",
    features: ["Ejecución autónoma", "Multi-herramienta", "Aprendizaje continuo"],
  },
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Servicios Principales
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 text-foreground">
            Soluciones de <span className="gradient-text">IA empresarial</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Desde implementaciones simples hasta transformaciones completas. 
            Adaptamos la tecnología a las necesidades únicas de tu empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border card-shadow card-hover overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold font-display mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
