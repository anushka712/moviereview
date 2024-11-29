import Featuredmovie from "@/components/Featuredmovie";
import Footer from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import Testimonials from "@/components/Testimonials";
import Webinars from "@/components/Webinars";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <Featuredmovie/>
    <Testimonials/>
    <Webinars/>
    <Instructor/>
    <Footer/>
   </main>
  );
}
