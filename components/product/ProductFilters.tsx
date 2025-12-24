"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FilterSectionProps {
  title: string;
  items: string[];
  selected: string[];
  onChange: (item: string) => void;
  defaultOpen?: boolean;
}

function FilterSection({ title, items, selected, onChange, defaultOpen = true }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border/50 py-4 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex w-full items-center justify-between text-sm font-medium hover:text-primary transition-colors"
      >
        {title}
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-2">
              {items.map((item) => (
                <label key={item} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground cursor-pointer group">
                  <div className={cn(
                    "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                    selected.includes(item) ? "bg-primary border-primary" : "border-input group-hover:border-primary"
                  )}>
                    {selected.includes(item) && <div className="w-2 h-2 bg-white rounded-sm" />}
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={selected.includes(item)}
                    onChange={() => onChange(item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ProductFiltersProps {
  onFilterChange: (filters: { categories: string[]; materials: string[]; priceRange: string[] }) => void;
  initialFilters?: { categories?: string[] };
}

export function ProductFilters({ onFilterChange, initialFilters }: ProductFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialFilters?.categories || []);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  
  const toggleSelection = (item: string, current: string[], set: (v: string[]) => void) => {
    if (current.includes(item)) {
      set(current.filter((i) => i !== item));
    } else {
      set([...current, item]);
    }
  };

  const handleApply = () => {
    onFilterChange({
      categories: selectedCategories,
      materials: selectedMaterials,
      priceRange: selectedPrices
    });
  };

  return (
    <div className="space-y-1">
      <h3 className="text-lg font-serif font-bold mb-4">Filters</h3>
      <FilterSection 
        title="Category" 
        items={["Sofas", "Tables", "Beds", "Chairs", "Storage"]} 
        selected={selectedCategories}
        onChange={(i) => toggleSelection(i, selectedCategories, setSelectedCategories)}
      />
      <FilterSection 
        title="Material" 
        items={["Oak Wood", "Teak Wood", "Fabric", "Leather", "Metal"]} 
        selected={selectedMaterials}
        onChange={(i) => toggleSelection(i, selectedMaterials, setSelectedMaterials)}
      />
      <FilterSection 
        title="Price Range" 
        items={["Under ₹10,000", "₹10,000 - ₹50,000", "Above ₹50,000"]} 
        selected={selectedPrices}
        onChange={(i) => toggleSelection(i, selectedPrices, setSelectedPrices)}
      />
       <div className="pt-6">
        <Button className="w-full" onClick={handleApply}>Apply Filters</Button>
      </div>
    </div>
  );
}
