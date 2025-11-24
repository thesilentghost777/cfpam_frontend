import { Award, BookOpen, Users, TrendingUp, Laptop, Heart } from "lucide-react";
import HeroCarousel from "@/components/Home/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const stats = [
    { icon: Users, value: "5000+", label: "Jeunes Encadrés" },
    { icon: Award, value: "15+", label: "Programmes Disponibles" },
    { icon: BookOpen, value: "98%", label: "Taux de Réussite" },
    { icon: TrendingUp, value: "10 ans", label: "D'Excellence" },
  ];

  const offres = [
    {
      icon: BookOpen,
      title: "Centre de Formation",
      subtitle: "Arts et Métiers",
      description: "Formations professionnelles certifiantes dans 8 filières : Secrétariat, Audiovisuel, Digital, Beauté, Gestion, Comptabilité, Commerce, Informatique",
      features: [
        "AQP, CQP, DQP et BTS",
        "1 Laptop offert par apprenant",
        "Stage et insertion garantis",
        "Formations cours du jour et du soir"
      ],
      color: "from-formation-primary to-formation-secondary",
      link: "/centre-formation"
    },
    {
      icon: Award,
      title: "Auto-École Ange Raphaël",
      subtitle: "Permis A et B",
      description: "Formation complète au permis de conduire avec système de parrainage unique pour obtenir votre permis GRATUITEMENT",
      features: [
        "Permis B : 52,500 FCFA au lieu de 250,000",
        "Permis A : 27,800 FCFA au lieu de 75,000",
        "Système de parrainage gratuit",
        "Taux de réussite > 90%"
      ],
      color: "from-autoecole-primary to-autoecole-accent",
      link: "/auto-ecole"
    },
    {
      icon: Users,
      title: "Coopérative COPCA",
      subtitle: "Ensemble pour Réussir",
      description: "Épargne et financement pour étudiants CFPAM et externes. Financement de projets entrepreneuriaux et acquisition de véhicules",
      features: [
        "Étudiants : Financement du double de l'épargne",
        "Externes : Acquisition de voiture en 1 an",
        "Cotisation : 60,000 FCFA/semaine",
        "Accompagnement personnalisé"
      ],
      color: "from-cooperative-primary to-cooperative-secondary",
      link: "/cooperative"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Bienvenue chez <span className="text-gradient">CFPAM GROUP</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Depuis 2015, le CFPAM GROUP s'engage à offrir des solutions complètes pour votre développement professionnel et personnel au Cameroun. Formation professionnelle, permis de conduire et accompagnement entrepreneurial : nous transformons vos ambitions en réussites concrètes.
            </p>
          </div>

          {/* Nos 3 Offres */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Nos 3 Offres</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {offres.map((offre, index) => {
                const Icon = offre.icon;
                return (
                  <Card
                    key={index}
                    className="hover-lift border-2 hover:border-primary transition-all"
                  >
                    <CardContent className="p-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${offre.color} rounded-full mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{offre.title}</h3>
                      <p className="text-sm text-muted-foreground font-semibold mb-3">{offre.subtitle}</p>
                      <p className="text-sm text-muted-foreground mb-4">{offre.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {offre.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button asChild className="w-full">
                        <Link to={offre.link}>En Savoir Plus</Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Avantages Globaux */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="hover-lift border-2 hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                  <Laptop className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1 Apprenant = 1 Laptop</h3>
                <p className="text-sm text-muted-foreground">Ordinateur portable offert pour chaque étudiant</p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                  <Award className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Permis Gratuit</h3>
                <p className="text-sm text-muted-foreground">Système de parrainage pour permis gratuit</p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                  <Users className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Stage et Insertion</h3>
                <p className="text-sm text-muted-foreground">Stage professionnel et insertion garantis</p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Financement Projet</h3>
                <p className="text-sm text-muted-foreground">Coopérative pour financer vos projets</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark text-lg px-8 py-6"
            >
              <Link to="/pre-inscription">Commencez Votre Inscription</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Pourquoi Nous Choisir ?</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold text-secondary mb-2">3 en 1</div>
                <p className="text-lg">Formation + Permis + Financement dans un seul groupe</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold text-secondary mb-2">10 ans</div>
                <p className="text-lg">D'excellence et d'accompagnement depuis 2015</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold text-secondary mb-2">Agréé</div>
                <p className="text-lg">Agrément N° 071/MINEFOPVSG/DFOP/SDGSF/SACD</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary-light text-lg px-8 py-6"
              >
                <Link to="/centre-formation">Centre de Formation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white text-lg px-8 py-6"
              >
                <Link to="/auto-ecole">Auto-École</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white text-lg px-8 py-6"
              >
                <Link to="/cooperative">Coopérative</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-secondary text-secondary-foreground">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prêt à Transformer Votre Avenir ?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Contactez-nous dès aujourd'hui pour plus d'informations sur nos programmes de
                formation
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary text-lg px-8"
                >
                  <a href="tel:+237655511512">Appelez-nous</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary-dark text-lg px-8"
                >
                  <a
                    href="https://wa.me/237677401841"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;