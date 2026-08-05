import { About } from "@/components/sections/About";
import { Appointment } from "@/components/sections/Appointment";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Map } from "@/components/sections/Map";
import { Reviews } from "@/components/sections/Reviews";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Reviews />
        <Appointment />
        <Map />
      </main>
      <Footer />
    </>
  );
}
