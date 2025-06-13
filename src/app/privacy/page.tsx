import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cognitive Assistant',
  description: 'Privacy Policy for Cognitive Assistant - Your privacy-first AI companion',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Cognitive Assistant ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you use our privacy-first AI assistant service. Our core principle is that your data 
                stays on your device - we process everything locally.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                2.1 Local Processing Only
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Our AI assistant processes all your conversations and data locally on your device. 
                We do not collect, store, or transmit your personal conversations or data to our servers.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                2.2 Technical Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We may collect minimal technical information for system optimization:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 mt-2">
                <li>Device hardware specifications (for performance optimization)</li>
                <li>Software version information</li>
                <li>Error logs (anonymized and local only)</li>
                <li>Performance metrics (aggregated and anonymized)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Since we process everything locally, your personal data never leaves your device. 
                Any technical information we collect is used solely for:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 mt-2">
                <li>Improving system performance and stability</li>
                <li>Providing software updates and security patches</li>
                <li>Troubleshooting technical issues</li>
                <li>Enhancing user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                4. Data Storage and Security
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                4.1 Local Storage
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                All your personal data, conversations, and preferences are stored locally on your device. 
                We use industry-standard encryption to protect this data.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                4.2 Security Measures
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4">
                <li>AES-256 encryption for all local data</li>
                <li>Secure boot and hardware-level security</li>
                <li>Regular security updates via OTA</li>
                <li>No cloud dependencies for core functionality</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                5. Third-Party Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our AI assistant is designed to work offline and does not rely on third-party cloud services 
                for core functionality. Any optional integrations (such as smart home devices) are processed 
                locally through your home network.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                6. Your Rights
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Since your data stays on your device, you have complete control:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 mt-2">
                <li>Access: You can access all your data directly on your device</li>
                <li>Deletion: You can delete any or all data at any time</li>
                <li>Portability: Your data can be exported in standard formats</li>
                <li>Control: You control all privacy settings and data sharing preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                7. Updates to This Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                8. Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> me@therencho.com<br />
                  <strong>Founders:</strong> Rohitkumar Luni & Ranchhod bhai Aal
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 