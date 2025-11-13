import { Users, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cooperative = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
<section
  className="relative h-[400px] flex items-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/img4.png')", // ✅ ton image locale
  }}
>
  {/* Overlay sombre */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Contenu texte */}
  <div className="container mx-auto px-4 relative z-10 text-white">
    <div className="max-w-3xl animate-slide-up">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Coopérative CFPAM</h1>
      <p className="text-2xl mb-4">Ensemble pour Réussir</p>
      <p className="text-lg opacity-90">
        Une communauté solidaire au service de votre développement professionnel
      </p>
    </div>
  </div>
</section>


      {/* Coming Soon Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-cooperative-primary">
              <CardContent className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-cooperative-secondary rounded-full mb-6 animate-float">
                  <Users className="w-12 h-12 text-white" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Contenu en Préparation
                </h2>

                <p className="text-lg text-muted-foreground mb-8">
                  Les informations détaillées sur notre coopérative seront disponibles très
                  prochainement. Nous travaillons activement pour vous offrir les meilleurs
                  services coopératifs adaptés à vos besoins.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="p-6 bg-muted rounded-lg">
                    <Heart className="w-10 h-10 text-cooperative-accent mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Services Solidaires</h3>
                    <p className="text-sm text-muted-foreground">
                      Entraide et soutien mutuel entre membres
                    </p>
                  </div>

                  <div className="p-6 bg-muted rounded-lg">
                    <TrendingUp className="w-10 h-10 text-cooperative-accent mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Développement</h3>
                    <p className="text-sm text-muted-foreground">
                      Opportunités de croissance professionnelle
                    </p>
                  </div>

                  <div className="p-6 bg-muted rounded-lg">
                    <Users className="w-10 h-10 text-cooperative-accent mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Communauté</h3>
                    <p className="text-sm text-muted-foreground">
                      Réseau de professionnels engagés
                    </p>
                  </div>
                </div>

                <div className="bg-cooperative-primary/10 rounded-lg p-6 mb-8">
                  <p className="text-sm text-foreground">
                    <strong>Remarque :</strong> Le contenu de cette page sera mis à jour dans les
                    plus brefs délais. En attendant, n'hésitez pas à nous contacter pour toute
                    question sur nos services coopératifs.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-cooperative-primary hover:bg-cooperative-primary/90 text-white"
                  >
                    <a href="tel:+237655511512">Contactez-nous</a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  >
                    <a
                      href="https://wa.me/237677401841"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </Button>

                  <Button asChild size="lg" variant="outline">
                    <Link to="/">Retour à l'accueil</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter/Updates Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Restez Informé</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Soyez parmi les premiers à découvrir nos services coopératifs en vous inscrivant à
              notre newsletter
            </p>
            <Button
              asChild
              size="lg"
              className="bg-cooperative-secondary hover:bg-cooperative-secondary/90"
            >
              <Link to="/pre-inscription">Pré-inscription</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cooperative;
