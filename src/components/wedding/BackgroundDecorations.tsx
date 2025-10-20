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
      
      <div className="absolute top-0 left-0 w-96 h-96 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-amber-500/20 to-transparent blur-3xl" />
      </div>
      <div className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-yellow-500/20 to-transparent blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 w-72 h-72 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-radial from-amber-600/20 to-transparent blur-3xl" />
      </div>
      
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-amber-900/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-900/5 to-transparent pointer-events-none" />
      
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-20">
        <svg viewBox="0 0 200 200" className="text-amber-600 fill-current w-full h-full">
          <path d="M100,20 Q120,40 140,40 Q160,40 180,20 L180,60 Q160,80 140,80 Q120,80 100,60 Z" opacity="0.3" />
          <circle cx="100" cy="100" r="3" />
          <path d="M20,100 L40,120 L40,140 L20,160" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20 scale-x-[-1]">
        <svg viewBox="0 0 200 200" className="text-amber-600 fill-current w-full h-full">
          <path d="M100,20 Q120,40 140,40 Q160,40 180,20 L180,60 Q160,80 140,80 Q120,80 100,60 Z" opacity="0.3" />
          <circle cx="100" cy="100" r="3" />
          <path d="M20,100 L40,120 L40,140 L20,160" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
        </svg>
      </div>
      
      <div className="absolute top-1/2 left-0 w-32 h-48 pointer-events-none opacity-15">
        <svg viewBox="0 0 100 150" className="text-amber-700 fill-current w-full h-full">
          <path d="M10,0 Q30,20 30,50 Q30,80 10,100 Q30,120 30,150 L0,150 L0,0 Z" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-0 w-32 h-48 pointer-events-none opacity-15 scale-x-[-1]">
        <svg viewBox="0 0 100 150" className="text-amber-700 fill-current w-full h-full">
          <path d="M10,0 Q30,20 30,50 Q30,80 10,100 Q30,120 30,150 L0,150 L0,0 Z" />
        </svg>
      </div>
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
      }} />
    </>
  );
};

export default BackgroundDecorations;
