import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) {
      console.log('Аудио элемент не найден');
      return;
    }

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        console.log('Музыка остановлена');
      } else {
        console.log('Попытка воспроизведения...');
        const playPromise = await audio.play();
        setIsPlaying(true);
        console.log('Музыка играет', playPromise);
      }
    } catch (error) {
      console.error('Ошибка воспроизведения:', error);
      alert('Не удалось воспроизвести музыку. Попробуйте ещё раз.');
    }
  };

  return (
    <footer className="text-center pt-12 pb-6 border-t border-primary/10 relative scroll-reveal">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/30" />
        <Icon name="Heart" className="text-primary" size={24} />
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/30" />
      </div>
      <p className="font-serif text-2xl text-primary mb-2">До встречи на нашей свадьбе!</p>
      <p className="text-muted-foreground font-sans flex items-center justify-center gap-2">
        <Icon name="Calendar" size={16} />
        Лев & Яна • 07.08.2026
      </p>
      
      <button
        onClick={toggleMusic}
        className={`mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-700/80 to-amber-600/80 text-white rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
          isPlaying ? 'animate-pulse shadow-2xl shadow-amber-500/50' : ''
        }`}
      >
        <Icon name={isPlaying ? "Pause" : "Music"} size={20} className={isPlaying ? 'animate-bounce' : ''} />
        <span className="font-sans text-sm">{isPlaying ? "Пауза" : "Включить музыку"}</span>
      </button>
      
      <audio ref={audioRef} loop preload="auto">
        <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_3c0f3d2caf.mp3" type="audio/mpeg" />
      </audio>
    </footer>
  );
};

export default Footer;