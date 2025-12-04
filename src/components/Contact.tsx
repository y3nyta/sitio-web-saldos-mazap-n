import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "661-123-90-48",
      link: "tel:+526611239048",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "661-123-90-48",
      link: "https://wa.me/526611239048",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      title: "Dirección",
      content: "Av. Balbino Obeso López 186, Lucio Blanco",
      link: "https://maps.google.com",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Mar - Sáb: 10:00 AM - 6:00 PM,<br /> Dom: 7:00 AM - 3:00 PM",
      color: "text-primary"
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/526611239048?text=Hola, me gustaría obtener más información sobre sus productos", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-4">
              Contáctanos
            </h2>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes preguntas o quieres hacer un pedido? Estamos aquí para ayudarte
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card 
                key={index}
                className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-primary mb-4`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-sm text-muted-foreground mb-2">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a 
                      href={item.link}
                      className="font-poppins text-sm text-foreground hover:text-primary transition-colors block"
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="font-poppins text-sm text-foreground">
                      {item.content}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <Card className="bg-gradient-primary border-0 shadow-glow overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left flex-1">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                    <MessageCircle className="h-4 w-4 text-white" />
                    <span className="font-poppins text-sm font-medium text-white">Respuesta Inmediata</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-3xl text-white mb-3">
                    ¿Listo para hacer tu pedido?
                  </h3>
                  <p className="font-poppins text-white/90 text-lg">
                    Contáctanos por WhatsApp y te atenderemos de inmediato
                  </p>
                </div>
                <Button 
                  size="lg"
                  onClick={handleWhatsApp}
                  className="bg-white text-primary hover:bg-white/90 font-poppins font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chatear por WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card className="mt-12 overflow-hidden border-border/50 shadow-card">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-64 md:h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4 animate-float" />
                  <p className="font-poppins text-muted-foreground">
                    Visítanos en nuestra tienda física
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
