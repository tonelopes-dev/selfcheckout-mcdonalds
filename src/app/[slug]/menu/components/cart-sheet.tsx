"use client";

import { useParams, useRouter } from "next/navigation";
import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext } from "../contexts/cart";
import CartProductItem from "./cart-product-item";
import FinishOrderDialog from "./finish-order-dialog";

const CartSheet = () => {
  const [finishOrderDialogIsOpen, setFinishOrderDialogIsOpen] = useState(false);
  const [whatsappDialogIsOpen, setWhatsappDialogIsOpen] = useState(false);
  const { isOpen, toggleCart, products, total, clearCart } = useContext(CartContext);
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();

  const handleWhatsappRedirect = () => {
    const message = `Olá, gostaria de fazer esse pedido:\n\n${products.map(product => 
      `${product.name}:\nQuantidade: ${product.quantity}x\nPreço unitário: ${formatCurrency(product.price)}\nSubtotal: ${formatCurrency(product.price * product.quantity)}\n`
    ).join('\n')} \nTotal: ${formatCurrency(total)}`;
    
    window.open(`https://api.whatsapp.com/send?phone=+5584998186072&text=${encodeURIComponent(message)}`, '_blank');
    setWhatsappDialogIsOpen(false);
    clearCart();
    router.push(`/${slug}`);
  };

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-[80%]">
        <SheetHeader>
          <SheetTitle className="text-left">Sacola</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col py-5">
          <div className="flex-auto ">
            {products.map((product) => (
              <CartProductItem key={product.id} product={product} />
            ))}
          </div>
          <Card className="mb-6">
            <CardContent className="p-5">
              <div className="flex justify-between">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-sm font-semibold">{formatCurrency(total)}</p>
              </div>
            </CardContent>
          </Card>
          {/* <Button
            className="w-full rounded-full"
            onClick={() => setFinishOrderDialogIsOpen(true)}
          >
            Finalizar pedido
          </Button> */}
          <Button
            className="w-full rounded-full mt-4 bg-[#25D366] hover:bg-[#128C7E]"
            onClick={() => setWhatsappDialogIsOpen(true)}
          >
            Finalizar pedido pelo WhatsApp
          </Button>
          <FinishOrderDialog
            open={finishOrderDialogIsOpen}
            onOpenChange={setFinishOrderDialogIsOpen}
          />
          <Dialog open={whatsappDialogIsOpen} onOpenChange={setWhatsappDialogIsOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Redirecionando para o WhatsApp</DialogTitle>
                <DialogDescription className="mt-4">
                  Você será redirecionado para o WhatsApp para enviar seu pedido. Deseja continuar?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setWhatsappDialogIsOpen(false)}>
                  Cancelar
                </Button>
                <Button onClick={handleWhatsappRedirect}>
                  Continuar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
