/**
 * Core type definitions used across the application
 */

export interface Dish {
  dishId: string;
  name?: string;
  dishName?: string;
  description: string;
  image: string;
  price: number;
  addons?: Addon[];
}

export interface Addon {
  addonName: string;
  price: string | number;
}

export interface CartItem {
  cartItemId: string;
  dishId: string;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

export interface Order {
  orderId: string;
  orderItems: OrderItem[];
  totalPrice: number;
  orderDate: string;
  orderStatus: string;
  customerAddress: string;
}

export interface OrderItem {
  dishId: string;
  dishName: string;
  quantity: number;
  price: number;
}

export type ShippingMethod = "delivery" | "pickup";

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}
