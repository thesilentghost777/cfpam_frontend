import { Users, TrendingUp, Award, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Cooperative = () => {
  return (
    <div className="min-h-screen">
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('/coop2.png')` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Coopérative CFPAM</h1>
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

      {/* SECTION APPLICATION BUSINESS ROOM */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="w-36 h-36 rounded-3xl shadow-2xl overflow-hidden border-4 border-cooperative-primary bg-white flex items-center justify-center">
                <img
                  src="/App/logo-br.png"
                  alt="Business Room"
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>

            {/* Texte */}
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block bg-cooperative-primary/10 text-cooperative-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                Plateforme partenaire
              </span>
              <h2 className="text-3xl font-bold mb-3">
                Rejoignez Business Room !
              </h2>
              <p className="text-muted-foreground text-base mb-6">
                Accédez à la plateforme <strong>Business Room</strong> pour gérer vos affaires, développer votre réseau et booster vos opportunités — en lien direct avec la Coopérative CFPAM.
              </p>
              <a
                href="https://business-room.tfs237.com/br/register?parrain=691111111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cooperative-primary hover:opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                S'inscrire sur Business Room
              </a>
            </div>
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