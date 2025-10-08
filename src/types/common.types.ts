/**
 * Common types shared across the application
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

// ============ Event Handler Types ============
export type ClickHandler = () => void;
export type ChangeHandler = (value: string) => void;
export type FormSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void;
export type InputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type TextareaChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
export type SelectChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => void;
