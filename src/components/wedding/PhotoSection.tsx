const PhotoSection = () => {
  return (
    <section className="flex justify-center scroll-reveal-scale">
      <div className="relative max-w-lg w-full">
        <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-glow" />
        
        <div className="relative z-10 p-2 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-full shadow-2xl vintage-shadow">
          <div className="relative overflow-hidden rounded-full border-8 border-card shadow-xl">
            <img 
              src="https://cdn.poehali.dev/files/4af12923-fef6-4557-93a3-45ef6d1535de.jpg" 
              alt="Лев и Яна" 
              className="w-full h-auto object-cover aspect-square hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
        
        <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-primary/40 rounded-tl-3xl animate-pulse" />
        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-accent/40 rounded-tr-3xl animate-pulse" style={{animationDelay: '0.5s'}} />
        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-accent/40 rounded-bl-3xl animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-primary/40 rounded-br-3xl animate-pulse" style={{animationDelay: '1.5s'}} />
      </div>
    </section>
  );
};

export default PhotoSection;
