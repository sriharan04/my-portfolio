import Image from "next/image";
import { Inter } from "next/font/google";
import HeroCard from "@/components/hero-card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex w-full ${inter.className}`}
    >
      <HeroCard/>
    </main>
  );
}
