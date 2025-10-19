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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none">
        <img src="https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/6004a1ea-058a-416f-a4b8-457977aa7764.jpg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-20 right-0 w-48 h-48 opacity-20 pointer-events-none">
        <img src="https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/04d30e20-b8da-48e5-820b-3b416afaa147.jpg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-32 left-10 w-56 h-56 opacity-15 pointer-events-none transform rotate-45">
        <img src="https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/04d30e20-b8da-48e5-820b-3b416afaa147.jpg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-64 right-20 w-40 h-40 opacity-15 pointer-events-none">
        <img src="https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/6004a1ea-058a-416f-a4b8-457977aa7764.jpg" alt="" className="w-full h-full object-contain transform scale-x-[-1]" />
      </div>
      
      <div className="container max-w-4xl mx-auto px-4 py-12 space-y-16 relative z-10">
        
        <section className="text-center space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h1 className="font-serif text-6xl md:text-8xl text-primary mb-6">
              Лев & Яна
            </h1>
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
                    className={`w-12 h-12 flex items-center justify-center rounded-full font-sans ${
                      day ? 'bg-secondary/50 text-foreground' : ''
                    }`}
                  >
                    {day || ''}
                  </div>
                ))}
                {[3, 4, 5, 6, 7, 8, 9].map((day) => (
                  <div
                    key={day}
                    className={`w-12 h-12 flex items-center justify-center rounded-full font-sans text-foreground ${
                      day === 7 ? 'bg-primary text-primary-foreground ring-4 ring-primary/30 font-bold scale-110' : 'bg-secondary/50'
                    }`}
                  >
                    {day}
                  </div>
                ))}
                {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day) => (
                  <div
                    key={day}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/50 font-sans text-foreground"
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

          <div className="bg-card rounded-lg p-8 shadow-lg animate-scale-in">
            <h2 className="font-serif text-3xl text-primary mb-6">До свадьбы осталось</h2>
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: timeLeft.days, label: 'Дней' },
                { value: timeLeft.hours, label: 'Часов' },
                { value: timeLeft.minutes, label: 'Минут' },
                { value: timeLeft.seconds, label: 'Секунд' }
              ].map((item) => (
                <div key={item.label} className="text-center">
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
        </section>

        <section className="flex justify-center animate-fade-in">
          <div className="relative max-w-md w-full">
            <div className="absolute -top-3 -left-3 w-16 h-16 opacity-40">
              <img src="https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/6004a1ea-058a-416f-a4b8-457977aa7764.jpg" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 opacity-40 transform scale-x-[-1]">
              <img src="https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/04d30e20-b8da-48e5-820b-3b416afaa147.jpg" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl border-2 border-card relative z-10">
              <img 
                src="https://cdn.poehali.dev/files/4af12923-fef6-4557-93a3-45ef6d1535de.jpg" 
                alt="Лев и Яна" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="space-y-8 animate-fade-in">
          <h2 className="font-serif text-5xl text-center text-primary">Программа дня</h2>
          
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
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

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
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

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Sparkles" className="text-primary" size={24} />
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
          <h2 className="font-serif text-5xl text-center text-primary">Фотогалерея</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform duration-300"
              >
                <img
                  src={image}
                  alt={`Фото ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="text-center space-y-6 animate-fade-in">
          <h2 className="font-serif text-5xl text-primary">Дресс-код</h2>
          <Card className="p-8 bg-gradient-to-br from-card to-secondary/30">
            <Icon name="Sparkles" className="mx-auto mb-4 text-primary" size={48} />
            <p className="font-serif text-3xl text-accent mb-2">Cocktail</p>
            <p className="text-muted-foreground font-sans max-w-md mx-auto">
              Приглашаем вас разделить с нами радость этого дня в элегантных нарядах
            </p>
          </Card>
        </section>

        <section className="text-center space-y-6 animate-fade-in">
          <h2 className="font-serif text-5xl text-primary">Подарки</h2>
          <Card className="p-8">
            <Icon name="Gift" className="mx-auto mb-4 text-primary" size={48} />
            <p className="font-serif text-xl text-foreground leading-relaxed max-w-2xl mx-auto">
              Дорогие гости! Самый ценный подарок для нас — ваше присутствие на нашем торжестве. 
              Цветы дарить не нужно — мы создали особенную атмосферу, которая не требует дополнений. 
              Если вы хотите порадовать нас подарком, мы будем благодарны за конверт, 
              который поможет нам воплотить мечты о нашем будущем вместе.
            </p>
          </Card>
        </section>

        <section className="text-center space-y-6 animate-fade-in relative">
          <div className="absolute top-0 left-0 w-32 h-32 opacity-30 pointer-events-none">
            <img src="https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/6004a1ea-058a-416f-a4b8-457977aa7764.jpg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 opacity-30 pointer-events-none transform scale-x-[-1]">
            <img src="https://cdn.poehali.dev/projects/c2ee31bf-3bd3-4c80-b7de-9a5abd77ea87/files/04d30e20-b8da-48e5-820b-3b416afaa147.jpg" alt="" className="w-full h-full object-contain" />
          </div>
          
          <h2 className="font-serif text-5xl text-primary relative z-10">Контакты</h2>
          <Card className="p-8 max-w-2xl mx-auto relative z-10">
            <p className="font-serif text-xl text-foreground mb-6">
              Остались вопросы? Напишите нам!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/pitonjr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-sans"
              >
                <Icon name="MessageCircle" size={20} />
                Написать Льву
              </a>
              <a 
                href="https://t.me/yana_5_578" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-sans"
              >
                <Icon name="MessageCircle" size={20} />
                Написать Яне
              </a>
            </div>
          </Card>
        </section>

        <footer className="text-center pt-12 pb-6 border-t border-border relative">
          <p className="font-serif text-2xl text-primary mb-2">До встречи на нашей свадьбе!</p>
          <p className="text-muted-foreground font-sans">Лев & Яна • 07.08.2026</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;