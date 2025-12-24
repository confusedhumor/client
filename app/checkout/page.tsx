"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/store";
import { CreditCard, Lock } from "lucide-react";

export default function CheckoutPage() {
  const { totalPrice } = useCart();
  const total = totalPrice() + 1500; // Including shipping

  return (
    <main className="min-h-screen bg-secondary/5">
      <Navbar />
      <div className="pt-24 pb-20 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Form */}
        <div>
          <h1 className="text-3xl font-serif font-bold mb-8">Checkout</h1>
          <form className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
              <input type="email" placeholder="Email address" className="w-full p-3 rounded-lg border bg-background" />
            </div>
            
            <div>
               <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
               <div className="grid grid-cols-2 gap-4">
                 <input type="text" placeholder="First name" className="w-full p-3 rounded-lg border bg-background" />
                 <input type="text" placeholder="Last name" className="w-full p-3 rounded-lg border bg-background" />
                 <input type="text" placeholder="Address" className="w-full p-3 rounded-lg border bg-background col-span-2" />
                 <input type="text" placeholder="City" className="w-full p-3 rounded-lg border bg-background" />
                 <input type="text" placeholder="Postal Code" className="w-full p-3 rounded-lg border bg-background" />
               </div>
            </div>

            <div>
               <h2 className="text-lg font-semibold mb-4">Payment</h2>
               <div className="p-4 border rounded-lg bg-card flex items-center gap-3 opacity-50 cursor-not-allowed">
                 <CreditCard className="w-5 h-5" />
                 <span>Credit card (Simulated)</span>
                 <Lock className="w-4 h-4 ml-auto" />
               </div>
            </div>

            <Button size="lg" className="w-full h-12 text-lg mt-4" disabled>
              Pay ₹{total.toLocaleString()}
            </Button>
             <p className="text-xs text-center text-muted-foreground">Payment gateway integration requires API keys.</p>
          </form>
        </div>

        {/* Summary */}
        <div className="bg-card p-8 rounded-2xl shadow-sm border h-fit sticky top-24">
           <h3 className="font-serif font-bold text-xl mb-6">Order Summary</h3>
           <div className="flex justify-between py-2 border-b">
             <span>Subtotal</span>
             <span>₹{totalPrice().toLocaleString()}</span>
           </div>
           <div className="flex justify-between py-2 border-b">
             <span>Shipping</span>
             <span>₹1,500</span>
           </div>
           <div className="flex justify-between py-4 font-bold text-lg">
             <span>Total</span>
             <span>₹{total.toLocaleString()}</span>
           </div>
           <ul className="mt-4 text-sm text-muted-foreground space-y-2">
             <li>• Premium Quality Guarantee</li>
             <li>• 30-Day Returns</li>
             <li>• Secure Encrypted Payment</li>
           </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
