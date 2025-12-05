import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María Fernández",
    role: "CEO",
    company: "Clínica Dental Sonrisa",
    initials: "MF",
    content: "GIXIA transformó nuestra gestión de citas por completo. Antes perdíamos horas confirmando citas manualmente. Ahora nuestro bot hace todo automáticamente y nuestros pacientes están encantados con la rapidez.",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "Director Comercial",
    company: "AutoPartes del Caribe",
    initials: "CR",
    content: "Implementamos el bot de ventas hace 6 meses y los resultados superaron nuestras expectativas. Atendemos el triple de consultas con el mismo equipo y las ventas nocturnas aumentaron un 40%.",
    rating: 5,
  },
  {
    name: "Laura Méndez",
    role: "Gerente General",
    company: "Inmobiliaria Costa Azul",
    initials: "LM",
    content: "El bot inmobiliario pre-califica leads las 24 horas. Mis agentes ahora solo trabajan con prospectos serios. Duplicamos los cierres mensuales mientras reducimos las horas de trabajo.",
    rating: 5,
  },
  {
    name: "Roberto Santana",
    role: "Fundador",
    company: "TechStore RD",
    initials: "RS",
    content: "La integración con nuestro e-commerce fue impecable. El asistente IA responde preguntas sobre productos, disponibilidad y hasta procesa pedidos. Una inversión que se pagó sola en 2 meses.",
    rating: 5,
  },
  {
    name: "Ana Patricia Gómez",
    role: "Directora",
    company: "Academia Digital Plus",
    initials: "AG",
    content: "El bot académico maneja todas las consultas de admisión y nos liberó para enfocarnos en lo importante: la educación. El proceso de inscripción ahora es 100% automatizado.",
    rating: 5,
  },
  {
    name: "José Miguel Torres",
    role: "Socio Fundador",
    company: "Bufete Torres & Asociados",
    initials: "JT",
    content: "Dudaba que un bot pudiera manejar consultas legales, pero GIXIA lo logró. Filtra casos, agenda consultas y nuestros abogados reciben expedientes pre-clasificados. Increíble.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 text-foreground">
            Lo que dicen <span className="gradient-text">nuestros clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Empresas reales, resultados reales. Descubre cómo hemos ayudado a transformar negocios en toda la región.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border card-shadow card-hover flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
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

export default Testimonials;
