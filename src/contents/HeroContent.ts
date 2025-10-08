/**
 * Hero Section Content Configuration
 */

export interface HeroBadge {
  icon: string;
  text: string;
  bgColor: string;
  iconBgColor: string;
}

export interface HeroButton {
  text: string;
  link: string;
  icon: string;
  alt: string;
  variant: "active" | "inactive";
}

export interface HeroCard {
  position: string;
  image: string;
  title: string;
  subtitle: string;
  price?: string;
}

export interface HeroAppStoreImage {
  src: string;
  alt: string;
}

export interface HeroRotatingMeal {
  src: string;
  alt: string;
  position: string;
  size: string;
}

export interface HeroStatBadge {
  icon: string;
  title: string;
  rating: string;
  reviews: string;
  position: string;
}

export const heroContent = {
  mainHeading: {
    line1: "Experience The",
    line2: "Ultimate Taste Best",
    line3: "Biryani In Adelaide",
  },
  subHeading: "Specializing in Mughlai Cuisine",
  badge: {
    icon: "heart",
    text: "Trusted by food lovers across Adelaide",
    bgColor: "bg-primary bg-opacity-10",
    iconBgColor: "bg-primary",
  } as HeroBadge,
  searchPlaceholder: "Explore our Delicacies",
  buttons: [
    {
      text: "Order Food",
      link: "/Order",
      icon: "/assets/icons/order.png",
      alt: "Biryani Darbaar - Order",
      variant: "active" as const,
    },
    {
      text: "Book Catering Services",
      link: "/Contact",
      icon: "/assets/icons/catering.png",
      alt: "Biryani Darbaar - Catering",
      variant: "active" as const,
    },
  ] as HeroButton[],
  appStoreImages: [
    {
      src: "/assets/images/play-store.png",
      alt: "Biryani Darbaar - Download on Android",
    },
    {
      src: "/assets/images/app-store.png",
      alt: "Biryani Darbaar - Download on iOS",
    },
  ] as HeroAppStoreImage[],
  statBadge: {
    icon: "smile",
    title: "Our Happy Customer",
    rating: "4.9",
    reviews: "(1989 Reviews)",
    position: "absolute top-0 right-0",
  } as HeroStatBadge,
  dishCard: {
    position: "absolute -left-20 top-16",
    image: "/assets/icons/biryani.png",
    title: "Chicken Biryani",
    subtitle: "@ Just $9.50",
  } as HeroCard,
  heroImage: {
    src: "/assets/images/hero-model.png",
    alt: "Biryani Darbaar - Food delivery",
  },
  rotatingMeals: [
    {
      src: "/assets/images/rounded-meal/rounded-meal-1.png",
      alt: "Biryani Darbaar",
      position: "absolute -bottom-8 -left-32",
      size: "w-44",
    },
    {
      src: "/assets/images/rounded-meal/rounded-meal-2.png",
      alt: "Biryani Darbaar",
      position: "absolute -bottom-32 left-4",
      size: "w-56",
    },
    {
      src: "/assets/images/rounded-meal/rounded-meal-3.png",
      alt: "Biryani Darbaar",
      position: "absolute -bottom-32 right-2",
      size: "w-52",
    },
    {
      src: "/assets/images/rounded-meal/rounded-meal-4.png",
      alt: "Biryani Darbaar",
      position: "absolute top-56 -right-32",
      size: "w-54",
    },
  ] as HeroRotatingMeal[],
};
