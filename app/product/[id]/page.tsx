import { products } from "@/lib/products";
import { ProductDetailClient } from "@/components/product/ProductDetailClient";

export async function generateStaticParams() {
  return Object.keys(products).map((id) => ({
    id: id,
  }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ProductDetailClient productId={id} />;
}
