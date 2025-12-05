import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useSiteSearch } from "@/hooks/use-site-search";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { searchQuery, setSearchQuery, searchResults, handleSelectResult } = useSiteSearch();

  // Raccourci clavier pour ouvrir la recherche (Ctrl+K ou Cmd+K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Centre de Formation", path: "/centre-formation" },
    { name: "Auto-École", path: "/auto-ecole" },
    { name: "Coopérative CFPAM", path: "/cooperative" },
    { name: "Galerie", path: "/galerie" },
    { name: "Actualités", path: "/actualites" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      {/* Top Bar */}
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
              <span>Ekounou, en face Gasolent - Yaoundé</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-md border border-gray-200">
              <img 
                src="cfpamlogo.jpg" 
                alt="CFPAM Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-foreground">CFPAM GROUP</h1>
              <p className="text-sm text-muted-foreground">Excellence & Formation</p>
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
            
            {/* Search Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="ml-2"
              aria-label="Rechercher dans le site"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Rechercher dans le site"
            >
              <Search className="h-4 w-4" />
            </Button>
            
            <button
              className="p-2 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-2">
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
          </div>
        )}
      </nav>

      {/* Search Dialog */}
      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput 
          placeholder="Rechercher dans le site... (ex: permis, formation, digital)" 
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
          {searchResults.length > 0 && (
            <CommandGroup heading="Résultats de recherche">
              {searchResults.map((result, index) => (
                <CommandItem
                  key={`${result.path}-${index}`}
                  onSelect={() => {
                    handleSelectResult(result.path);
                    setIsSearchOpen(false);
                  }}
                  className="flex flex-col items-start gap-1 py-3"
                >
                  <div className="flex items-center gap-2 w-full">
                    <span className="font-semibold">{result.title}</span>
                    <span className="text-xs text-muted-foreground ml-auto">
                      {result.section}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {result.snippet}
                  </p>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </header>
  );
};

export default Header;