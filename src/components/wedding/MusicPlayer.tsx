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
        <div className="fixed bottom-6 right-6 z-50 shadow-2xl rounded-lg overflow-hidden backdrop-blur-sm bg-card/95 border-2 border-primary/20 max-w-[350px] w-full">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1109421636&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&loop=true"
            title="SoundCloud - Дама"
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