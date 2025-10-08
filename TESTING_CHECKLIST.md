# Testing Checklist for Authentication System

## 🧪 Pre-Testing Setup
- [ ] Backend server is running (check VITE_API_ENDPOINT in .env)
- [ ] Frontend dev server is running (pnpm dev)
- [ ] Browser developer tools open (for console errors)
- [ ] Network tab open (to monitor API calls)

---

## 1. Registration Flow Testing ✅

### Happy Path
- [ ] Click "Sign In" button in Navbar
- [ ] Click "Create Account" link in login modal
- [ ] Register modal opens smoothly
- [ ] Fill in all fields with valid data:
  - First Name: "John"
  - Last Name: "Doe"
  - Email: "john.doe@test.com"
  - Phone: "0412345678"
  - Address: "123 Main St, Adelaide, SA 5000"
  - Password: "SecurePass123"
  - Confirm Password: "SecurePass123"
- [ ] Click "Create Account"
- [ ] Success toast appears: "Account created successfully!"
- [ ] Modal closes automatically
- [ ] Navbar now shows user profile (JD initials, name, email)

### Validation Testing
Test each field with invalid data:

**First Name:**
- [ ] Empty → Shows "First name is required"
- [ ] "J" (too short) → Shows "First name must be at least 2 characters"

**Last Name:**
- [ ] Empty → Shows "Last name is required"
- [ ] "D" (too short) → Shows "Last name must be at least 2 characters"

**Email:**
- [ ] Empty → Shows "Email is required"
- [ ] "notanemail" → Shows "Please enter a valid email address"
- [ ] "test@" → Shows "Please enter a valid email address"

**Phone:**
- [ ] Empty → Shows "Phone number is required"
- [ ] "123" (too short) → Shows validation error
- [ ] "abcdefghij" (not numbers) → Shows validation error

**Address:**
- [ ] Empty → Shows "Address is required"
- [ ] "123" (too short) → Shows "Address must be at least 10 characters"

**Password:**
- [ ] Empty → Shows "Password is required"
- [ ] "pass" (< 8 chars) → Shows "Password must be at least 8 characters"
- [ ] "password" (no uppercase) → Shows "Password must contain at least one uppercase letter"
- [ ] "PASSWORD" (no lowercase) → Shows "Password must contain at least one lowercase letter"
- [ ] "Password" (no number) → Shows "Password must contain at least one number"

**Confirm Password:**
- [ ] Empty → Shows "Please confirm your password"
- [ ] "DifferentPass123" → Shows "Passwords do not match"

---

## 2. Login Flow Testing ✅

### Happy Path
- [ ] Click "Sign In" button in Navbar (if not already logged in)
- [ ] Login modal opens
- [ ] Enter email: "john.doe@test.com"
- [ ] Enter password: "SecurePass123"
- [ ] Click password visibility toggle → password shows/hides
- [ ] Click "Sign In"
- [ ] Success toast appears: "Welcome back! Successfully logged in."
- [ ] Modal closes
- [ ] Navbar shows user profile

### Error Cases
- [ ] Wrong email → Shows error toast
- [ ] Wrong password → Shows error toast
- [ ] Empty fields → Shows validation toast

### Modal Switching
- [ ] From login modal, click "Create Account"
- [ ] Register modal opens (login modal closes)
- [ ] From register modal, click "Sign In"
- [ ] Login modal opens (register modal closes)

---

## 3. Protected Routes Testing ✅

### When Not Logged In
- [ ] Navigate to `/Order` directly
- [ ] Should redirect to home page "/"
- [ ] Try accessing `/Checkout` directly
- [ ] Should redirect to home page "/"

### When Logged In
- [ ] Click "Order" in navbar
- [ ] Page loads successfully (no redirect)
- [ ] Browse menu, add items to cart
- [ ] Click checkout
- [ ] `/Checkout` page loads successfully

---

## 4. Navbar Testing ✅

### Not Authenticated State
- [ ] Navbar shows "Sign In" button (desktop)
- [ ] Mobile menu shows "Sign In" button
- [ ] No user profile visible

### Authenticated State (Desktop)
- [ ] Avatar shows user initials (e.g., "JD")
- [ ] Full name displayed: "John Doe"
- [ ] Email displayed: "john.doe@test.com"
- [ ] Red logout button with power icon visible
- [ ] Hover over logout button shows tooltip "Sign Out"

### Authenticated State (Mobile)
- [ ] Open mobile menu
- [ ] User profile card shows with avatar
- [ ] Name and email visible
- [ ] Full-width "Sign Out" button visible
- [ ] Logout button has icon + text

---

## 5. Logout Testing ✅

### Desktop
- [ ] Click logout button (power icon)
- [ ] Success toast: "Successfully signed out"
- [ ] Navbar immediately shows "Sign In" button
- [ ] User profile disappears
- [ ] Redirected to home page if on protected route

### Mobile
- [ ] Open mobile menu
- [ ] Click "Sign Out" button
- [ ] Mobile menu closes
- [ ] Success toast appears
- [ ] Navbar resets to unauthenticated state

---

## 6. Token Persistence Testing ✅

### Page Refresh
- [ ] Login successfully
- [ ] Refresh page (F5 or Ctrl+R)
- [ ] User remains logged in
- [ ] Navbar still shows profile
- [ ] Check localStorage (DevTools):
  - [ ] `accessToken` exists
  - [ ] `refreshToken` exists
  - [ ] `userData` exists

### Close & Reopen Browser Tab
- [ ] Login successfully
- [ ] Close browser tab completely
- [ ] Open new tab, navigate to site
- [ ] User still logged in
- [ ] All data persists

### Clear Browser Data
- [ ] Login successfully
- [ ] Clear browser cache/localStorage
- [ ] Refresh page
- [ ] User is logged out (expected behavior)
- [ ] Navbar shows "Sign In" button

---

## 7. API Integration Testing ✅

### Network Monitoring
- [ ] Open DevTools → Network tab
- [ ] Register new user
- [ ] Check POST request to `/auth/register`
- [ ] Response contains tokens and user data
- [ ] Login with user
- [ ] Check POST request to `/auth/login`
- [ ] Response contains tokens

### Token Refresh (Advanced)
This requires backend setup or token expiry simulation:
- [ ] Login with user
- [ ] Note the access token in localStorage
- [ ] Manually change token to invalid value
- [ ] Make an authenticated API call
- [ ] Should trigger 401 → automatic token refresh
- [ ] New access token saved
- [ ] Request retried successfully

---

## 8. Toast Notifications Testing ✅

### Success Toasts
- [ ] Register → Green toast with success message
- [ ] Login → Green toast with "Welcome back"
- [ ] Logout → Green toast with "Successfully signed out"

### Error Toasts
- [ ] Invalid form field → Red toast with specific error
- [ ] API error → Red toast with error message
- [ ] Network error → Red toast

### Toast Appearance
- [ ] Toasts appear top-right corner
- [ ] Toast has white background
- [ ] Toast auto-dismisses after ~4 seconds
- [ ] Multiple toasts stack properly
- [ ] Toasts are readable on all screen sizes

---

## 9. Responsive Design Testing ✅

### Desktop (>1024px)
- [ ] Navbar layout looks good
- [ ] User profile fits nicely
- [ ] Modals are centered
- [ ] All text readable

### Tablet (768px-1024px)
- [ ] Mobile menu works
- [ ] Modals responsive
- [ ] Forms fit screen

### Mobile (< 768px)
- [ ] Mobile menu button visible
- [ ] Modals take proper width
- [ ] Forms scroll if needed
- [ ] User profile card in mobile menu looks good
- [ ] Logout button accessible

---

## 10. Edge Cases & Error Handling ✅

### Network Errors
- [ ] Disable internet
- [ ] Try to login
- [ ] Error toast shows
- [ ] No crash/white screen

### Backend Down
- [ ] Stop backend server
- [ ] Try to register
- [ ] Error handled gracefully
- [ ] Clear error message shown

### Slow Network
- [ ] Throttle network (DevTools → Network → Slow 3G)
- [ ] Submit login form
- [ ] Loading state shows
- [ ] Button disabled during request
- [ ] Eventually succeeds or times out with error

### XSS Prevention
- [ ] Try entering `<script>alert('xss')</script>` in name field
- [ ] Submit form
- [ ] Script should not execute
- [ ] Data sanitized/escaped

---

## 11. User Experience Testing ✅

### Modal Interactions
- [ ] Click outside modal → Modal closes
- [ ] Press ESC key → Modal closes
- [ ] Click X button → Modal closes
- [ ] Smooth animations (fade + scale)
- [ ] No jarring UI jumps

### Form Usability
- [ ] Tab key navigates between fields correctly
- [ ] Enter key submits form
- [ ] Password toggle works smoothly
- [ ] Form fields have proper labels
- [ ] Placeholder text helpful

### Loading States
- [ ] Button text changes during submission ("Sign In" → "Signing in...")
- [ ] Button disabled during API call
- [ ] No accidental double-submissions

---

## 12. Browser Compatibility ✅

Test on multiple browsers:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Edge

---

## ✅ PASSING CRITERIA

**All tests should pass. If any fail:**
1. Note the failing test
2. Check browser console for errors
3. Check network tab for failed API calls
4. Review AUTH_IMPLEMENTATION.md troubleshooting section

---

## 📊 TEST RESULTS TEMPLATE

```
Date: __________
Tester: __________

Registration: ✅ / ❌
Login: ✅ / ❌
Logout: ✅ / ❌
Protected Routes: ✅ / ❌
Token Persistence: ✅ / ❌
Validation: ✅ / ❌
Toast Notifications: ✅ / ❌
Responsive Design: ✅ / ❌
Error Handling: ✅ / ❌

Notes:
_______________________
_______________________
_______________________
```

---

## 🎉 WHEN ALL TESTS PASS

Congratulations! The authentication system is fully functional and ready for production (pending security review).
