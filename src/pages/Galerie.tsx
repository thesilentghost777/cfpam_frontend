import { Card, CardContent } from "@/components/ui/card";
import { Camera, Video, Award, Users, Building2, GraduationCap } from "lucide-react";

const Galerie = () => {
  const categories = [
    {
      title: "Formation",
      icon: GraduationCap,
      images: [
        { url: "524178232363-1fb2b075b655?w=800", alt: "Salle de classe moderne" },
        { url: "522202176988-66273c2fd55f?w=800", alt: "Étudiants en formation" },
        { url: "531482615713-2afd69097998?w=800", alt: "Cours pratiques" },
        { url: "523580494863-6f3031224c94?w=800", alt: "Équipement informatique" },
      ]
    },
    {
      title: "Auto-École",
      icon: Building2,
      images: [
        { url: "449965408869-eaa3f722e40d?w=800", alt: "Véhicule d'auto-école" },
        { url: "568605117036-5fe5e7bab0b7?w=800", alt: "Formation pratique conduite" },
        { url: "506521781263-d8422e82f27a?w=800", alt: "Simulateur de conduite" },
        { url: "519003300449-424ad0405076?w=800", alt: "Cours théoriques" },
      ]
    },
    {
      title: "Événements",
      icon: Users,
      images: [
        { url: "523580494863-6f3031224c94?w=800", alt: "Cérémonie de remise de diplômes" },
        { url: "511578314322-379afb476865?w=800", alt: "Événement de l'école" },
        { url: "540575467063-178a50c2df87?w=800", alt: "Conférence" },
        { url: "515187029135-18ee286d815b?w=800", alt: "Activités sportives" },
      ]
    },
    {
      title: "Infrastructures",
      icon: Building2,
      images: [
        { url: "562654501-a0ccc0fc3fb1?w=800", alt: "Bâtiment principal" },
        { url: "497366811353-6870744d04b2?w=800", alt: "Salle informatique" },
        { url: "497366754035-f200968a6e72?w=800", alt: "Bibliothèque" },
        { url: "524178232363-1fb2b075b655?w=800", alt: "Espace de détente" },
      ]
    },
    {
      title: "Récompenses",
      icon: Award,
      images: [
        { url: "567427017947-545c5f8d16ad?w=800", alt: "Trophées et récompenses" },
        { url: "557425529-e2a9ff252148?w=800", alt: "Certificats" },
        { url: "581578731548-c64695cc6952?w=800", alt: "Prix d'excellence" },
        { url: "548094990-c16ca90f1f0d?w=800", alt: "Médailles" },
      ]
    },
    {
      title: "Vidéos",
      icon: Video,
      images: [
        { url: "492691527719-9d1e07e534b4?w=800", alt: "Production vidéo" },
        { url: "516035069371-29a1b244cc32?w=800", alt: "Studio vidéo" },
        { url: "574717024653-61fd2cf4d44d?w=800", alt: "Montage vidéo" },
        { url: "536240478700-b869070f9279?w=800", alt: "Tournage" },
      ]
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Galerie Photo & Vidéo</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre centre en images : nos infrastructures, nos formations, nos événements et nos succès
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category, idx) => (
              <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.images.map((image, imgIdx) => (
                    <Card key={imgIdx} className="overflow-hidden hover-lift group cursor-pointer">
                      <CardContent className="p-0">
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <p className="text-white font-medium text-sm">{image.alt}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-br from-primary via-primary-light to-secondary text-white">
              <CardContent className="p-8">
                <Camera className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Visitez-nous !</h3>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Ces images ne représentent qu'un aperçu de notre établissement. 
                  Venez nous rendre visite pour découvrir en personne nos installations modernes 
                  et rencontrer notre équipe pédagogique.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galerie;
