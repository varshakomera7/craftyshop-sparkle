import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="bg-warm-cream/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-serif font-semibold text-earth-brown">
            Artisan Crafts
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-earth-brown hover:text-terracotta transition-colors">
            Home
          </a>
          <a href="#products" className="text-earth-brown hover:text-terracotta transition-colors">
            Products
          </a>
          <a href="#about" className="text-earth-brown hover:text-terracotta transition-colors">
            About
          </a>
          <a href="#contact" className="text-earth-brown hover:text-terracotta transition-colors">
            Contact
          </a>
        </div>
        
        <Button variant="hero" size="sm">
          Shop Now
        </Button>
      </nav>
    </header>
  )
}

export default Header