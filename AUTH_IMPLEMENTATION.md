# Authentication Implementation Guide

## Overview
This document explains the authentication system implemented for Biryani Darbaar Web App.

## Architecture

### Components Structure
```
src/
├── handlers/
│   └── auth/
│       ├── authApi.ts          # API calls (login, register, refresh, logout)
│       ├── authStorage.ts      # LocalStorage management (tokens, user data)
│       ├── validation.ts       # Form validation utilities
│       ├── apiClient.ts        # Axios interceptor with auto token refresh
│       └── index.ts            # Export barrel file
├── contexts/
│   └── AuthContext.tsx         # Auth state management & provider
└── components/
    └── modals/
        ├── LoginModal.tsx      # Login modal component
        └── RegisterModal.tsx   # Registration modal component
```

## Features Implemented

### ✅ User Registration
- Separate modal with full form validation
- Fields: First Name, Last Name, Email, Phone, Address, Password
- Real-time validation with helpful error messages
- Password requirements enforced (min 8 chars, uppercase, lowercase, number)
- Success toast notification on registration

### ✅ User Login
- Separate modal with clean UI
- Email and password authentication
- Show/hide password toggle
- Error handling with toast notifications
- JWT token storage (access + refresh tokens)

### ✅ Token Management
- Access token (7 days validity)
- Refresh token (30 days validity)
- Automatic token refresh on API calls
- Axios interceptor handles 401 errors and refreshes tokens automatically
- Tokens stored in localStorage

### ✅ Protected Routes
- `/Order` and `/Checkout` routes are protected
- Unauthenticated users redirected to home page
- Loading state shown during auth check
- Auth modal can be triggered from navbar

### ✅ User Profile Display
- Navbar shows user initials avatar when logged in
- Displays user's full name and email
- Logout button with icon
- Mobile-responsive design

### ✅ Form Validation
- Custom validation utilities
- Email format validation
- Password strength requirements
- Phone number validation (10-15 digits)
- Address minimum length
- Confirm password matching

### ✅ Toast Notifications
- Success messages (login, register, logout)
- Error messages (validation, API errors)
- Consistent styling with app theme
- Top-right positioning

## Usage

### For Developers

#### 1. Using Auth Context
```tsx
import { useAuth } from '@/contexts/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, login, register, logout } = useAuth();
  
  // Check if user is logged in
  if (isAuthenticated) {
    console.log('Welcome,', user.firstName);
  }
}
```

#### 2. Making Authenticated API Calls
```tsx
import apiClient from '@/handlers/auth/apiClient';

// Token is automatically added to headers
const response = await apiClient.get('/protected-endpoint');
```

#### 3. Protecting a Route
```tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) return <LoadingSpinner />;
  if (!isAuthenticated) return <Navigate to="/" />;
  
  return children;
}
```

### For Users

#### Registration Flow
1. Click "Sign In" button in navbar
2. Click "Create Account" link in login modal
3. Fill out registration form
4. Click "Create Account"
5. Automatically logged in upon successful registration

#### Login Flow
1. Click "Sign In" button in navbar
2. Enter email and password
3. Click "Sign In"
4. Redirected and navbar shows profile

#### Logout Flow
1. Click power icon (logout button) in navbar
2. Confirmation toast shown
3. Redirected to home page

## Security Features

- Passwords hashed on backend (bcrypt with 12 salt rounds)
- JWT tokens used for stateless authentication
- Refresh token rotation
- Automatic logout on token expiration
- HTTPS recommended for production
- No sensitive data in localStorage (only tokens)

## API Endpoints Used

| Endpoint | Method | Purpose | Auth Required |
|----------|--------|---------|---------------|
| `/auth/register` | POST | Create new user account | No |
| `/auth/login` | POST | Authenticate user | No |
| `/auth/refresh-token` | POST | Refresh access token | No |
| `/auth/logout` | POST | Logout user | Optional |

## Token Storage

### LocalStorage Keys
- `accessToken` - JWT access token
- `refreshToken` - JWT refresh token
- `userData` - User profile information

### User Data Structure
```typescript
{
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  role: string;
  isGoldMember: boolean;
}
```

## Error Handling

### Validation Errors
- Shown inline with toast notifications
- Clear, user-friendly messages
- Prevents form submission until valid

### API Errors
- Network errors caught and displayed
- 401 errors trigger automatic token refresh
- Failed refresh results in logout
- User-friendly error messages

## Future Enhancements (Not Implemented)

- [ ] Social login (Google, Facebook)
- [ ] Email verification
- [ ] Password reset flow
- [ ] Remember me functionality
- [ ] Session timeout warnings
- [ ] Profile picture upload
- [ ] Change password from profile
- [ ] Account deletion

## Testing Checklist

- [ ] Registration with valid data
- [ ] Registration with invalid data (each field)
- [ ] Login with correct credentials
- [ ] Login with incorrect credentials
- [ ] Protected route access when logged out
- [ ] Protected route access when logged in
- [ ] Token refresh on expiration
- [ ] Logout functionality
- [ ] Mobile responsiveness
- [ ] Toast notifications visibility

## Troubleshooting

### "Cannot read property 'firstName' of null"
- User data not loaded yet, check `isLoading` state before accessing `user`

### "Network Error"
- Check API endpoint URL in `.env` file
- Verify backend server is running

### "Token expired"
- Automatic refresh should handle this
- If persistent, check refresh token validity (30 days)

### Protected routes not working
- Ensure `AuthProvider` wraps your routes in `App.tsx`
- Check `useAuth` hook is called inside provider context

## Support

For issues or questions about the auth system, contact the development team or refer to:
- Backend API Documentation: `AUTH_API_DOCUMENTATION.md`
- Toast Documentation: `toast_doc.md`
