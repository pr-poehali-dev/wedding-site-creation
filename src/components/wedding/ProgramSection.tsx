import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProgramSection = () => {
  return (
    <section className="space-y-8 scroll-reveal">
      <div className="text-center space-y-4 scroll-reveal delay-100">
        <div className="flex flex-col items-center gap-4">
          <Icon name="Sparkles" className="text-amber-700/40 animate-pulse-glow" size={32} />
          <h2 className="font-serif text-5xl text-primary tracking-wide animate-fade-in">Программа дня</h2>
          <div className="flex items-center gap-2 animate-fade-in">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-700/30" />
            <div className="w-2 h-2 bg-amber-700/40 rounded-full animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-700/30" />
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <Card className="p-4 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-amber-700/30 bg-gradient-to-br from-amber-50/95 via-white/90 to-amber-50/95 backdrop-blur-sm shadow-lg relative overflow-hidden scroll-reveal-left delay-200 animate-slide-in-left">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-700/70 via-amber-600/50 to-amber-700/70 animate-shimmer" style={{backgroundSize: '200% 100%'}} />
          <div className="absolute top-8 right-8 text-3xl opacity-8">💍</div>
          <div className="absolute bottom-8 right-8 text-3xl opacity-6">💕</div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-gradient-to-br from-amber-700/30 to-amber-600/20 p-3 sm:p-4 rounded-full ring-2 ring-amber-700/30 shadow-md animate-pulse-glow flex-shrink-0">
              <Icon name="Clock" className="text-primary" size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-serif text-2xl sm:text-3xl text-primary mb-2 tracking-wide">14:15</div>
              <h3 className="font-sans font-semibold text-lg sm:text-xl mb-2">Торжественная регистрация</h3>
              <p className="text-muted-foreground font-sans text-sm sm:text-base break-words">
                <Icon name="MapPin" className="inline mr-1" size={16} />
                г. Екатеринбург, ул. Карла Либкнехта, 3
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-amber-700/30 bg-gradient-to-br from-amber-50/95 via-white/90 to-amber-50/95 backdrop-blur-sm shadow-lg relative overflow-hidden scroll-reveal-left delay-300">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-700/70 via-amber-600/50 to-amber-700/70" />
          <div className="absolute top-8 right-8 text-3xl opacity-8">📸</div>
          <div className="absolute bottom-8 right-8 text-3xl opacity-6">🌸</div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-gradient-to-br from-amber-700/30 to-amber-600/20 p-3 sm:p-4 rounded-full ring-2 ring-amber-700/30 shadow-md flex-shrink-0">
              <Icon name="Camera" className="text-primary" size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-serif text-2xl sm:text-3xl text-primary mb-2 tracking-wide">15:00 — 16:00</div>
              <h3 className="font-sans font-semibold text-lg sm:text-xl mb-2">Фотосессия</h3>
              <p className="text-muted-foreground font-sans text-sm sm:text-base break-words">
                Прогулка и создание прекрасных воспоминаний
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-amber-700/30 bg-gradient-to-br from-amber-50/95 via-white/90 to-amber-50/95 backdrop-blur-sm shadow-lg relative overflow-hidden scroll-reveal-left delay-400">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-amber-700/70 via-amber-600/50 to-amber-700/70" />
          <div className="absolute top-8 right-8 text-3xl opacity-8">🥂</div>
          <div className="absolute bottom-8 right-8 text-3xl opacity-6">🍾</div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-gradient-to-br from-amber-700/30 to-amber-600/20 p-3 sm:p-4 rounded-full ring-2 ring-amber-700/30 shadow-md flex-shrink-0">
              <Icon name="Sparkles" className="text-accent" size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-serif text-2xl sm:text-3xl text-primary mb-2 tracking-wide">16:00 — 23:00</div>
              <h3 className="font-sans font-semibold text-lg sm:text-xl mb-2">Праздничный банкет</h3>
              <p className="text-muted-foreground font-sans text-sm sm:text-base mb-4 break-words">
                <Icon name="MapPin" className="inline mr-1" size={16} />
                г. Екатеринбург, ул. Гагарина, 30а, отель Grand Hall
              </p>
              <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden mb-3 touch-manipulation">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=60.646091%2C56.834186&z=16&pt=60.646091,56.834186,pm2rdm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="border-0"
                  title="Карта Grand Hall"
                />
              </div>
              <a 
                href="https://yandex.ru/maps/?rtext=~56.834186,60.646091" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-sans text-sm sm:text-base"
              >
                <Icon name="Navigation" size={16} />
                Построить маршрут
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProgramSection;