import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

const WeddingDate = new Date('2026-08-07T14:15:00');

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attending: 'yes'
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Ваш ответ принят.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      <div className="container max-w-4xl mx-auto px-4 py-12 space-y-16">
        
        <section className="text-center space-y-8 animate-fade-in">
          <h1 className="font-serif text-6xl md:text-8xl text-primary mb-2">
            Лев & Яна
          </h1>
          
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
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <div
                    key={day}
                    className={`w-12 h-12 flex items-center justify-center rounded-full font-sans text-foreground ${
                      day === 7 ? 'bg-primary text-primary-foreground ring-4 ring-primary/30 font-bold scale-110' : 'bg-secondary/50'
                    }`}
                  >
                    {day}
                  </div>
                ))}
                {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day) => (
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
                  <Icon name="Sparkles" className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <div className="font-serif text-2xl text-primary mb-2">16:00 — 23:00</div>
                  <h3 className="font-sans font-semibold text-lg mb-2">Праздничный банкет</h3>
                  <p className="text-muted-foreground font-sans">
                    <Icon name="MapPin" className="inline mr-1" size={16} />
                    г. Екатеринбург, ул. Гагарина, 30а, отель Grand Hall
                  </p>
                </div>
              </div>
            </Card>
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

        <section className="space-y-6 animate-fade-in">
          <h2 className="font-serif text-5xl text-center text-primary">Подтверждение присутствия</h2>
          <Card className="p-8 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-sans">Ваше имя</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="font-sans"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div className="space-y-3">
                <Label className="font-sans">Вы придете?</Label>
                <RadioGroup
                  value={formData.attending}
                  onValueChange={(value) => setFormData({ ...formData, attending: value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="font-sans cursor-pointer">Да, обязательно!</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="font-sans cursor-pointer">К сожалению, не смогу</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.attending === 'yes' && (
                <div className="space-y-2 animate-fade-in">
                  <Label htmlFor="guests" className="font-sans">Количество гостей</Label>
                  <select
                    id="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full p-2 border rounded-md font-sans bg-background"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'человек' : num < 5 ? 'человека' : 'человек'}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <Button type="submit" className="w-full font-sans" size="lg">
                Отправить
              </Button>
            </form>
          </Card>
        </section>

        <footer className="text-center pt-12 pb-6 border-t border-border">
          <p className="font-serif text-2xl text-primary mb-2">До встречи на нашей свадьбе!</p>
          <p className="text-muted-foreground font-sans">Лев & Яна • 07.08.2026</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
