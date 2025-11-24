import React, { useState, useEffect } from "react";
import { GraduationCap, Award, Laptop, BookOpen, Users, TrendingUp, CheckCircle, Filter, AlertCircle } from "lucide-react";

const CentreFormation = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [etudiantsData, setEtudiantsData] = useState({});
  const [loading, setLoading] = useState({});
  const [errors, setErrors] = useState({});

  const API_URL = "http://127.0.0.1:8000/api";

  const annees = ["2020-2021", "2021-2022", "2022-2023", "2023-2024", "2024-2025"];

  // Mapping des noms de formations vers les codes API
  const formationMapping = {
    "Secrétariat": "secretariat",
    "Audiovisuel": "audiovisuel",
    "Digital": "digital",
    "Beauté": "beaute",
    "Gestion": "gestion",
    "Comptabilité": "comptabilite",
    "Commerce": "commerce",
    "Informatique": "informatique"
  };

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
      title: "CQP/DQP - 6-12 Mois",
      description: "Certificat/Diplôme de Qualification Professionnelle",
      price: "255,000 FCFA",
      details: {
        admission: "10,000 FCFA",
        matiereOeuvre: "135,000 FCFA",
        examen: "55,000 FCFA",
        stage: "55,000 FCFA",
        pieces: ["CNI ou Acte de naissance", "Justificatif niveau scolaire", "2 photos 4x4", "1 rame format A4"],
        subvention: "Pour les jeunes de 15 à 35 ans",
      },
    },
    {
      title: "BTS - 2 Ans",
      description: "Brevet de Technicien Supérieur",
      price: "355,000 FCFA",
      details: {
        admission: "0 FCFA",
        inscription: "55,000 FCFA",
        formation: "300,000 FCFA",
        pieces: ["CNI ou Acte de naissance", "Baccalauréat ou Relevé de notes"],
      },
    },
  ];

  const formations = [
    {
      name: "Secrétariat",
      durees: "3/6/12 mois | AQP/CQP/DQP",
      specialites: [
        {
          nom: "Bureautique (Niveau: BEPC)",
          modules: ["Traitement de texte (Word)", "Tableur (Excel)", "Présentation (PowerPoint)", "Messagerie et Internet", "Dactylographie", "Gestion documentaire", "Communication professionnelle", "Techniques de classement", "Rédaction administrative", "Organisation du travail de bureau"],
        },
        {
          nom: "Assistante de Direction (Niveau: BAC)",
          modules: ["Gestion de l'agenda", "Organisation de réunions", "Accueil téléphonique", "Correspondance professionnelle", "Gestion des déplacements", "Protocole d'entreprise", "Communication interne/externe", "Gestion du temps", "Outils bureautiques avancés", "Relation client"],
        },
        {
          nom: "Secrétaire Comptable (Niveau: Probatoire)",
          modules: ["Comptabilité générale", "Opérations courantes", "Gestion de la trésorerie", "Déclarations fiscales", "Logiciels comptables", "Paie et charges sociales", "Gestion administrative", "Analyse financière de base", "Archivage comptable", "Bureautique professionnelle"],
        },
      ],
      debouches: ["Assistant Administration", "Assistant de Saisie", "Gestionnaire Financier", "Responsable Administratif", "Agent de Bureau"],
      icon: BookOpen,
      color: "formation",
    },
    {
      name: "Audiovisuel",
      durees: "3/6/12 mois | AQP/CQP/DQP",
      specialites: [
        {
          nom: "Infographie (Niveau: BEPC)",
          modules: ["Photoshop", "Illustrator", "Théorie des couleurs", "Typographie", "Mise en page", "Retouche photo", "Identité visuelle", "Design graphique", "Impression et prépresse", "Portfolio professionnel"],
        },
        {
          nom: "Montage Vidéo (Niveau: Probatoire)",
          modules: ["Adobe Premiere Pro", "Final Cut Pro", "Techniques de montage", "Effets visuels", "Correction colorimétrique", "Sound design", "After Effects", "Storytelling visuel", "Export et formats", "Workflow professionnel"],
        },
        {
          nom: "Graphisme 2D/3D (Niveau: BAC)",
          modules: ["Blender 3D", "Maya", "Modélisation 3D", "Animation 3D", "Rendu et éclairage", "Texturing", "Motion design", "Compositing", "Cinéma 4D", "Projet professionnel"],
        },
      ],
      debouches: ["Graphiste Multimédia", "Monteur Vidéo", "Designer 2D/3D", "Infographiste", "Créateur de Contenu"],
      icon: Users,
      color: "formation",
    },
    {
      name: "Digital",
      durees: "6/12 mois | CQP/DQP",
      specialites: [
        {
          nom: "Marketing Digital (Niveau: BAC)",
          modules: ["Stratégie digitale", "Réseaux sociaux", "Content marketing", "SEO/SEA", "Email marketing", "Analytics et métriques", "Community management", "Publicité en ligne", "E-commerce", "Inbound marketing"],
        },
        {
          nom: "Développement Web et App (Niveau: BAC)",
          modules: ["HTML/CSS", "JavaScript", "React.js", "Node.js", "Bases de données", "PHP/MySQL", "Développement mobile", "Git et versioning", "API REST", "Déploiement et hosting"],
        },
      ],
      debouches: ["Community Manager", "Développeur Web/Mobile", "Spécialiste SEO/SEM", "Traffic Manager", "Consultant Digital"],
      icon: TrendingUp,
      color: "formation",
    },
    {
      name: "Comptabilité",
      durees: "6/12/24 mois | CQP/DQP",
      specialites: [
        {
          nom: "Comptabilité Informatisée et Gestion (Niveau: BAC)",
          modules: ["Comptabilité générale", "Comptabilité analytique", "Logiciels comptables (Sage, Ciel)", "Fiscalité des entreprises", "Gestion financière", "Analyse des coûts", "Contrôle de gestion", "Tableaux de bord", "Audit interne", "Gestion budgétaire"],
        },
      ],
      debouches: ["Comptable d'entreprise", "Assistant de gestion", "Contrôleur financier", "Auditeur junior", "Analyste financier"],
      icon: BookOpen,
      color: "formation",
    },
  ];

  const ateliersPratiques = [
    {
      groupe: "Groupe 1",
      duree: "1 mois + 2 mois d'incubation préfinancement",
      inscription: "10,000 FCFA",
      packs: [
        {
          nom: "Décoration",
          activites: ["Décoration intérieur", "Décoration événementielle"],
        },
        {
          nom: "Esthétique",
          activites: ["Manicure/Pédicure", "Make up/Micro blading"],
        },
      ],
    },
    {
      groupe: "Groupe 2",
      duree: "2 semaines + 1 mois d'incubation préfinancement",
      inscription: "10,000 FCFA",
      packs: [
        {
          nom: "Sculpture et Fabrication",
          activites: ["Sculpture de fruits", "Fabrication de jus naturel"],
        },
        {
          nom: "Élevage",
          activites: ["Élevage de vers blancs (Hannetons)", "Élevage d'escargots comestibles"],
        },
        {
          nom: "Fabrication de Produits",
          activites: [
            "Fabrication de produits cosmétiques (lait de toilette, gel de douche, lotion faciale et anti-tache, crème de cheveux, savon de toilette, crème de visage)",
            "Fabrication de produits ménagers (liquide vaisselle, savon liquide, détergent, savon solide, javel)",
          ],
        },
      ],
    },
  ];

  const bonusOfferts = [
    "Auto-école GRATUITE",
    "Cours d'anglais GRATUIT",
    "Cours de musique GRATUIT",
    "Cours en ligne",
    "Décoration et Pâtisserie",
    "Fabrication des produits cosmétiques",
    "Laptop OFFERT",
    "Uniforme & Fournitures",
  ];

  const loadEtudiants = async (formationName, annee) => {
    const filterKey = formationName;
    
    setLoading(prev => ({ ...prev, [filterKey]: true }));
    setErrors(prev => ({ ...prev, [filterKey]: null }));

    try {
      const filiereCode = formationMapping[formationName];
      if (!filiereCode) {
        throw new Error("Filière non reconnue");
      }

      // Appel API avec filière et année (pas de sous-filière)
      const endpoint = `${API_URL}/cfpam/etudiants/filiere/${filiereCode}?annee=${encodeURIComponent(annee)}`;
      
      const response = await fetch(endpoint);
      
      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || "Erreur lors de la récupération des données");
      }

      const etudiantsArray = Array.isArray(result.data) ? result.data : [];
      
      setEtudiantsData(prev => ({
        ...prev,
        [filterKey]: etudiantsArray
      }));

    } catch (error) {
      console.error("Erreur:", error);
      setErrors(prev => ({
        ...prev,
        [filterKey]: error instanceof Error ? error.message : "Erreur inconnue"
      }));
      setEtudiantsData(prev => ({
        ...prev,
        [filterKey]: []
      }));
    } finally {
      setLoading(prev => ({ ...prev, [filterKey]: false }));
    }
  };

  const handleFilterChange = (formationName, annee) => {
    const key = formationName;
    setSelectedFilters(prev => ({
      ...prev,
      [key]: annee
    }));
    
    if (annee) {
      loadEtudiants(formationName, annee);
    } else {
      setEtudiantsData(prev => ({
        ...prev,
        [key]: []
      }));
    }
  };

  const clearFilter = (formationName) => {
    const key = formationName;
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
    setEtudiantsData(prev => {
      const newData = { ...prev };
      delete newData[key];
      return newData;
    });
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[key];
      return newErrors;
    });
  };

  const handleInscription = () => {
    window.location.href = '/pre-inscription';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
  className="relative h-96 bg-cover bg-center flex items-center"
  style={{ backgroundImage: `url('/img1.png')` }}
>
  <div className="absolute inset-0 bg-black/30" />

  <div className="container mx-auto px-4 relative z-10 text-white">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Centre de Formation Professionnel en Arts et Métiers
      </h1>
      <p className="text-xl opacity-90 mb-2">
        Agrément N° 071/MINEFOPVSG/DFOP/SDGSF/SACD
      </p>
      <p className="text-lg font-semibold">Formations Cours du jour et du Soir</p>
    </div>
  </div>
</section>


      {/* Diplomes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Diplômes Délivrés</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {diplomes.map((diplome, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-3">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{diplome.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{diplome.description}</p>
                  <div className="text-3xl font-bold text-purple-600">{diplome.price}</div>
                </div>
                <div className="text-sm space-y-2">
                  <p><strong>Admission:</strong> {diplome.details.admission}</p>
                  {diplome.details.matiereOeuvre && <p><strong>Matière d'œuvre:</strong> {diplome.details.matiereOeuvre}</p>}
                  {diplome.details.scolarite && <p><strong>Scolarité:</strong> {diplome.details.scolarite}</p>}
                  {diplome.details.inscription && <p><strong>Inscription:</strong> {diplome.details.inscription}</p>}
                  {diplome.details.formation && <p><strong>Formation:</strong> {diplome.details.formation}</p>}
                  {diplome.details.examen && <p><strong>Examen:</strong> {diplome.details.examen}</p>}
                  {diplome.details.stage && <p><strong>Stage:</strong> {diplome.details.stage}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Section avec un seul filtre par filière */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Formations en cours du jour et du soir</h2>
          </div>
          <div className="space-y-8 max-w-6xl mx-auto">
            {formations.map((formation, formationIndex) => {
              const etudiants = etudiantsData[formation.name] || [];
              const isLoading = loading[formation.name];
              const error = errors[formation.name];
              const [isOpen, setIsOpen] = React.useState(false);

              return (
                <div key={formationIndex} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full">
                      <formation.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{formation.name}</h3>
                      <p className="text-gray-600">{formation.durees}</p>
                    </div>
                  </div>

                  {/* Filtre par année - UN SEUL pour toute la filière */}
                  <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Filter className="w-5 h-5 text-blue-600" />
                      <label className="font-semibold text-blue-900">Liste des etudiants Filtrer par année académique</label>
                    </div>
                    <select 
                      className="w-full p-2 border rounded-lg bg-white"
                      value={selectedFilters[formation.name] || ""}
                      onChange={(e) => handleFilterChange(formation.name, e.target.value)}
                    >
                      <option value="">Sélectionner une année</option>
                      {annees.map((annee) => (
                        <option key={annee} value={annee}>{annee}</option>
                      ))}
                    </select>
                    
                    {selectedFilters[formation.name] && (
                      <div className="mt-3 p-3 bg-white rounded border border-blue-200">
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-semibold">Année sélectionnée:</span> {selectedFilters[formation.name]}
                        </p>
                        <button 
                          className="px-3 py-1 text-sm border rounded hover:bg-gray-50"
                          onClick={() => clearFilter(formation.name)}
                        >
                          Réinitialiser le filtre
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Affichage des étudiants */}
                  {isLoading && (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-3"></div>
                      <p className="text-sm text-gray-600">Chargement des étudiants...</p>
                    </div>
                  )}

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-red-900">Erreur</p>
                          <p className="text-sm text-red-700">{error}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {!isLoading && !error && etudiants.length > 0 && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <h4 className="font-bold text-green-900 mb-3">
                        {etudiants.length} étudiant(s) inscrit(s) pour {selectedFilters[formation.name]}
                      </h4>
                      <div className="space-y-2 max-h-96 overflow-y-auto">
                        {etudiants.map((etudiant, idx) => (
                          <div key={idx} className="bg-white p-3 rounded border">
                            <p className="font-semibold">{etudiant.nom_complet}</p>
                            <div className="text-sm text-gray-600 mt-1">
                              {etudiant.diplome && <span>• {etudiant.diplome}</span>}
                              {etudiant.date_validation && (
                                <span className="ml-3">• Validé le {etudiant.date_validation}</span>
                              )}
                              {etudiant.sous_filiere && (
                                <span className="ml-3">• {etudiant.sous_filiere}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {!isLoading && !error && selectedFilters[formation.name] && etudiants.length === 0 && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center mb-6">
                      <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Aucun étudiant trouvé pour cette année</p>
                    </div>
                  )}

                  {/* Spécialités avec leurs modules */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg mb-4">Spécialités et modules :</h4>
                    {formation.specialites.map((specialite, specIndex) => (
                      <div key={specIndex} className="border rounded-lg">
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg font-semibold">{specialite.nom}</span>
                          <span className="text-2xl">{isOpen ? '−' : '+'}</span>
                        </button>
                        
                        {isOpen && (
                          <div className="p-6 border-t">
                            <h5 className="font-bold mb-3 text-blue-600">Modules enseignés :</h5>
                            <div className="grid md:grid-cols-2 gap-2">
                              {specialite.modules.map((module, mIdx) => (
                                <div key={mIdx} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                                  <span className="text-sm">{module}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Débouchés */}
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-bold mb-3">Débouchés professionnels :</h4>
                    <div className="flex flex-wrap gap-2">
                      {formation.debouches.map((debouche, dIdx) => (
                        <span key={dIdx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {debouche}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ateliers Pratiques */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Ateliers Pratiques</h2>
              <p className="text-xl opacity-90">Formations courtes avec accompagnement entrepreneurial</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {ateliersPratiques.map((atelier, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-sm rounded-lg p-6 text-gray-800">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">{atelier.groupe}</h3>
                    <p className="text-sm text-gray-600 mb-1">{atelier.duree}</p>
                    <p className="font-bold text-purple-600">Inscription : {atelier.inscription}</p>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    {atelier.packs.map((pack, pIdx) => (
                      <div key={pIdx} className="bg-gray-100 rounded-lg p-4">
                        <h4 className="font-bold mb-2 text-blue-600">Pack {pIdx + 1}: {pack.nom}</h4>
                        <ul className="space-y-1">
                          {pack.activites.map((activite, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                              <span className="text-sm">{activite}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bonus */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Bonus Offerts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bonusOfferts.map((bonus, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-transform">
                  <Laptop className="w-12 h-12 mx-auto mb-3 text-purple-300" />
                  <p className="font-semibold text-lg">{bonus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Commencer Votre Formation ?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={handleInscription}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              S'inscrire Maintenant
            </button>
            <a 
              href="https://wa.me/237677401841" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors inline-block text-lg"
            >
              Contactez-nous sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CentreFormation;