interface GameCardProps {
  title: string;
  image: string;
  players: string;
  rating: number;
}

const GameCard = ({ title, image, players, rating }: GameCardProps) => {
  const handlePlayClick = () => {
    console.log(`Playing ${title}`);
    alert(`Starting ${title}... 🎮 Get ready to play!`);
  };

  return (
    <div className="game-card bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden border-2 border-gray-200">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded font-bold text-sm">
          ⭐ {rating}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2 truncate">
          {title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            {players} playing
          </span>
          <button
            onClick={handlePlayClick}
            className="play-button px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded transition-colors"
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
