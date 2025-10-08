# 🚀 API Refactoring Complete - Migration Guide

## Overview

All API calls have been centralized into a structured `/apis` folder with proper organization by resource type and HTTP method.

## New Structure

```
src/apis/
├── axiosInstance.ts          # Base axios instance configuration
├── axiosInterceptor.ts       # Request/Response interceptors with auto token refresh
├── index.ts                  # Central export file
├── auth/
│   ├── POST.ts              # registerUser, loginUser, loginWithGoogle, signupWithGoogle
│   ├── DELETE.ts            # refreshAccessToken, logoutUser
│   └── index.ts
├── categories/
│   ├── GET.ts               # getCategories
│   └── index.ts
├── dishes/
│   ├── GET.ts               # getDishesByCategory, getSpecialOffers
│   └── index.ts
├── cart/
│   ├── GET.ts               # getCartItems
│   ├── POST.ts              # addToCart
│   ├── PUT.ts               # updateCartItem
│   ├── DELETE.ts            # deleteCartItem
│   └── index.ts
├── user/
│   ├── GET.ts               # getUserById
│   └── index.ts
├── payment/
│   ├── POST.ts              # createPaymentIntent
│   └── index.ts
├── promo/
│   ├── POST.ts              # validatePromoCode
│   └── index.ts
├── contact/
│   ├── POST.ts              # submitContactForm
│   └── index.ts
└── orders/
    ├── GET.ts               # getOrders
    ├── POST.ts              # createOrder
    ├── DELETE.ts            # deleteCartItemsAfterOrder
    └── index.ts
```

## Key Features

### 1. Axios Instance (`axiosInstance.ts`)

- Base URL configuration from environment
- 15-second timeout
- Default headers

### 2. Axios Interceptor (`axiosInterceptor.ts`)

- **Request Interceptor**: Auto-attaches JWT tokens to requests
- **Response Interceptor**:
  - Auto-extracts `data` from `{ success, statusCode, data }` API response format
  - Handles 401 errors with automatic token refresh
  - Redirects to home on auth failure

### 3. Type Safety

- All API functions have proper TypeScript interfaces
- Request and response types defined
- Eliminates manual type casting

## Migration Status

### ✅ **Completed Files:**

1. `src/hooks/useCategories.ts`
2. `src/hooks/useDishes.ts`
3. `src/pages/Home.tsx`
4. `src/pages/Menu.tsx`
5. `src/pages/SpecialOffers.tsx`
6. `src/components/bars/MenuBar.tsx`

### 🔄 **Files Remaining to Update:**

1. `src/pages/Contact.tsx` - submitContactForm
2. `src/providers/CartProvider.tsx` - getCartItems, addToCart, updateCartItem, deleteCartItem
3. `src/components/PaymentGate.tsx` - createPaymentIntent, createOrder, deleteCartItemsAfterOrder
4. `src/components/modals/PromoModal.tsx` - validatePromoCode
5. `src/components/modals/PayMod.tsx` - getUserById, createOrder
6. `src/pages/order/MainOrderLayout.tsx` - getDishesByCategory, getOrders
7. `src/components/login.tsx` - loginWithGoogle, signupWithGoogle
8. `src/contexts/AuthContext.tsx` - registerUser, loginUser, refreshAccessToken (if still using old authApi)
9. `src/handlers/auth/authApi.ts` - Can be DEPRECATED (use apis/auth instead)
10. `src/handlers/auth/apiClient.ts` - Can be DEPRECATED (use axiosInterceptor instead)

## Usage Examples

### Before:

```typescript
import axios from "axios";

const response = await axios.get(
  `${import.meta.env.VITE_API_ENDPOINT}/categories`
);
setCategories(response.data.data || []);
```

### After:

```typescript
import { categoriesAPI } from "@/apis";

const data = await categoriesAPI.getCategories();
setCategories(data);
```

### Benefits:

1. ✅ No manual `response.data.data` extraction
2. ✅ Auto token refresh on 401
3. ✅ Type-safe requests and responses
4. ✅ Centralized API logic
5. ✅ Easy to mock for testing
6. ✅ Single source of truth for API endpoints

## API Functions Reference

### Auth API

```typescript
import { authAPI } from "@/apis";

// Register
await authAPI.registerUser({
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  address,
});

// Login
await authAPI.loginUser({ email, password });

// Login with Google
await authAPI.loginWithGoogle({ idToken });

// Logout
await authAPI.logoutUser(accessToken);

// Refresh token
await authAPI.refreshAccessToken(refreshToken);
```

### Categories API

```typescript
import { categoriesAPI } from "@/apis";

const categories = await categoriesAPI.getCategories();
```

### Dishes API

```typescript
import { dishesAPI } from "@/apis";

const dishes = await dishesAPI.getDishesByCategory("Biryani's");
const offers = await dishesAPI.getSpecialOffers();
```

### Cart API

```typescript
import { cartAPI } from "@/apis";

const items = await cartAPI.getCartItems({ userId });
await cartAPI.addToCart({ userId, dishId, name, image, price, quantity });
await cartAPI.updateCartItem(cartItemId, { userId, quantity });
await cartAPI.deleteCartItem(cartItemId);
```

### User API

```typescript
import { userAPI } from "@/apis";

const user = await userAPI.getUserById(userId);
```

### Payment API

```typescript
import { paymentAPI } from "@/apis";

const { clientSecret } = await paymentAPI.createPaymentIntent({
  amount: 100,
  currency: "AUD",
});
```

### Promo API

```typescript
import { promoAPI } from "@/apis";

const result = await promoAPI.validatePromoCode({ promoCode: "SAVE10" });
```

### Contact API

```typescript
import { contactAPI } from "@/apis";

await contactAPI.submitContactForm({
  firstName,
  lastName,
  phoneNumber,
  email,
  description,
});
```

### Orders API

```typescript
import { ordersAPI } from "@/apis";

const orders = await ordersAPI.getOrders(userId);
await ordersAPI.createOrder({
  userId,
  userName,
  phoneNumber,
  address,
  orderItems,
  totalPrice,
});
await ordersAPI.deleteCartItemsAfterOrder(cartItemIds);
```

## Next Steps

1. Complete migration of remaining files
2. Remove deprecated `handlers/auth/` folder
3. Update all imports to use new API structure
4. Add unit tests for API functions
5. Consider adding API response caching
6. Add retry logic for failed requests

## Error Handling

All API functions throw errors that should be caught:

```typescript
try {
  const data = await categoriesAPI.getCategories();
  setCategories(data);
} catch (error) {
  console.error("Error fetching categories:", error);
  // Handle error (show toast, fallback, etc.)
}
```

The interceptor automatically:

- Refreshes tokens on 401 errors
- Redirects to home on auth failures
- Extracts data from standard API response format

## Testing

Mock API calls easily:

```typescript
import { categoriesAPI } from "@/apis";

jest.mock("@/apis", () => ({
  categoriesAPI: {
    getCategories: jest.fn().mockResolvedValue(["Biryani's", "Starters"]),
  },
}));
```

---

**Status**: 🟡 In Progress (6/16 files migrated)
**Next Priority**: Complete remaining file migrations
