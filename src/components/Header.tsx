import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    console.log(`Navigating to ${section}`);
    // Здесь можно добавить логику навигации
  };

  const handleAuthClick = (action: string) => {
    console.log(`${action} clicked`);
    alert(`${action} feature coming soon! 🐱`);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg border-b-4 border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1
              className="catblox-logo text-3xl font-bold italic transform -skew-x-12 cursor-pointer"
              onClick={() => handleNavClick("Home")}
            >
              CatBlox
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => handleNavClick("Home")}
              className="nav-button px-4 py-2 rounded text-white font-semibold hover:bg-blue-500 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("Games")}
              className="nav-button px-4 py-2 rounded text-white font-semibold hover:bg-blue-500 transition-colors"
            >
              Games
            </button>
            <button
              onClick={() => handleNavClick("Avatar")}
              className="nav-button px-4 py-2 rounded text-white font-semibold hover:bg-blue-500 transition-colors"
            >
              Avatar
            </button>
            <button
              onClick={() => handleNavClick("Catalog")}
              className="nav-button px-4 py-2 rounded text-white font-semibold hover:bg-blue-500 transition-colors"
            >
              Catalog
            </button>
            <button
              onClick={() => handleNavClick("Forum")}
              className="nav-button px-4 py-2 rounded text-white font-semibold hover:bg-blue-500 transition-colors"
            >
              Forum
            </button>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => handleAuthClick("Login")}
              className="auth-button px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded shadow-md transition-all transform hover:scale-105"
            >
              Login
            </button>
            <button
              onClick={() => handleAuthClick("Register")}
              className="auth-button px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded shadow-md transition-all transform hover:scale-105"
            >
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            <Icon name="Menu" size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavClick("Home")}
                className="text-white font-semibold py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("Games")}
                className="text-white font-semibold py-2 text-left"
              >
                Games
              </button>
              <button
                onClick={() => handleNavClick("Avatar")}
                className="text-white font-semibold py-2 text-left"
              >
                Avatar
              </button>
              <button
                onClick={() => handleNavClick("Catalog")}
                className="text-white font-semibold py-2 text-left"
              >
                Catalog
              </button>
              <button
                onClick={() => handleNavClick("Forum")}
                className="text-white font-semibold py-2 text-left"
              >
                Forum
              </button>
              <div className="flex space-x-2 pt-2">
                <button
                  onClick={() => handleAuthClick("Login")}
                  className="flex-1 py-2 bg-green-500 text-white font-bold rounded"
                >
                  Login
                </button>
                <button
                  onClick={() => handleAuthClick("Register")}
                  className="flex-1 py-2 bg-orange-500 text-white font-bold rounded"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
