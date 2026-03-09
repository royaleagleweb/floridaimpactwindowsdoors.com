import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Florida Impact Windows & Doors",
  description:
    "Florida Impact Windows & Doors terms of service. Review the terms and conditions governing the use of our website and home improvement services for impact windows and doors in South Florida.",
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-300">Last updated: January 1, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-10 text-gray-600 leading-relaxed">

              {/* Section 1: Agreement */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using the Florida Impact Windows & Doors website (&quot;Site&quot;), you accept and agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you should not use our Site. These Terms apply to all visitors, users, and others who access or use the Site. Florida Impact Windows & Doors reserves the right to update or modify these Terms at any time without prior notice. Your continued use of the Site following any changes constitutes your acceptance of the revised Terms. It is your responsibility to review these Terms periodically for changes.
                </p>
              </div>

              {/* Section 2: Services */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">2. Description of Services</h2>
                <p className="mb-4">
                  Florida Impact Windows & Doors is a Florida State Certified General Contractor specializing in the sale, installation, and replacement of impact windows, impact doors, and hurricane protection products for residential and commercial properties throughout South Florida, including Miami-Dade, Broward, and Palm Beach County.
                </p>
                <p className="mb-4">
                  Our services include but are not limited to: in-home consultations and estimates, custom measurement and product selection, building permit application and management, professional installation by factory-trained crews, final inspection coordination, and warranty registration. We are authorized dealers for PGT, CGI, ES Windows, and Custom Window Systems.
                </p>
                <p>
                  The information provided on this Site is for general informational purposes only and does not constitute a binding offer, contract, or guarantee of specific products, pricing, or availability. All services are subject to a separate written installation contract executed between the customer and Florida Impact Windows & Doors.
                </p>
              </div>

              {/* Section 3: Estimates and Pricing */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">3. Estimates and Pricing</h2>
                <p className="mb-4">
                  Estimates provided through our website, by phone, or during in-home consultations are provided for informational purposes and are subject to change based on final measurements, product selections, site conditions, permitting requirements, and other factors discovered during the detailed assessment process.
                </p>
                <p className="mb-4">
                  A binding price is established only when a written installation contract is signed by both the customer and an authorized representative of Florida Impact Windows & Doors. We reserve the right to adjust pricing due to changes in manufacturer costs, material availability, or project scope modifications requested by the customer.
                </p>
                <p>
                  Promotional pricing, discounts, and special offers advertised on this Site are subject to specific terms, expiration dates, and eligibility requirements as stated in the promotion details. Promotions may not be combined with other offers unless explicitly stated.
                </p>
              </div>

              {/* Section 4: Payment Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">4. Payment Terms</h2>
                <p className="mb-4">
                  Payment terms for installation projects are outlined in the individual installation contract signed by the customer. Typical payment structures include a deposit upon contract signing, a progress payment at the start of installation, and a final payment upon completion and satisfactory inspection.
                </p>
                <p className="mb-4">
                  For customers using third-party financing, payment terms are governed by the financing agreement between the customer and the lending institution. Florida Impact Windows & Doors is not a party to the financing agreement and is not responsible for the terms, interest rates, or conditions of any financing arrangement.
                </p>
                <p>
                  Late payments may be subject to interest charges and collection fees as outlined in the installation contract. Florida Impact Windows & Doors reserves the right to suspend work on a project if payment obligations are not met according to the agreed schedule. All prices are quoted in United States dollars.
                </p>
              </div>

              {/* Section 5: Warranties */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">5. Warranties and Disclaimers</h2>
                <p className="mb-4">
                  Product warranties are provided by the respective manufacturers (PGT, CGI, ES Windows, Custom Window Systems) and are subject to the terms and conditions of each manufacturer&apos;s warranty documentation. Warranty coverage, duration, and exclusions vary by manufacturer and product line. Detailed warranty information is provided in each installation contract and upon project completion.
                </p>
                <p className="mb-4">
                  Florida Impact Windows & Doors provides a separate workmanship warranty for our installation labor as outlined in each installation contract. This workmanship warranty covers defects in our installation work and is separate from the manufacturer product warranty. Specific terms and duration are detailed in the contract.
                </p>
                <p>
                  THIS SITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. SOFLO WINDOWS MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT REGARDING THE SITE ITSELF. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT ANY DEFECTS WILL BE CORRECTED.
                </p>
              </div>

              {/* Section 6: Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">6. Limitation of Liability</h2>
                <p className="mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SOFLO WINDOWS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OR INABILITY TO USE THE SITE.
                </p>
                <p className="mb-4">
                  IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS RELATED TO THE SITE EXCEED THE AMOUNT OF ONE HUNDRED DOLLARS ($100). THIS LIMITATION APPLIES TO THE SITE ONLY AND DOES NOT LIMIT ANY LIABILITY ARISING FROM A WRITTEN INSTALLATION CONTRACT.
                </p>
                <p>
                  Liability for installation services, product defects, or workmanship issues is governed by the terms of the individual installation contract and applicable manufacturer warranties, not by these Terms of Service.
                </p>
              </div>

              {/* Section 7: Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">7. Intellectual Property</h2>
                <p>
                  All content on this Site, including but not limited to text, graphics, logos, images, photographs, audio clips, digital downloads, and data compilations, is the property of Florida Impact Windows & Doors or its content suppliers and is protected by United States and international copyright, trademark, and other intellectual property laws. The Florida Impact Windows & Doors name, logo, and all related product and service names, design marks, and slogans are trademarks of Florida Impact Windows & Doors. You may not reproduce, distribute, modify, create derivative works from, publicly display, or otherwise use any content from this Site without our prior written consent.
                </p>
              </div>

              {/* Section 8: User Conduct */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">8. User Conduct</h2>
                <p className="mb-4">When using our Site, you agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Submit false, misleading, or inaccurate information through any forms</li>
                  <li>Use the Site for any unlawful purpose or in violation of any applicable laws</li>
                  <li>Attempt to gain unauthorized access to any portion of the Site or its systems</li>
                  <li>Interfere with or disrupt the operation of the Site or servers</li>
                  <li>Upload or transmit viruses, malware, or other harmful code</li>
                  <li>Collect or harvest personal information of other users</li>
                  <li>Use automated tools to scrape, crawl, or download content from the Site</li>
                </ul>
              </div>

              {/* Section 9: Indemnification */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">9. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Florida Impact Windows & Doors, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including reasonable attorney fees) arising from your use of the Site, your violation of these Terms, or your violation of any rights of a third party.
                </p>
              </div>

              {/* Section 10: Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">10. Governing Law and Jurisdiction</h2>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the state or federal courts located in Miami-Dade County, Florida, and you hereby consent to the personal jurisdiction of such courts.
                </p>
                <p>
                  Any disputes arising from installation contracts are subject to the dispute resolution provisions contained in those contracts, which may include mandatory arbitration or mediation requirements.
                </p>
              </div>

              {/* Section 11: Severability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">11. Severability</h2>
                <p>
                  If any provision of these Terms is held to be unenforceable or invalid by a court of competent jurisdiction, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms will remain in full force and effect. The failure of Florida Impact Windows & Doors to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
                </p>
              </div>

              {/* Section 12: Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">12. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <p className="font-bold text-gray-900">Florida Impact Windows & Doors</p>
                  <p>1234 NW 79th Ave, Suite 200</p>
                  <p>Doral, FL 33126</p>
                  <p className="mt-2">Phone: <a href="tel:+17865551234" className="text-palm-600 font-medium">(786) 555-1234</a></p>
                  <p>Email: <a href="mailto:info@soflowindows.com" className="text-palm-600 font-medium">info@soflowindows.com</a></p>
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
