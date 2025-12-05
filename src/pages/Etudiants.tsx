import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, GraduationCap, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface Etudiant {
  nom_complet: string;
  filiere: string;
  sous_filiere?: string;
  diplome?: string;
  type_permis?: string;
  date_validation?: string;
  localisation?: string;
}

const Etudiants = () => {
  const [etudiants, setEtudiants] = useState<Etudiant[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState<"entite" | "filiere">("entite");
  const [filterValue, setFilterValue] = useState("");

  const API_URL = "https://cfpam-api.supahuman.site/api";

  const loadEtudiants = async () => {
    setLoading(true);
    try {
      let endpoint = "";
      
      if (filterType === "entite" && filterValue) {
        endpoint = `${API_URL}/cfpam/etudiants/entite/${filterValue}`;
      } else if (filterType === "filiere" && filterValue) {
        endpoint = `${API_URL}/cfpam/etudiants/filiere/${filterValue}`;
      }

      if (!endpoint) {
        setEtudiants([]);
        setLoading(false);
        return;
      }

      const response = await fetch(endpoint);
      
      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || "Erreur lors de la récupération des données");
      }

      // Pour l'entité, les données sont dans result.data (tableau simple)
      // Pour la filière, les données sont groupées, on doit les aplatir
      let etudiantsData: Etudiant[] = [];
      
      if (filterType === "entite") {
        etudiantsData = result.data || [];
      } else {
        // Aplatir la structure groupée pour la filière
        const grouped = result.data || {};
        Object.values(grouped).forEach((sousFiliere: any) => {
          Object.values(sousFiliere).forEach((diplomeGroup: any) => {
            if (diplomeGroup.etudiants) {
              etudiantsData.push(...diplomeGroup.etudiants);
            }
          });
        });
      }
      
      setEtudiants(etudiantsData);
      
      toast.success("Données chargées", {
        description: `${etudiantsData.length} étudiant(s) trouvé(s)`,
      });
      
    } catch (error) {
      console.error("Erreur:", error);
      setEtudiants([]);
      
      toast.error("Erreur de chargement", {
        description: error instanceof Error ? error.message : "Impossible de charger les données du serveur",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (filterValue) {
      loadEtudiants();
    } else {
      setEtudiants([]);
    }
  }, [filterType, filterValue]);

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Liste des Étudiants Validés
            </h1>
            <p className="text-lg text-gray-600">
              Consultez la liste des étudiants dont les inscriptions ont été validées
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8 shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Filtrer les étudiants
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Type de Filtre</label>
                  <Select 
                    onValueChange={(value: "entite" | "filiere") => {
                      setFilterType(value);
                      setFilterValue("");
                    }} 
                    defaultValue="entite"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entite">Par Entité</SelectItem>
                      <SelectItem value="filiere">Par Filière</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {filterType === "entite" ? "Entité" : "Filière"}
                  </label>
                  {filterType === "entite" ? (
                    <Select onValueChange={setFilterValue} value={filterValue}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une entité" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="centre_formation">Centre de Formation</SelectItem>
                        <SelectItem value="auto_ecole">Auto-École</SelectItem>
                        <SelectItem value="cooperative">Coopérative</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Select onValueChange={setFilterValue} value={filterValue}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une filière" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="secretariat">Secrétariat</SelectItem>
                        <SelectItem value="audiovisuel">Audiovisuel</SelectItem>
                        <SelectItem value="digital">Digital</SelectItem>
                        <SelectItem value="comptabilite">Comptabilité</SelectItem>
                        <SelectItem value="administration">Administration</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Chargement des données...</p>
            </div>
          ) : etudiants.length > 0 ? (
            <div className="grid gap-4">
              {etudiants.map((etudiant, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            {etudiant.nom_complet}
                          </h3>
                          <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-700">Filière:</span>
                              <span>{etudiant.filiere}</span>
                            </div>
                            
                           
                            
                            {etudiant.diplome && (
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-700">Diplôme:</span>
                                <span>{etudiant.diplome}</span>
                              </div>
                            )}
                            
                            {etudiant.type_permis && (
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-700">Type de permis:</span>
                                <span>{etudiant.type_permis}</span>
                              </div>
                            )}
                            
                           
                            
                            {etudiant.date_validation && (
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-700">Validé le:</span>
                                <span>{etudiant.date_validation}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Validé
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="shadow-lg border-0">
              <CardContent className="p-12 text-center">
                <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Aucun étudiant trouvé</h3>
                <p className="text-gray-600">
                  {filterValue 
                    ? "Aucun étudiant validé ne correspond à ce filtre" 
                    : "Sélectionnez un filtre pour afficher les étudiants"}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Info Box */}
          <Card className="mt-8 border-blue-200 bg-blue-50 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-blue-900">Note Importante</h3>
                  <p className="text-sm text-blue-800">
                    Cette liste affiche uniquement les étudiants dont les inscriptions ont été
                    validées par l'administration. Pour toute question concernant votre inscription,
                    veuillez contacter directement le centre CFPAM.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Etudiants;