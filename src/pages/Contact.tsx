import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import GoogleMap from "@/components/GoogleMap";

const Contact = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-Nous</h1>
            <p className="text-lg text-muted-foreground">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary rounded-lg">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Adresse - Yaoundé</h3>
                      <p className="text-muted-foreground">
                        Ekonou, en face lieu dit "entrée Gazolent"
                        <br />
                        Yaoundé, Cameroun
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary rounded-lg">
                      <Phone className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>
                          <a href="tel:+237655511512" className="hover:text-primary">
                            +237 655 511 512
                          </a>
                        </p>
                        <p>
                          <a href="tel:+237677401841" className="hover:text-primary">
                            +237 677 401 841
                          </a>
                        </p>
                        <p>
                          <a href="tel:+237659292001" className="hover:text-primary">
                            +237 659 292 001
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-formation-accent rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        <a
                          href="mailto:contact@cfpam-group.cm"
                          className="hover:text-primary"
                        >
                          contact@cfpam-group.cm
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-autoecole-secondary rounded-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                    Une communauté solidaire au service de votre développement professionnel  <h3 className="font-semibold text-lg mb-2">Horaires</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Lundi - Vendredi: 8h00 - 18h00</p>
                        <p>Samedi: 8h00 - 14h00</p>
                        <p className="text-sm italic">Cours du jour et du soir disponibles</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div>
              <Card className="h-full bg-gradient-to-br from-primary via-primary-light to-secondary text-white">
                <CardContent className="p-8 flex flex-col justify-center h-full">
                  <h2 className="text-3xl font-bold mb-6">Contactez-nous directement</h2>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-lg opacity-90">
                      Besoin d'informations ? Notre équipe est disponible pour répondre à toutes vos
                      questions par téléphone, WhatsApp ou email.
                    </p>
                    <p className="opacity-90">
                      Vous pouvez également passer directement à notre centre pour une consultation
                      personnalisée.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-white text-primary hover:bg-gray-100 text-lg"
                    >
                      <a href="tel:+237655511512" className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        Appeler Maintenant
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg"
                    >
                      <a
                        href="https://wa.me/237677401841"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg"
                    >
                      <a
                        href="mailto:contact@cfpam-group.cm"
                        className="flex items-center justify-center gap-2"
                      >
                        <Mail className="w-5 h-5" />
                        Envoyer un Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
