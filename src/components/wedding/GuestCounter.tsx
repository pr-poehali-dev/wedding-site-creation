import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const GuestCounter = () => {
  const [guestCount, setGuestCount] = useState(18);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/dff838f1-4971-49ae-9ec2-ea10101cdc49');
        const data = await response.json();
        setGuestCount(data.count || 18);
      } catch (error) {
        console.error('Ошибка загрузки счётчика:', error);
      }
    };

    fetchCount();
    
    const handleUpdate = () => {
      fetchCount();
    };
    
    window.addEventListener('rsvp-updated', handleUpdate);
    
    const interval = setInterval(fetchCount, 10000);
    
    return () => {
      window.removeEventListener('rsvp-updated', handleUpdate);
      clearInterval(interval);
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
        
        <p className="font-sans text-lg text-muted-foreground">
          {guestCount === 0 
            ? 'Ждём первого подтверждения'
            : guestCount === 1 
            ? 'гость подтвердил участие'
            : guestCount < 5
            ? 'гостя подтвердили участие'
            : 'гостей подтвердили участие'}
        </p>
      </div>
    </Card>
  );
};

export default GuestCounter;