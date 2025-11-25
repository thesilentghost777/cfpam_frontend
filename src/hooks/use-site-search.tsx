import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export interface SearchResult {
  title: string;
  path: string;
  snippet: string;
  section: string;
}

// Contenu indexé du site
const siteContent = [
  // Page d'accueil
  {
    path: '/',
    title: 'Accueil',
    sections: [
      { title: 'Bienvenue au CFPAM GROUP', content: 'Excellence Formation Professionnelle Arts Métiers Digital Secrétariat Douane Audiovisuel' },
      { title: 'Statistiques', content: '5000 jeunes encadrés 95% taux de réussite 15 ans expérience' },
      { title: 'Avantages', content: '1 Apprenant 1 Laptop Offert Stage Insertion Entrepreneuriat Financement Permis Gratuit' },
    ]
  },
  // Centre de Formation
  {
    path: '/centre-formation',
    title: 'Centre de Formation',
    sections: [
      { title: 'DQP/CQP', content: 'Diplôme Qualification Professionnelle 6 12 mois 255000 FCFA' },
      { title: 'BTS', content: 'Brevet Technicien Supérieur 355000 FCFA' },
      { title: 'Secrétariat Bureautique', content: 'Word Excel PowerPoint Communication Rédaction Gestion' },
      { title: 'Audiovisuel Multimédia', content: 'Montage Vidéo Photographie Production Caméra Son' },
      { title: 'Marketing Digital', content: 'SEO Réseaux Sociaux Google Analytics Community Management E-commerce' },
      { title: 'Beauté Esthétique', content: 'Coiffure Maquillage Soins Manucure Spa' },
      { title: 'Gestion Comptabilité', content: 'Comptabilité Fiscalité Paie Audit Sage Gestion Financière' },
      { title: 'Commerce International', content: 'Import Export Douane Transit Logistique Trading' },
      { title: 'Informatique', content: 'Programmation Réseau Base Données Développement Web Cybersécurité' },
      { title: 'Douane Transit', content: 'Procédures douanières Déclaration Import Export Réglementation' },
      { title: 'Ateliers Décoration', content: 'Décoration intérieur événementielle 1 mois incubation' },
      { title: 'Ateliers Esthétique', content: 'Manicure Pedicure Makeup Microblading' },
      { title: 'Ateliers Sculpture', content: 'Sculpture fruits Fabrication jus naturel' },
      { title: 'Ateliers Élevage', content: 'Élevage vers blancs hannetons escargots comestibles' },
      { title: 'Ateliers Produits', content: 'Cosmétiques produits ménagers savon liquide vaisselle détergent' },
      { title: 'Bonus', content: 'Cours anglais musique sport informatique entrepreneuriat ligne' },
    ]
  },
  // Auto-École
  {
    path: '/auto-ecole',
    title: 'Auto-École',
    sections: [
      { title: 'Permis Gratuit', content: 'Parrainage 3 personnes Remboursement' },
      { title: 'Permis A', content: '75000 FCFA Promotion 27800 2 mois Moto' },
      { title: 'Permis B', content: '250000 FCFA Promotion 52500 2 mois Voiture' },
      { title: 'Code de la route', content: 'Signalisation Règles circulation Sécurité routière' },
      { title: 'Conduite pratique', content: 'Conduite supervisée Manœuvres Stationnement Créneaux' },
    ]
  },
  // Coopérative COPCA
  {
    path: '/cooperative',
    title: 'Coopérative COPCA',
    sections: [
      { title: 'Étudiants CFPAM', content: 'Épargne Financement double projet Accompagnement' },
      { title: 'Externes', content: 'Voiture 60000 FCFA semaine Janvier Mars Inscription 10000 Suivi 20000 Caution 10%' },
      { title: 'Formation', content: 'Formation financière Gestion projet Remise juillet' },
    ]
  },
  // Galerie
  {
    path: '/galerie',
    title: 'Galerie',
    sections: [
      { title: 'Photos', content: 'Formations Cérémonies Ateliers Étudiants Diplômés Campus' },
      { title: 'Vidéos', content: 'Témoignages Cours Démonstrations Événements' },
    ]
  },
  // Actualités
  {
    path: '/actualites',
    title: 'Actualités',
    sections: [
      { title: 'Visite Orphelinat', content: 'Mfou Acte caritatif 1 décembre 2025 Contribution Mobile Money Orange Money' },
      { title: 'Anniversaire', content: '10ème anniversaire 15 décembre CFPAM GROUP Cérémonie Célébration' },
    ]
  },
];

export const useSiteSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    siteContent.forEach((page) => {
      page.sections.forEach((section) => {
        const content = section.content.toLowerCase();
        const title = section.title.toLowerCase();

        if (content.includes(query) || title.includes(query)) {
          // Trouver le snippet autour du mot recherché
          const index = content.indexOf(query);
          const start = Math.max(0, index - 40);
          const end = Math.min(content.length, index + query.length + 40);
          let snippet = section.content.substring(start, end);
          
          if (start > 0) snippet = '...' + snippet;
          if (end < content.length) snippet = snippet + '...';

          results.push({
            title: section.title,
            path: page.path,
            snippet,
            section: page.title,
          });
        }
      });
    });

    return results.slice(0, 10); // Limiter à 10 résultats
  }, [searchQuery]);

  const handleSelectResult = (path: string) => {
    navigate(path);
    setSearchQuery('');
  };

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    handleSelectResult,
  };
};
