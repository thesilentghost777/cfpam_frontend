import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, GraduationCap, Car, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    id: "welcome",
    title: "Bienvenue AU CFPAM GROUP",
    subtitle: "Excellence, Formation & Développement",
    description:
      "Le CFPAM GROUP réunit trois offres complémentaires pour votre réussite : Centre de Formation Professionnelle avec diplômes reconnus, Auto-École pour vos permis de conduire, et Coopérative COPCA pour financer vos projets. Découvrez nos programmes adaptés à vos ambitions.",
    icon: Users,
    link: "/",
    gradient: "from-primary via-primary/90 to-secondary",
    image: "/cfpamgroup.png",
  },
  {
    id: "formation",
    title: "Centre de Formation CFPAM",
    subtitle: "Excellence en Formation Professionnelle",
    description:
      "Formations diplômantes reconnues : AQP, CQP, DQP, BTS. Cours du jour et du soir adaptés à votre emploi du temps.",
    icon: GraduationCap,
    link: "/centre-formation",
    gradient: "from-formation-primary via-formation-primary/90 to-formation-accent",
    image: "/img1.png",
  },
  {
    id: "autoecole",
    title: "Auto-École Ange Raphaël",
    subtitle: "Votre Permis en Toute Confiance",
    description:
      "Permis A et B avec des instructeurs qualifiés. Cours théoriques et pratiques pour une conduite sécurisée.",
    icon: Car,
    link: "/auto-ecole",
    gradient: "from-autoecole-primary via-autoecole-primary/90 to-autoecole-secondary",
    image: "/img2.png",
  },
  {
    id: "cooperative",
    title: "Coopérative COPCA",
    subtitle: "Ensemble pour Réussir",
    description:
      "Services coopératifs innovants pour accompagner votre développement professionnel et personnel.",
    icon: Users,
    link: "/cooperative",
    gradient: "from-cooperative-primary via-cooperative-primary/90 to-cooperative-secondary",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => {
        const Icon = slide.icon;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentSlide
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-90`} />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 flex items-center">
              <div className="max-w-3xl text-white animate-slide-up">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="text-lg font-medium">{slide.subtitle}</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h2>

                <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary-light font-semibold text-lg px-8"
                  >
                    <Link to={slide.link}>En savoir plus</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm font-semibold text-lg px-8"
                  >
                    <Link to="/pre-inscription">S'inscrire</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Slide suivant"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-12 bg-secondary" : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
