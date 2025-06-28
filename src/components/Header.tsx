import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg border-b-4 border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="catblox-logo text-3xl font-bold italic transform -skew-x-12">
              CatBlox
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            <a
              href="#"
              className="nav-button px-4 py-2 rounded text-white font-semibold hover:bg-blue-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="nav-button px-4 py-2 rounded text-white font-semibold hover:bg-blue-500 transition-colors"
            >
              Games
            </a>
            <a
              href="#"
              className="nav-button px-4 py-2 rounded text-white font-semibold hover:bg-blue-500 transition-colors"
            >
              Avatar
            </a>
            <a
              href="#"
              className="nav-button px-4 py-2 rounded text-white font-semibold hover:bg-blue-500 transition-colors"
            >
              Catalog
            </a>
            <a
              href="#"
              className="nav-button px-4 py-2 rounded text-white font-semibold hover:bg-blue-500 transition-colors"
            >
              Forum
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="auth-button px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded shadow-md transition-all transform hover:scale-105">
              Login
            </button>
            <button className="auth-button px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded shadow-md transition-all transform hover:scale-105">
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <Icon name="Menu" size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-white font-semibold py-2">
              Home
            </a>
            <a href="#" className="text-white font-semibold py-2">
              Games
            </a>
            <a href="#" className="text-white font-semibold py-2">
              Avatar
            </a>
            <a href="#" className="text-white font-semibold py-2">
              Catalog
            </a>
            <a href="#" className="text-white font-semibold py-2">
              Forum
            </a>
            <div className="flex space-x-2 pt-2">
              <button className="flex-1 py-2 bg-green-500 text-white font-bold rounded">
                Login
              </button>
              <button className="flex-1 py-2 bg-orange-500 text-white font-bold rounded">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
