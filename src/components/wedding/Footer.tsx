import Icon from '@/components/ui/icon';

const Footer = () => {
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
        onClick={() => {
          const audio = document.getElementById('wedding-music') as HTMLAudioElement;
          if (audio.paused) {
            audio.play();
          } else {
            audio.pause();
          }
        }}
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-700/80 to-amber-600/80 text-white rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
      >
        <Icon name="Music" size={20} />
        <span className="font-sans text-sm">Включить музыку</span>
      </button>
      
      <audio id="wedding-music" loop>
        <source src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3" type="audio/mpeg" />
      </audio>
    </footer>
  );
};

export default Footer;
