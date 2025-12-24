"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

import { useCart } from "@/lib/store";
// import { toast } from "sonner"; 

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  colors?: string[];
}

export function ProductCard({ id, name, price, category, image, images, colors }: ProductCardProps) {
  const { addItem } = useCart();
  
  // Use the second image for hover if available, otherwise fallback to the main image
  const hoverImage = images && images.length > 1 ? images[1] : image;

  const handleQuickAdd = () => {
    addItem({
      id: "", // store generates
      productId: id,
      name,
      price,
      image,
      quantity: 1,
      options: {} // Default options
    });
    // Visual feedback could be added here
    alert("Added to cart!"); 
  };

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/50">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-secondary/20">
        {/* Main Image */}
        <Image
          src={image}
          alt={name}
          fill
          className={cn(
            "object-cover transition-opacity duration-500",
            hoverImage !== image ? "group-hover:opacity-0" : "group-hover:scale-105"
          )}
        />
        {/* Hover Image (if different) */}
        {hoverImage !== image && (
          <Image
            src={hoverImage}
            alt={`${name} view 2`}
            fill
            className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
        {/* Quick Action Overlay */}
        <div className="absolute bottom-4 right-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Button 
            size="icon" 
            className="rounded-full shadow-md bg-white text-primary hover:bg-white hover:text-primary-foreground hover:scale-110 transition-all"
            onClick={(e) => {
              e.preventDefault(); // Prevent navigating to product page
              e.stopPropagation();
              handleQuickAdd();
            }}
          >
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Details */}
      <div className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{category}</p>
        <Link href={`/product/${id}`} className="block">
           <h3 className="font-serif text-lg font-medium text-primary hover:text-primary/80 transition-colors line-clamp-1">{name}</h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-foreground">₹{price.toLocaleString()}</span>
          {colors && (
             <div className="flex -space-x-1">
               {colors.map((c, i) => (
                 <div key={i} className="w-4 h-4 rounded-full border border-white" style={{ backgroundColor: c }} />
               ))}
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
