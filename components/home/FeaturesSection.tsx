import { Truck, Award, Leaf } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      <div className="p-6 rounded-2xl bg-white shadow-sm border border-border/40 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
          <Award className="w-6 h-6" />
        </div>
        <h3 className="font-serif font-bold text-xl mb-2">Premium Quality</h3>
        <p className="text-muted-foreground text-sm">Crafted from the finest sustainably sourced wood and fabrics.</p>
      </div>
       <div className="p-6 rounded-2xl bg-white shadow-sm border border-border/40 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
          <Truck className="w-6 h-6" />
        </div>
        <h3 className="font-serif font-bold text-xl mb-2">Fast Delivery</h3>
        <p className="text-muted-foreground text-sm">Priority shipping on all orders with real-time tracking.</p>
      </div>
       <div className="p-6 rounded-2xl bg-white shadow-sm border border-border/40 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
          <Leaf className="w-6 h-6" />
        </div>
        <h3 className="font-serif font-bold text-xl mb-2">Eco-Friendly</h3>
        <p className="text-muted-foreground text-sm">We plant a tree for every piece of furniture sold.</p>
      </div>
    </section>
  )
}
