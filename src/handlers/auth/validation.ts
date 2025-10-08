// Validation utility functions

export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email is required';
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters';
  if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter';
  if (!/[a-z]/.test(password)) return 'Password must contain at least one lowercase letter';
  if (!/[0-9]/.test(password)) return 'Password must contain at least one number';
  return null;
};

export const validateName = (name: string, fieldName: string = 'Name'): string | null => {
  if (!name) return `${fieldName} is required`;
  if (name.length < 2) return `${fieldName} must be at least 2 characters`;
  return null;
};

export const validatePhoneNumber = (phone: string): string | null => {
  if (!phone) return 'Phone number is required';
  const phoneRegex = /^\d{10,15}$/;
  if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
    return 'Please enter a valid phone number (10-15 digits)';
  }
  return null;
};

export const validateAddress = (address: string): string | null => {
  if (!address) return 'Address is required';
  if (address.length < 10) return 'Address must be at least 10 characters';
  return null;
};

export const validateConfirmPassword = (password: string, confirmPassword: string): string | null => {
  if (!confirmPassword) return 'Please confirm your password';
  if (password !== confirmPassword) return 'Passwords do not match';
  return null;
};
