import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, Package, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
//TODO: REFACTOR
const Checkout: React.FC = () => {
    const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    const [shippingMethod, setShippingMethod] = useState<"delivery" | "pickup">("delivery");
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipCode: ""
    });

    const subTotal = cartItems.reduce((sum: number, item) => sum + item.price * item.quantity, 0);
    const minOrder = 20;
    const needsMore = Math.max(0, minOrder - subTotal);
    const deliveryFee = shippingMethod === "delivery" ? 2.5 : 0;
    const total = subTotal + deliveryFee;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePlaceOrder = () => {
        if (subTotal < minOrder) return;

        // Validate required fields
        const requiredFields = ['fullName', 'phone'];
        if (shippingMethod === 'delivery') {
            requiredFields.push('address', 'city', 'state', 'zipCode');
        }

        const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
        if (missingFields.length > 0) {
            alert(`Please fill in: ${missingFields.join(', ')}`);
            return;
        }

        // For now, just show an alert - you can integrate with payment gateway here
        alert("Order placed successfully! (This is a demo)");
        clearCart();
        navigate("/");
    };

    return (
        <div className="flex flex-col gap-20 md:gap-28 pt-12">
            <div className="container-custom section-spacing">
                {/* Header */}
                <motion.div
                    className="flex items-center gap-4 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >

                    <h1 className="text-5xl font-bold text-neutral-800">Checkout</h1>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left: Shipping Information */}
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        {/* Shipping Method */}
                        <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                            <h2 className="text-xl font-semibold mb-4 text-neutral-800">Delivery Method</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${shippingMethod === "delivery"
                                        ? "border-green-500 bg-green-50"
                                        : "border-neutral-200 hover:border-neutral-300"
                                        }`}
                                    onClick={() => setShippingMethod("delivery")}
                                >
                                    <div className="flex items-center justify-center mb-2">
                                        <Truck className={`w-6 h-6 ${shippingMethod === "delivery" ? "text-green-600" : "text-neutral-500"}`} />
                                    </div>
                                    <p className="font-medium text-center">Delivery</p>
                                    <p className="text-sm text-neutral-500 text-center">$2.50 fee</p>
                                </button>

                                <button
                                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${shippingMethod === "pickup"
                                        ? "border-blue-500 bg-blue-50"
                                        : "border-neutral-200 hover:border-neutral-300"
                                        }`}
                                    onClick={() => setShippingMethod("pickup")}
                                >
                                    <div className="flex items-center justify-center mb-2">
                                        <Package className={`w-6 h-6 ${shippingMethod === "pickup" ? "text-blue-600" : "text-neutral-500"}`} />
                                    </div>
                                    <p className="font-medium text-center">Pickup</p>
                                    <p className="text-sm text-neutral-500 text-center">Free</p>
                                </button>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                            <h2 className="text-xl font-semibold mb-4 text-neutral-800">Contact Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Address Information (only for delivery) */}
                        {shippingMethod === "delivery" && (
                            <motion.div
                                className="bg-white rounded-2xl p-6 border border-neutral-200"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2 className="text-xl font-semibold mb-4 text-neutral-800">Delivery Address</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">Street Address *</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                            placeholder="Enter your street address"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-700 mb-2">City *</label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                                placeholder="City"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-700 mb-2">State *</label>
                                            <input
                                                type="text"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                                placeholder="State"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-neutral-700 mb-2">ZIP Code *</label>
                                            <input
                                                type="text"
                                                name="zipCode"
                                                value={formData.zipCode}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                                placeholder="ZIP"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Right: Order Summary */}
                    <motion.div
                        className="bg-white rounded-2xl p-6 border border-neutral-200 h-fit"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-neutral-900">Order Summary</h2>
                            <button
                                onClick={() => clearCart()}
                                className="text-sm px-4 py-2 rounded-lg border border-red-500 text-red-600 hover:bg-red-50 transition-colors font-medium flex items-center gap-2"
                                title="Clear all items"
                            >
                                <Trash2 className="w-4 h-4" />
                                Clear Cart
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="space-y-4 max-h-96 overflow-y-auto mb-6">
                            {cartItems.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-neutral-500 mb-4">Your cart is empty</p>
                                    <button
                                        onClick={() => navigate("/order")}
                                        className="text-green-600 hover:text-green-700 font-medium"
                                    >
                                        Browse Menu
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.cartItemId} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg">
                                        {item.image ? (
                                            <img src={item.image} alt={`Biryani Darbaar - ${item.name}`} className="w-12 h-12 rounded-full object-cover" />
                                        ) : (
                                            <div className="w-12 h-12 bg-neutral-200 rounded-full" />
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-medium text-neutral-800 truncate">{item.name}</h4>
                                            <p className="text-xs text-neutral-500">${item.price.toFixed(2)} each</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => updateQuantity(item.cartItemId, -1)}
                                                className="w-8 h-8 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center transition-colors"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.cartItemId, 1)}
                                                className="w-8 h-8 rounded-full bg-neutral-200 hover:bg-neutral-300 flex items-center justify-center transition-colors"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => removeFromCart(item.cartItemId)}
                                                className="ml-2 text-red-500 hover:text-red-700 transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Order Totals */}
                        {cartItems.length > 0 && (
                            <>
                                <div className="space-y-3 pb-4 border-b border-neutral-200">
                                    <div className="flex justify-between text-neutral-600">
                                        <span>Subtotal ({cartItems.reduce((sum: number, item) => sum + item.quantity, 0)} items)</span>
                                        <span>${subTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-neutral-600">
                                        <span>Delivery Fee</span>
                                        <span>{deliveryFee > 0 ? `$${deliveryFee.toFixed(2)}` : "Free"}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between text-xl font-bold text-neutral-800 mt-4 mb-6">
                                    <span>Total</span>
                                    <span className="text-green-600">${total.toFixed(2)}</span>
                                </div>

                                {/* Minimum Order Warning */}
                                {subTotal < minOrder && (
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                                        <p className="text-red-700 text-sm text-center">
                                            Minimum order is ${minOrder}. Add ${needsMore} more to proceed.
                                        </p>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="space-y-3">
                                    <button
                                        onClick={handlePlaceOrder}
                                        disabled={subTotal < minOrder || cartItems.length === 0}
                                        className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-200 ${subTotal >= minOrder && cartItems.length > 0
                                            ? "bg-green-600 hover:bg-green-700 text-white border border-green-600"
                                            : "bg-neutral-300 text-neutral-500 cursor-not-allowed border border-neutral-300"
                                            }`}
                                    >
                                        {subTotal >= minOrder ? "Place Order" : `Add $${needsMore} to Order`}
                                    </button>

                                    <button
                                        onClick={() => clearCart()}
                                        className="w-full py-3 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50 transition-all duration-200"
                                    >
                                        Clear Cart
                                    </button>
                                </div>
                            </>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;