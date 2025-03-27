import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext, CartProduct } from "../contexts/cart";

interface CartItemProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity, increaseProductQuantity, removeProduct } =
    useContext(CartContext);
  return (
    <div className="flex items-center justify-start w-full mb-6">
      {/* ESQUERDA */}
      <div className="flex items-center gap-3 w-full justify-between">
        <div className="relative h-20 w-20 rounded-xl bg-gray-100">
          <Image src={product.imageUrl} alt={product.name} fill />
        </div>
        
        <div className="space-y-2 w-[80%] ">
        <p className="max-w-[90%] truncate text-ellipsis text-xs">
            {product.name}
          </p>
          <div className="flex flex-row justify-between">
          
          <p className="text-sm font-semibold">
            {formatCurrency(product.price)}
          </p>
          
          {/* BOTÃO DE DELETAR */}
      <Button
        className="h-7 w-7 rounded-lg"
        variant="outline"
        onClick={() => removeProduct(product.id)}
      >
        <TrashIcon />
      </Button></div>
          
         
          <div className="flex justify-between"> 
             {/* total price with quantity */}
          <p className="text-sm font-normal">
            {formatCurrency(product.price * product.quantity)}
          </p>
            {/* QUANTIDADE */}
          <div className="flex items-center gap-1 text-center">
            <Button
              className="h-7 w-7 rounded-lg"
              variant="outline"
              onClick={() => decreaseProductQuantity(product.id)}
            >
              <ChevronLeftIcon />
            </Button>
            <p className="w-7 text-xs">{product.quantity}</p>
            <Button
              className="h-7 w-7 rounded-lg"
              variant="destructive"
              onClick={() => increaseProductQuantity(product.id)}
            >
              <ChevronRightIcon />
            </Button></div>
         
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default CartProductItem;
