import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Florida Impact Windows & Doors",
  description:
    "Florida Impact Windows & Doors privacy policy. Learn how we collect, use, and protect your personal information when you visit our website or use our home improvement services in South Florida.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300">Last updated: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-10 text-gray-600 leading-relaxed">

              {/* Introduction */}
              <div>
                <p>
                  Florida Impact Windows & Doors (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, request an estimate, or use our impact window and door installation services. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.
                </p>
              </div>

              {/* Section 1: Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">1. Information We Collect</h2>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Information</h3>
                <p className="mb-4">
                  When you fill out a contact form, request a free estimate, or communicate with us by phone or email, we may collect your name, email address, phone number, mailing address, and property address. This information is provided voluntarily by you and is used to respond to your inquiries and provide our services.
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Project Information</h3>
                <p className="mb-4">
                  We may collect information about your project including the type of windows or doors you are interested in, the number of openings in your home, your estimated budget, your HOA requirements, and any specific preferences you share with us during consultations or through our website forms.
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Automatically Collected Information</h3>
                <p>
                  When you visit our website, we may automatically collect certain information including your IP address, browser type, operating system, referring URLs, pages viewed, time spent on pages, and other browsing activity. This information is collected through cookies, web beacons, and similar technologies to help us improve our website and understand how visitors use it.
                </p>
              </div>

              {/* Section 2: How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To schedule and conduct in-home consultations and estimates</li>
                  <li>To prepare and deliver proposals, contracts, and project documentation</li>
                  <li>To process contracts, permits, and manage ongoing installation projects</li>
                  <li>To communicate with you about your project status and scheduling</li>
                  <li>To send promotional offers, company news, and educational content (with your consent)</li>
                  <li>To improve our website, products, services, and customer experience</li>
                  <li>To analyze website traffic and usage patterns for optimization</li>
                  <li>To comply with legal obligations and protect our legal rights</li>
                </ul>
              </div>

              {/* Section 3: Information Sharing */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">3. Information Sharing</h2>
                <p className="mb-4">We do not sell your personal information to third parties. We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> Third-party companies that help us operate our business, such as CRM software providers, email marketing platforms, payment processors, and website analytics services. These providers are contractually obligated to protect your data.</li>
                  <li><strong>Manufacturers:</strong> We may share project-specific information with our authorized manufacturers (PGT, CGI, ES Windows, Custom Window Systems) for product ordering, warranty registration, and product support purposes.</li>
                  <li><strong>Financing Partners:</strong> If you apply for financing through us, your information will be shared with our lending partners to process your application. Their use of your information is governed by their own privacy policies.</li>
                  <li><strong>Building Departments:</strong> We submit permit applications to local building departments that include property information and project specifications as required by Florida law.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, court order, subpoena, or governmental authority, or to protect our rights and safety.</li>
                </ul>
              </div>

              {/* Section 4: Cookies and Tracking */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">4. Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. Cookies are small text files stored on your device that help us recognize you and remember your preferences.
                </p>
                <p className="mb-4">We use the following types of cookies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly, such as form submissions and page navigation.</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website through tools like Google Analytics.</li>
                  <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes, including tools like Facebook Pixel and Google Ads.</li>
                </ul>
                <p className="mt-4">
                  You can control cookie settings through your browser preferences. Disabling cookies may limit certain features of our website. Most browsers allow you to refuse cookies or alert you when cookies are being sent.
                </p>
              </div>

              {/* Section 5: Data Security */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">5. Data Security</h2>
                <p>
                  We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, alteration, or disclosure. Our website uses SSL encryption to protect data transmitted between your browser and our servers. Access to personal information is restricted to authorized employees who need it to perform their duties. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security of your data.
                </p>
              </div>

              {/* Section 6: Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">6. Your Rights and Choices</h2>
                <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access the personal information we hold about you</li>
                  <li>The right to request correction of inaccurate or incomplete information</li>
                  <li>The right to request deletion of your personal information</li>
                  <li>The right to opt out of marketing communications at any time</li>
                  <li>The right to request a copy of your data in a portable format</li>
                  <li>The right to withdraw consent where processing is based on consent</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:privacy@floridaimpactwindowsdoors.com" className="text-palm-600 hover:text-palm-700 font-medium">privacy@floridaimpactwindowsdoors.com</a> or call us at{" "}
                  <a href="tel:+17546004876" className="text-palm-600 hover:text-palm-700 font-medium">(754) 600-4876</a>. We will respond to your request within 30 days.
                </p>
              </div>

              {/* Section 7: Changes to This Policy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">7. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or for other operational reasons. When we make material changes, we will update the &quot;Last Updated&quot; date at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
                </p>
              </div>

              {/* Section 8: Children's Privacy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">8. Children&apos;s Privacy</h2>
                <p>
                  Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete that information promptly.
                </p>
              </div>

              {/* Section 9: Contact Us */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">9. Contact Us</h2>
                <p>
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <p className="font-bold text-gray-900">Florida Impact Windows & Doors</p>
                  <p>1234 NW 79th Ave, Suite 200</p>
                  <p>Doral, FL 33126</p>
                  <p className="mt-2">Phone: <a href="tel:+17546004876" className="text-palm-600 font-medium">(754) 600-4876</a></p>
                  <p>Email: <a href="mailto:privacy@floridaimpactwindowsdoors.com" className="text-palm-600 font-medium">privacy@floridaimpactwindowsdoors.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-palm-600 font-semibold hover:text-palm-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
