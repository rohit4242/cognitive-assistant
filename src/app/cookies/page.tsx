import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookies Policy | Cognitive Assistant',
  description: 'Cookies Policy for Cognitive Assistant - Your privacy-first AI companion',
};

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-8">
            Cookies Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                1. What Are Cookies
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. 
                They are widely used to make websites work more efficiently and provide information to 
                website owners. At Cognitive Assistant, we are committed to privacy-first principles, 
                which extends to our minimal use of cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                2. How We Use Cookies
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                In line with our privacy-first approach, we use minimal cookies and only for essential 
                website functionality. We do not use tracking cookies or third-party analytics cookies.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                2.1 Essential Cookies
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                These cookies are necessary for the website to function properly:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 mb-4">
                <li><strong>Session cookies:</strong> To maintain your session while browsing</li>
                <li><strong>Security cookies:</strong> To protect against cross-site request forgery</li>
                <li><strong>Preference cookies:</strong> To remember your theme preferences (dark/light mode)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                2.2 What We Don't Use
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We explicitly do not use:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4">
                <li>Tracking cookies for analytics</li>
                <li>Advertising cookies</li>
                <li>Third-party cookies (Google Analytics, Facebook Pixel, etc.)</li>
                <li>Behavioral tracking cookies</li>
                <li>Cross-site tracking mechanisms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                3. Types of Cookies We Use
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-4">
                  <thead>
                    <tr className="bg-teal-50 dark:bg-teal-900/20">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">theme-preference</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Stores your dark/light mode preference</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">session-id</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Maintains your browsing session</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Session only</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">csrf-token</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Security protection against CSRF attacks</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Session only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                4. Local Storage vs Cookies
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                For our AI assistant application, most user data and preferences are stored locally 
                on your device using browser local storage rather than cookies. This approach:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 mt-2">
                <li>Keeps your data completely private and local</li>
                <li>Doesn't transmit data to our servers</li>
                <li>Gives you full control over your information</li>
                <li>Works offline without any external dependencies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                5. Managing Cookies
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                5.1 Browser Settings
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                You can control cookies through your browser settings:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 mb-4">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                5.2 Impact of Disabling Cookies
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Since we only use essential cookies, disabling them may affect:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4">
                <li>Your theme preference (will reset to default)</li>
                <li>Session continuity while browsing</li>
                <li>Security features of the website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                6. Third-Party Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We do not use third-party services that set cookies on our website. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 mt-2">
                <li>No Google Analytics or similar tracking services</li>
                <li>No social media tracking pixels</li>
                <li>No advertising networks</li>
                <li>No external analytics or marketing tools</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                7. Updates to This Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We may update this Cookies Policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons. We will notify 
                you of any material changes by posting the updated policy on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                8. Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have any questions about our use of cookies or this Cookies Policy, 
                please contact us:
              </p>
              <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> me@therencho.com<br />
                  <strong>Founders:</strong> Rohitkumar Luni & Ranchhod bhai Aal<br />
                  <strong>LinkedIn:</strong> <a href="https://in.linkedin.com/in/rohit4242" className="text-teal-600 hover:text-teal-700">https://in.linkedin.com/in/rohit4242</a>
                </p>
              </div>
            </section>

            <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
                🍃 Privacy-First Commitment
              </h3>
              <p className="text-green-700 dark:text-green-300 text-sm">
                Our minimal cookie usage reflects our commitment to privacy. We believe in 
                transparency and giving you control over your data, which is why we've designed 
                our service to work primarily with local processing and minimal data collection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 