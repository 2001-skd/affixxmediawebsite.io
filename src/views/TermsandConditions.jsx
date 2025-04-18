import React, { Suspense } from "react";
const OtherPageBanner = React.lazy(() =>
  import("../components/layout/OtherPageBanner")
);

const TermsandConditions = () => {
  return (
    <>
      <Suspense>
        <OtherPageBanner title="Terms and Conditions" />
      </Suspense>
      <section>
        <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
          <h1 className="text-4xl font-bold mb-6 text-center text-black">
            Terms and Conditions
          </h1>

          <p className="mb-4 text-sm text-gray-600 text-center">
            <strong>Effective Date:</strong> April 17, 2025
          </p>

          <p className="mb-6">
            Welcome to <strong>Affixxmedia</strong>. By accessing our website
            <a
              href="https://affixxmedia.com"
              className="text-blue-600 underline ml-1"
            >
              affixxmedia.com
            </a>{" "}
            and using our services, you agree to the following terms and
            conditions:
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-2">1. Services</h2>
              <p>
                We provide digital marketing services including but not limited
                to:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Social Media Marketing</li>
                <li>Performance Marketing</li>
                <li>Influencer Marketing</li>
                <li>SEO</li>
                <li>Guerrilla Marketing</li>
                <li>Website & App Development</li>
                <li>Film Promotions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                2. Client Responsibilities
              </h2>
              <p>
                Clients must provide accurate and timely information, access,
                and materials required to execute services. Delays due to
                client-side lapses are not our responsibility.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. Payments</h2>
              <p>
                All projects require advance payment as per the agreed proposal.
                Ongoing services will follow a monthly billing cycle unless
                otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                4. Intellectual Property
              </h2>
              <p>
                Unless otherwise agreed, all final deliverables are the client’s
                property upon full payment. We reserve the right to showcase
                work for portfolio and promotional purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Confidentiality</h2>
              <p>
                We maintain strict confidentiality of all sensitive client data
                and project-related materials unless required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                6. Limitations of Liability
              </h2>
              <p>
                We are not liable for indirect, incidental, or consequential
                damages arising from the use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
              <p>
                We reserve the right to terminate services if a client breaches
                our terms, fails to make timely payments, or engages in
                unethical practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
              <p>
                These terms are governed by the laws of{" "}
                <strong>Puducherry, India</strong>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsandConditions;
