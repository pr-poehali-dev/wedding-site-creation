import { useState } from 'react';
import Icon from '@/components/ui/icon';

const MusicPlayer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 shadow-2xl rounded-lg overflow-hidden backdrop-blur-sm bg-card/95 border-2 border-primary/20">
          <iframe
            frameBorder="0"
            style={{ border: 'none', width: '350px', height: '100px' }}
            src="https://music.yandex.ru/iframe/track/42081818/?autoplay=1&repeat=track"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            title="Яндекс Музыка - Дама"
          />
        </div>
      )}

      <button
        onClick={toggleVisibility}
        className="fixed bottom-6 left-6 z-50 p-3 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full shadow-xl backdrop-blur-sm transition-all hover:scale-110"
        aria-label={isVisible ? 'Скрыть плеер' : 'Показать плеер'}
      >
        {isVisible ? (
          <Icon name="Volume2" size={20} />
        ) : (
          <Icon name="VolumeX" size={20} />
        )}
      </button>
    </>
  );
};

export default MusicPlayer;