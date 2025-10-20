const PhotoSection = () => {
  return (
    <section className="flex justify-center scroll-reveal-scale">
      <div className="relative max-w-lg w-full">
        <div className="absolute -inset-6 bg-gradient-to-br from-yellow-400/20 via-amber-400/10 to-yellow-400/20 blur-2xl rounded-lg" />
        
        <div className="relative z-10 bg-white p-6 shadow-xl border border-neutral-200/50 rounded-lg">
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-yellow-600/40" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-yellow-600/40" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-yellow-600/40" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-yellow-600/40" />
          
          <div className="relative border-4 border-yellow-500/30 rounded-md overflow-hidden shadow-lg">
            <img 
              src="https://cdn.poehali.dev/files/4af12923-fef6-4557-93a3-45ef6d1535de.jpg" 
              alt="Лев и Яна" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-yellow-600/60 to-transparent" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-yellow-600/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
