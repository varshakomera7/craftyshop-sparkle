const Footer = () => {
  return (
    <footer className="bg-earth-brown text-warm-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4">Artisan Crafts</h3>
            <p className="text-warm-cream/80 text-sm leading-relaxed">
              Creating beautiful, functional art that brings warmth and character to your home. 
              Every piece is handcrafted with love and attention to detail.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#products" className="block text-warm-cream/80 hover:text-terracotta transition-colors">
                Products
              </a>
              <a href="#about" className="block text-warm-cream/80 hover:text-terracotta transition-colors">
                About
              </a>
              <a href="#contact" className="block text-warm-cream/80 hover:text-terracotta transition-colors">
                Contact
              </a>
              <a href="#" className="block text-warm-cream/80 hover:text-terracotta transition-colors">
                Workshops
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-sm">
              <p className="text-warm-cream/80">hello@artisancrafts.com</p>
              <p className="text-warm-cream/80">+1 (555) 123-4567</p>
              <p className="text-warm-cream/80">Instagram @artisancrafts</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-warm-cream/20 mt-8 pt-8 text-center">
          <p className="text-warm-cream/60 text-sm">
            © 2024 Artisan Crafts. All rights reserved. Made with ❤️ by hand.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer