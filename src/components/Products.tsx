import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import productVase from "@/assets/product-vase.jpg"
import productScarf from "@/assets/product-scarf.jpg"
import productBox from "@/assets/product-box.jpg"

const products = [
  {
    id: 1,
    name: "Ceramic Vase",
    description: "Hand-thrown pottery with organic curves and warm terracotta finish",
    price: "$85",
    image: productVase,
  },
  {
    id: 2,
    name: "Woven Scarf",
    description: "Soft wool blend with geometric patterns in sage and cream",
    price: "$65",
    image: productScarf,
  },
  {
    id: 3,
    name: "Jewelry Box",
    description: "Handcrafted wooden box with brass details and velvet lining",
    price: "$120",
    image: productBox,
  },
]

const Products = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-earth-brown mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each piece is carefully crafted by hand, ensuring no two items are exactly alike. 
            Discover the beauty of authentic artisanal work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} variant="product">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-earth-brown">
                      {product.price}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl font-serif mb-2 text-earth-brown">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {product.description}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-semibold text-terracotta">
                    {product.price}
                  </span>
                  <Button variant="craft">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Products