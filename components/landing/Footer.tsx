import Container from "@/components/shared/Container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="py-16 lg:py-20 border-t border-dark-800"
      style={{ backgroundColor: "#0a0a0b" }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Brand and description */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/assets/logo.svg"
                alt="Kickoff Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-xl font-bold text-white">Kickoff</span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Organize tournaments with ease. Connect teams, manage
              competitions, and showcase your skills on our platform.
            </p>

            {/* Navigation Links */}
            <nav className="mt-8">
              <ul className="flex flex-wrap gap-x-8 gap-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#tournaments"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Tournaments
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#support"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right side - App download */}
          <div className="lg:text-right">
            <h3 className="text-lg font-semibold text-white mb-3">
              Download the app
            </h3>
            <p className="text-gray-400 text-base mb-6">
              Scan the QR code to download the app from the App Store.
            </p>

            {/* Realistic QR Code */}
            <div className="inline-block p-4 bg-white rounded-lg border border-dark-700 mb-6">
              <div className="w-24 h-24 grid grid-cols-8 gap-0">
                {/* Row 1 */}
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                {/* Row 2 */}
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                {/* Row 3 */}
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                {/* Row 4 */}
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                {/* Row 5 */}
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                {/* Row 6 */}
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                {/* Row 7 */}
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                {/* Row 8 */}
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-white"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-dark-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © Copyright 2025. All rights reserved.
            </p>

            {/* Newsletter signup */}
            <div className="flex gap-2 w-full md:w-auto max-w-sm">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 text-sm bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
              />
              <button className="px-6 py-2 bg-teal-600 text-white text-sm font-medium rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap">
                Join our newsletter
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
