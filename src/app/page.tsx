import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Property from "@/components/Property";
import Features from "@/components/Features";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Property />
      <Features />
      <Blog />
      <Footer />
    </main>
  );
}
