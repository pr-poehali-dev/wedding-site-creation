import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const MusicSurvey = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [customSongs, setCustomSongs] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const genres = [
    { id: 'pop', name: 'Поп', icon: '🎤' },
    { id: 'rock', name: 'Рок', icon: '🎸' },
    { id: 'dance', name: 'Танцевальная', icon: '💃' },
    { id: 'retro', name: 'Ретро', icon: '📻' },
    { id: 'jazz', name: 'Джаз', icon: '🎷' },
    { id: 'russian', name: 'Русская', icon: '🎻' },
  ];

  const toggleGenre = (genreId: string) => {
    setSelectedGenres(prev =>
      prev.includes(genreId)
        ? prev.filter(id => id !== genreId)
        : [...prev, genreId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedGenres.length === 0) {
      toast({
        title: "Выберите хотя бы один жанр",
        variant: "destructive"
      });
      return;
    }

    const savedName = Object.keys(localStorage).find(key => key.startsWith('rsvp_'))?.replace('rsvp_', '') || 'Гость';

    localStorage.setItem('music_preferences', JSON.stringify({
      genres: selectedGenres,
      customSongs: customSongs
    }));
    
    try {
      await fetch('https://functions.poehali.dev/ed8aa0d6-a56a-44cd-b77e-efba232251cf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'music',
          name: savedName,
          data: {
            genres: selectedGenres,
            customSongs: customSongs
          }
        })
      });
    } catch (error) {
      console.error('Failed to send notification:', error);
    }
    
    setSubmitted(true);
    toast({
      title: "Спасибо! 🎵",
      description: "Ваши музыкальные предпочтения учтены!",
    });
  };

  return (
    <section className="space-y-8 scroll-reveal">
      <div className="text-center space-y-4 scroll-reveal delay-100">
        <div className="flex flex-col items-center gap-4">
          <Icon name="Music" className="text-amber-700/40 animate-pulse-glow" size={32} />
          <h2 className="font-serif text-5xl text-primary tracking-wide">Музыкальные предпочтения</h2>
          <div className="flex items-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-700/30" />
            <div className="w-2 h-2 bg-amber-700/40 rounded-full animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-700/30" />
          </div>
        </div>
      </div>

      <Card className="p-6 sm:p-10 max-w-2xl mx-auto shadow-2xl border-2 border-amber-700/30 bg-gradient-to-br from-amber-50/95 via-white/90 to-amber-50/95 backdrop-blur-sm relative overflow-hidden scroll-reveal-scale delay-200">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-8 right-8 text-lg opacity-6">🎵</div>
        <div className="absolute bottom-8 right-8 text-base opacity-5">🎸</div>
        
        <div className="relative z-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-6 flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-700/40" />
                <Icon name="Radio" className="text-amber-700/60" size={32} />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-700/40" />
              </div>

              <p className="font-serif text-lg text-foreground text-center mb-6">
                Помогите нам создать идеальную атмосферу! Выберите любимые жанры:
              </p>

              <div className="grid grid-cols-2 gap-3">
                {genres.map(genre => (
                  <button
                    key={genre.id}
                    type="button"
                    onClick={() => toggleGenre(genre.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedGenres.includes(genre.id)
                        ? 'border-amber-700 bg-amber-50 shadow-lg scale-105'
                        : 'border-amber-700/20 hover:border-amber-700/40 hover:scale-102'
                    }`}
                  >
                    <div className="text-3xl mb-2">{genre.icon}</div>
                    <div className="font-sans font-semibold text-sm">{genre.name}</div>
                  </button>
                ))}
              </div>

              <div>
                <label className="block font-serif text-lg text-foreground mb-2">
                  Любимые песни (необязательно)
                </label>
                <Textarea
                  value={customSongs}
                  onChange={(e) => setCustomSongs(e.target.value)}
                  placeholder="Напишите названия песен или исполнителей, которые хотите услышать..."
                  className="font-sans border-amber-700/30 min-h-[100px]"
                />
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
              <Icon name="Music" className="mx-auto text-amber-700" size={64} />
              <h3 className="font-serif text-2xl text-primary">Спасибо! 🎉</h3>
              <p className="font-sans text-muted-foreground">
                Ваши музыкальные предпочтения учтены. DJ подготовит отличный плейлист!
              </p>
              <Button
                onClick={() => setSubmitted(false)}
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

export default MusicSurvey;