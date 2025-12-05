import { Card, CardContent } from "@/components/ui/card";
import { Camera, Video, Award, Users, Building2, GraduationCap } from "lucide-react";

const Galerie = () => {
  const categories = [
    {
      title: "Formation",
      icon: GraduationCap,
      images: [
        { url: "/galerie/salle_moderne.jpg", alt: "Salle de classe moderne" },
        { url: "/galerie/etudiant_en_formation.jpg", alt: "Étudiants en formation" },
        { url: "/galerie/atelier_pratique.jpg", alt: "Atelier pratiques" },
        { url: "/galerie/equipement_informatique.jpg", alt: "Équipement informatique" },
      ]
    },
    {
      title: "Auto-École",
      icon: Building2,
      images: [
        { url: "/galerie/voiture_auto_ecole.jpg", alt: "Véhicule d'auto-école" },
        { url: "/img2.png", alt: "Formation pratique conduite" },
        { url: "/galerie/simulateur_conduite.png", alt: "Simulateur de conduite" },
        { url: "/galerie/theorie_auto_ecole.png", alt: "Cours théoriques" },
      ]
    },
    {
      title: "Événements",
      icon: Users,
      images: [
        { url: "/galerie/remise_diplome.jpg", alt: "Cérémonie de remise de diplômes" },
        { url: "/galerie/evenement_de_lecole.jpg", alt: "Événement de l'école" },
        { url: "/galerie/conference.jpg", alt: "Conférence" },
        { url: "/galerie/sortie_sport.jpg", alt: "Activités sportives" },
      ]
    },
    {
      title: "Infrastructures",
      icon: Building2,
      images: [
        { url: "/galerie/batiment_principal.jpg", alt: "Bâtiment principal" },
        { url: "/galerie/equipement_informatique.jpg", alt: "Salle informatique" },
        { url: "/galerie/bibliotheque.png", alt: "Bibliothèque" },
        { url: "/galerie/espace_detente.jpg", alt: "Espace de détente" },
      ]
    },
    {
      title: "Vidéos",
      icon: Video,
      images: [
        { url: "/galerie/production_video.png", alt: "Production vidéo" },
        { url: "/galerie/studio_video.png", alt: "Studio vidéo" },
        { url: "/galerie/montage_video.jpg", alt: "Montage vidéo" },
        { url: "/galerie/tournage_video.jpg", alt: "Tournage" },
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
