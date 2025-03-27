"use client";

import { Product } from "@prisma/client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext } from "../contexts/cart";

interface ProductsProps {
  products: Product[];
}

const Products = ({ products }: ProductsProps) => {
  const { slug } = useParams<{ slug: string }>();
  const searchParams = useSearchParams();
  const consumptionMethod = searchParams.get("consumptionMethod");
  const { toggleCart, addProduct } = useContext(CartContext);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const handleDecreaseQuantity = (productId: string) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) - 1),
    }));
  };

  const handleIncreaseQuantity = (productId: string) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1,
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    addProduct({
      ...product,
      quantity,
    });
    toggleCart();
  };

  return (
    <div className="space-y-3 px-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between gap-10 border-b py-3"
        >
          {/* ESQUERDA */}
          <div className="flex-1">
            <Link
              href={`/${slug}/menu/${product.id}?consumptionMethod=${consumptionMethod}`}
            >
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {product.description}
              </p>
            </Link>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm font-semibold">
                {formatCurrency(product.price)}
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => handleDecreaseQuantity(product.id)}
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                  </Button>
                  <span className="w-4 text-center">
                    {quantities[product.id] || 1}
                  </span>
                  <Button
                    variant="destructive"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => handleIncreaseQuantity(product.id)}
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => handleAddToCart(product)}
                >
                  Adicionar
                </Button>
              </div>
            </div>
          </div>

          {/* DIREITA */}
          <Link
            href={`/${slug}/menu/${product.id}?consumptionMethod=${consumptionMethod}`}
            className="relative min-h-[82px] min-w-[120px]"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="rounded-lg object-contain"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
