import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Tendencias en Moda Primavera-Verano 2024",
      excerpt: "Descubre los colores, estilos y prendas que marcarán esta temporada.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      author: "Saldos Mazapán",
      date: "15 Marzo 2024",
      category: "Moda"
    },
    {
      id: 2,
      title: "Cómo Elegir el Calzado Perfecto",
      excerpt: "Guía completa para encontrar los zapatos ideales según tu estilo y necesidades.",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
      author: "Saldos Mazapán",
      date: "10 Marzo 2024",
      category: "Calzado"
    },
    {
      id: 3,
      title: "Perfumes: Encuentra tu Fragancia Ideal",
      excerpt: "Tips para elegir el perfume perfecto según tu personalidad y ocasión.",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
      author: "Saldos Mazapán",
      date: "5 Marzo 2024",
      category: "Perfumería"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Blog
          </span>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Noticias y <span className="text-primary">Consejos</span>
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantente al día con las últimas tendencias, tips y novedades
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-montserrat text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="font-poppins">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="w-full group/btn hover:bg-primary/10"
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold px-8 shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              Ver Todos los Artículos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;