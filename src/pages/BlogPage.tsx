import { Calendar, User, ArrowRight, ArrowLeft, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "Tendencias en Moda Primavera-Verano 2024",
      excerpt: "Descubre los colores, estilos y prendas que marcarán esta temporada. Desde los tonos pastel hasta los estampados florales, te contamos todo lo que necesitas saber para estar a la moda.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      author: "Saldos Mazapán",
      date: "15 Marzo 2024",
      category: "Moda"
    },
    {
      id: 2,
      title: "Cómo Elegir el Calzado Perfecto",
      excerpt: "Guía completa para encontrar los zapatos ideales según tu estilo y necesidades. Aprende a identificar la calidad y el confort en cada par.",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
      author: "Saldos Mazapán",
      date: "10 Marzo 2024",
      category: "Calzado"
    },
    {
      id: 3,
      title: "Perfumes: Encuentra tu Fragancia Ideal",
      excerpt: "Tips para elegir el perfume perfecto según tu personalidad y ocasión. Conoce las familias olfativas y cómo combinarlas.",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
      author: "Saldos Mazapán",
      date: "5 Marzo 2024",
      category: "Perfumería"
    },
    {
      id: 4,
      title: "Organiza tu Guardarropa como un Experto",
      excerpt: "Consejos prácticos para mantener tu closet ordenado y aprovechar al máximo cada prenda. El método que transformará tu forma de vestir.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      author: "Saldos Mazapán",
      date: "28 Febrero 2024",
      category: "Moda"
    },
    {
      id: 5,
      title: "Accesorios que Transforman tu Look",
      excerpt: "Descubre cómo los accesorios correctos pueden elevar cualquier outfit. Desde bolsos hasta joyería, te damos las claves.",
      image: "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?w=800&q=80",
      author: "Saldos Mazapán",
      date: "20 Febrero 2024",
      category: "Miscelánea"
    },
    {
      id: 6,
      title: "Cuidado del Calzado: Guía Completa",
      excerpt: "Aprende a mantener tus zapatos como nuevos por más tiempo. Técnicas de limpieza y almacenamiento para cada tipo de material.",
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80",
      author: "Saldos Mazapán",
      date: "15 Febrero 2024",
      category: "Calzado"
    }
  ];

  const categories = ["Moda", "Calzado", "Perfumería", "Miscelánea"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-fade-in">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Volver al Inicio
            </Link>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Noticias y <span className="text-primary">Consejos</span>
            </h1>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              Mantente al día con las últimas tendencias, tips y novedades del mundo de la moda
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                Todos
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No se encontraron artículos con esos criterios.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="group overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-56">
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
                    <CardTitle className="font-montserrat text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="font-poppins line-clamp-3">
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
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
