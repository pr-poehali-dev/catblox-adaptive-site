import GameCard from "./GameCard";

const PopularGames = () => {
  const games = [
    {
      title: "Work at Cat Pizza Place",
      image:
        "https://images.unsplash.com/photo-1571066811602-716837d681de?w=400&h=300&fit=crop",
      players: "12.3K",
      rating: 4.9,
    },
    {
      title: "1 Place Магнат",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      players: "8.7K",
      rating: 4.8,
    },
    {
      title: "Cat Café Empire",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
      players: "15.2K",
      rating: 4.9,
    },
    {
      title: "Meow Racing Championship",
      image:
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&h=300&fit=crop",
      players: "6.4K",
      rating: 4.7,
    },
    {
      title: "Cat Tower Simulator",
      image:
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=300&fit=crop",
      players: "9.1K",
      rating: 4.8,
    },
    {
      title: "Kitty Fashion Show",
      image:
        "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=300&fit=crop",
      players: "11.5K",
      rating: 4.6,
    },
    {
      title: "Cat Hospital Tycoon",
      image:
        "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop",
      players: "7.8K",
      rating: 4.7,
    },
    {
      title: "Purr-fect Escape Room",
      image:
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400&h=300&fit=crop",
      players: "5.9K",
      rating: 4.5,
    },
    {
      title: "Cat Space Adventure",
      image:
        "https://images.unsplash.com/photo-1511694670723-d47758811b2b?w=400&h=300&fit=crop",
      players: "13.7K",
      rating: 4.9,
    },
  ];

  const handleViewAllGames = () => {
    console.log("View All Games clicked");
    alert("Opening full game catalog! 🎮");
  };

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            🎮 Popular Cat Games
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the most paw-pular games in the CatBlox universe! From
            adventure to puzzles, find your purr-fect match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              image={game.image}
              players={game.players}
              rating={game.rating}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleViewAllGames}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            View All Games 🐱
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularGames;
