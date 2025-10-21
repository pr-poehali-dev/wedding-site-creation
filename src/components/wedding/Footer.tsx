import { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  const handleClick = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        audio.volume = 0.5;
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (err) {
      console.error('Не удалось воспроизвести:', err);
    }
  };

  return (
    <footer className="text-center pt-12 pb-6 border-t-2 border-amber-700/20 relative scroll-reveal bg-gradient-to-t from-amber-50/30 to-transparent overflow-hidden">
      <div className="absolute top-8 right-12 text-base opacity-5">💕</div>
      
      <div className="flex items-center justify-center gap-4 mb-4 relative z-10">
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/40" />
        <Icon name="Heart" className="text-primary" size={24} />
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/40" />
      </div>
      <p className="font-serif text-3xl text-primary mb-2 relative z-10">До встречи на нашей свадьбе!</p>
      <p className="text-muted-foreground font-sans flex items-center justify-center gap-2 relative z-10">
        <Icon name="Calendar" size={16} />
        Лев & Яна • 07.08.2026
      </p>
      
      <button
        onClick={handleClick}
        type="button"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-700/80 to-amber-600/80 text-white rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm relative z-10"
      >
        <Icon name={isPlaying ? "Pause" : "Music"} size={20} />
        <span className="font-sans text-sm">{isPlaying ? "Пауза" : "Включить музыку"}</span>
      </button>
      
      <audio ref={audioRef} loop>
        <source src="https://assets.mixkit.co/music/preview/mixkit-a-very-happy-christmas-897.mp3" type="audio/mpeg" />
      </audio>
    </footer>
  );
};

export default Footer;