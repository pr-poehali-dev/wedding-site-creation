import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const DressCodeSection = () => {
  const menOutfits = [
    'https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/d29ed40d-6f91-4bd9-aa0b-4f432892e7c9.jpg',
    'https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/e5bf92a5-9f77-41f4-b64b-065faecabe2c.jpg',
    'https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/5120bac1-791c-4fd4-977e-ef2ef12eea50.jpg'
  ];

  const womenOutfits = [
    'https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/e3fcc532-6a24-40f7-87c5-0f016c29471d.jpg',
    'https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/0078514e-c0fa-49d3-9455-3205fe44d3d0.jpg',
    'https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/2df4e666-3206-4218-9be0-06e38673ca22.jpg'
  ];

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
      
      <Card className="p-10 text-center space-y-8 shadow-2xl border-4 border-amber-600/30 bg-gradient-to-br from-amber-50/95 via-white/90 to-amber-50/95 backdrop-blur-sm relative overflow-hidden scroll-reveal-scale delay-200" style={{
        borderImage: 'linear-gradient(135deg, #D4AF37, #FFD700, #D4AF37) 1'
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 via-transparent to-amber-700/5 pointer-events-none" />
        <div className="relative z-10">
          <Icon name="Sparkles" className="mx-auto mb-6 text-amber-700/60" size={52} />
          <p className="font-serif text-4xl text-primary mb-4 tracking-wider">Cocktail</p>
          <p className="text-muted-foreground font-sans max-w-md mx-auto mb-8">
            Приглашаем вас разделить с нами радость этого дня в элегантных нарядах
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-2xl text-primary mb-6 flex items-center justify-center gap-2">
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
                    <div className="absolute -inset-2 border-2 border-amber-600/20 group-hover:border-amber-600/40 transition-colors" />
                    <div className="relative overflow-hidden bg-white shadow-lg">
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
              <h3 className="font-serif text-2xl text-primary mb-6 flex items-center justify-center gap-2">
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
                    <div className="absolute -inset-2 border-2 border-amber-600/20 group-hover:border-amber-600/40 transition-colors" />
                    <div className="relative overflow-hidden bg-white shadow-lg">
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
