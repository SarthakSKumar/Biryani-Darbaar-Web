import React from "react";
import { motion } from "framer-motion";
import LocationInfo from "../sections/LocationSection";
import CustomerReviews from "../sections/CustomerReviewSection";
import InfoPage from "../sections/InfoSection";
import { FileText, ShieldCheck, CreditCard, Truck, Copyright, Scale, Calendar, Mail, Phone } from "lucide-react";

const TermsAndConditions: React.FC = () => {
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
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Last Updated: March 23, 2025</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Terms and Conditions
          </motion.h1>

          <motion.p
            className="text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to Biryani Darbaar! These Terms and Conditions govern your
            use of our website and services. By accessing or using our services,
            you agree to be bound by these terms. If you do not agree, please do
            not use our services.
          </motion.p>
        </section>

        {/* Content Section */}
        <section className="container-custom section-spacing max-w-5xl">
          {/* Use of Our Services */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  1. Use of Our Services
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                  You agree to use our services only for lawful purposes. You must not:
                </p>
                <ul className="space-y-3 text-lg text-neutral-600 leading-relaxed pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Use our services to harm others or violate any laws</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Attempt to gain unauthorized access to our systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Misrepresent your identity or provide false information</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Ordering and Payments */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg border border-blue-200">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  2. Ordering and Payments
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                  When you place an order:
                </p>
                <ul className="space-y-3 text-lg text-neutral-600 leading-relaxed pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>You agree to provide accurate payment information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>All payments are processed securely, and refunds are subject to our refund policy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>We reserve the right to refuse service or cancel orders at our discretion</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Delivery and Catering */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-orange-100 rounded-lg border border-orange-200">
                <Truck className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  3. Delivery and Catering
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                  For delivery and catering services:
                </p>
                <ul className="space-y-3 text-lg text-neutral-600 leading-relaxed pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Delivery times are estimates and may vary</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>You are responsible for providing accurate delivery information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Catering orders must be placed at least 48 hours in advance</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg border border-purple-200">
                <Copyright className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  4. Intellectual Property
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                  All content on our website, including images, logos, and recipes, is
                  the property of Biryani Darbaar and protected by copyright laws. You may not:
                </p>
                <ul className="space-y-3 text-lg text-neutral-600 leading-relaxed pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Reproduce or distribute our content without permission</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Use our trademarks or branding without consent</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-red-100 rounded-lg border border-red-200">
                <Scale className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  5. Limitation of Liability
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                  Biryani Darbaar is not liable for:
                </p>
                <ul className="space-y-3 text-lg text-neutral-600 leading-relaxed pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Any indirect or consequential damages arising from your use of our services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Issues caused by third-party services, such as delivery delays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Errors in menu items or pricing due to unforeseen circumstances</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-green-100 rounded-lg border border-green-200">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  6. Changes to These Terms
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  We may update these Terms and Conditions from time to time. Any
                  changes will be posted on this page with an updated date. Your
                  continued use of our services after changes constitutes your
                  acceptance of the new terms.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 text-center">
              7. Contact Us
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6 text-center">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a
                href="mailto:support@biryanidarbaar.com"
                className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-semibold text-neutral-900">support@biryanidarbaar.com</span>
              </a>
              <a
                href="tel:+61123456789"
                className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors"
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

export default TermsAndConditions;
