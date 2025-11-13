import { Car, Award, Users, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AutoEcole = () => {
  const permis = [
    {
      type: "Permis A",
      title: "Permis pour Motos et Deux-Roues",
      description:
        "Formation complète pour la conduite de motocyclettes et scooters. Cours théoriques et pratiques adaptés aux véhicules à deux roues.",
      icon: Car,
      details: [
        "Apprentissage du Code de la Route",
        "Cours pratiques sur moto école",
        "Techniques de conduite sécurisée",
        "Gestion des situations d'urgence",
        "Entretien de base du véhicule",
      ],
      price: "[45,000 FCFA]",
      duree: "[3 mois]",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&h=400&fit=crop",
    },
    {
      type: "Permis B",
      title: "Permis pour Véhicules Légers",
      description:
        "Formation professionnelle pour la conduite de voitures particulières. Cours théoriques approfondis et pratique intensive.",
      icon: Car,
      details: [
        "Code de la Route complet",
        "Conduite en ville et sur route",
        "Stationnement et manœuvres",
        "Conduite défensive",
        "Respect de l'environnement",
      ],
      price: "[60,000 FCFA]",
      duree: "[4 mois]",
      image: "/img3.png",

    },
  ];

  const avantages = [
    {
      icon: Shield,
      title: "Instructeurs Certifiés",
      description: "Équipe d'instructeurs professionnels et expérimentés",
    },
    {
      icon: Award,
      title: "Taux de Réussite Élevé",
      description: "98% de nos élèves obtiennent leur permis du premier coup",
    },
    {
      icon: Users,
      title: "Suivi Personnalisé",
      description: "Formation adaptée au rythme de chaque apprenant",
    },
    {
      icon: TrendingUp,
      title: "Équipement Moderne",
      description: "Véhicules récents et bien entretenus",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
  className="relative h-[400px] flex items-center overflow-hidden"
  style={{
    backgroundImage: "url('/img2.png')", // ✅ ton image locale (dans public/)
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/40" />
  <div className="container mx-auto px-4 relative z-10 text-white">
    <div className="max-w-3xl animate-slide-up">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Auto-École Ange Raphaël</h1>
      <p className="text-2xl mb-4">Votre Permis de Conduire en Toute Confiance</p>
      <p className="text-lg opacity-90">
        Formation professionnelle avec des instructeurs qualifiés et des équipements modernes
      </p>
    </div>
  </div>
</section>


      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Une Auto-École de Confiance</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              L'Auto-École Ange Raphaël est reconnue pour son excellence et son professionnalisme.
              Depuis notre création, nous avons formé des milliers de conducteurs responsables et
              compétents. Notre approche pédagogique combine théorie approfondie et pratique
              intensive pour garantir votre réussite.
            </p>
          </div>

          {/* Avantages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {avantages.map((avantage, index) => {
              const Icon = avantage.icon;
              return (
                <Card key={index} className="hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-autoecole-secondary rounded-full mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{avantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{avantage.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Permis Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nos Formations</h2>
            <p className="text-lg text-muted-foreground">
              Choisissez le permis qui correspond à vos besoins
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {permis.map((p, index) => {
              const Icon = p.icon;
              return (
                <Card key={index} className="overflow-hidden hover-lift">
                  <div className="relative h-48">
                    <img
                      src={p.image}
                      alt={p.type}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-8 h-8" />
                        <h3 className="text-2xl font-bold">{p.type}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-3">{p.title}</h4>
                    <p className="text-muted-foreground mb-6">{p.description}</p>

                    <div className="mb-6">
                      <h5 className="font-semibold mb-3">Programme de Formation</h5>
                      <ul className="space-y-2">
                        {p.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-autoecole-accent mt-1">✓</span>
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground">Durée</p>
                        <p className="font-bold text-lg">{p.duree}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Tarif</p>
                        <p className="font-bold text-2xl text-autoecole-secondary">{p.price}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programme Parrainage */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-autoecole-secondary text-white">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Programme Gagnant-Gagnant</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Parrainez vos amis et bénéficiez de réductions sur votre formation au permis de
                    conduire. Plus vous parrainez, plus vous économisez !
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-autoecole-primary hover:bg-gray-100"
                  >
                    En savoir plus
                  </Button>
                </div>
                <div className="w-48 h-48 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Users className="w-24 h-24" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-autoecole-primary to-autoecole-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Pourquoi Choisir Ange Raphaël ?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-6xl font-bold text-autoecole-secondary mb-4">98%</div>
              <p className="text-xl">Taux de Réussite</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-6xl font-bold text-autoecole-secondary mb-4">10+</div>
              <p className="text-xl">Années d'Expérience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-6xl font-bold text-autoecole-secondary mb-4">3000+</div>
              <p className="text-xl">Permis Délivrés</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Obtenir Votre Permis ?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Inscrivez-vous dès aujourd'hui et commencez votre formation avec les meilleurs
            instructeurs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-autoecole-primary hover:bg-autoecole-primary/90">
              <Link to="/pre-inscription">S'inscrire Maintenant</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:+237655511512">Appelez-nous</a>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
              <a href="https://wa.me/237677401841" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoEcole;
