import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const WeddingDate = new Date('2026-08-07T14:15:00');

const galleryImages = [
  'https://cdn.poehali.dev/files/47cd4b2c-f766-4e49-b728-fa316ae689a3.jpg',
  'https://cdn.poehali.dev/files/6d18faf1-cd85-4673-bc1e-395995960630.jpg',
  'https://cdn.poehali.dev/files/2edd5cd6-2798-4a87-a1b6-e257f810df65.jpg'
];

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = WeddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50/50 relative overflow-hidden vintage-texture sepia-tone">
      {/* Декоративные круги и формы */}
      <div className="absolute top-20 left-10 w-64 h-64 border border-primary/5 rounded-full pointer-events-none" />
      <div className="absolute top-40 left-20 w-48 h-48 border border-accent/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-32 right-16 w-72 h-72 border border-primary/5 rounded-full pointer-events-none" />
      <div className="absolute bottom-48 right-32 w-56 h-56 border border-accent/5 rounded-full pointer-events-none" />
      
      {/* Декоративные точки */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/10 rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/10 rounded-full pointer-events-none" />
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-accent/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary/15 rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-accent/15 rounded-full pointer-events-none" />
      
      {/* Декоративные элементы по углам */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-10 pointer-events-none animate-pulse">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none animate-pulse" style={{animationDelay: '1s'}}>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-accent/20 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 w-72 h-72 opacity-10 pointer-events-none animate-pulse" style={{animationDelay: '2s'}}>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-radial from-secondary/30 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Декоративные диагональные линии */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
      {/* Декоративные горизонтальные линии */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/8 to-transparent" />
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      
      {/* Угловые винтажные орнаменты */}
      <div className="absolute top-0 left-0 w-48 h-48 pointer-events-none opacity-30">
        <div className="border-l-4 border-t-4 border-amber-700/40 w-full h-full" style={{borderImage: 'linear-gradient(135deg, #8B7355, #D4AF37) 1'}} />
        <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-amber-600/30" />
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-30">
        <div className="border-r-4 border-t-4 border-amber-700/40 w-full h-full" style={{borderImage: 'linear-gradient(225deg, #8B7355, #D4AF37) 1'}} />
        <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-amber-600/30" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none opacity-30">
        <div className="border-l-4 border-b-4 border-amber-700/40 w-full h-full" style={{borderImage: 'linear-gradient(45deg, #8B7355, #D4AF37) 1'}} />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-amber-600/30" />
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none opacity-30">
        <div className="border-r-4 border-b-4 border-amber-700/40 w-full h-full" style={{borderImage: 'linear-gradient(315deg, #8B7355, #D4AF37) 1'}} />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-amber-600/30" />
      </div>
      
      {/* Винтажные декоративные элементы */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-amber-700/20 to-transparent pointer-events-none" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none">
        <div className="w-2 h-2 rounded-full bg-amber-700/30" />
        <div className="w-2 h-2 rounded-full bg-amber-600/30" />
        <div className="w-2 h-2 rounded-full bg-amber-700/30" />
      </div>
      
      <div className="container max-w-4xl mx-auto px-4 py-12 space-y-16 relative z-10">
        
        <section className="text-center space-y-8 animate-fade-in">
          <div className="space-y-6">
            {/* Декоративный разделитель сверху */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/30" />
              <Icon name="Heart" className="text-primary" size={20} />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/30" />
            </div>
            
            <h1 className="font-serif text-6xl md:text-8xl text-primary mb-6 drop-shadow-lg">
              Лев & Яна
            </h1>
            
            {/* Декоративный разделитель снизу */}
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
          
          <div className="inline-block">
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

          <div className="bg-amber-50/90 backdrop-blur-sm rounded-none p-8 vintage-shadow border-4 border-double border-amber-700/30 animate-scale-in relative overflow-hidden">
            {/* Декоративный фон */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="font-serif text-3xl text-primary mb-6">До свадьбы осталось</h2>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { value: timeLeft.days, label: 'Дней', icon: 'Calendar' },
                  { value: timeLeft.hours, label: 'Часов', icon: 'Clock' },
                  { value: timeLeft.minutes, label: 'Минут', icon: 'Timer' },
                  { value: timeLeft.seconds, label: 'Секунд', icon: 'Zap' }
                ].map((item) => (
                  <div key={item.label} className="text-center bg-background/50 rounded-xl p-4 border border-primary/5 hover:border-primary/20 transition-all">
                    <Icon name={item.icon as any} className="text-primary/40 mx-auto mb-2" size={20} />
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

        <section className="flex justify-center animate-fade-in">
          <div className="relative max-w-sm w-full">
            {/* Размытое свечение вокруг фото */}
            <div className="absolute -inset-8 bg-gradient-to-br from-amber-700/20 via-amber-600/10 to-amber-700/20 rounded-full blur-3xl opacity-60" />
            
            {/* Контейнер с маской для размытых краёв */}
            <div className="relative z-10" style={{
              maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)'
            }}>
              <img 
                src="https://cdn.poehali.dev/files/4af12923-fef6-4557-93a3-45ef6d1535de.jpg" 
                alt="Лев и Яна" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Icon name="Calendar" className="text-primary" size={28} />
              <h2 className="font-serif text-5xl text-primary">Программа дня</h2>
              <Icon name="Calendar" className="text-primary" size={28} />
            </div>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-xl transition-all hover:scale-[1.02] border-l-4 border-l-amber-700/50 bg-amber-50/80 backdrop-blur-sm vintage-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-full ring-2 ring-primary/10">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <div className="font-serif text-2xl text-primary mb-2">14:15</div>
                  <h3 className="font-sans font-semibold text-lg mb-2">Торжественная регистрация</h3>
                  <p className="text-muted-foreground font-sans">
                    <Icon name="MapPin" className="inline mr-1" size={16} />
                    г. Екатеринбург, ул. Карла Либкнехта, 3
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all hover:scale-[1.02] border-l-4 border-l-amber-700/50 bg-amber-50/80 backdrop-blur-sm vintage-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-full ring-2 ring-primary/10">
                  <Icon name="Camera" className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <div className="font-serif text-2xl text-primary mb-2">15:00 — 16:00</div>
                  <h3 className="font-sans font-semibold text-lg mb-2">Фотосессия</h3>
                  <p className="text-muted-foreground font-sans">
                    Прогулка и создание прекрасных воспоминаний
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all hover:scale-[1.02] border-l-4 border-l-amber-600/50 bg-amber-50/80 backdrop-blur-sm vintage-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-3 rounded-full ring-2 ring-accent/10">
                  <Icon name="Sparkles" className="text-accent" size={24} />
                </div>
                <div className="flex-1">
                  <div className="font-serif text-2xl text-primary mb-2">16:00 — 23:00</div>
                  <h3 className="font-sans font-semibold text-lg mb-2">Праздничный банкет</h3>
                  <p className="text-muted-foreground font-sans mb-4">
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

        <section className="space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Icon name="Camera" className="text-primary" size={28} />
              <h2 className="font-serif text-5xl text-primary">Фотогалерея</h2>
              <Icon name="Camera" className="text-primary" size={28} />
            </div>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-[1.05] ring-2 ring-primary/10 hover:ring-primary/30 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src={image}
                  alt={`Фото ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 text-white font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <Icon name="Heart" className="inline mr-2" size={20} />
                  Grand Hall
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Icon name="Shirt" className="text-accent" size={28} />
              <h2 className="font-serif text-5xl text-primary">Дресс-код</h2>
              <Icon name="Shirt" className="text-accent" size={28} />
            </div>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>
          <Card className="p-8 text-center space-y-6 vintage-shadow border-4 border-double border-amber-700/30 bg-amber-50/90 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 via-transparent to-amber-700/5 pointer-events-none" />
            <div className="relative z-10">
              <Icon name="Sparkles" className="mx-auto mb-4 text-primary" size={48} />
              <p className="font-serif text-3xl text-accent mb-2">Cocktail</p>
              <p className="text-muted-foreground font-sans max-w-md mx-auto">
                Приглашаем вас разделить с нами радость этого дня в элегантных нарядах
              </p>
            </div>
          </Card>
        </section>

        <section className="space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Icon name="Gift" className="text-primary" size={28} />
              <h2 className="font-serif text-5xl text-primary">Подарки</h2>
              <Icon name="Gift" className="text-primary" size={28} />
            </div>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>
          <Card className="p-8 vintage-shadow border-4 border-double border-amber-700/30 bg-amber-50/90 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-700/5 via-transparent to-amber-900/5 pointer-events-none" />
            <div className="relative z-10 text-center">
              <Icon name="Gift" className="mx-auto mb-4 text-primary" size={48} />
              <p className="font-serif text-xl text-foreground leading-relaxed max-w-2xl mx-auto">
                Дорогие гости! Самый ценный подарок для нас — ваше присутствие на нашем торжестве. 
                Цветы дарить не нужно — мы создали особенную атмосферу, которая не требует дополнений. 
                Если вы хотите порадовать нас подарком, мы будем благодарны за конверт, 
                который поможет нам воплотить мечты о нашем будущем вместе.
              </p>
            </div>
          </Card>
        </section>

        <section className="space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Icon name="Phone" className="text-accent" size={28} />
              <h2 className="font-serif text-5xl text-primary">Контакты</h2>
              <Icon name="Phone" className="text-accent" size={28} />
            </div>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>
          <Card className="p-8 max-w-2xl mx-auto vintage-shadow border-4 border-double border-amber-700/30 bg-amber-50/90 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            <div className="relative z-10">
              <p className="font-serif text-xl text-foreground mb-6 text-center">
                Остались вопросы? Напишите нам!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://t.me/pitonjr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg hover:shadow-lg transition-all hover:scale-105 font-sans ring-2 ring-primary/20 hover:ring-primary/40"
                >
                  <Icon name="MessageCircle" size={20} className="group-hover:scale-110 transition-transform" />
                  Написать Льву
                </a>
                <a 
                  href="https://t.me/yana_5_578" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent/90 text-accent-foreground rounded-lg hover:shadow-lg transition-all hover:scale-105 font-sans ring-2 ring-accent/20 hover:ring-accent/40"
                >
                  <Icon name="MessageCircle" size={20} className="group-hover:scale-110 transition-transform" />
                  Написать Яне
                </a>
              </div>
            </div>
          </Card>
        </section>

        <footer className="text-center pt-12 pb-6 border-t border-primary/10 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/30" />
            <Icon name="Heart" className="text-primary" size={24} />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/30" />
          </div>
          <p className="font-serif text-2xl text-primary mb-2">До встречи на нашей свадьбе!</p>
          <p className="text-muted-foreground font-sans flex items-center justify-center gap-2">
            <Icon name="Calendar" size={16} />
            Лев & Яна • 07.08.2026
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;