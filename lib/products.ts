/**
 * PRODUCT DATA CENTER
 * 
 * To add a new product:
 * 1. Add a new numeric key (e.g., "5", "6") to the `products` object.
 * 2. Copy the structure of an existing product.
 * 3. Ensure it has a unique 'id', 'name', 'basePrice', 'category', 'material', and 'images'.
 * 4. Define its available options (sizes, fabrics, colors).
 * 
 * IMAGES:
 * - Local images: Place file in `public` folder and use path like `"/my-image.png"`
 * - Remote images: Use full URL like `"https://images.unsplash.com/photo..."`. 
 *   (Note: Remote domains must be added to next.config.mjs)
 */
export const products = {
  "1": {
    id: "1",
    name: "Luxe Modular Sofa",
    description: "A masterpiece of comfort and modular design. The Luxe Modular Sofa adapts to your living space with its versatile sections and premium cushioning. Crafted with a kiln-dried hardwood frame and reinforced joinery.",
    basePrice: 45999,
    category: "Sofas",
    material: "Fabric",
    images: [
      "/sofa_lifestyle.png",
      "/cat_sofa_modern.png",
      "/sofa_side_view.png",
      "/sofa_close_up.png"
    ],
    options: {
      sizes: [
        { id: "2s", label: "2 Seater", priceMod: 0 },
        { id: "3s", label: "3 Seater", priceMod: 12000 },
        { id: "L", label: "L-Shape Sectional", priceMod: 25000 },
      ],
      fabrics: [
        { id: "linen", label: "Premium Linen", priceMod: 0 },
        { id: "velvet", label: "Royal Velvet", priceMod: 5000 },
        { id: "leather", label: "Italian Leather", priceMod: 15000 },
      ],
      colors: [
        { id: "beige", label: "Sand Beige", color: "#D2B48C" },
        { id: "grey", label: "Slate Grey", color: "#708090" },
        { id: "navy", label: "Deep Navy", color: "#000080" },
      ]
    }
  },
  "2": {
    id: "2",
    name: "Oak Wood Dining Table",
    description: "Gather around this stunning Oak Wood Dining Table. Featuring natural grain patterns and a robust construction, it's the perfect centerpiece for your family meals.",
    basePrice: 32500,
    category: "Tables",
    material: "Oak Wood",
    images: [
      "/table_lifestyle.png",
      "/cat_table_wooden.png",
      "/table_detail.png",
      "/table_lifestyle.png"
    ],
    options: {
      sizes: [
        { id: "4s", label: "4 Seater", priceMod: 0 },
        { id: "6s", label: "6 Seater", priceMod: 8000 },
      ],
      fabrics: [],
      colors: [
        { id: "natural", label: "Natural Oak", color: "#C19A6B" },
        { id: "walnut", label: "Dark Walnut", color: "#5D4037" }
      ],
      woods: [
        { id: "oak", label: "Solid Oak", priceMod: 0 },
        { id: "teak", label: "Burma Teak", priceMod: 15000 },
      ]
    }
  },
  "3": {
    id: "3",
    name: "Cloud Soft King Bed",
    description: "Sleep like royalty on the Cloud Soft King Bed. Upholstered headboard with plush foam ensures comfortable reading, while the sturdy frame supports your mattress perfectly.",
    basePrice: 58000,
    category: "Beds",
    material: "Fabric",
    images: [
      "/bed_lifestyle.png",
      "/cat_bed_premium.png",
      "/bed_lifestyle.png",
      "/cat_bed_premium.png"
    ],
    options: {
      sizes: [
        { id: "queen", label: "Queen Size", priceMod: 0 },
        { id: "king", label: "King Size", priceMod: 10000 },
      ],
      fabrics: [
        { id: "cotton", label: "Organic Cotton", priceMod: 0 },
        { id: "velvet", label: "Luxe Velvet", priceMod: 4000 }
      ],
      colors: [
        { id: "beige", label: "Warm Beige", color: "#F5F5DC" },
        { id: "grey", label: "Cool Grey", color: "#A9A9A9" }
      ]
    }
  },
  "4": {
    id: "4",
    name: "Zen Sliding Wardrobe",
    description: "Maximize your storage with the Zen Sliding Wardrobe. Minimalist Japanese-inspired design that hides clutter and brings peace to your bedroom.",
    basePrice: 42000,
    category: "Storage",
    material: "Teak Wood",
    images: [
      "/wardrobe_lifestyle.png",
      "/cat_storage_wardrobe.png",
      "/wardrobe_lifestyle.png",
      "/cat_storage_wardrobe.png"
    ],
    options: {
      sizes: [
        { id: "6ft", label: "6 ft Wide", priceMod: 0 },
        { id: "8ft", label: "8 ft Wide", priceMod: 12000 },
      ],
      fabrics: [],
      colors: [
        { id: "oak", label: "Light Oak", color: "#C19A6B" },
        { id: "white", label: "Matte White", color: "#FFFFFF" }
      ]
    }
  },
  "5": {
    id: "5",
    name: "Modern Leather Armchair",
    description: "A mid-century modern icon. This leather armchair features a solid walnut frame and premium full-grain Italian leather, perfect for your reading corner.",
    basePrice: 28500,
    category: "Chairs",
    material: "Leather",
    images: [
       "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c"
    ],
    options: {
      sizes: [
        { id: "standard", label: "Standard", priceMod: 0 },
        { id: "wide", label: "Wide Seat", priceMod: 4000 },
      ],
      fabrics: [
        { id: "leather", label: "Full Grain Leather", priceMod: 0 },
      ],
      colors: [
        { id: "cognac", label: "Cognac Brown", color: "#9A3324" },
        { id: "black", label: "Midnight Black", color: "#1a1a1a" }
      ]
    }
  },





  "6": {
    id: "6",
    name: "Lol",
    description: "A mid-century modern icon. This leather armchair features a solid walnut frame and premium full-grain Italian leather, perfect for your reading corner.",
    basePrice: 28500,
    category: "Chairs",
    material: "Leather",
    images: [
       "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c"
    ],
    options: {
      sizes: [
        { id: "standard", label: "Standard", priceMod: 0 },
        { id: "wide", label: "Wide Seat", priceMod: 4000 },
      ],
      fabrics: [
        { id: "leather", label: "Full Grain Leather", priceMod: 0 },
      ],
      colors: [
        { id: "cognac", label: "Cognac Brown", color: "#9A3324" },
        { id: "black", label: "Midnight Black", color: "#1a1a1a" }
      ]
    }
  },

  "7": {
    id: "7",
    name: "Lol",
    description: "A mid-century modern icon. This leather armchair features a solid walnut frame and premium full-grain Italian leather, perfect for your reading corner.",
    basePrice: 28500,
    category: "Chairs",
    material: "Leather",
    images: [
       "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c"
    ],
    options: {
      sizes: [
        { id: "standard", label: "Standard", priceMod: 0 },
        { id: "wide", label: "Wide Seat", priceMod: 4000 },
      ],
      fabrics: [
        { id: "leather", label: "Full Grain Leather", priceMod: 0 },
      ],
      colors: [
        { id: "cognac", label: "Cognac Brown", color: "#9A3324" },
        { id: "black", label: "Midnight Black", color: "#1a1a1a" }
      ]
    }
  }

  
};


