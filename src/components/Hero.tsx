import { Button } from "@/components/ui/button"
import heroImage from "@/assets/hero-crafting.jpg"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-warm">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-earth-brown leading-tight">
              Handcrafted
              <span className="block text-terracotta">with Love</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Discover unique, artisanal pieces created with passion and attention to detail. 
              Each item tells a story of traditional craftsmanship and modern design.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl">
              Explore Collection
            </Button>
            <Button variant="craft" size="xl">
              Learn My Story
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-terracotta rounded-full"></div>
              <span>100% Handmade</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-sage rounded-full"></div>
              <span>Sustainable Materials</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-terracotta rounded-full"></div>
              <span>Unique Designs</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-hover">
            <img 
              src={heroImage} 
              alt="Beautiful handcrafted items"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/20 to-transparent"></div>
          </div>
          
          {/* Floating accent elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-sage/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-terracotta/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero