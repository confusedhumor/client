"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/store";

import { useRouter } from "next/navigation";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const totalItems = useCart((state) => state.totalItems());

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 20);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-primary">
          NAVUNNAATI BUSINESS PVT.LTD
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/shop?category=Sofas" className="text-sm font-medium hover:text-primary transition-colors">
            Sofas
          </Link>
          <Link href="/shop?category=Tables" className="text-sm font-medium hover:text-primary transition-colors">
            Tables
          </Link>
          <Link href="/shop?category=Beds" className="text-sm font-medium hover:text-primary transition-colors">
            Beds
          </Link>
          <Link href="/shop?category=Storage" className="text-sm font-medium hover:text-primary transition-colors">
            Storage
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:flex items-center">
             <AnimatePresence>
               {showSearch && (
                 <motion.input
                   initial={{ width: 0, opacity: 0 }}
                   animate={{ width: 200, opacity: 1 }}
                   exit={{ width: 0, opacity: 0 }}
                   className="mr-2 p-2 h-9 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                   placeholder="Search..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                   autoFocus
                 />
               )}
             </AnimatePresence>
             <Button 
               variant="ghost" 
               size="icon" 
               aria-label="Search"
               onClick={() => {
                 if (showSearch && searchQuery) {
                    handleSearch();
                 } else {
                    setShowSearch(!showSearch);
                 }
               }}
             >
               <Search className="w-5 h-5" />
             </Button>
          </div>
          <Button variant="ghost" size="icon" aria-label="Account">
            <User className="w-5 h-5" />
          </Button>
          
          <Link href="/cart">
            <Button variant="outline" size="icon" className="relative" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              {isMounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] flex items-center justify-center rounded-full animate-in zoom-in">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
          
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
