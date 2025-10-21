import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/icon';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setHasInteracted(true);
      } catch (error) {
        console.log('Автовоспроизведение заблокировано браузером');
        setIsPlaying(false);
      }
    };

    attemptAutoplay();

    const handleUserInteraction = async () => {
      if (!hasInteracted && audio.paused) {
        try {
          await audio.play();
          setIsPlaying(true);
          setHasInteracted(true);
        } catch (error) {
          console.log('Не удалось воспроизвести музыку');
        }
      }
    };

    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('touchstart', handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Ошибка воспроизведения');
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="https://drive.google.com/uc?export=download&id=1dc-KeWTwxvid6fy-whW2OLWIX27l-PUb" type="audio/mpeg" />
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