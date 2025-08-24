import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Products from "@/components/Products"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
