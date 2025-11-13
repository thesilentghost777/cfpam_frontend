import { GraduationCap, Award, Laptop, BookOpen, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CentreFormation = () => {
  const diplomes = [
    {
      title: "AQP - 3 Mois",
      description: "Attestation de Qualification Professionnelle",
      price: "75,000 FCFA",
      details: {
        admission: "10,000 FCFA",
        matiereOeuvre: "15,000 FCFA",
        scolarite: "50,000 FCFA",
        pieces: ["CNI + CV"],
      },
    },
    {
      title: "CQP - 6 Mois",
      description: "Certificat de Qualification Professionnelle",
      price: "155,000 FCFA + Examen",
      details: {
        admission: "10,000 FCFA",
        matiereOeuvre: "135,000 FCFA",
        examen: "55,000 FCFA (Mars)",
        stage: "55,000 FCFA (Mai)",
        pieces: ["CNI ou Acte de naissance", "Justificatif niveau scolaire", "2 photos 4x4", "1 rame format A4"],
        subvention: "Pour les jeunes de 15 à 35 ans - 1ère tranche Octobre, 2ème tranche Décembre",
      },
    },
    {
      title: "DQP - 1 An",
      description: "Diplôme de Qualification Professionnelle",
      price: "200,000 FCFA + Examens",
      details: {
        admission: "10,000 FCFA",
        matiereOeuvre: "135,000 FCFA",
        examen: "55,000 FCFA (Mars)",
        stage: "55,000 FCFA (Mai)",
        pieces: ["CNI ou Acte de naissance", "Justificatif niveau scolaire", "2 photos 4x4", "1 rame format A4"],
        subvention: "Pour les jeunes de 15 à 35 ans",
      },
    },
    {
      title: "BTS - 2 Ans",
      description: "Brevet de Technicien Supérieur",
      price: "410,000 FCFA TTC",
      details: {
        niveau1: "55,000 FCFA + Modalités DQP",
        niveau2: "Inscription 55,000 FCFA + Scolarité 300,000 FCFA TTC",
        tranches: "1ère: 100,000 FCFA (Oct), 2ème: 100,000 FCFA (Déc), 3ème: 100,000 FCFA",
        pieces: ["CNI ou Acte de naissance", "Baccalauréat ou Relevé de notes"],
      },
    },
  ];

  const formations = [
    {
      name: "Secrétariat",
      durees: "3/6/12 mois | AQP/CQP/DQP",
      specialites: [
        "Bureautique (Niveau: BEPC)",
        "Assistante de Direction (Niveau: BAC)",
        "Secrétaire Comptable (Niveau: Probatoire)",
      ],
      debouches: [
        "Assistant Administration",
        "Assistant de Saisie",
        "Gestionnaire Financier",
        "Responsable Administratif",
        "Agent de Bureau",
      ],
      icon: BookOpen,
      color: "formation",
    },
    {
      name: "Audiovisuel",
      durees: "3/6/12 mois | AQP/CQP/DQP",
      specialites: [
        "Infographie (Niveau: BEPC)",
        "Montage Vidéo (Niveau: Probatoire)",
        "Graphisme 2D/3D (Niveau: BAC)",
      ],
      debouches: [
        "Graphiste Multimédia",
        "Monteur Vidéo",
        "Designer 2D/3D",
        "Infographiste",
        "Créateur de Contenu",
      ],
      icon: Users,
      color: "formation",
    },
    {
      name: "Beauté",
      durees: "3/6 mois | AQP/CQP",
      specialites: [
        "Esthétique/Cosmétique (Niveau: BEPC)",
        "Décoration (Niveau: BEPC)",
      ],
      debouches: [
        "Esthéticienne",
        "Maquilleur(se) Professionnel(le)",
        "Décorateur d'Événements",
        "Conseiller(ère) en Beauté",
        "Entrepreneur en Cosmétique",
      ],
      icon: Award,
      color: "formation",
    },
    {
      name: "Digital",
      durees: "6/12 mois | CQP/DQP",
      specialites: [
        "Marketing Digital (Niveau: BAC)",
        "Développement Web et App (Niveau: BAC)",
      ],
      debouches: [
        "Community Manager",
        "Développeur Web/Mobile",
        "Spécialiste SEO/SEM",
        "Traffic Manager",
        "Consultant Digital",
      ],
      icon: TrendingUp,
      color: "formation",
    },
    {
      name: "Gestion",
      durees: "6/12/24 mois | CQP/BTS",
      specialites: [
        "Gestion des Projets (Niveau: Licence)",
        "Gestion des Ressources Humaines (Niveau: BAC)",
      ],
      debouches: [
        "Chef de Projet",
        "Responsable RH",
        "Gestionnaire de Paie",
        "Consultant en Management",
        "Coordinateur Administratif",
      ],
      icon: GraduationCap,
      color: "formation",
    },
    {
      name: "Comptabilité",
      durees: "6/12/24 mois | CQP/DQP",
      specialites: [
        "Comptabilité Informatisée et Gestion (Niveau: BAC)",
        "Comptabilité et Gestion des Entreprises (Niveau: BAC)",
        "Banque et Finance (Niveau: BAC)",
      ],
      debouches: [
        "Comptable",
        "Assistant de Gestion",
        "Contrôleur Financier",
        "Auditeur",
        "Analyste Financier",
      ],
      icon: BookOpen,
      color: "formation",
    },
    {
      name: "Commerce",
      durees: "6/12 mois | CQP",
      specialites: [
        "Douane et Transit (Niveau: BAC)",
        "Logistique/Transport (Niveau: BAC)",
      ],
      debouches: [
        "Agent de Transit",
        "Déclarant en Douane",
        "Responsable Logistique",
        "Gestionnaire de Stock",
        "Coordinateur Transport",
      ],
      icon: Users,
      color: "formation",
    },
    {
      name: "Informatique",
      durees: "6/12 mois | DQP",
      specialites: [
        "Maintenance Informatique (Niveau: BAC)",
        "Réseau Informatique (Niveau: BAC)",
      ],
      debouches: [
        "Technicien Maintenance",
        "Administrateur Réseau",
        "Support Technique",
        "Technicien Helpdesk",
        "Spécialiste Infrastructure IT",
      ],
      icon: TrendingUp,
      color: "formation",
    },
  ];

  const bonusOfferts = [
    "Auto-école GRATUITE",
    "Cours d'anglais GRATUIT",
    "Cours de musique GRATUIT",
    "Décoration et Pâtisserie",
    "Fabrication des produits cosmétiques",
    "Laptop OFFERT",
    "Uniforme & Fournitures",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
  className="relative h-[400px] flex items-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/img1.png')", // ✅ ton image locale depuis public/
  }}
>
  {/* Overlay sombre pour le contraste du texte */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Contenu principal */}
  <div className="container mx-auto px-4 relative z-10 text-white">
    <div className="max-w-3xl animate-slide-up">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Centre de Formation CFPAM</h1>
      <p className="text-2xl mb-2">Centre de Formation Professionnelle des Arts et Métiers</p>
      <p className="text-xl opacity-90">
        Agrément N° 071/MINEFOPVSG/DFOP/SDGSF/SACD
      </p>
      <p className="text-lg mt-4">Cours du jour et du soir disponibles</p>
    </div>
  </div>
</section>


      {/* Diplomes Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Diplômes Délivrés</h2>
            <p className="text-lg text-muted-foreground">Choisissez le diplôme qui correspond à vos ambitions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diplomes.map((diplome, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-formation-primary rounded-full mb-3">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{diplome.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{diplome.description}</p>
                    <div className="text-3xl font-bold text-formation-secondary">{diplome.price}</div>
                  </div>
                  <div className="text-sm space-y-2">
                    <p><strong>Admission:</strong> {diplome.details.admission}</p>
                    {diplome.details.matiereOeuvre && <p><strong>Matière d'œuvre:</strong> {diplome.details.matiereOeuvre}</p>}
                    {diplome.details.pieces && (
                      <div>
                        <strong>Pièces:</strong>
                        <ul className="list-disc list-inside ml-2 mt-1">
                          {diplome.details.pieces.map((piece, i) => (
                            <li key={i} className="text-xs">{piece}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nos Formations</h2>
            <p className="text-lg text-muted-foreground">Des programmes complets pour tous les secteurs</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {formations.map((formation, index) => {
                const Icon = formation.icon;
                return (
                  <AccordionItem key={index} value={`formation-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 bg-${formation.color}-primary rounded-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-bold">{formation.name}</h3>
                          <p className="text-sm text-muted-foreground">{formation.durees}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Spécialités</h4>
                          <ul className="space-y-2">
                            {formation.specialites.map((spec, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-formation-secondary mt-1">•</span>
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Débouchés Professionnels</h4>
                          <ul className="space-y-2">
                            {formation.debouches.map((deb, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-formation-accent mt-1">✓</span>
                                <span>{deb}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-gradient-to-br from-formation-primary to-formation-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Bonus Offerts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bonusOfferts.map((bonus, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-scale">
                  <Laptop className="w-12 h-12 mx-auto mb-3 text-formation-secondary" />
                  <p className="font-semibold text-lg">{bonus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programme Parrainage */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-formation-secondary text-secondary-foreground">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Programme Gagnant-Gagnant</h2>
              <p className="text-lg mb-6">
                Pour chaque élève que vous parrainez, gagnez des points de fidélité qui réduisent le montant de votre formation !
              </p>
              <Button size="lg" className="bg-formation-primary text-white hover:bg-formation-primary/90">
                En savoir plus
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Commencer Votre Formation ?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour obtenir plus d'informations ou inscrivez-vous en ligne
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark">
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

export default CentreFormation;
