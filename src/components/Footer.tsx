import { Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Youtube, label: "Youtube", href: "https://youtube.com" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  ];

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="Saldos Mazapán" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <h3 className="font-montserrat font-bold text-xl text-secondary">Saldos Mazapán</h3>
                  <p className="font-poppins text-xs text-white/70">Tu Bazar de Confianza</p>
                </div>
              </div>
              <p className="font-poppins text-sm text-white/80 mb-4">
                Ofrecemos los mejores productos en ropa, zapatos, perfumería y miscelánea 
                con la mejor calidad y precios del mercado.
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 hover:border-secondary transition-all"
                  >
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 text-white" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-montserrat font-bold text-lg mb-4 text-secondary">Enlaces Rápidos</h4>
              <ul className="space-y-2 font-poppins text-sm">
                <li>
                  <a href="#hero" className="text-white/80 hover:text-secondary transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/80 hover:text-secondary transition-colors">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-white/80 hover:text-secondary transition-colors">
                    Productos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-secondary transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-montserrat font-bold text-lg mb-4 text-secondary">Categorías</h4>
              <ul className="space-y-2 font-poppins text-sm">
                <li className="text-white/80">Ropa</li>
                <li className="text-white/80">Zapatos</li>
                <li className="text-white/80">Perfumería</li>
                <li className="text-white/80">Miscelánea</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-poppins text-sm text-white/60 text-center md:text-left">
                © {currentYear} Saldos Mazapán. Todos los derechos reservados.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
