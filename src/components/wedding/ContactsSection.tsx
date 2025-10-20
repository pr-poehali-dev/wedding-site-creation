import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
    <section className="space-y-8 scroll-reveal">
      <div className="text-center space-y-4 scroll-reveal delay-100">
        <div className="flex flex-col items-center gap-4">
          <Icon name="Phone" className="text-amber-700/40" size={32} />
          <h2 className="font-serif text-5xl text-primary tracking-wide">Контакты</h2>
          <div className="flex items-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-700/30" />
            <div className="w-2 h-2 bg-amber-700/40 rounded-full" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-700/30" />
          </div>
        </div>
      </div>
      <Card className="p-6 sm:p-10 max-w-2xl mx-auto shadow-2xl border border-amber-700/30 bg-gradient-to-br from-amber-50/95 via-white/90 to-amber-50/95 backdrop-blur-sm relative overflow-hidden scroll-reveal-scale delay-200">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="relative z-10">
          <p className="font-serif text-lg sm:text-xl text-foreground mb-6 text-center">
            Остались вопросы? Напишите нам!
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center">
            <a 
              href="https://t.me/pitonjr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 font-sans shadow-lg scroll-reveal-left delay-300 text-sm sm:text-base"
            >
              <Icon name="MessageCircle" size={20} className="group-hover:scale-110 transition-transform flex-shrink-0" />
              Написать Льву
            </a>
            <a 
              href="https://t.me/yana_5_578" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-700 to-amber-600 text-white rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 font-sans shadow-lg scroll-reveal-right delay-300 text-sm sm:text-base"
            >
              <Icon name="MessageCircle" size={20} className="group-hover:scale-110 transition-transform flex-shrink-0" />
              Написать Яне
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ContactsSection;