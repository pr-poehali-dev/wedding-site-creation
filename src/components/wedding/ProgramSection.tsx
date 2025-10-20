import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProgramSection = () => {
  return (
    <section className="space-y-8 scroll-reveal">
      <div className="text-center space-y-4 scroll-reveal delay-100">
        <div className="flex flex-col items-center gap-4">
          <Icon name="Sparkles" className="text-amber-700/40" size={32} />
          <h2 className="font-serif text-5xl text-primary tracking-wide">Программа дня</h2>
          <div className="flex items-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-700/30" />
            <div className="w-2 h-2 bg-amber-700/40 rounded-full" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-700/30" />
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-amber-700/20 bg-gradient-to-br from-amber-50/90 via-white/80 to-amber-50/90 backdrop-blur-sm shadow-lg relative overflow-hidden scroll-reveal-left delay-200">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-700/60 via-amber-600/40 to-amber-700/60" />
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-amber-700/20 to-amber-600/10 p-4 rounded-full ring-2 ring-amber-700/20 shadow-md">
              <Icon name="Clock" className="text-primary" size={28} />
            </div>
            <div className="flex-1">
              <div className="font-serif text-3xl text-primary mb-2 tracking-wide">14:15</div>
              <h3 className="font-sans font-semibold text-xl mb-2">Торжественная регистрация</h3>
              <p className="text-muted-foreground font-sans text-base">
                <Icon name="MapPin" className="inline mr-1" size={16} />
                г. Екатеринбург, ул. Карла Либкнехта, 3
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-amber-700/20 bg-gradient-to-br from-amber-50/90 via-white/80 to-amber-50/90 backdrop-blur-sm shadow-lg relative overflow-hidden scroll-reveal-left delay-300">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-700/60 via-amber-600/40 to-amber-700/60" />
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-amber-700/20 to-amber-600/10 p-4 rounded-full ring-2 ring-amber-700/20 shadow-md">
              <Icon name="Camera" className="text-primary" size={28} />
            </div>
            <div className="flex-1">
              <div className="font-serif text-3xl text-primary mb-2 tracking-wide">15:00 — 16:00</div>
              <h3 className="font-sans font-semibold text-xl mb-2">Фотосессия</h3>
              <p className="text-muted-foreground font-sans text-base">
                Прогулка и создание прекрасных воспоминаний
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-amber-700/20 bg-gradient-to-br from-amber-50/90 via-white/80 to-amber-50/90 backdrop-blur-sm shadow-lg relative overflow-hidden scroll-reveal-left delay-400">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-700/60 via-amber-600/40 to-amber-700/60" />
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-amber-700/20 to-amber-600/10 p-4 rounded-full ring-2 ring-amber-700/20 shadow-md">
              <Icon name="Sparkles" className="text-accent" size={28} />
            </div>
            <div className="flex-1">
              <div className="font-serif text-3xl text-primary mb-2 tracking-wide">16:00 — 23:00</div>
              <h3 className="font-sans font-semibold text-xl mb-2">Праздничный банкет</h3>
              <p className="text-muted-foreground font-sans text-base mb-4">
                <Icon name="MapPin" className="inline mr-1" size={16} />
                г. Екатеринбург, ул. Гагарина, 30а, отель Grand Hall
              </p>
              <div className="w-full h-64 rounded-lg overflow-hidden mb-3">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=60.646091%2C56.834186&z=16&pt=60.646091,56.834186,pm2rdm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="border-0"
                />
              </div>
              <a 
                href="https://yandex.ru/maps/?rtext=~56.834186,60.646091" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-sans"
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
