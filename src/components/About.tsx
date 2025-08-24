import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Traditional Techniques",
    description: "Using time-honored methods passed down through generations",
    icon: "🏺"
  },
  {
    title: "Sustainable Materials",
    description: "Ethically sourced, eco-friendly materials for conscious creation",
    icon: "🌱"
  },
  {
    title: "Unique Designs",
    description: "Every piece is one-of-a-kind, crafted with individual attention",
    icon: "✨"
  },
  {
    title: "Quality Craftsmanship",
    description: "Meticulous attention to detail ensures lasting beauty and durability",
    icon: "🎨"
  }
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-serif font-bold text-earth-brown mb-6">
                The Art of 
                <span className="block text-terracotta">Handmade Creation</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Welcome to my world of artisanal crafts, where every piece tells a story of 
                passion, tradition, and creativity. For over a decade, I've been dedicated to 
                creating beautiful, functional art that brings warmth and character to your home.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey began with a simple desire to create something beautiful with my own hands. 
                Today, each piece I craft carries that same spirit of joy and intentionality, 
                made with sustainable materials and traditional techniques.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} variant="feature">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-earth-brown mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About