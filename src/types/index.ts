/**
 * Core type definitions used across the application
 */

// ============ Dish & Menu Types ============
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

// ============ Cart Types ============
export interface CartItem {
  cartItemId: string;
  dishId: string;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    item: Omit<CartItem, "cartItemId" | "quantity">,
    quantity: number
  ) => Promise<void>;
  updateQuantity: (cartItemId: string, change: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
}

// ============ Order Types ============
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

// ============ User Types ============
export interface User {
  userId: string;
  userName: string;
  email?: string;
  phoneNumber: string;
  address: string;
  reward?: number;
  discount?: number;
}

export interface UserData {
  data: {
    userName: string;
    phoneNumber: string;
    address: string;
    userId: string;
  };
}

// ============ Navigation Types ============
export interface NavLink {
  path: string;
  label: string;
}

export interface FooterLink {
  label: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "instagram" | "mail" | "phone";
  ariaLabel: string;
}

// ============ Review Types ============
export interface Review {
  id: number;
  name: string;
  location: string;
  date: string;
  rating: number;
  review: string;
}

// ============ Service Types ============
export interface Service {
  name: string;
  image: string;
  alt: string;
}

// ============ Component Props Types ============
export interface ModalProps {
  onClose: () => void;
}

export interface PromoModalProps extends ModalProps {
  onApplyPromo: (discount: number) => void;
}

export interface LargeImageViewProps {
  title: string;
  description: string;
}

export interface RedButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export interface InputSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export interface ArchedCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  bgColor?: string;
}

// ============ Slider Types ============
export interface SliderProps {
  images?: string[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

export interface DineInMenuItem {
  name: string;
  image: string;
  price: number;
  description?: string;
}

export interface DineInMenuSliderProps {
  items: DineInMenuItem[];
}

// ============ Firebase/Auth Types ============
export interface FirebaseUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface AuthHookReturn {
  isAuthenticated: boolean;
  user: FirebaseUser | null;
  loading: boolean;
}

// ============ Hook Return Types ============
export interface UseDishesReturn {
  dishes: Dish[];
  loading: boolean;
  error: Error | null;
}

export interface UseCategoriesReturn {
  categories: string[];
  loading: boolean;
  error: Error | null;
}

// ============ Payment Types ============
export interface PaymentGateProps {
  amount: number;
  order: Array<{
    cartItemId: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  user: UserData;
}

// ============ Event Handler Types ============
export type ClickHandler = () => void;
export type ChangeHandler = (value: string) => void;
export type FormSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void;
export type InputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type TextareaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
export type SelectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => void;
