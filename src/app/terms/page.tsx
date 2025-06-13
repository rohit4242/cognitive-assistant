import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Cognitive Assistant',
  description: 'Terms of Service for Cognitive Assistant - Your privacy-first AI companion',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                By accessing and using Cognitive Assistant ("the Service"), you accept and agree to be bound 
                by the terms and provision of this agreement. These Terms of Service ("Terms") govern your 
                use of the Cognitive Assistant AI service provided by Rohitkumar Luni and Ranchhod bhai Aal 
                ("we," "us," or "our").
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Cognitive Assistant is a privacy-first AI assistant that operates entirely on your local device. 
                The Service includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 mt-2">
                <li>Real-time conversational AI processing</li>
                <li>Smart home device integration and control</li>
                <li>Intelligent scheduling and task management</li>
                <li>Offline functionality without cloud dependencies</li>
                <li>Over-the-air (OTA) security updates</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                3. User Responsibilities
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                3.1 Proper Use
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                You agree to use the Service only for lawful purposes and in accordance with these Terms. 
                You are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 mb-4">
                <li>Maintaining the security of your device and data</li>
                <li>Installing security updates in a timely manner</li>
                <li>Using the Service in compliance with applicable laws</li>
                <li>Not attempting to reverse engineer or modify the software</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                3.2 Prohibited Uses
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                You may not use the Service to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4">
                <li>Engage in illegal activities or promote illegal content</li>
                <li>Harass, abuse, or harm others</li>
                <li>Distribute malware or harmful code</li>
                <li>Attempt to gain unauthorized access to other systems</li>
                <li>Use the Service for commercial purposes without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                4. Privacy and Data Protection
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Your privacy is fundamental to our Service. All AI processing occurs locally on your device. 
                We do not collect, store, or transmit your personal conversations or data. For detailed 
                information about our privacy practices, please review our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                5. Software License
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, 
                non-transferable license to use the Cognitive Assistant software on your device. 
                This license does not include the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 mt-2">
                <li>Distribute, sell, or sublicense the software</li>
                <li>Modify, reverse engineer, or create derivative works</li>
                <li>Remove or alter any proprietary notices</li>
                <li>Use the software for commercial purposes without authorization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                6. Updates and Modifications
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                6.1 Software Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We may provide updates to improve functionality, security, and performance. 
                These updates may be delivered automatically via OTA mechanisms.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                6.2 Terms Modifications
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of 
                significant changes through the Service or via email. Continued use of the Service 
                after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                7. Disclaimers and Limitations
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                7.1 Service Availability
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                While our Service is designed to work offline, we do not guarantee uninterrupted 
                availability. The Service is provided "as is" without warranties of any kind.
              </p>

              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                7.2 AI Limitations
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our AI assistant is designed to be helpful, but it may occasionally provide 
                inaccurate or inappropriate responses. Users should exercise judgment and not 
                rely solely on AI recommendations for critical decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To the maximum extent permitted by law, we shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, or any loss of profits 
                or revenues, whether incurred directly or indirectly, or any loss of data, use, 
                goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                9. Termination
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                You may stop using the Service at any time. We may terminate or suspend your 
                access to the Service if you violate these Terms. Upon termination, your right 
                to use the Service will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                10. Governing Law
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                11. Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> me@therencho.com<br />
                  <strong>Founders:</strong> Rohitkumar Luni & Ranchhod bhai Aal<br />
                  <strong>LinkedIn:</strong> <a href="https://in.linkedin.com/in/rohit4242" className="text-teal-600 hover:text-teal-700">https://in.linkedin.com/in/rohit4242</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 