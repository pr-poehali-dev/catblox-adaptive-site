const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="catblox-logo text-2xl font-bold italic transform -skew-x-12 mb-4">
              CatBlox
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              The ultimate cat-themed gaming platform where creativity meets
              purr-fection. Join millions of players in creating amazing cat
              adventures!
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl">🐱</span>
              <span className="text-2xl">🎮</span>
              <span className="text-2xl">🎨</span>
              <span className="text-2xl">🏆</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Games
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Avatar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Catalog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Forum
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CatBlox. All rights reserved. Made with 💜 for cat lovers
            everywhere.
          </p>
          <div className="mt-4 md:mt-0 text-gray-400 text-sm">
            Inspired by the golden age of gaming 🎮
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
