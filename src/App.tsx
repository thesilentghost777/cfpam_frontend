import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/Layout/WhatsAppButton";
import Index from "./pages/Index";

const CentreFormation = lazy(() => import("./pages/CentreFormation"));
const AutoEcole = lazy(() => import("./pages/AutoEcole"));
const Cooperative = lazy(() => import("./pages/Cooperative"));
const Etudiants = lazy(() => import("./pages/Etudiants"));
const PreInscription = lazy(() => import("./pages/PreInscription"));
const Actualites = lazy(() => import("./pages/Actualites"));
const Contact = lazy(() => import("./pages/Contact"));
const Galerie = lazy(() => import("./pages/Galerie"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-[140px] md:pt-[120px]">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/centre-formation" element={<CentreFormation />} />
                <Route path="/auto-ecole" element={<AutoEcole />} />
                <Route path="/cooperative" element={<Cooperative />} />
                <Route path="/etudiants" element={<Etudiants />} />
                <Route path="/pre-inscription" element={<PreInscription />} />
                <Route path="/actualites" element={<Actualites />} />
                <Route path="/galerie" element={<Galerie />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
