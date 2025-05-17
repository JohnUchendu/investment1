import {Hero} from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </main>
  );
}