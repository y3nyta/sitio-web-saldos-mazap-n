import { Award, Heart, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Productos seleccionados cuidadosamente para tu satisfacción",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Mejores Precios",
      description: "Ofertas y saldos increíbles todos los días",
      color: "text-secondary"
    },
    {
      icon: Heart,
      title: "Atención Personalizada",
      description: "Un equipo dedicado a ayudarte en cada compra",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Confianza",
      description: "Miles de clientes satisfechos nos respaldan",
      color: "text-primary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-4">
              Sobre <span className="text-primary">Nosotros</span>
            </h2>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              Somos tu bazar de confianza, ofreciendo productos de calidad en ropa, 
              zapatos, perfumería y miscelánea con los mejores precios del mercado.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-poppins text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Story Section */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-montserrat font-bold text-3xl text-foreground mb-4">
                  Nuestra Historia
                </h3>
                <p className="font-poppins text-muted-foreground mb-4">
                  Con más de 10 años de experiencia, Saldos Mazapán se ha convertido en 
                  el destino favorito para quienes buscan calidad y variedad a precios accesibles.
                </p>
                <p className="font-poppins text-muted-foreground">
                  Nos especializamos en ofrecer las últimas tendencias en moda, calzado y 
                  perfumería, además de una amplia selección de artículos de miscelánea para 
                  satisfacer todas tus necesidades.
                </p>
              </div>
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h4 className="font-montserrat font-bold text-2xl mb-4">
                  Nuestra Misión
                </h4>
                <p className="font-poppins text-white/90">
                  Brindar a nuestros clientes acceso a productos de calidad con los mejores 
                  precios del mercado, manteniendo siempre un servicio excepcional y cercano 
                  que nos caracteriza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
