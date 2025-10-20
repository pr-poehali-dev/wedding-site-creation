interface BackgroundDecorationsProps {
  confetti: Array<{id: number, x: number, y: number, rotation: number, color: string, delay: number}>;
}

const BackgroundDecorations = ({ confetti }: BackgroundDecorationsProps) => {
  return (
    <>
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 pointer-events-none animate-confetti-fall"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animationDelay: `${piece.delay}s`,
            opacity: 0.7
          }}
        />
      ))}
      
      <div className="absolute top-20 left-10 w-64 h-64 border border-primary/5 rounded-full pointer-events-none" />
      <div className="absolute top-40 left-20 w-48 h-48 border border-accent/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-32 right-16 w-72 h-72 border border-primary/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-48 right-32 w-56 h-56 border border-accent/5 rounded-full pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/10 rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/10 rounded-full pointer-events-none" />
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-accent/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary/15 rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-accent/15 rounded-full pointer-events-none" />
      
      <div className="absolute top-0 left-0 w-96 h-96 opacity-10 pointer-events-none animate-pulse">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none animate-pulse" style={{animationDelay: '1s'}}>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-accent/20 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 w-72 h-72 opacity-10 pointer-events-none animate-pulse" style={{animationDelay: '2s'}}>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-radial from-secondary/30 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none" />
    </>
  );
};

export default BackgroundDecorations;
