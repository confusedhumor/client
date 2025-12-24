"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductFilters } from "@/components/product/ProductFilters";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";

import { products as productsData } from "@/lib/products";

// Transform the products object into an array for the shop page
const allProducts = Object.values(productsData).map(p => ({
  id: p.id,
  name: p.name,
  price: p.basePrice,
  category: p.category,
  material: p.material,
  image: p.images[0], // Use the first image for the card
  images: p.images,
  colors: p.options.colors.map(c => c.color)
}));

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const searchQuery = searchParams.get("search");
  
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    let filtered = allProducts;

    if (initialCategory) {
       filtered = filtered.filter(p => p.category.toLowerCase() === initialCategory.toLowerCase() || p.category === initialCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    setProducts(filtered);
  }, [initialCategory, searchQuery]);

  const handleFilterChange = (filters: { categories: string[]; materials: string[]; priceRange: string[] }) => {
    let filtered = allProducts;

    // Filter by Category
    if (filters.categories.length > 0) {
      filtered = filtered.filter(p => filters.categories.includes(p.category));
    }

    // Filter by Material
    if (filters.materials.length > 0) {
      filtered = filtered.filter(p => filters.materials.includes(p.material));
    }

    // Filter by Price
    if (filters.priceRange.length > 0) {
      filtered = filtered.filter(p => {
        return filters.priceRange.some(range => {
          if (range === "Under ₹10,000") return p.price < 10000;
          if (range === "₹10,000 - ₹50,000") return p.price >= 10000 && p.price <= 50000;
          if (range === "Above ₹50,000") return p.price > 50000;
          return false;
        });
      });
    }

    setProducts(filtered);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
           {/* Sidebar */}
      <aside className="w-full md:w-64 flex-shrink-0">
         <div className="sticky top-24">
           {/* Passing initial category to filters */}
           <ProductFilters 
             onFilterChange={handleFilterChange} 
             initialFilters={{ categories: initialCategory ? [initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1).toLowerCase()] : [] }}
           />
         </div>
      </aside>

      {/* Product Grid */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-serif font-bold">All Products</h1>
          <div className="text-sm text-muted-foreground">{products.length} items</div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p>No products match your filters.</p>
            <Button variant="link" onClick={() => setProducts(allProducts)}>Clear all</Button>
          </div>
        )}
        
        {products.length > 0 && (
          <div className="mt-12 text-center">
             <Button variant="outline" size="lg">Load More</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-secondary/10">
      <Navbar />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-6">
        <Suspense fallback={<div>Loading products...</div>}>
          <ShopContent />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
