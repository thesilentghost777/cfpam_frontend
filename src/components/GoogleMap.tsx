import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

// Coordonnées d'Ekonou, Yaoundé (approximatives)
const center = {
  lat: 3.8667,
  lng: 11.5167,
};

const GoogleMapComponent = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('google_maps_key') || '');
  const [tempKey, setTempKey] = useState('');

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const handleSaveKey = () => {
    localStorage.setItem('google_maps_key', tempKey);
    setApiKey(tempKey);
  };

  if (!apiKey) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Configuration Google Maps</h3>
          <p className="text-muted-foreground mb-4">
            Pour afficher la carte, veuillez entrer votre clé API Google Maps.
            <a
              href="https://developers.google.com/maps/documentation/javascript/get-api-key"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline ml-1"
            >
              Obtenir une clé API
            </a>
          </p>
          <div className="flex gap-2">
            <Input
              type="password"
              placeholder="Entrez votre clé API Google Maps"
              value={tempKey}
              onChange={(e) => setTempKey(e.target.value)}
            />
            <Button onClick={handleSaveKey}>Enregistrer</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (loadError) {
    return (
      <div className="text-center p-8 text-destructive">
        Erreur de chargement de la carte. Veuillez vérifier votre clé API.
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="text-center p-8">
        <div className="animate-pulse">Chargement de la carte...</div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={15}
      options={{
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: true,
      }}
    >
      <Marker position={center} title="CFPAM GROUP - Ekonou, Yaoundé" />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
