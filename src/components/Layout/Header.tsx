import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Centre de Formation", path: "/centre-formation" },
    { name: "Auto-École", path: "/auto-ecole" },
    { name: "Coopérative", path: "/cooperative" },
    { name: "Étudiants", path: "/etudiants" },
    { name: "Galerie", path: "/galerie" },
    { name: "Actualités", path: "/actualites" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-background lg:bg-transparent"
        }`}
      >
        {/* Top Bar - Masqué sur mobile */}
        <div className="bg-primary text-primary-foreground py-2 px-4 text-sm hidden md:block">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-6">
              <a
                href="tel:+237655511512"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
                aria-label="Appeler CFPAM"
              >
                <Phone className="w-4 h-4" />
                <span>655 511 512 / 677 401 841</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Ekonou, en face Gazolent - Yaoundé</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/237677401841"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="WhatsApp CFPAM"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex justify-between items-center">
            {/* Logo - Optimisé pour mobile */}
            <Link to="/" className="flex items-center gap-2 md:gap-3 group z-50">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="CFPAM Logo"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-bold text-foreground leading-tight">
                  CFPAM GROUP
                </h1>
                <p className="text-xs text-muted-foreground">Excellence & Formation</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md font-medium transition-all ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
              >
                <Link to="/pre-inscription">S'inscrire</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md z-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-80 bg-background shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-20 px-4 pb-6 overflow-y-auto">
            {/* Contact Info Mobile */}
            <div className="mb-6 p-4 bg-primary/10 rounded-lg">
              <a
                href="tel:+237655511512"
                className="flex items-center gap-2 text-sm mb-2 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>655 511 512</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Ekonou, Yaoundé</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-2 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-md font-medium transition-all ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button Mobile */}
            <div className="mt-auto space-y-3">
              <Button
                asChild
                size="lg"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <Link to="/pre-inscription" onClick={() => setIsMobileMenuOpen(false)}>
                  S'inscrire Maintenant
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full"
              >
                <a
                  href="https://wa.me/237677401841"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;