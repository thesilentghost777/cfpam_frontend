import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Newspaper, AlertCircle } from "lucide-react";

const Actualites = () => {
  return (
    <div className="min-h-screen py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités & Événements</h1>
            <p className="text-lg text-muted-foreground">
              Restez informé de toutes nos actualités et événements
            </p>
          </div>

          <Card className="border-2 border-primary">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-secondary rounded-full mb-6 animate-float">
                <Newspaper className="w-12 h-12 text-secondary-foreground" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contenu en Préparation</h2>

              <p className="text-lg text-muted-foreground mb-8">
                Cette section sera bientôt mise à jour avec toutes nos actualités, événements,
                témoignages et opportunités de recrutement. Nous travaillons activement pour vous
                offrir le meilleur contenu.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-muted rounded-lg">
                  <Calendar className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Événements</h3>
                  <p className="text-sm text-muted-foreground">
                    Calendrier des événements à venir
                  </p>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                  <Newspaper className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Actualités</h3>
                  <p className="text-sm text-muted-foreground">
                    Dernières nouvelles du CFPAM GROUP
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-4 text-left">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-foreground">
                      <strong>Remarque :</strong> Le contenu de cette page sera mis à jour dans les
                      plus brefs délais. En attendant, suivez-nous sur nos réseaux sociaux ou
                      contactez-nous directement pour rester informé.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
                  <a href="tel:+237655511512">Contactez-nous</a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white"
                >
                  <a href="https://wa.me/237677401841" target="_blank" rel="noopener noreferrer">
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
    </div>
  );
};

export default Actualites;
