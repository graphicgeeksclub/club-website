import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";

// Placeholder images - in a real app, these would come from your image assets
import { galleryImages } from "@/data/galleryData";

export function GallerySection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Event Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing moments of innovation, learning, and celebration from our
            events
          </p>
        </div>

        {/* Main Image Display */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="glass-card overflow-hidden">
            <div className="relative group">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].title}
                className="w-full h-96 md:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Expand Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Expand className="h-5 w-5" />
              </Button>

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">
                  {galleryImages[currentImageIndex].title}
                </h3>
                <p className="text-gray-200">
                  {galleryImages[currentImageIndex].description}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Thumbnail Navigation */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 overflow-hidden ${
                  index === currentImageIndex
                    ? "ring-4 ring-primary scale-105 shadow-lg"
                    : "hover:scale-105 opacity-70 hover:opacity-100"
                }`}
                onClick={() => goToImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-20 md:h-24 object-cover"
                />
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">50+</h4>
              <p className="text-muted-foreground">Events Organized</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">1000+</h4>
              <p className="text-muted-foreground">Photos Captured</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">25+</h4>
              <p className="text-muted-foreground">Hours of Videos</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">5000+</h4>
              <p className="text-muted-foreground">Memories Created</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
