import React, { useState } from "react";
import axios from "axios";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

interface SignInSignUpModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const SignInSignUpModal: React.FC<SignInSignUpModalProps> = ({
  onClose,
  onSuccess,
}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSignIn = async () => {
    try {
      const auth = getAuth();
      const res = await signInWithEmailAndPassword(auth, email, password);
      const accessToken = await res.user.getIdToken();
      const response = await axios.post("https://api.darbaarkitchen.com/login", { idToken: accessToken });
      const { sessionId, sessionUserId } = response.data;
      sessionStorage.setItem("sessionId", sessionId);
      sessionStorage.setItem("sessionUserId", sessionUserId);
      onSuccess(); // Notify parent of successful authentication
    } catch (error) {
      console.log(error);

      setErrorMessage("Failed to sign in. Please try again.");
    }
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const fullName = `${firstName} ${lastName}`;

    try {
      await axios.post("https://api.darbaarkitchen.com/signup", {
        userName: fullName,
        email,
        password,
        phoneNumber,
      });
      setIsSignUp(false); // Switch to sign-in mode after successful sign-up
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        {isSignUp && (
          <>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded"
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <button
            onClick={togglePasswordVisibility}
            className="absolute top-2 right-2 text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        {isSignUp && (
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded"
            />
          </div>
        )}
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        <button
          onClick={isSignUp ? handleSignUp : handleSignIn}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="w-full mt-2 text-gray-600 underline"
        >
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </button>
        <Link to={"/"}>
          <button
            onClick={onClose}
            className="w-full mt-2 text-gray-600 underline"
          >
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignInSignUpModal;
