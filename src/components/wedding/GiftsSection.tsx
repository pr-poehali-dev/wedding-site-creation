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
      <Card className="p-10 shadow-2xl border border-amber-700/30 bg-gradient-to-br from-amber-50/95 via-white/90 to-amber-50/95 backdrop-blur-sm relative overflow-hidden scroll-reveal-scale delay-200">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700/5 via-transparent to-amber-900/5 pointer-events-none" />
        <div className="relative z-10 text-center">
          <Icon name="Gift" className="mx-auto mb-6 text-amber-700/60" size={52} />
          <p className="font-serif text-xl text-foreground leading-relaxed max-w-2xl mx-auto">
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
