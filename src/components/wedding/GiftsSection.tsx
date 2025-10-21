import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const GiftsSection = () => {
  return (
    <section className="space-y-8 scroll-reveal">
      <div className="text-center space-y-4 scroll-reveal delay-100">
        <div className="flex flex-col items-center gap-4">
          <Icon name="Gift" className="text-amber-700/40" size={32} />
          <h2 className="font-serif text-5xl text-primary tracking-wide">Подарки</h2>
          <div className="flex items-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-700/30" />
            <div className="w-2 h-2 bg-amber-700/40 rounded-full" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-700/30" />
          </div>
        </div>
      </div>
      <Card className="p-6 sm:p-10 shadow-2xl border-2 border-amber-700/30 bg-gradient-to-br from-amber-50/95 via-white/90 to-amber-50/95 backdrop-blur-sm relative overflow-hidden scroll-reveal-scale delay-200">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700/5 via-transparent to-amber-900/5 pointer-events-none" />
        <div className="absolute top-4 left-4 text-4xl opacity-15">🎁</div>
        <div className="absolute top-4 right-4 text-4xl opacity-15">💝</div>
        <div className="absolute bottom-4 left-8 text-3xl opacity-15">🎀</div>
        <div className="absolute bottom-4 right-8 text-3xl opacity-15">✨</div>
        <div className="absolute top-1/2 left-1/4 text-2xl opacity-10">💌</div>
        <div className="absolute top-1/3 right-1/4 text-2xl opacity-10">🌟</div>
        <div className="relative z-10 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-700/40" />
            <Icon name="Gift" className="text-amber-700/60" size={44} />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-700/40" />
          </div>
          <p className="font-serif text-base sm:text-xl text-foreground leading-relaxed max-w-2xl mx-auto">
            Дорогие гости! Самый ценный подарок для нас — ваше присутствие на нашем торжестве. 
            Цветы дарить не нужно — мы создали особенную атмосферу, которая не требует дополнений. 
            Если вы хотите порадовать нас подарком, мы будем благодарны за конверт, 
            который поможет нам воплотить мечты о нашем будущем вместе.
          </p>
        </div>
      </Card>
    </section>
  );
};

export default GiftsSection;