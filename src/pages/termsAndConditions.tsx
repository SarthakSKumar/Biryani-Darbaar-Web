import React from "react";
import { motion } from "framer-motion";
import LocationInfo from "@/components/sections/LocationSection";
import CustomerReviews from "@/components/sections/CustomerReviewSection";
import InfoPage from "@/components/sections/InfoSection";
import { FileText, ShieldCheck, CreditCard, Truck, Copyright, Scale, Calendar, Mail, Phone } from "lucide-react";
import { termsAndConditionsSections, termsAndConditionsMeta } from "@/constants/TermsAndConditionsContent";

const iconMap = {
  ShieldCheck,
  CreditCard,
  Truck,
  Copyright,
  Scale,
  Calendar,
};

const TermsAndConditions: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 md:gap-24 pt-12">

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
            <span className="text-sm font-semibold text-primary">Last Updated: {termsAndConditionsMeta.lastUpdated}</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {termsAndConditionsMeta.title}
          </motion.h1>

          <motion.p
            className="text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {termsAndConditionsMeta.description}
          </motion.p>
        </section>

        {/* Content Section */}
        <section className="container-custom section-spacing max-w-5xl">
          {termsAndConditionsSections.map((section, index) => {
            const IconComponent = iconMap[section.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={section.number}
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 ${section.bgColor} rounded-lg border ${section.borderColor}`}>
                    <IconComponent className={`w-6 h-6 ${section.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                      {section.number}. {section.title}
                    </h3>
                    <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                      {section.content}
                    </p>
                    {section.list && (
                      <ul className="space-y-3 text-lg text-neutral-600 leading-relaxed pl-6">
                        {section.list.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

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
                href={`mailto:${termsAndConditionsMeta.contactInfo.email}`}
                className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg border border-neutral-200 hover:border-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-semibold text-neutral-900">{termsAndConditionsMeta.contactInfo.email}</span>
              </a>
              <a
                href={`tel:${termsAndConditionsMeta.contactInfo.phone}`}
                className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg border border-neutral-200 hover:border-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-semibold text-neutral-900">{termsAndConditionsMeta.contactInfo.phone}</span>
              </a>
            </div>
          </motion.div>
        </section>
      </motion.div>
      <InfoPage />
      <LocationInfo />
      <CustomerReviews />
    </div>
  );
};

export default TermsAndConditions;
