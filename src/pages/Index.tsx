import { Award, BookOpen, Users, TrendingUp, Laptop, Heart } from "lucide-react";
import HeroCarousel from "@/components/Home/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const stats = [
    { icon: Users, value: "5000+", label: "Étudiants Formés" },
    { icon: Award, value: "15+", label: "Formations Disponibles" },
    { icon: BookOpen, value: "98%", label: "Taux de Réussite" },
    { icon: TrendingUp, value: "10 ans", label: "D'Excellence" },
  ];

  const advantages = [
    {
      icon: Laptop,
      title: "1 Apprenant = 1 Laptop Offert",
      description: "Chaque étudiant reçoit un ordinateur portable pour faciliter sa formation",
    },
    {
      icon: Users,
      title: "Stage & Intégration Garantis",
      description: "Nous assurons un stage professionnel et facilitons votre insertion",
    },
    {
      icon: Heart,
      title: "Programme Gagnant-Gagnant",
      description: "Parrainez un ami et bénéficiez de réductions sur votre formation",
    },
    {
      icon: Award,
      title: "Diplômes Reconnus",
      description: "Formations certifiées par l'État avec agrément officiel",
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
              Depuis 2015, le CFPAM GROUP s’impose comme un acteur majeur du développement professionnel au Cameroun. Composé d’un centre de formation, d’une auto-école et d’une coopérative, notre groupe œuvre pour l’épanouissement personnel et professionnel de chaque apprenant.
Notre mission est de former, accompagner et autonomiser les individus en leur offrant des compétences concrètes, un encadrement de qualité et des opportunités réelles d’insertion socio-économique. Grâce à une équipe dynamique et à des programmes innovants, nous transformons les ambitions en réussites durables.
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card
                  key={index}
                  className="hover-lift border-2 hover:border-primary transition-all"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                      <Icon className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              );
            })}
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
                <div className="text-5xl font-bold text-secondary mb-2">Coût Réduit</div>
                <p className="text-lg">Formations accessibles avec subventions disponibles</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold text-secondary mb-2">1 = 1</div>
                <p className="text-lg">Un apprenant = Un laptop = Un emploi garanti</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold text-secondary mb-2">Agréé</div>
                <p className="text-lg">Agrément N° 071/MINEFOPVSG/DFOP/SDGSF/SACD</p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary-light text-lg px-8 py-6"
            >
              <Link to="/centre-formation">Découvrir Nos Formations</Link>
            </Button>
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
