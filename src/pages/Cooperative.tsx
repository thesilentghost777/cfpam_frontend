import { Users, TrendingUp, Award, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cooperative = () => {
  return (
    <div className="min-h-screen">
      <section
  className="relative h-[400px] bg-cover bg-center flex items-center"
  style={{
    backgroundImage: `url('/coop2.png')`
  }}
>
  <div className="absolute inset-0 bg-black/30" />

  <div className="container mx-auto px-4 relative z-10 text-white">
    <div className="max-w-3xl animate-slide-up">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Coopérative COPCA</h1>
      <p className="text-2xl mb-4">Ensemble pour Réussir</p>
    </div>
  </div>
</section>


      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Pour les Étudiants CFPAM</h2>
                <div className="space-y-4">
                  <p className="flex items-start gap-2"><span className="text-cooperative-primary font-bold">✓</span> Épargnez tout au long de l'année</p>
                  <p className="flex items-start gap-2"><span className="text-cooperative-primary font-bold">✓</span> Financement du double de votre épargne pour votre projet</p>
                  <p className="flex items-start gap-2"><span className="text-cooperative-primary font-bold">✓</span> Accompagnement personnalisé</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Pour les Externes</h2>
                <div className="space-y-4">
                  <p><strong>Période d'enrôlement:</strong> Janvier à Mars</p>
                  <p><strong>Cotisation:</strong> 60,000 FCFA/semaine pendant 1 an</p>
                  <p><strong>Ouverture dossier:</strong> 10,000 FCFA</p>
                  <p><strong>Suivi et formation:</strong> 20,000 FCFA</p>
                  <p><strong>Caution:</strong> 10% (remboursable si dossier non retenu)</p>
                  <p className="mt-6 p-4 bg-cooperative-primary/10 rounded-lg"><strong>Résultat:</strong> Réception de votre voiture en Juillet si dossier retenu</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <Button asChild size="lg" className="bg-cooperative-primary">
            <Link to="/pre-inscription">Rejoindre la Coopérative</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Cooperative;