import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useEffect, useState } from 'react';

const QrCode = () => {
  const [qrUrl, setQrUrl] = useState('');

  useEffect(() => {
    const currentUrl = window.location.href;
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(currentUrl)}`;
    setQrUrl(qrApiUrl);
  }, []);

  return (
    <section className="space-y-8 scroll-reveal">
      <div className="text-center space-y-4 scroll-reveal delay-100">
        <div className="flex flex-col items-center gap-4">
          <Icon name="QrCode" className="text-amber-700/40 animate-pulse-glow" size={32} />
          <h2 className="font-serif text-5xl text-primary tracking-wide">QR-код приглашения</h2>
          <div className="flex items-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-700/30" />
            <div className="w-2 h-2 bg-amber-700/40 rounded-full animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-700/30" />
          </div>
        </div>
      </div>

      <Card className="p-6 sm:p-10 max-w-md mx-auto shadow-2xl border-2 border-amber-700/30 bg-gradient-to-br from-amber-50/95 via-white/90 to-amber-50/95 backdrop-blur-sm relative overflow-hidden scroll-reveal-scale delay-200">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-8 right-8 text-lg opacity-6">📱</div>
        <div className="absolute bottom-8 right-8 text-base opacity-5">✨</div>
        
        <div className="relative z-10 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-700/40" />
            <Icon name="Smartphone" className="text-amber-700/60" size={32} />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-700/40" />
          </div>

          <p className="font-serif text-lg text-foreground mb-6">
            Поделитесь приглашением с другими гостями
          </p>

          <div className="bg-white p-4 rounded-lg shadow-inner mb-4 inline-block">
            {qrUrl && (
              <img 
                src={qrUrl} 
                alt="QR код приглашения" 
                className="w-64 h-64 mx-auto"
              />
            )}
          </div>

          <p className="font-sans text-sm text-muted-foreground">
            Отсканируйте QR-код камерой телефона для быстрого доступа к приглашению
          </p>
        </div>
      </Card>
    </section>
  );
};

export default QrCode;