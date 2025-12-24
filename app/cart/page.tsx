"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/lib/store";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const subtotal = totalPrice();
  const shipping = 1500; // Flat rate for MVP
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Looks like you haven&apos;t added any premium furniture yet.</p>
          <Link href="/shop">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-secondary/10">
      <Navbar />
      <div className="pt-24 pb-20 max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-serif font-bold mb-8">Shopping Cart ({items.length})</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="bg-card p-4 rounded-xl shadow-sm border border-border/50 flex gap-6">
                <div className="relative w-24 h-24 bg-secondary/20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    {(item.options?.size || item.options?.fabric || item.options?.color) && (
                      <div className="text-sm text-muted-foreground mt-1 space-x-3">
                        {item.options.size && <span>Size: {item.options.size}</span>}
                        {item.options.color && <span>Color: {item.options.color}</span>}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                     <div className="flex items-center gap-3 border rounded-md px-2 py-1 bg-background">
                       <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="p-1 hover:text-primary"><Minus className="w-3 h-3" /></button>
                       <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                       <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-primary"><Plus className="w-3 h-3" /></button>
                     </div>
                     <span className="font-bold text-lg">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="w-full lg:w-96">
            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border/50 sticky top-24">
              <h3 className="font-serif font-bold text-xl mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">₹{shipping.toLocaleString()}</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
              <Button className="w-full h-12 text-lg gap-2" size="lg">
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </Button>
              <div className="mt-4 text-center">
                 <p className="text-xs text-muted-foreground">Secure Checkout via Stripe / Razorpay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
