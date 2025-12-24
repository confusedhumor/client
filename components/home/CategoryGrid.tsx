"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Sofas",
    image: "/cat_sofa_modern.png",
    link: "/shop?category=sofas",
    count: "24+ items",
  },
  {
    title: "Dining Tables",
    image: "/cat_table_wooden.png",
    link: "/shop?category=tables",
    count: "12+ items",
  },
  {
    title: "Beds",
    image: "/cat_bed_premium.png",
    link: "/shop?category=beds",
    count: "18+ items",
  },
  {
    title: "Storage",
    image: "/cat_storage_wardrobe.png",
    link: "/shop?category=storage",
    count: "15+ items",
  },
];

export function CategoryGrid() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-primary mb-4">Explore by Category</h2>
        <p className="text-muted-foreground">Find the perfect piece for every room in your home.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <Link key={index} href={cat.link} className="group relative block overflow-hidden rounded-2xl aspect-[4/5] shadow-sm hover:shadow-xl transition-shadow duration-300">
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-10" />
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 text-white">
              <span className="text-sm font-medium opacity-90 mb-1">{cat.count}</span>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-serif">{cat.title}</h3>
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/20 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </motion.div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
