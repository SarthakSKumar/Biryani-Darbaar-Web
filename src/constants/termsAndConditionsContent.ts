export interface TermsSection {
  title: string;
  number: number;
  content: string;
  list?: Array<{
    text: string;
  }>;
  icon: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
}

export const termsAndConditionsSections: TermsSection[] = [
  {
    number: 1,
    title: "Use of Our Services",
    icon: "ShieldCheck",
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    content: "You agree to use our services only for lawful purposes. You must not:",
    list: [
      { text: "Use our services to harm others or violate any laws" },
      { text: "Attempt to gain unauthorized access to our systems" },
      { text: "Misrepresent your identity or provide false information" },
    ],
  },
  {
    number: 2,
    title: "Ordering and Payments",
    icon: "CreditCard",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
    content: "When you place an order:",
    list: [
      { text: "You agree to provide accurate payment information" },
      {
        text: "All payments are processed securely, and refunds are subject to our refund policy",
      },
      {
        text: "We reserve the right to refuse service or cancel orders at our discretion",
      },
    ],
  },
  {
    number: 3,
    title: "Delivery and Catering",
    icon: "Truck",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-200",
    content: "For delivery and catering services:",
    list: [
      { text: "Delivery times are estimates and may vary" },
      {
        text: "You are responsible for providing accurate delivery information",
      },
      { text: "Catering orders must be placed at least 48 hours in advance" },
    ],
  },
  {
    number: 4,
    title: "Intellectual Property",
    icon: "Copyright",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-200",
    content:
      "All content on our website, including images, logos, and recipes, is the property of Biryani Darbaar and protected by copyright laws. You may not:",
    list: [
      { text: "Reproduce or distribute our content without permission" },
      { text: "Use our trademarks or branding without consent" },
    ],
  },
  {
    number: 5,
    title: "Limitation of Liability",
    icon: "Scale",
    iconColor: "text-red-600",
    bgColor: "bg-red-100",
    borderColor: "border-red-200",
    content: "Biryani Darbaar is not liable for:",
    list: [
      {
        text: "Any indirect or consequential damages arising from your use of our services",
      },
      { text: "Issues caused by third-party services, such as delivery delays" },
      {
        text: "Errors in menu items or pricing due to unforeseen circumstances",
      },
    ],
  },
  {
    number: 6,
    title: "Changes to These Terms",
    icon: "Calendar",
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
    borderColor: "border-green-200",
    content:
      "We may update these Terms and Conditions from time to time. Any changes will be posted on this page with an updated date. Your continued use of our services after changes constitutes your acceptance of the new terms.",
  },
];

export const termsAndConditionsMeta = {
  lastUpdated: "March 23, 2025",
  title: "Terms and Conditions",
  description:
    "Welcome to Biryani Darbaar! These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.",
  contactInfo: {
    email: "support@biryanidarbaar.com",
    phone: "+61 123 456 789",
  },
};
