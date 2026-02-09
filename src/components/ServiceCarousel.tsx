import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ServiceCarouselProps {
  title: string;
  images: { src: string; alt: string }[];
}

export function ServiceCarousel({ title, images }: ServiceCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrentIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => { api.off("select", onSelect); };
  }, [api]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const goToPrevious = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, goToPrevious, goToNext]);

  return (
    <div className="flex flex-col items-center">
      <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-secondary-foreground mb-4 sm:mb-6">
        {title}
      </h3>

      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl" />

        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 3500,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          className="relative w-full"
        >
          <CarouselContent className="-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-4">
                <div
                  className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer aspect-[4/3]"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm font-medium opacity-0 hover:opacity-100 transition-opacity">
                      Clique para ampliar
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-3 sm:w-4"
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <div className="relative flex items-center justify-center w-full h-[90vh]">
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={goToPrevious}
              className="absolute left-4 z-50 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <img
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              className="max-w-full max-h-full object-contain"
            />

            <button
              onClick={goToNext}
              className="absolute right-4 z-50 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
