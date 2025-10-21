import { useEffect, useRef } from 'react';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log('Автовоспроизведение заблокировано браузером');
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

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      controls
      className="w-full max-w-2xl mx-auto"
    >
      <source src="https://cdn.poehali.dev/public/classical-wedding-music.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default MusicPlayer;