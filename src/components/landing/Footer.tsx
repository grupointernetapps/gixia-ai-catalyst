import { Facebook, Instagram, Linkedin, Twitter, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { label: "Implementación IA", href: "#servicios" },
      { label: "Bots WhatsApp", href: "#servicios" },
      { label: "Automatizaciones", href: "#servicios" },
      { label: "Consultoría", href: "#servicios" },
      { label: "Integraciones", href: "#servicios" },
    ],
    solutions: [
      { label: "Bot Empresarial", href: "#soluciones" },
      { label: "Bot Inmobiliario", href: "#soluciones" },
      { label: "Bot para Clínicas", href: "#soluciones" },
      { label: "Bot Legal", href: "#soluciones" },
      { label: "Bot E-commerce", href: "#soluciones" },
    ],
    company: [
      { label: "Sobre Nosotros", href: "#" },
      { label: "Casos de Éxito", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carreras", href: "#" },
      { label: "Contacto", href: "#contacto" },
    ],
    legal: [
      { label: "Términos de Servicio", href: "#" },
      { label: "Política de Privacidad", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl font-display">G</span>
              </div>
              <span className="text-xl font-bold font-display">
                GIXIA<span className="text-primary">.do</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Transformamos empresas en República Dominicana y Latinoamérica con soluciones de 
              inteligencia artificial, automatización y bots inteligentes.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="#" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="w-4 h-4" />
                Santo Domingo, República Dominicana
              </a>
              <a href="tel:+18095550123" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +1 (809) 555-0123
              </a>
              <a href="mailto:info@gixia.do" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@gixia.do
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Empresarial
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Soluciones</h4>
            <ul className="space-y-3">
              {links.solutions.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} GIXIA.do. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              {links.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
