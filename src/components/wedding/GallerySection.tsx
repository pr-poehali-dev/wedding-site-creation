import Icon from '@/components/ui/icon';

interface GallerySectionProps {
  galleryImages: string[];
}

const GallerySection = ({ galleryImages }: GallerySectionProps) => {
  return (
    <section className="space-y-8 scroll-reveal">
      <div className="text-center space-y-4 scroll-reveal delay-100">
        <div className="flex flex-col items-center gap-4">
          <Icon name="Camera" className="text-amber-700/40" size={32} />
          <h2 className="font-serif text-5xl text-primary tracking-wide">Фотогалерея</h2>
          <div className="flex items-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-700/30" />
            <div className="w-2 h-2 bg-amber-700/40 rounded-full" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-700/30" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`group aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] border-2 border-amber-700/20 hover:border-amber-700/40 relative scroll-reveal-scale delay-${200 + index * 100}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
            <img
              src={image}
              alt={`Фото ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <Icon name="Heart" className="inline mr-2" size={20} />
              Grand Hall
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
