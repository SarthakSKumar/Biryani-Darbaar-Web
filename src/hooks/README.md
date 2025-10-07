# Hooks Documentation

This directory contains custom React hooks that consolidate repeated logic across the application.

## Available Hooks

### `useAuth()`

Manages authentication state using Firebase.

**Usage:**
```tsx
import { useAuth } from "@/hooks/useAuth";

function MyComponent() {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) return <Loading />;

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {user?.email}</p>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
}
```

**Returns:**
- `isAuthenticated: boolean` - Whether user is logged in
- `user: User | null` - Firebase user object
- `loading: boolean` - Auth state loading status

---

### `useCategories()`

Fetches menu categories from the API.

**Usage:**
```tsx
import { useCategories } from "@/hooks/useCategories";

function CategoryList() {
  const { categories, loading, error } = useCategories();

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <ul>
      {categories.map((cat) => (
        <li key={cat}>{cat}</li>
      ))}
    </ul>
  );
}
```

**Returns:**
- `categories: string[]` - Array of category names
- `loading: boolean` - Loading state
- `error: Error | null` - Error object if request failed

---

### `useDishes(category)`

Fetches dishes for a specific category.

**Usage:**
```tsx
import { useDishes } from "@/hooks/useDishes";

function DishList({ category }: { category: string }) {
  const { dishes, loading, error } = useDishes(category);

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <div>
      {dishes.map((dish) => (
        <DishCard key={dish.dishId} dish={dish} />
      ))}
    </div>
  );
}
```

**Parameters:**
- `category: string` - The category to fetch dishes for

**Returns:**
- `dishes: Dish[]` - Array of dishes (see `@/types/index.ts` for `Dish` type)
- `loading: boolean` - Loading state
- `error: Error | null` - Error object if request failed

---

## Migration Guide

### Before (Repeated Logic)
```tsx
const [categories, setCategories] = useState<string[]>([]);

useEffect(() => {
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_ENDPOINT}/categories`
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  fetchCategories();
}, []);
```

### After (Using Hook)
```tsx
import { useCategories } from "@/hooks/useCategories";

const { categories, loading, error } = useCategories();
```

**Benefits:**
- ✅ Less code
- ✅ Consistent error handling
- ✅ Type-safe
- ✅ Reusable
- ✅ Easier to test

---

## Future Hooks to Consider

### `useCart()`
Consolidate cart operations (already have `useCart` from context, but could enhance with better error handling).

### `useOrders(userId)`
Fetch user orders with proper loading/error states.

### `useSpecialOffers()`
Fetch special offers/promotions.

### `useDebounce(value, delay)`
Debounce search inputs and other frequent updates.
