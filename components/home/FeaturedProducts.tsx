"use client";

import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { products as productsData } from "@/lib/products";

// Transform products for display
const products = Object.values(productsData).slice(0, 4).map(p => ({
  id: p.id,
  name: p.name,
  price: p.basePrice,
  category: p.category,
  image: p.images[0],
  images: p.images,
  colors: p.options?.colors?.map(c => c.color) || [],
}));

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-2">Best Sellers</h2>
            <p className="text-muted-foreground">Handpicked favorites loved by our customers.</p>
          </div>
          <Button variant="link" className="hidden sm:flex items-center gap-2 group">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
         <div className="mt-8 text-center sm:hidden">
            <Button variant="outline">View All Products</Button>
         </div>
      </div>
    </section>
  );
}
