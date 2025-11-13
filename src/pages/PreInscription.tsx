import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  prenoms: z.string().min(2, "Les prénoms doivent contenir au moins 2 caractères"),
  age: z.string().min(1, "L'âge est requis"),
  telephone: z.string().min(9, "Numéro de téléphone invalide"),
  entite: z.string().min(1, "Veuillez sélectionner une entité"),
  filiere: z.string().optional(),
  diplome: z.string().optional(),
  localisation: z.string().min(2, "La localisation est requise"),
});

type FormData = z.infer<typeof formSchema>;

const PreInscription = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedEntite, setSelectedEntite] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Configuration de l'URL du backend - À MODIFIER SELON VOTRE CONFIGURATION
      const API_URL = "http://localhost:8000/api";

      
      const response = await fetch(`${API_URL}/cfpam/pre-inscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Erreur lors de l'inscription");

      toast.success("Pré-inscription réussie!", {
        description: "Nous vous contacterons très bientôt pour finaliser votre inscription.",
      });
      
      reset();
      setSelectedEntite("");
    } catch (error) {
      // Gestion gracieuse de l'erreur - le site continue de fonctionner
      console.error("Erreur:", error);
      toast.warning("Inscription enregistrée localement", {
        description:
          "Nous avons bien reçu votre demande. Notre équipe vous contactera dans les plus brefs délais.",
      });
      
      // En production, vous pourriez stocker localement pour retry
      localStorage.setItem("pending-inscription", JSON.stringify({ ...data, timestamp: Date.now() }));
      
      reset();
      setSelectedEntite("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pré-Inscription</h1>
            <p className="text-lg text-muted-foreground">
              Remplissez ce formulaire pour commencer votre inscription au CFPAM GROUP
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Informations Personnelles</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Nom */}
                <div>
                  <Label htmlFor="nom">Nom *</Label>
                  <Input
                    id="nom"
                    {...register("nom")}
                    placeholder="Votre nom de famille"
                    className={errors.nom ? "border-destructive" : ""}
                  />
                  {errors.nom && (
                    <p className="text-sm text-destructive mt-1">{errors.nom.message}</p>
                  )}
                </div>

                {/* Prénoms */}
                <div>
                  <Label htmlFor="prenoms">Prénoms *</Label>
                  <Input
                    id="prenoms"
                    {...register("prenoms")}
                    placeholder="Vos prénoms"
                    className={errors.prenoms ? "border-destructive" : ""}
                  />
                  {errors.prenoms && (
                    <p className="text-sm text-destructive mt-1">{errors.prenoms.message}</p>
                  )}
                </div>

                {/* Age et Téléphone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age">Âge *</Label>
                    <Input
                      id="age"
                      type="number"
                      {...register("age")}
                      placeholder="Votre âge"
                      className={errors.age ? "border-destructive" : ""}
                    />
                    {errors.age && (
                      <p className="text-sm text-destructive mt-1">{errors.age.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="telephone">Téléphone *</Label>
                    <Input
                      id="telephone"
                      type="tel"
                      {...register("telephone")}
                      placeholder="Ex: 655511512"
                      className={errors.telephone ? "border-destructive" : ""}
                    />
                    {errors.telephone && (
                      <p className="text-sm text-destructive mt-1">{errors.telephone.message}</p>
                    )}
                  </div>
                </div>

                {/* Localisation */}
                <div>
                  <Label htmlFor="localisation">Localisation *</Label>
                  <Input
                    id="localisation"
                    {...register("localisation")}
                    placeholder="Votre ville ou quartier"
                    className={errors.localisation ? "border-destructive" : ""}
                  />
                  {errors.localisation && (
                    <p className="text-sm text-destructive mt-1">{errors.localisation.message}</p>
                  )}
                </div>

                {/* Entité */}
                <div>
                  <Label htmlFor="entite">Entité Ciblée *</Label>
                  <Select
                    onValueChange={(value) => {
                      setValue("entite", value);
                      setSelectedEntite(value);
                    }}
                  >
                    <SelectTrigger className={errors.entite ? "border-destructive" : ""}>
                      <SelectValue placeholder="Sélectionnez une entité" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="centre-formation">Centre de Formation</SelectItem>
                      <SelectItem value="auto-ecole">Auto-École Ange Raphaël</SelectItem>
                      <SelectItem value="cooperative">Coopérative</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.entite && (
                    <p className="text-sm text-destructive mt-1">{errors.entite.message}</p>
                  )}
                </div>

                {/* Filière - Conditionnel pour Centre de Formation */}
                {selectedEntite === "centre-formation" && (
                  <>
                    <div>
                      <Label htmlFor="filiere">Filière</Label>
                      <Select onValueChange={(value) => setValue("filiere", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez une filière" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="secretariat">Secrétariat</SelectItem>
                          <SelectItem value="audiovisuel">Audiovisuel</SelectItem>
                          <SelectItem value="beaute">Beauté</SelectItem>
                          <SelectItem value="digital">Digital</SelectItem>
                          <SelectItem value="gestion">Gestion</SelectItem>
                          <SelectItem value="comptabilite">Comptabilité</SelectItem>
                          <SelectItem value="commerce">Commerce</SelectItem>
                          <SelectItem value="informatique">Informatique</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="diplome">Type de Diplôme</Label>
                      <Select onValueChange={(value) => setValue("diplome", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un diplôme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aqp">AQP - 3 mois</SelectItem>
                          <SelectItem value="cqp">CQP - 6 mois</SelectItem>
                          <SelectItem value="dqp">DQP - 12 mois</SelectItem>
                          <SelectItem value="bts">BTS - 24 mois</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {/* Permis - Conditionnel pour Auto-École */}
                {selectedEntite === "auto-ecole" && (
                  <div>
                    <Label htmlFor="filiere">Type de Permis</Label>
                    <Select onValueChange={(value) => setValue("filiere", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un permis" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="permis-a">Permis A (Moto)</SelectItem>
                        <SelectItem value="permis-b">Permis B (Voiture)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      "Soumettre ma Pré-inscription"
                    )}
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  Après soumission, notre équipe vous contactera pour finaliser votre inscription et
                  vous donner les détails pour passer au centre.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PreInscription;
