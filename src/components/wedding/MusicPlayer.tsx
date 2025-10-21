import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Автовоспроизведение заблокировано. Нажмите кнопку Play.');
      }
    };

    const handleInteraction = async () => {
      if (audio.paused) {
        await playAudio();
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
      }
    };

    playAudio();

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Ошибка воспроизведения');
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="https://cdn.poehali.dev/public/classical-wedding-music.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 p-4 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full shadow-xl backdrop-blur-sm transition-all hover:scale-110"
        aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
      >
        {isPlaying ? (
          <Icon name="Pause" size={24} />
        ) : (
          <Icon name="Play" size={24} />
        )}
      </button>
    </>
  );
};

export default MusicPlayer;