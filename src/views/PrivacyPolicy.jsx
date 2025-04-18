import React, { Suspense } from "react";
const OtherPageBanner = React.lazy(() =>
  import("../components/layout/OtherPageBanner")
);

const PrivacyPolicy = () => {
  return (
    <>
      <Suspense>
        <OtherPageBanner title="Privacy Policy" />
      </Suspense>
      <section>
        <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
          <h1 className="text-4xl font-bold mb-6 text-center text-black">
            Privacy Policy
          </h1>

          <p className="mb-4 text-sm text-gray-600 text-center">
            <strong>Effective Date:</strong> April 17, 2025
          </p>

          <p className="mb-6">
            At <strong>Affixxmedia</strong>, we value your privacy. This policy
            explains how we collect, use, and protect your personal information.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-2">
                1. Information We Collect
              </h2>
              <p>We may collect:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Contact information (name, email, phone, company)</li>
                <li>Website usage data (cookies, IP addresses)</li>
                <li>Inquiry or form responses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                2. Use of Information
              </h2>
              <p>We use the information to:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Provide and improve our services</li>
                <li>Respond to inquiries</li>
                <li>
                  Send updates, offers, and newsletters{" "}
                  <span className="text-sm italic">(only if opted in)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">3. Data Sharing</h2>
              <p>
                We do not sell or share your data with third parties except:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>To our service providers for operational purposes</li>
                <li>When required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
              <p>
                We use cookies to improve website performance and user
                experience. You may disable cookies via browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
              <p>
                We implement security measures to protect your data. However, no
                method is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
              <p>
                You may request access, correction, or deletion of your personal
                data by contacting us at{" "}
                <a
                  href="mailto:affixxmedia@gmail.com"
                  className="text-blue-600 underline"
                >
                  affixxmedia@gmail.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">
                7. Changes to Policy
              </h2>
              <p>
                We may update this policy. Continued use of the site after
                changes indicates your acceptance.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
