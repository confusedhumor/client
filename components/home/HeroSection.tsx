"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero_living_room.png"
          alt="Premium Living Room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl space-y-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 text-primary font-medium text-sm tracking-wide backdrop-blur-sm">
            Premium Handcrafted Furniture
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
            Furniture crafted <br />
            for your <span className="text-white/90 italic">space.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed">
            Experience the perfect blend of comfort and elegance. Customize every detail to match your unique style.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
