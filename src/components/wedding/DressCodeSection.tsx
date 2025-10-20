import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const DressCodeSection = () => {
  const menOutfits = [
    'https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/56c5b46f-545d-4a9f-be03-5efb6642ec8c.jpg',
    'https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/bcd9f5f6-f58f-41c2-aca1-9bc9356a841d.jpg',
    'https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/42b9d86b-ca1b-4b30-97a6-95d95c128bff.jpg'
  ];

  const womenOutfits = [
    'https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/434fae0b-1594-42a0-a7d6-091c9b7c89cb.jpg',
    'https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/2de5c0f7-5b67-444b-ac48-c16e9a0615ff.jpg',
    'https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/b1409864-2aa0-4e6f-85f2-bca237b65fdc.jpg'
  ];

  return (
    <section className="space-y-8 scroll-reveal">
      <div className="text-center space-y-4 scroll-reveal delay-100">
        <div className="flex flex-col items-center gap-4">
          <Icon name="Shirt" className="text-yellow-600/60" size={32} />
          <h2 className="font-display text-5xl text-foreground tracking-wide">Дресс-код</h2>
          <div className="flex items-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-yellow-600/40" />
            <div className="w-2 h-2 bg-yellow-600/50 rounded-full" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-yellow-600/40" />
          </div>
        </div>
      </div>
      
      <Card className="p-10 text-center space-y-8 shadow-xl border border-yellow-500/20 bg-white/90 backdrop-blur-sm relative overflow-hidden scroll-reveal-scale delay-200 rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-amber-50/30 pointer-events-none" />
        <div className="relative z-10">
          <Icon name="Sparkles" className="mx-auto mb-6 text-yellow-600/70" size={48} />
          <p className="font-display text-4xl text-foreground mb-4 tracking-wide">Cocktail</p>
          <p className="text-muted-foreground font-sans max-w-md mx-auto mb-8 text-base">
            Приглашаем вас разделить с нами радость этого дня в элегантных коктейльных нарядах
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center justify-center gap-2">
                <Icon name="User" size={24} />
                Для мужчин
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {menOutfits.map((outfit, index) => (
                  <div
                    key={index}
                    className="relative group scroll-reveal-scale"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden bg-white shadow-md border border-yellow-500/20 rounded-md group-hover:shadow-lg group-hover:border-yellow-500/40 transition-all duration-300">
                      <img
                        src={outfit}
                        alt={`Мужской образ ${index + 1}`}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center justify-center gap-2">
                <Icon name="UserRound" size={24} />
                Для женщин
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {womenOutfits.map((outfit, index) => (
                  <div
                    key={index}
                    className="relative group scroll-reveal-scale"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="relative overflow-hidden bg-white shadow-md border border-yellow-500/20 rounded-md group-hover:shadow-lg group-hover:border-yellow-500/40 transition-all duration-300">
                      <img
                        src={outfit}
                        alt={`Женский образ ${index + 1}`}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default DressCodeSection;
