import { ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-6 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="font-poppins text-sm font-medium text-white">Las Mejores Ofertas del Bazar</span>
          </div>
          
          <h1 className="font-montserrat font-extrabold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Saldos <span className="text-secondary">Mazapán</span>
          </h1>
          
          <p className="font-poppins text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Descubre moda, calzado, perfumería y más con los mejores precios. 
            Tu estilo, tu bazar favorito.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToProducts}
              className="bg-secondary text-navy hover:bg-secondary/90 font-poppins font-bold text-lg px-8 py-6 shadow-glow"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Explorar Productos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-poppins font-semibold text-lg px-8 py-6"
            >
              Contáctanos
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            {[
              { number: "1000+", label: "Productos" },
              { number: "10+", label: "Años" },
              { number: "5000+", label: "Clientes" },
              { number: "100%", label: "Calidad" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-montserrat font-bold text-3xl text-secondary mb-1">
                  {stat.number}
                </div>
                <div className="font-poppins text-sm text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
