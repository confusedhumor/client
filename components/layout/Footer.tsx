import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-secondary/50 to-background pt-16 pb-8 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-serif font-bold text-primary">LuxeWood</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Crafting premium furniture for your home. Customizable, sustainable, and timeless.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 rounded-full bg-background border hover:border-primary transition-colors">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="#" className="p-2 rounded-full bg-background border hover:border-primary transition-colors">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="#" className="p-2 rounded-full bg-background border hover:border-primary transition-colors">
              <Twitter className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Shop</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-foreground transition-colors">Living Room</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">Bedroom</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">Dining</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">Office</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Support</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link href="#" className="hover:text-foreground transition-colors">FAQ</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">Shipping & Returns</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">Care Instructions</Link></li>
            <li><Link href="#" className="hover:text-foreground transition-colors">Warranty</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Subscribe for exclusive designs and offers.
          </p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="flex-1 px-4 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg hover:bg-primary/90 transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} LuxeWood Furniture. All rights reserved.</p>
      </div>
    </footer>
  );
}
