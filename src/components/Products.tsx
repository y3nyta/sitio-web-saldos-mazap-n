import { useState } from "react";
import { Shirt, Footprints, Sparkles, Package, ShoppingCart, Search } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const categories = [
    { id: "all", name: "Todo", icon: Package },
    { id: "ropa", name: "Ropa", icon: Shirt },
    { id: "zapatos", name: "Zapatos", icon: Footprints },
    { id: "perfumeria", name: "Perfumería", icon: Sparkles },
  ];

  const products = [
    { id: 1, name: "Vestido Casual Mujer", category: "ropa", price: "$299", image: "👗", featured: true },
    { id: 2, name: "Camisa Formal Hombre", category: "ropa", price: "$199", image: "👔" },
    { id: 3, name: "Blusa Elegante", category: "ropa", price: "$249", image: "👚" },
    { id: 4, name: "Pantalón de Mezclilla", category: "ropa", price: "$349", image: "👖" },
    { id: 5, name: "Tenis Deportivos", category: "zapatos", price: "$599", image: "👟", featured: true },
    { id: 6, name: "Zapatos Formales", category: "zapatos", price: "$699", image: "👞" },
    { id: 7, name: "Sandalias Mujer", category: "zapatos", price: "$399", image: "👡" },
    { id: 8, name: "Botas Casuales", category: "zapatos", price: "$799", image: "🥾" },
    { id: 9, name: "Perfume Elegance", category: "perfumeria", price: "$499", image: "💐", featured: true },
    { id: 10, name: "Colonia Fresh", category: "perfumeria", price: "$399", image: "🌸" },
    { id: 11, name: "Perfume Luxury", category: "perfumeria", price: "$699", image: "🌹" },
    { id: 12, name: "Set de Regalo", category: "perfumeria", price: "$899", image: "🎁" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrder = (productName: string) => {
    const message = `Hola, me interesa el producto: ${productName}`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-foreground mb-4">
              Nuestros <span className="text-primary">Productos</span>
            </h2>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              Explora nuestro catálogo completo y encuentra exactamente lo que buscas
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 font-poppins rounded-xl border-border/50"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`font-poppins font-medium rounded-full px-6 transition-all ${
                  selectedCategory === category.id 
                    ? "bg-gradient-primary shadow-glow" 
                    : "hover:border-primary/50"
                }`}
              >
                <category.icon className="mr-2 h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id}
                className="group border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-0">
                  {/* Product Image/Icon */}
                  <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 h-48 flex items-center justify-center overflow-hidden">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                      {product.image}
                    </span>
                    {product.featured && (
                      <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground font-poppins">
                        Destacado
                      </Badge>
                    )}
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-5">
                    <h3 className="font-montserrat font-bold text-lg text-foreground mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="font-montserrat font-bold text-2xl text-primary">
                        {product.price}
                      </span>
                      <span className="font-poppins text-sm text-muted-foreground line-through">
                        ${(parseInt(product.price.replace("$", "")) + 100)}
                      </span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="p-5 pt-0">
                  <Button 
                    onClick={() => handleOrder(product.name)}
                    className="w-full bg-gradient-primary font-poppins font-semibold shadow-sm hover:shadow-glow transition-all"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Ordenar Ahora
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Package className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <p className="font-poppins text-lg text-muted-foreground">
                No se encontraron productos con ese criterio
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
