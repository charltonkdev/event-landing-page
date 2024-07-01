import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <Hero />
      <About />
    </main>
  );
}
