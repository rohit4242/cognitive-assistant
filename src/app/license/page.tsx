import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'License | Cognitive Assistant',
  description: 'License information for Cognitive Assistant - Your privacy-first AI companion',
};

export default function License() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-8">
            License Information
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                1. Software License
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Cognitive Assistant is proprietary software developed by Rohitkumar Luni and 
                Ranchhod bhai Aal. The software is protected by copyright and other intellectual 
                property laws. This license grants you specific rights to use the software under 
                the terms outlined below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                2. Grant of License
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Subject to the terms and conditions of this license, we grant you a limited, 
                non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4">
                <li>Install and use the Cognitive Assistant software on your personal devices</li>
                <li>Use the software for personal, non-commercial purposes</li>
                <li>Receive and install software updates and security patches</li>
                <li>Access documentation and support materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                3. Restrictions
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                You may not, and you agree not to permit others to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4">
                <li>Copy, modify, or create derivative works of the software</li>
                <li>Reverse engineer, disassemble, or decompile the software</li>
                <li>Distribute, sell, lease, or sublicense the software</li>
                <li>Remove or alter any proprietary notices or labels</li>
                <li>Use the software for commercial purposes without explicit permission</li>
                <li>Attempt to extract or access the underlying AI models</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                4. Third-Party Components
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Cognitive Assistant incorporates certain third-party software components that are 
                subject to their own license terms:
              </p>

              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                4.1 AI Models
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 mb-4">
                <li><strong>Llama 2:</strong> Custom License by Meta (for research and commercial use)</li>
                <li><strong>Mistral 7B:</strong> Apache 2.0 License</li>
                <li><strong>Custom Models:</strong> Proprietary (developed by our team)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                4.2 System Components
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 mb-4">
                <li><strong>Ubuntu 18.04 LTS:</strong> GNU General Public License</li>
                <li><strong>NVIDIA Jetson SDK:</strong> NVIDIA Software License Agreement</li>
                <li><strong>IoT Libraries:</strong> Various open-source licenses (MIT, Apache 2.0)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                4.3 Web Interface
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4">
                <li><strong>Next.js:</strong> MIT License</li>
                <li><strong>React:</strong> MIT License</li>
                <li><strong>Tailwind CSS:</strong> MIT License</li>
                <li><strong>Framer Motion:</strong> MIT License</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                5. Intellectual Property Rights
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                All rights, title, and interest in and to the Cognitive Assistant software, 
                including all intellectual property rights, remain with Rohitkumar Luni and 
                Ranchhod bhai Aal. This license does not grant you any rights to our trademarks, 
                service marks, or logos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                6. Privacy and Data Rights
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                In accordance with our privacy-first principles:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 ml-4 mt-2">
                <li>You retain full ownership of all data processed by the software</li>
                <li>All AI processing occurs locally on your device</li>
                <li>No personal data is transmitted to our servers</li>
                <li>You have the right to export or delete your data at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                7. Updates and Modifications
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We may provide updates, patches, and new versions of the software. These updates 
                may include security enhancements, bug fixes, and new features. By accepting 
                updates, you agree that they are subject to the terms of this license.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                8. Termination
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                This license is effective until terminated. Your rights under this license will 
                terminate automatically if you fail to comply with any of its terms. Upon 
                termination, you must cease all use of the software and destroy all copies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                9. Disclaimer of Warranties
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
                INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
                PARTICULAR PURPOSE, AND NONINFRINGEMENT. WE DO NOT WARRANT THAT THE SOFTWARE WILL 
                BE ERROR-FREE OR UNINTERRUPTED.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                10. Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
                DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, 
                ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
                DEALINGS IN THE SOFTWARE.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                11. Governing Law
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                This license shall be governed by and construed in accordance with the laws of 
                India, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                12. Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                For questions about this license or to request permissions beyond the scope 
                of this license, please contact us:
              </p>
              <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> me@therencho.com<br />
                  <strong>Founders:</strong> Rohitkumar Luni & Ranchhod bhai Aal<br />
                  <strong>LinkedIn:</strong> <a href="https://in.linkedin.com/in/rohit4242" className="text-teal-600 hover:text-teal-700">https://in.linkedin.com/in/rohit4242</a>
                </p>
              </div>
            </section>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                📄 License Summary
              </h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                This is a proprietary software license that grants you the right to use Cognitive 
                Assistant for personal purposes while protecting our intellectual property rights. 
                For commercial use or custom licensing arrangements, please contact us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 