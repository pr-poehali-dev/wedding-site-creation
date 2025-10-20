const PhotoSection = () => {
  return (
    <section className="flex justify-center scroll-reveal-scale">
      <div className="relative max-w-sm w-full">
        <div className="absolute -inset-6 border border-amber-700/20 rounded-full" />
        <div className="absolute -inset-8 border border-amber-600/10 rounded-full" />
        
        <div className="absolute -inset-12 bg-gradient-to-br from-amber-700/20 via-amber-600/10 to-amber-700/20 rounded-full blur-3xl opacity-60" />
        
        <div className="relative z-10" style={{
          maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)'
        }}>
          <img 
            src="https://cdn.poehali.dev/files/4af12923-fef6-4557-93a3-45ef6d1535de.jpg" 
            alt="Лев и Яна" 
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>
        
        <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-amber-700/40 rounded-tl-lg" />
        <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-amber-700/40 rounded-tr-lg" />
        <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-amber-700/40 rounded-bl-lg" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-amber-700/40 rounded-br-lg" />
      </div>
    </section>
  );
};

export default PhotoSection;
