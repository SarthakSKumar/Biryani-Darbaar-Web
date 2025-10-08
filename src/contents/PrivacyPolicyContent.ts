export interface PolicySection {
  title: string;
  content: string | string[];
  list?: Array<{
    text: string;
  }>;
  subsections?: Array<{
    label: string;
    text: string;
  }>;
}

export const privacyPolicySections: PolicySection[] = [
  {
    title: "Information We Collect",
    content: "We may collect the following types of information:",
    subsections: [
      {
        label: "Personal Information",
        text: "Name, email address, phone number, and payment details when you place an order or book catering services.",
      },
      {
        label: "Non-Personal Information",
        text: "Browser type, IP address, and website usage data to improve our services.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    content: "Your information helps us:",
    list: [
      { text: "Process orders and deliver food to you efficiently" },
      { text: "Communicate updates, promotions, and special offers" },
      { text: "Improve our website and enhance customer experience" },
    ],
  },
  {
    title: "How We Protect Your Data",
    content:
      "We implement industry-standard security measures to protect your data, including encryption and secure payment gateways. However, no method is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Sharing Your Information",
    content: "We do not sell your personal information. We may share it with:",
    list: [
      { text: "Delivery partners to fulfill your orders" },
      { text: "Legal authorities if required by law" },
    ],
  },
  {
    title: "Your Choices",
    content: "You can:",
    list: [
      { text: "Opt-out of promotional emails at any time" },
      {
        text: "Request access to or deletion of your personal data by contacting us",
      },
    ],
  },
];

export const privacyPolicyMeta = {
  lastUpdated: "March 23, 2025",
  title: "Privacy Policy",
  description:
    "At Biryani Darbaar, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.",
  contactInfo: {
    email: "support@biryanidarbaar.com",
    phone: "+61 123 456 789",
  },
};
