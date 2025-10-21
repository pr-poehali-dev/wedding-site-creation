import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  rotation: number;
}

const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const petalArray: Petal[] = [];
    for (let i = 0; i < 30; i++) {
      petalArray.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 8 + Math.random() * 10,
        animationDelay: Math.random() * 8,
        size: 20 + Math.random() * 20,
        rotation: Math.random() * 360
      });
    }
    setPetals(petalArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-fall-petal opacity-60"
          style={{
            left: `${petal.left}%`,
            top: '-50px',
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.animationDelay}s`,
            transform: `rotate(${petal.rotation}deg)`
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="rgba(251, 191, 191, 0.7)"
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              transform="rotate(45 100 100)"
            />
            <path
              fill="rgba(254, 202, 202, 0.6)"
              d="M 100, 100 m -60, 0 a 60,60 0 1,0 120,0 a 60,60 0 1,0 -120,0"
              transform="rotate(90 100 100)"
            />
            <path
              fill="rgba(252, 165, 165, 0.5)"
              d="M 100, 100 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"
              transform="rotate(135 100 100)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FallingPetals;
