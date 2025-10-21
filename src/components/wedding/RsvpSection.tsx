import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const RsvpSection = () => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no' | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !attending) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, укажите имя и выберите ответ",
        variant: "destructive"
      });
      return;
    }

    const currentCount = parseInt(localStorage.getItem('rsvp_count') || '0');
    if (attending === 'yes') {
      localStorage.setItem('rsvp_count', String(currentCount + 1));
    }
    
    localStorage.setItem(`rsvp_${name}`, attending);
    
    try {
      await fetch('https://functions.poehali.dev/ed8aa0d6-a56a-44cd-b77e-efba232251cf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'rsvp',
          name: name,
          data: { attending }
        })
      });
    } catch (error) {
      console.error('Failed to send notification:', error);
    }
    
    setSubmitted(true);
    toast({
      title: attending === 'yes' ? "Спасибо за подтверждение! 🎉" : "Спасибо за ответ",
      description: attending === 'yes' 
        ? "Мы рады, что вы будете с нами!" 
        : "Нам жаль, что вы не сможете присутствовать",
    });

    window.dispatchEvent(new Event('rsvp-updated'));
  };

  return (
    <section className="space-y-8 scroll-reveal">
      <div className="text-center space-y-4 scroll-reveal delay-100">
        <div className="flex flex-col items-center gap-4">
          <Icon name="CheckCircle" className="text-amber-700/40 animate-pulse-glow" size={32} />
          <h2 className="font-serif text-5xl text-primary tracking-wide">Подтверждение присутствия</h2>
          <div className="flex items-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-700/30" />
            <div className="w-2 h-2 bg-amber-700/40 rounded-full animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-700/30" />
          </div>
        </div>
      </div>

      <Card className="p-6 sm:p-10 max-w-2xl mx-auto shadow-2xl border-2 border-amber-700/30 bg-gradient-to-br from-amber-50/95 via-white/90 to-amber-50/95 backdrop-blur-sm relative overflow-hidden scroll-reveal-scale delay-200">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-4 left-4 text-3xl opacity-15">✅</div>
        <div className="absolute top-4 right-4 text-3xl opacity-15">💌</div>
        <div className="absolute bottom-4 left-6 text-2xl opacity-10">📝</div>
        <div className="absolute bottom-4 right-6 text-2xl opacity-10">✨</div>
        
        <div className="relative z-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-6 flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-700/40" />
                <Icon name="UserCheck" className="text-amber-700/60" size={32} />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-700/40" />
              </div>

              <div>
                <label className="block font-serif text-lg text-foreground mb-2">
                  Ваше имя
                </label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Введите ваше имя"
                  className="font-sans border-amber-700/30"
                  required
                />
              </div>

              <div>
                <label className="block font-serif text-lg text-foreground mb-3">
                  Сможете присутствовать?
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setAttending('yes')}
                    className={`flex-1 p-4 rounded-lg border-2 transition-all duration-300 ${
                      attending === 'yes'
                        ? 'border-green-600 bg-green-50 shadow-lg scale-105'
                        : 'border-amber-700/20 hover:border-amber-700/40'
                    }`}
                  >
                    <Icon name="Check" className="mx-auto mb-2 text-green-600" size={24} />
                    <div className="font-sans font-semibold">Да, буду!</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttending('no')}
                    className={`flex-1 p-4 rounded-lg border-2 transition-all duration-300 ${
                      attending === 'no'
                        ? 'border-red-600 bg-red-50 shadow-lg scale-105'
                        : 'border-amber-700/20 hover:border-amber-700/40'
                    }`}
                  >
                    <Icon name="X" className="mx-auto mb-2 text-red-600" size={24} />
                    <div className="font-sans font-semibold">К сожалению, нет</div>
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white py-6 text-lg font-sans shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon name="Send" className="mr-2" size={20} />
                Отправить
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4 py-8">
              <Icon name="CheckCircle" className="mx-auto text-green-600" size={64} />
              <h3 className="font-serif text-2xl text-primary">
                {attending === 'yes' ? 'Отлично! До встречи на празднике! 🎉' : 'Спасибо за ответ'}
              </h3>
              <p className="font-sans text-muted-foreground">
                {attending === 'yes' 
                  ? 'Ваше участие подтверждено. Ждём вас с нетерпением!'
                  : 'Нам очень жаль, что вы не сможете разделить с нами этот день.'}
              </p>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setAttending(null);
                }}
                variant="outline"
                className="mt-4"
              >
                Изменить ответ
              </Button>
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};

export default RsvpSection;