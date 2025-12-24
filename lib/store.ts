import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  options?: {
    size?: string;
    fabric?: string;
    color?: string;
  };
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => {
        const existing = state.items.find((i) => i.productId === item.productId && JSON.stringify(i.options) === JSON.stringify(item.options));
        if (existing) {
          return {
            items: state.items.map((i) => i.id === existing.id ? { ...i, quantity: i.quantity + item.quantity } : i),
          };
        }
        return { items: [...state.items, { ...item, id: Math.random().toString(36).substr(2, 9) }] };
      }),
      removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      updateQuantity: (id, quantity) => set((state) => ({
        items: state.items.map((i) => i.id === id ? { ...i, quantity } : i),
      })),
      clearCart: () => set({ items: [] }),
      totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
      totalPrice: () => get().items.reduce((acc, item) => acc + (item.price * item.quantity), 0),
    }),
    {
      name: 'cart-storage',
    }
  )
);
