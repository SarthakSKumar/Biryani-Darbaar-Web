import React from "react";
import { motion } from "framer-motion";
import LocationInfo from "@/components/sections/LocationSection";
import CustomerReviews from "@/components/sections/CustomerReviewSection";
import InfoPage from "@/components/sections/InfoSection";
import { Shield, Lock, UserCheck, Mail, Phone } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <motion.div
        className="relative min-h-screen"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Hero Section */}
        <section className="container-custom text-center section-spacing">
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-6 border border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Last Updated: March 23, 2025</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            className="text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            At Biryani Darbaar, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy outlines
            how we collect, use, and safeguard your data when you visit our
            website or use our services.
          </motion.p>
        </section>

        {/* Content Section */}
        <section className="container-custom section-spacing max-w-5xl">
          {/* Information We Collect */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                <UserCheck className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  1. Information We Collect
                </h3>
                <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
                  <p>
                    We may collect the following types of information:
                  </p>
                  <div className="pl-4 border-l-4 border-primary/30">
                    <p className="mb-3">
                      <strong className="text-neutral-900">Personal Information:</strong> Name, email address, phone
                      number, and payment details when you place an order or book catering
                      services.
                    </p>
                    <p>
                      <strong className="text-neutral-900">Non-Personal Information:</strong> Browser type, IP address,
                      and website usage data to improve our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              2. How We Use Your Information
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-4">
              Your information helps us:
            </p>
            <ul className="space-y-3 text-lg text-neutral-600 leading-relaxed pl-6">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Process orders and deliver food to you efficiently</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Communicate updates, promotions, and special offers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Improve our website and enhance customer experience</span>
              </li>
            </ul>
          </motion.div>

          {/* How We Protect Your Data */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-green-100 rounded-lg border border-green-200">
                <Lock className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  3. How We Protect Your Data
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  We implement industry-standard security measures to protect your
                  data, including encryption and secure payment gateways. However, no
                  method is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sharing Your Information */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              4. Sharing Your Information
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-4">
              We do not sell your personal information. We may share it with:
            </p>
            <ul className="space-y-3 text-lg text-neutral-600 leading-relaxed pl-6">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Delivery partners to fulfill your orders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Legal authorities if required by law</span>
              </li>
            </ul>
          </motion.div>

          {/* Your Choices */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              5. Your Choices
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-4">
              You can:
            </p>
            <ul className="space-y-3 text-lg text-neutral-600 leading-relaxed pl-6">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Opt-out of promotional emails at any time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>Request access to or deletion of your personal data by contacting us</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 text-center">
              6. Contact Us
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6 text-center">
              If you have any questions about this Privacy Policy, please reach out to us:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="mailto:support@biryanidarbaar.com"
                className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg border border-neutral-200 hover:border-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-semibold text-neutral-900">support@biryanidarbaar.com</span>
              </a>
              <a
                href="tel:+61123456789"
                className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg border border-neutral-200 hover:border-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-semibold text-neutral-900">+61 123 456 789</span>
              </a>
            </div>
          </motion.div>
        </section>
      </motion.div>
      <InfoPage />
      <LocationInfo />
      <CustomerReviews />
    </>
  );
};

export default PrivacyPolicy;
