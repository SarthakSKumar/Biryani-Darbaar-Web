import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Reusable-components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Order from "./Components/Order";
import About from "./Components/About";
import SpecialOffer from "./Components/SpecialOffer";
import PrivacyPolicy from "./Components/privacyPolicy";
import TermsAndConditions from "./Components/termsAndConditions";
import Footer from "./Reusable-components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "./lib/firebase";
import SignInSignUpModal from "./Reusable-components/login";
import Contact from "./Components/Contact";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);
  console.log(isAuthenticated);

  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen ">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Menu" element={<Menu />} />
              <Route path="/SpecialOffer" element={<SpecialOffer />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route
                path="/termsandconditions"
                element={<TermsAndConditions />}
              />
              <Route
                path="/Order"
                element={
                  isAuthenticated ? (
                    <Order />
                  ) : (
                    <SignInSignUpModal
                      onClose={() => {}}
                      onSuccess={() => {}}
                    />
                  )
                }
              />
              {/* <Route path="/Order" element={<Order />} /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
