import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag, X, Trash2, Plus, Minus, ShoppingCart } from "lucide-react";

interface CartItemType {
  cartItemId: string;
  dishId: string;
  name: string;
  description?: string;
  image?: string;
  price: number;
  quantity: number;
}

const Cart: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleCheckout = () => {
    navigate("/checkout");
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  const subTotal = cartItems.reduce((s: number, i: CartItemType) => s + i.price * i.quantity, 0);
  const discount = 0;
  const deliveryFee = subTotal > 0 ? 2.5 : 0;
  const totalToPay = subTotal + deliveryFee + discount;
  const isCartEmpty = cartItems.length === 0;
  const meetsMinimum = subTotal >= 20;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-red-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6" />
            <h2 className="text-2xl font-bold text-neutral-100">My Cart</h2>
          </div>
          <button
            onClick={handleClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {isCartEmpty ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <ShoppingCart className="w-20 h-20 text-neutral-300 mb-4" />
              <p className="text-xl font-semibold text-neutral-600 mb-2">Your cart is empty</p>
              <p className="text-neutral-500">Add some delicious items to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item: CartItemType) => (
                <div
                  key={item.cartItemId}
                  className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  {/* Quantity Badge */}
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    x {item.quantity}
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="text-md font-bold text-neutral-900 line-clamp-1">{item.name}</p>
                      <p className="font-bold text-primary whitespace-nowrap">${item.price.toFixed(2)}</p>
                    </div>
                    {item.description && (
                      <p className="text-sm text-neutral-600 line-clamp-1 mb-2">{item.description}</p>
                    )}

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, -1)}
                        className="w-8 h-8 bg-white border border-neutral-300 rounded-lg flex items-center justify-center hover:bg-neutral-50 transition-colors"
                      >
                        <Minus className="w-4 h-4 text-neutral-600" />
                      </button>
                      <span className="font-semibold text-neutral-900 w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, 1)}
                        className="w-8 h-8 bg-white border border-neutral-300 rounded-lg flex items-center justify-center hover:bg-neutral-50 transition-colors"
                      >
                        <Plus className="w-4 h-4 text-neutral-600" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="ml-auto w-8 h-8 bg-red-50 text-red-600 rounded-lg flex items-center justify-center hover:bg-red-100 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Totals Section */}
        {!isCartEmpty && (
          <div className="border-t border-neutral-200 p-6 bg-neutral-50">
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-neutral-700">
                <span>Subtotal</span>
                <span className="font-semibold">${subTotal.toFixed(2)}</span>
              </div>
              {discount !== 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span className="font-semibold">${Number(discount).toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-neutral-700">
                <span>Delivery Fee</span>
                <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-neutral-900 pt-3 border-t border-neutral-300">
                <span>Total</span>
                <span className="text-primary">${totalToPay.toFixed(2)}</span>
              </div>
            </div>

            {/* Minimum Order Warning */}
            {!meetsMinimum && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-yellow-800">
                  <span className="font-semibold">Minimum order $20.</span> Add{" "}
                  <span className="font-bold">${(20 - subTotal).toFixed(2)} more</span> to checkout.
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => clearCart()}
                className="px-4 py-3 bg-neutral-200 text-neutral-700 rounded-lg font-semibold hover:bg-neutral-300 transition-colors"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                disabled={isCartEmpty || !meetsMinimum}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all ${isCartEmpty || !meetsMinimum
                  ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                  : "bg-yellow-500 text-neutral-900 hover:shadow-sm hover:scale-[1.01]"
                  }`}
              >
                {isCartEmpty ? "Cart is Empty" : !meetsMinimum ? "Minimum $20" : "Proceed to Checkout"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
