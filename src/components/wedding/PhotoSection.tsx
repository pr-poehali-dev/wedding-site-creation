const PhotoSection = () => {
  return (
    <section className="flex justify-center scroll-reveal-scale">
      <div className="relative max-w-lg w-full">
        {/* Барочная золотая рамка */}
        <div className="absolute -inset-8 border-4 border-amber-600/30" style={{
          borderImage: 'linear-gradient(135deg, #D4AF37, #FFD700, #D4AF37) 1',
          boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)'
        }} />
        
        {/* Внутренняя орнаментальная рамка */}
        <div className="absolute -inset-4 border-2 border-amber-700/20" style={{
          borderStyle: 'double'
        }} />
        
        {/* Барочные углы */}
        <div className="absolute -top-6 -left-6 w-16 h-16">
          <svg viewBox="0 0 100 100" className="text-amber-600 fill-current opacity-80">
            <path d="M0,0 L0,40 Q0,0 40,0 Z" />
            <circle cx="15" cy="15" r="3" />
          </svg>
        </div>
        <div className="absolute -top-6 -right-6 w-16 h-16 rotate-90">
          <svg viewBox="0 0 100 100" className="text-amber-600 fill-current opacity-80">
            <path d="M0,0 L0,40 Q0,0 40,0 Z" />
            <circle cx="15" cy="15" r="3" />
          </svg>
        </div>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 -rotate-90">
          <svg viewBox="0 0 100 100" className="text-amber-600 fill-current opacity-80">
            <path d="M0,0 L0,40 Q0,0 40,0 Z" />
            <circle cx="15" cy="15" r="3" />
          </svg>
        </div>
        <div className="absolute -bottom-6 -right-6 w-16 h-16 rotate-180">
          <svg viewBox="0 0 100 100" className="text-amber-600 fill-current opacity-80">
            <path d="M0,0 L0,40 Q0,0 40,0 Z" />
            <circle cx="15" cy="15" r="3" />
          </svg>
        </div>
        
        {/* Золотое свечение */}
        <div className="absolute -inset-12 bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-amber-500/20 rounded-sm blur-3xl" />
        
        {/* Фото */}
        <div className="relative z-10 border-8 border-white shadow-2xl">
          <img 
            src="https://cdn.poehali.dev/files/4af12923-fef6-4557-93a3-45ef6d1535de.jpg" 
            alt="Лев и Яна" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;