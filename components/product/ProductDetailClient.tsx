"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCustomizer } from "@/components/product/ProductCustomizer";
import { products } from "@/lib/products";

interface ProductDetailClientProps {
  productId: string;
}

export function ProductDetailClient({ productId }: ProductDetailClientProps) {
  const productData = products[productId as keyof typeof products] || products["1"];
  // state for current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const selectedImage = productData.images[currentImageIndex];

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productData.images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productData.images.length) % productData.images.length);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 max-w-7xl mx-auto px-6">
        
        <div className="mb-6">
          <Link href="/shop">
           <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary pl-0">
             <ChevronLeft className="w-4 h-4" /> Back to Shop
           </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary/20 shadow-sm border border-border/50 group">
              <Image 
                src={selectedImage} 
                alt="Product Main" 
                fill 
                className="object-cover transition-all duration-500"
                priority
              />
              
              {/* Navigation Buttons */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                 <Button 
                   variant="secondary" 
                   size="icon" 
                   className="h-10 w-10 rounded-full shadow-lg pointer-events-auto bg-white/80 backdrop-blur-sm hover:bg-white"
                   onClick={handlePrev}
                 >
                   <ChevronLeft className="w-5 h-5" />
                 </Button>
                 <Button 
                   variant="secondary" 
                   size="icon" 
                   className="h-10 w-10 rounded-full shadow-lg pointer-events-auto bg-white/80 backdrop-blur-sm hover:bg-white"
                   onClick={handleNext}
                 >
                    <ChevronLeft className="w-5 h-5 rotate-180" />
                 </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {productData.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentImageIndex(i)}
                  className={cn(
                    "relative aspect-square rounded-lg overflow-hidden bg-secondary/10 cursor-pointer border transition-all duration-300",
                    i === currentImageIndex ? "border-primary ring-1 ring-primary shadow-sm" : "border-transparent hover:border-primary/50"
                  )}
                >
                   <Image 
                    src={img} 
                    alt={`View ${i}`} 
                    fill 
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details & Customizer */}
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-serif font-bold text-primary mb-4">{productData.name}</h1>
              <p className="text-muted-foreground leading-relaxed">
                {productData.description}
              </p>
            </div>

            <ProductCustomizer 
              productId={productData.id}
              productName={productData.name}
              productImage={productData.images[0]}
              basePrice={productData.basePrice}
              options={productData.options}
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
