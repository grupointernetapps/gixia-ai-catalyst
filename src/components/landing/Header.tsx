import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import logoGixia from "@/assets/logo-gixia.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#beneficios", label: "Beneficios" },
    { href: "#servicios", label: "Servicios" },
    { href: "#soluciones", label: "Soluciones" },
    { href: "#precios", label: "Precios" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+18095550123" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5" />
                +1 (809) 555-0123
              </a>
              <a href="mailto:info@gixia.do" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" />
                info@gixia.do
              </a>
            </div>
            <div className="text-muted-foreground text-xs md:text-sm">
              🇩🇴 República Dominicana & Latinoamérica
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img src={logoGixia} alt="GIXIA - Global Integrations Xperience AI" className="h-12 md:h-14 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="heroOutline" size="default">
                Agenda Demo
              </Button>
              <Button variant="hero" size="default">
                Cotizar Ahora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-in">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors py-2 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-4">
                  <Button variant="heroOutline" className="w-full">
                    Agenda Demo
                  </Button>
                  <Button variant="hero" className="w-full">
                    Cotizar Ahora
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
