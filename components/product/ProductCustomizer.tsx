"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Info, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/store";

interface Option {
  id: string;
  label: string;
  priceMod?: number;
  color?: string;
  image?: string;
}

interface ProductCustomizerProps {
  productId: string;
  productName: string;
  productImage: string;
  basePrice: number;
  options: {
    sizes: Option[];
    fabrics: Option[];
    colors: Option[];
    woods?: Option[];
  };
}

export function ProductCustomizer({ productId, productName, productImage, basePrice, options }: ProductCustomizerProps) {
  const [size, setSize] = useState(options.sizes[0]);
  const [fabric, setFabric] = useState(options.fabrics[0]);
  const [color, setColor] = useState(options.colors[0]);
  const [wood, setWood] = useState(options.woods ? options.woods[0] : null);
  
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [isAdded, setIsAdded] = useState(false);

  const { addItem } = useCart();

  useEffect(() => {
    let price = basePrice;
    if (size?.priceMod) price += size.priceMod;
    if (fabric?.priceMod) price += fabric.priceMod;
    if (wood?.priceMod) price += wood.priceMod;
    setTotalPrice(price);
  }, [basePrice, size, fabric, wood]);

  const handleAddToCart = () => {
    addItem({
      id: "", // store generates this
      productId,
      name: productName,
      price: totalPrice,
      image: productImage,
      quantity: 1,
      options: {
        size: size.label,
        fabric: fabric.label,
        color: color.label,
      }
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="space-y-8 bg-card p-6 rounded-2xl border border-border/50 shadow-sm">
      {/* Price Display */}
      <div className="flex items-end gap-2 mb-6">
        <span className="text-3xl font-serif font-bold text-primary">₹{totalPrice.toLocaleString()}</span>
        <span className="text-sm text-muted-foreground mb-1">+ Shipping calculated at checkout</span>
      </div>

      {/* Selectors */}
      <div className="space-y-6">
        {/* Size */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm font-semibold">Size</label>
            <button className="text-xs text-primary underline flex items-center gap-1">
              <Info className="w-3 h-3" /> Size Guide
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {options.sizes.map((s) => (
              <button
                key={s.id}
                onClick={() => setSize(s)}
                className={cn(
                  "px-4 py-2 text-sm border rounded-lg transition-all",
                  size.id === s.id 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-background hover:border-primary/50"
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Fabric */}
        <div>
          <label className="text-sm font-semibold block mb-3">Fabric</label>
          <div className="grid grid-cols-2 gap-3">
            {options.fabrics.map((f) => (
              <button
                key={f.id}
                onClick={() => setFabric(f)}
                className={cn(
                  "flex items-center gap-3 p-2 border rounded-lg text-left transition-all",
                  fabric.id === f.id
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "hover:border-primary/50"
                )}
              >
                <div className="w-8 h-8 rounded-md bg-stone-200" /> {/* Placeholder texture */}
                <div className="flex-1">
                  <span className="text-sm font-medium block">{f.label}</span>
                  {f.priceMod ? <span className="text-xs text-muted-foreground">+₹{f.priceMod}</span> : null}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Color */}
        <div>
          <label className="text-sm font-semibold block mb-3">Color: <span className="text-muted-foreground font-normal">{color.label}</span></label>
          <div className="flex flex-wrap gap-4">
            {options.colors.map((c) => (
              <button
                key={c.id}
                onClick={() => setColor(c)}
                className={cn(
                  "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all relative",
                  color.id === c.id ? "border-primary scale-110" : "border-transparent hover:scale-110"
                )}
                style={{ backgroundColor: c.color }}
              >
                {color.id === c.id && <Check className="w-4 h-4 text-white drop-shadow-md" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="pt-6 space-y-3 border-t border-border/50">
        <Button 
          size="lg" 
          onClick={handleAddToCart}
          disabled={isAdded}
          className={cn(
            "w-full text-lg h-12 shadow-lg transition-all duration-300", 
            isAdded ? "bg-green-600 hover:bg-green-700" : "hover:shadow-xl"
          )}
        >
          {isAdded ? (
            <span className="flex items-center gap-2"><Check className="w-5 h-5" /> Added to Cart</span>
          ) : (
             <span className="flex items-center gap-2"><ShoppingBag className="w-5 h-5" /> Add to Cart - ₹{totalPrice.toLocaleString()}</span>
          )}
        </Button>
        <Button size="lg" variant="outline" className="w-full h-12">
          Request Custom Quote
        </Button>
        <p className="text-xs text-center text-muted-foreground pt-2">
          Estimated delivery: 2-4 weeks custom production time.
        </p>
      </div>
    </div>
  );
}
