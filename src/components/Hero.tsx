const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-400 to-blue-600 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow-lg">
            Welcome to CatBlox! 🐱
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            The ultimate cat-themed gaming platform where creativity meets
            purr-fection!
          </p>
          <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
            Create amazing cat adventures, customize your feline avatar, and
            explore endless worlds filled with meowing fun. Join millions of cat
            lovers in the most paw-some gaming experience!
          </p>
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <button className="hero-button w-full md:w-auto px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl rounded-lg shadow-xl transform hover:scale-105 transition-all duration-200">
            🎮 Play Now!
          </button>
          <button className="hero-button w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold text-xl rounded-lg shadow-xl transform hover:scale-105 transition-all duration-200">
            🎨 Create Game
          </button>
        </div>

        <div className="mt-12 flex justify-center items-center space-x-8 text-blue-200">
          <div className="text-center">
            <div className="text-2xl font-bold">1M+</div>
            <div className="text-sm">Happy Cats</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">50K+</div>
            <div className="text-sm">Cat Games</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm">Purr Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
