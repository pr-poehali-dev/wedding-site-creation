import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const GuestCounter = () => {
  const [guestCount, setGuestCount] = useState(0);
  const [guestNames, setGuestNames] = useState<string[]>([]);

  useEffect(() => {
    const updateCount = () => {
      const count = parseInt(localStorage.getItem('rsvp_count') || '0');
      const baseCount = 16;
      setGuestCount(baseCount + count);
      
      const names: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith('rsvp_') && key !== 'rsvp_count') {
          const name = key.replace('rsvp_', '');
          const status = localStorage.getItem(key);
          if (status === 'yes') {
            names.push(name);
          }
        }
      }
      setGuestNames(names);
    };

    updateCount();
    
    window.addEventListener('rsvp-updated', updateCount);
    window.addEventListener('storage', updateCount);
    
    return () => {
      window.removeEventListener('rsvp-updated', updateCount);
      window.removeEventListener('storage', updateCount);
    };
  }, []);

  return (
    <Card className="p-6 sm:p-8 shadow-2xl border-2 border-amber-700/30 bg-gradient-to-br from-amber-50/95 via-white/90 to-amber-50/95 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-8 right-8 text-lg opacity-6">👥</div>
      <div className="absolute bottom-8 right-8 text-base opacity-5">✨</div>
      
      <div className="relative z-10 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-700/40" />
          <Icon name="Users" className="text-amber-700/60" size={32} />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-700/40" />
        </div>
        
        <div className="font-serif text-7xl sm:text-8xl text-primary font-bold mb-2 animate-pulse">
          {guestCount}
        </div>
        
        <p className="font-sans text-lg text-muted-foreground mb-6">
          {guestCount === 0 
            ? 'Ждём первого подтверждения'
            : guestCount === 1 
            ? 'гость подтвердил участие'
            : guestCount < 5
            ? 'гостя подтвердили участие'
            : 'гостей подтвердили участие'}
        </p>

        {guestNames.length > 0 && (
          <div className="mt-6 pt-6 border-t border-amber-700/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="UserCheck" className="text-amber-700/60" size={20} />
              <p className="font-serif text-lg text-primary">Подтвердили участие:</p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center max-h-32 overflow-y-auto">
              {guestNames.map((name, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-700/20 rounded-full text-sm font-sans text-amber-900"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default GuestCounter;