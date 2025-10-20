import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const DressCodeSection = () => {
  return (
    <section className="space-y-8 scroll-reveal">
      <div className="text-center space-y-4 scroll-reveal delay-100">
        <div className="flex flex-col items-center gap-4">
          <Icon name="Shirt" className="text-amber-700/40" size={32} />
          <h2 className="font-serif text-5xl text-primary tracking-wide">Дресс-код</h2>
          <div className="flex items-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-700/30" />
            <div className="w-2 h-2 bg-amber-700/40 rounded-full" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-700/30" />
          </div>
        </div>
      </div>
      <Card className="p-10 text-center space-y-6 shadow-2xl border border-amber-700/30 bg-gradient-to-br from-amber-50/95 via-white/90 to-amber-50/95 backdrop-blur-sm relative overflow-hidden scroll-reveal-scale delay-200">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 via-transparent to-amber-700/5 pointer-events-none" />
        <div className="relative z-10">
          <Icon name="Sparkles" className="mx-auto mb-6 text-amber-700/60" size={52} />
          <p className="font-serif text-4xl text-primary mb-4 tracking-wider">Cocktail</p>
          <p className="text-muted-foreground font-sans max-w-md mx-auto">
            Приглашаем вас разделить с нами радость этого дня в элегантных нарядах
          </p>
        </div>
      </Card>
    </section>
  );
};

export default DressCodeSection;
