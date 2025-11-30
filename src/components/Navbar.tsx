import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="Saldos Mazapán" className="h-14 w-14 rounded-full object-cover" />
            <div>
              <h1 className="font-montserrat font-bold text-xl text-primary">Saldos Mazapán</h1>
              <p className="font-poppins text-xs text-muted-foreground">Tu Bazar de Confianza</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" onClick={() => scrollToSection("hero")} className="font-poppins font-medium">
              Inicio
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("about")} className="font-poppins font-medium">
              Nosotros
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("products")} className="font-poppins font-medium">
              Productos
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")} className="font-poppins font-medium">
              Contacto
            </Button>
            <Button 
              onClick={() => scrollToSection("products")} 
              className="ml-4 bg-gradient-primary font-poppins font-semibold shadow-glow hover:opacity-90 transition-opacity"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Ver Catálogo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-in-right">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" onClick={() => scrollToSection("hero")} className="font-poppins justify-start">
                Inicio
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("about")} className="font-poppins justify-start">
                Nosotros
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("products")} className="font-poppins justify-start">
                Productos
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("contact")} className="font-poppins justify-start">
                Contacto
              </Button>
              <Button 
                onClick={() => scrollToSection("products")} 
                className="bg-gradient-primary font-poppins font-semibold shadow-glow mt-2"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Ver Catálogo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
