interface BackgroundDecorationsProps {
  confetti: Array<{id: number, x: number, y: number, rotation: number, color: string, delay: number}>;
}

const BackgroundDecorations = ({ confetti }: BackgroundDecorationsProps) => {
  return (
    <>
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 pointer-events-none animate-confetti-fall"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animationDelay: `${piece.delay}s`,
            opacity: 0.5,
            borderRadius: '50%'
          }}
        />
      ))}
      
      <div className="absolute top-0 left-0 w-96 h-96 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-yellow-400/30 to-transparent blur-3xl" />
      </div>
      <div className="absolute top-0 right-0 w-80 h-80 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-amber-400/30 to-transparent blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 opacity-5 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-radial from-yellow-500/30 to-transparent blur-3xl" />
      </div>
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD700' fill-opacity='1'%3E%3Cpath d='M0 20 L20 0 L40 20 L20 40 Z' fill-opacity='0.3'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px'
      }} />
    </>
  );
};

export default BackgroundDecorations;
