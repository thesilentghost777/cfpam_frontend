import { Car,Bike, Award, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AutoEcole = () => {
  return (
    <div className="min-h-screen">
     <section
  className="relative h-96 bg-cover bg-center flex items-center"
  style={{ backgroundImage: `url('/auto_ecole1.png')` }}
>
  <div className="absolute inset-0 bg-black/30" />
  <div className="container mx-auto px-4 relative z-10 text-white">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Auto-École Ange Raphaël
      </h1>
      <p className="text-xl opacity-90 mb-2">
        Agrément N° 0266/D/MINT/G/DTR/SDPSR/SFCAM
      </p>
      <p className="text-lg font-semibold">Votre Permis en Toute Confiance</p>
      <p className="text-base opacity-90 mt-2">
        Formation théorique et pratique avec des experts du domaine
      </p>
    </div>
  </div>
</section>


      {/* SECTION PARRAINAGE */}
      <section className="py-16 bg-gradient-to-r from-autoecole-accent via-autoecole-primary to-autoecole-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                🎉 PERMIS GRATUIT 🎉
              </h2>
            </div>
            <p className="text-2xl text-white mb-8 font-semibold">Découvrez notre système de parrainage !</p>
            
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <Accordion type="single" collapsible>
                  <AccordionItem value="explication">
                    <AccordionTrigger className="text-xl font-bold">
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-6 h-6 text-autoecole-primary" />
                        Comment obtenir votre permis GRATUITEMENT ?
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-6">
                      <div className="space-y-6 text-left">
                        <div className="bg-autoecole-primary/10 p-6 rounded-lg">
                          <h3 className="font-bold text-lg mb-3">Permis B (52,500 FCFA au lieu de 250,000 FCFA):</h3>
                          <ul className="space-y-2">
                            <li>✓ Payez d'abord 40,000 FCFA</li>
                            <li>✓ Parrainez 3 personnes → Ne payez plus les 12,500 FCFA</li>
                            <li>✓ Si vos 3 filleuls parrainent chacun 3 personnes → Remboursement de 40,000 FCFA</li>
                          </ul>
                        </div>
                        <div className="bg-autoecole-secondary/10 p-6 rounded-lg">
                          <h3 className="font-bold text-lg mb-3">Permis A (27,800 FCFA au lieu de 75,000 FCFA):</h3>
                          <ul className="space-y-2">
                            <li>✓ Payez d'abord 20,000 FCFA</li>
                            <li>✓ Parrainez 3 personnes → Ne payez plus les 7,800 FCFA</li>
                            <li>✓ Si vos 3 filleuls parrainent chacun 3 personnes → Remboursement de 20,000 FCFA</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION FORMATIONS */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nos Formations</h2>
            <p className="text-lg text-muted-foreground">Formation complète en 2 mois</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* PERMIS A */}
            <Card className="hover-lift border-2 border-autoecole-primary">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-autoecole-primary rounded-full mb-4">
  <Bike className="w-10 h-10 text-white" />
</div>

                  <h3 className="text-3xl font-bold mb-2">Permis A</h3>
                  <p className="text-muted-foreground mb-4">Motocyclettes et cyclomoteurs</p>
                  
                  <div className="mb-4">
                    <p className="text-2xl text-muted-foreground line-through mb-2">75,000 FCFA</p>
                    <div className="text-5xl font-bold text-autoecole-secondary">27,800 FCFA</div>
                    <p className="text-sm text-muted-foreground mt-2">Prix promotionnel</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-autoecole-secondary" />
                    <span>Durée: 2 mois</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-autoecole-secondary" />
                    <span>Cours théoriques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-autoecole-secondary" />
                    <span>Cours pratiques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-autoecole-secondary" />
                    <span>Formateurs experts</span>
                  </div>
                </div>

                <div className="bg-autoecole-accent/10 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-center">
                    Idéal pour conduire motos et scooters en toute sécurité
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* PERMIS B */}
            <Card className="hover-lift border-2 border-autoecole-secondary">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-autoecole-secondary rounded-full mb-4">
                    <Car className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Permis B</h3>
                  <p className="text-muted-foreground mb-4">Véhicules légers (voitures)</p>
                  
                  <div className="mb-4">
                    <p className="text-2xl text-muted-foreground line-through mb-2">250,000 FCFA</p>
                    <div className="text-5xl font-bold text-autoecole-primary">52,500 FCFA</div>
                    <p className="text-sm text-muted-foreground mt-2">Prix promotionnel</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-autoecole-primary" />
                    <span>Durée: 2 mois</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-autoecole-primary" />
                    <span>Cours théoriques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-autoecole-primary" />
                    <span>Cours pratiques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-autoecole-primary" />
                    <span>Formateurs experts</span>
                  </div>
                </div>

                <div className="bg-autoecole-primary/10 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-center">
                    Le permis le plus demandé pour véhicules de tourisme
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION AVANTAGES */}
      <section className="py-20 bg-gradient-to-br from-autoecole-primary to-autoecole-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Pourquoi Choisir Ange Raphaël ?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Formateurs Qualifiés</h3>
                <p className="opacity-90">Des experts passionnés avec années d'expérience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Taux de Réussite Élevé</h3>
                <p className="opacity-90">Plus de 90% de nos élèves réussissent du premier coup</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Véhicules Modernes</h3>
                <p className="opacity-90">Flotte récente et bien entretenue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Passer Votre Permis ?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-autoecole-primary">
              <Link to="/pre-inscription">S'inscrire Maintenant</Link>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
              <a href="https://wa.me/237677401841" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoEcole;
