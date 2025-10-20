import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const HeroSection = ({ timeLeft }: HeroSectionProps) => {
  return (
    <section className="text-center space-y-8 scroll-reveal">
      <div className="space-y-6 scroll-reveal delay-100">
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/30" />
          <Icon name="Heart" className="text-primary animate-pulse" size={20} />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/30" />
        </div>
        
        <h1 className="font-serif text-7xl md:text-9xl text-primary mb-6 drop-shadow-lg tracking-wide animate-fade-in">
          Лев <span className="text-accent opacity-60 mx-2 animate-pulse">✦</span> Яна
        </h1>
        
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/30" />
          <Icon name="Sparkles" className="text-accent" size={16} />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/30" />
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="font-serif text-2xl text-primary">
            Дорогой гость!
          </p>
          <p className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed">
            Мы с замиранием сердца и особым трепетом приглашаем тебя стать частью самого важного дня в нашей жизни — дня, когда мы соединяем свои сердца и судьбы.
          </p>
          <p className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed">
            Этот день для нас — не просто праздник. Это начало новой главы, наполненной мечтами, планами, любовью и верой в то, что всё самое светлое ещё впереди. И мы искренне хотим, чтобы рядом с нами в этот волнующий момент были самые близкие и дорогие люди — такие, как ты.
          </p>
        </div>
      </div>
      
      <div className="inline-block scroll-reveal-scale delay-200">
        <div className="relative">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
              <div key={day} className="w-12 h-12 flex items-center justify-center text-sm font-sans text-muted-foreground">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {[null, null, null, null, null, 1, 2].map((day, idx) => (
              <div
                key={idx}
                className={`w-12 h-12 flex items-center justify-center rounded-sm font-sans ${
                  day ? 'bg-amber-100/60 text-amber-900 border border-amber-700/20' : ''
                }`}
              >
                {day || ''}
              </div>
            ))}
            {[3, 4, 5, 6, 7, 8, 9].map((day) => (
              <div
                key={day}
                className={`w-12 h-12 flex items-center justify-center rounded-sm font-sans text-amber-900 border border-amber-700/20 ${
                  day === 7 ? 'bg-amber-700 text-amber-50 ring-4 ring-amber-700/30 font-bold scale-110 vintage-shadow' : 'bg-amber-100/60'
                }`}
              >
                {day}
              </div>
            ))}
            {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day) => (
              <div
                key={day}
                className="w-12 h-12 flex items-center justify-center rounded-sm bg-amber-100/60 font-sans text-amber-900 border border-amber-700/20"
              >
                {day}
              </div>
            ))}
          </div>
          
          <p className="mt-4 font-serif text-2xl text-primary">
            Август 2026
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50/95 via-stone-50/90 to-amber-50/95 backdrop-blur-sm rounded-lg p-10 vintage-shadow border border-amber-700/20 shadow-2xl scroll-reveal-scale delay-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-700/30" />
            <h2 className="font-serif text-3xl text-primary tracking-wide">До свадьбы осталось</h2>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-700/30" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[
              { value: timeLeft.days, label: 'Дней', icon: 'Calendar' },
              { value: timeLeft.hours, label: 'Часов', icon: 'Clock' },
              { value: timeLeft.minutes, label: 'Минут', icon: 'Timer' },
              { value: timeLeft.seconds, label: 'Секунд', icon: 'Zap' }
            ].map((item, idx) => (
              <div key={item.label} className="text-center bg-white/60 rounded-lg p-5 border border-amber-700/10 shadow-lg hover:shadow-xl hover:border-amber-700/30 transition-all duration-300 hover:scale-105 animate-scale-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <Icon name={item.icon as any} className="text-primary/40 mx-auto mb-2 animate-bounce-gentle" size={20} style={{animationDelay: `${idx * 0.2}s`}} />
                <div className="text-4xl md:text-5xl font-bold text-accent font-serif">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground font-sans mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;