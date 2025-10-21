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
    for (let i = 0; i < 25; i++) {
      petalArray.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 12 + Math.random() * 8,
        animationDelay: Math.random() * 10,
        size: 15 + Math.random() * 15,
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
          className="absolute animate-fall-petal opacity-70"
          style={{
            left: `${petal.left}%`,
            top: '-50px',
            width: `${petal.size}px`,
            height: `${petal.size * 0.75}px`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.animationDelay}s`,
            transform: `rotate(${petal.rotation}deg)`
          }}
        >
          <svg viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="20" cy="15" rx="18" ry="13" fill="rgba(244, 114, 182, 0.5)" />
            <ellipse cx="20" cy="15" rx="14" ry="10" fill="rgba(251, 146, 202, 0.6)" />
            <ellipse cx="20" cy="15" rx="10" ry="7" fill="rgba(253, 164, 212, 0.7)" />
            <ellipse cx="20" cy="17" rx="6" ry="4" fill="rgba(255, 182, 222, 0.5)" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FallingPetals;