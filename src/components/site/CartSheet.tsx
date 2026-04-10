'use client';

import { useCart } from '@/context/CartContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Trash2, Plus, Minus } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

export default function CartSheet() {
  const { isCartOpen, setIsCartOpen, cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="flex-grow pr-4">
              <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                        src={item.coverImage}
                        alt={item.name}
                        fill
                        className="object-cover"
                        />
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <SheetFooter className="mt-4">
              <div className="w-full space-y-4">
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <Button className="w-full" size="lg">
                  Checkout
                </Button>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <p className="text-lg font-semibold">Your cart is empty</p>
            <p className="text-muted-foreground mt-2">
              Add some products to get started.
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
