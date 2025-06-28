import { useState, useEffect } from "react";

const Banners = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      title: "🌟 Team c00lcatt Join Today!",
      description:
        "The coolest cat team is recruiting! Join now and get exclusive perks!",
      bgColor: "from-purple-500 to-pink-500",
      buttonText: "Join Team",
      action: () => alert("Welcome to team c00lcatt! 😸"),
    },
    {
      title: "🎉 New Game Alert!",
      description: "Cat Pizza Place just got a major update with new recipes!",
      bgColor: "from-orange-500 to-red-500",
      buttonText: "Play Now",
      action: () => alert("Loading Cat Pizza Place! 🍕"),
    },
    {
      title: "💎 Premium Membership",
      description: "Unlock exclusive cat breeds and special abilities!",
      bgColor: "from-blue-500 to-teal-500",
      buttonText: "Go Premium",
      action: () => alert("Premium features coming soon! ✨"),
    },
    {
      title: "🏆 Weekly Tournament",
      description: "Join the Purr-fect Racing Championship this weekend!",
      bgColor: "from-green-500 to-emerald-500",
      buttonText: "Register",
      action: () => alert("Tournament registration opened! 🏁"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const currentBannerData = banners[currentBanner];

  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`bg-gradient-to-r ${currentBannerData.bgColor} text-white rounded-lg p-8 shadow-xl transform hover:scale-105 transition-all duration-300`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {currentBannerData.title}
              </h3>
              <p className="text-lg opacity-90">
                {currentBannerData.description}
              </p>
            </div>
            <button
              onClick={currentBannerData.action}
              className="px-6 py-3 bg-white text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {currentBannerData.buttonText}
            </button>
          </div>
        </div>

        {/* Banner indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentBanner ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banners;
