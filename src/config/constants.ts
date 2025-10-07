/**
 * Application-wide constants
 */

// Polling & Refresh Intervals
export const POLLING_INTERVAL = 10 * 60 * 1000; // 10 minutes in milliseconds

// Order Configuration
export const MIN_ORDER_AMOUNT = 20;
export const DELIVERY_FEE = 2.5;

// API Configuration
export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

// Scroll Configuration
export const SCROLL_OFFSET = 200; // Offset for scroll-based category detection

// Animation Durations
export const ANIMATION_DURATION = {
  fast: 0.3,
  medium: 0.6,
  slow: 0.8,
} as const;
