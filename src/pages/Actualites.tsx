import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Heart, PartyPopper, MapPin, Phone, Users } from "lucide-react";

const Actualites = () => {
  const actualites = [
    {
      id: 1,
      title: "Visite Caritative à l'Orphelinat de Mfou",
      date: "Lundi 1er Décembre 2025",
      type: "Acte Caritatif",
      image: "/actu1.png",
      description: "Le CFPAM GROUP organise une visite spéciale à l'orphelinat de Mfou dans le cadre de son programme d'engagement social et communautaire.",
      details: [
        "Distribution de fournitures scolaires",
        "Don de denrées alimentaires",
        "Activités ludiques avec les enfants",
        "Session de partage et d'encouragement",
      ],
      contribution: {
        mobile: "+237 655 51 15 12",
        whatsapp: "+237 677 40 18 41",
        lieu: "Orphelinat de Mfou, Région du Centre",
        items: [
          "Fournitures scolaires (cahiers, stylos, livres)",
          "Denrées alimentaires non périssables",
          "Vêtements pour enfants",
          "Jouets éducatifs",
          "Dons financiers via Mobile Money",
        ],
      },
      icon: Heart,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      id: 2,
      title: "10ème Anniversaire du CFPAM GROUP",
      date: "Dimanche 15 Décembre 2025",
      type: "Célébration",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      description: "Célébration grandiose du 10ème anniversaire du CFPAM GROUP ! Une décennie d'excellence, d'innovation et de formation de qualité.",
      details: [
        "Cérémonie officielle avec discours des fondateurs",
        "Remise de diplômes aux meilleurs étudiants",
        "Spectacles culturels et musicaux",
        "Cocktail et networking",
        "Présentation des réalisations des 10 dernières années",
        "Lancement de nouveaux programmes de formation",
      ],
      programme: [
        { heure: "09h00", activite: "Accueil des invités" },
        { heure: "10h00", activite: "Cérémonie d'ouverture" },
        { heure: "11h00", activite: "Discours des fondateurs et partenaires" },
        { heure: "12h00", activite: "Remise des prix d'excellence" },
        { heure: "13h00", activite: "Pause déjeuner et cocktail" },
        { heure: "15h00", activite: "Spectacles culturels" },
        { heure: "17h00", activite: "Présentation des nouveaux programmes" },
        { heure: "18h00", activite: "Networking et clôture" },
      ],
      lieu: {
        nom: "Siège du CFPAM GROUP",
        adresse: "Ekounou, en face Gasolent",
        ville: "Yaoundé, Cameroun",
      },
      contact: {
        reservation: "+237 655 51 15 12",
        whatsapp: "+237 677 40 18 41",
        email: "contact@cfpamgroup.cm",
      },
      icon: PartyPopper,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités & Événements</h1>
            <p className="text-lg text-muted-foreground">
              Restez informé de toutes nos actualités et événements à venir
            </p>
          </div>

          <div className="space-y-12">
            {actualites.map((actualite) => (
              <Card key={actualite.id} className="overflow-hidden border-2 hover-lift">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={actualite.image} 
                      alt={actualite.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${actualite.bgColor} backdrop-blur-sm`}>
                        <actualite.icon className={`w-5 h-5 ${actualite.color}`} />
                        <span className="font-semibold text-sm">{actualite.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <Calendar className="w-5 h-5" />
                        <span className="text-sm font-medium">{actualite.date}</span>
                      </div>
                      <CardTitle className="text-3xl mb-3">{actualite.title}</CardTitle>
                      <p className="text-muted-foreground">{actualite.description}</p>
                    </CardHeader>

                    <CardContent className="p-0">
                      {actualite.id === 1 && (
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-bold mb-3 flex items-center gap-2">
                              <Users className="w-5 h-5 text-primary" />
                              Au programme :
                            </h3>
                            <ul className="space-y-2">
                              {actualite.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span className="text-sm">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-primary/5 p-4 rounded-lg">
                            <h3 className="font-bold mb-3 flex items-center gap-2">
                              <Heart className="w-5 h-5 text-red-500" />
                              Comment contribuer :
                            </h3>
                            <div className="space-y-3 text-sm">
                              <div>
                                <p className="font-semibold mb-2">Articles acceptés :</p>
                                <ul className="space-y-1 ml-4">
                                  {actualite.contribution.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <span className="text-primary">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="pt-3 border-t">
                                <p className="font-semibold mb-2">Contacts :</p>
                                <div className="flex flex-col gap-2">
                                  <a href={`tel:${actualite.contribution.mobile}`} className="flex items-center gap-2 text-primary hover:underline">
                                    <Phone className="w-4 h-4" />
                                    {actualite.contribution.mobile}
                                  </a>
                                  <a href={`https://wa.me/${actualite.contribution.whatsapp.replace(/\s/g, '')}`} className="flex items-center gap-2 text-green-600 hover:underline">
                                    <Phone className="w-4 h-4" />
                                    {actualite.contribution.whatsapp} (WhatsApp)
                                  </a>
                                </div>
                              </div>
                              <div className="pt-3 border-t">
                                <div className="flex items-start gap-2">
                                  <MapPin className="w-4 h-4 text-primary mt-1" />
                                  <span>{actualite.contribution.lieu}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {actualite.id === 2 && (
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-bold mb-3 flex items-center gap-2">
                              <PartyPopper className="w-5 h-5 text-primary" />
                              Points forts de la célébration :
                            </h3>
                            <ul className="space-y-2">
                              {actualite.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-yellow-500 mt-1">★</span>
                                  <span className="text-sm">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h3 className="font-bold mb-3">Programme de la journée :</h3>
                            <div className="space-y-2">
                              {actualite.programme.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-sm">
                                  <span className="font-bold text-primary min-w-[60px]">{item.heure}</span>
                                  <span>{item.activite}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-primary/5 p-4 rounded-lg">
                            <h3 className="font-bold mb-3 flex items-center gap-2">
                              <MapPin className="w-5 h-5 text-primary" />
                              Lieu de l'événement :
                            </h3>
                            <div className="space-y-2 text-sm">
                              <p className="font-semibold">{actualite.lieu.nom}</p>
                              <p>{actualite.lieu.adresse}</p>
                              <p>{actualite.lieu.ville}</p>
                            </div>
                            
                            <div className="mt-4 pt-4 border-t">
                              <p className="font-semibold mb-2">Réservations et informations :</p>
                              <div className="flex flex-col gap-2">
                                <a href={`tel:${actualite.contact.reservation}`} className="flex items-center gap-2 text-primary hover:underline">
                                  <Phone className="w-4 h-4" />
                                  {actualite.contact.reservation}
                                </a>
                                <a href={`https://wa.me/${actualite.contact.whatsapp.replace(/\s/g, '')}`} className="flex items-center gap-2 text-green-600 hover:underline">
                                  <Phone className="w-4 h-4" />
                                  {actualite.contact.whatsapp} (WhatsApp)
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-4 mt-6">
                        <Button asChild className="bg-primary">
                          <a href={`https://wa.me/237677401841?text=Je souhaite en savoir plus sur: ${actualite.title}`} target="_blank" rel="noopener noreferrer">
                            Plus d'informations
                          </a>
                        </Button>
                        <Button asChild variant="outline">
                          <Link to="/">Retour à l'accueil</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actualites;