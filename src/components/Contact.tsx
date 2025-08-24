import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-earth-brown mb-4">
              Let's Create Together
            </h2>
            <p className="text-xl text-muted-foreground">
              Have a custom piece in mind? I'd love to bring your vision to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card variant="feature">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-earth-brown">
                  Get in Touch
                </CardTitle>
                <CardDescription>
                  Ready to start your custom project or have questions about existing pieces?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                    <span className="text-muted-foreground">hello@artisancrafts.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-sage rounded-full"></div>
                    <span className="text-muted-foreground">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                    <span className="text-muted-foreground">Instagram @artisancrafts</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold text-earth-brown mb-2">Custom Orders</h4>
                  <p className="text-sm text-muted-foreground">
                    I accept custom commissions for pottery, textiles, and woodwork. 
                    Lead time is typically 4-6 weeks depending on the complexity of the piece.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* CTA */}
            <Card variant="feature">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-earth-brown">
                  Join My Community
                </CardTitle>
                <CardDescription>
                  Stay updated on new pieces, behind-the-scenes content, and craft workshops.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Button variant="hero" size="lg" className="w-full">
                    Subscribe to Newsletter
                  </Button>
                  <Button variant="craft" size="lg" className="w-full">
                    Follow on Instagram
                  </Button>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <h4 className="font-semibold text-earth-brown mb-2">Workshops</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Learn traditional crafting techniques in my monthly workshops. 
                    Perfect for beginners and experienced makers alike.
                  </p>
                  <Button variant="outline" size="sm">
                    View Workshop Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact