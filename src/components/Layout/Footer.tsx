import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">CFPAM GROUP</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Centre de Formation Professionnelle des Arts et Métiers - Votre partenaire de
              confiance pour la formation et l'excellence depuis 2015.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/CFPAM?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/cfpam_group?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/centre-formation" className="hover:text-secondary transition-colors">
                  Centre de Formation
                </Link>
              </li>
              <li>
                <Link to="/auto-ecole" className="hover:text-secondary transition-colors">
                  Auto-École Ange Raphaël
                </Link>
              </li>
              <li>
                <Link to="/cooperative" className="hover:text-secondary transition-colors">
                  Coopérative COPCA
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="hover:text-secondary transition-colors">
                  Galerie
                </Link>
              </li>
            </ul>
          </div>

          {/* Nos Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Nos Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-secondary transition-colors cursor-pointer">
                Formations Diplômantes
              </li>
              <li className="hover:text-secondary transition-colors cursor-pointer">
                Permis de Conduire
              </li>
              <li className="hover:text-secondary transition-colors cursor-pointer">
                Services Coopératifs
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                <span>Ekounou, lieu dit "entrée Gasolent", Yaoundé, Cameroun</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-secondary" />
                <div>
                  <a href="tel:+237655511512" className="hover:text-secondary transition-colors">
                    655 511 512
                  </a>
                  {" / "}
                  <a href="tel:+237677401841" className="hover:text-secondary transition-colors">
                    677 401 841
                  </a>
                   {" / "}
                  <a href="tel:+237659292001" className="hover:text-secondary transition-colors">
                    659 292 001
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-secondary" />
                <a
                  href="mailto:hopeconcept.cfpam@gmail.com"
                  className="hover:text-secondary transition-colors"
                >
                  hopeconcept.cfpam@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          

          {/* Made By Section */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs text-primary-foreground/60">
            <p>
              Made by{" "}
              <a
                href="https://techforgesolution237.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline transition-colors"
              >
                Tech Forge Solution 237
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;