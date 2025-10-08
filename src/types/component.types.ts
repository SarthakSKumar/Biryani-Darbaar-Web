/**
 * Component props type definitions
 */

// ============ Modal Props ============
export interface ModalProps {
  onClose: () => void;
}

export interface PromoModalProps extends ModalProps {
  onApplyPromo: (discount: number) => void;
}

// ============ Image & Card Props ============
export interface LargeImageViewProps {
  title: string;
  description: string;
}

export interface ArchedCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  bgColor?: string;
}

// ============ Button Props ============
export interface RedButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

// ============ Input Props ============
export interface InputSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

// ============ Slider Props ============
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
