import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const DressCodeSection = () => {
  return (
    <section className="space-y-8 scroll-reveal">
      <div className="text-center space-y-4 scroll-reveal delay-100">
        <div className="flex flex-col items-center gap-4">
          <Icon name="Shirt" className="text-primary/70 animate-bounce-gentle" size={40} />
          <h2 className="font-serif text-5xl text-primary tracking-wide">Дресс-код</h2>
          <div className="flex items-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/40" />
            <div className="w-2 h-2 bg-accent/50 rounded-full animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </div>
      </div>
      
      <Card className="p-10 text-center space-y-6 shadow-2xl vintage-shadow border-2 border-primary/20 bg-card/95 backdrop-blur-sm relative overflow-hidden scroll-reveal-scale delay-200">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="relative z-10">
          <Icon name="Sparkles" className="mx-auto mb-6 text-accent/70 animate-pulse-glow" size={56} />
          <p className="font-serif text-3xl text-primary mb-4 tracking-wider">Вечерний стиль</p>
          <p className="text-muted-foreground font-sans max-w-md mx-auto">
            Приглашаем вас разделить с нами радость этого дня в элегантных нарядах
          </p>
        </div>
      </Card>
    </section>
  );
};

export default DressCodeSection;
