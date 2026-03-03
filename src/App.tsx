import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tarifs from "./pages/Tarifs";
import Realisations from "./pages/Realisations";
import CreationSiteChambery from "./pages/CreationSiteChambery";
import CreationSiteGrenoble from "./pages/CreationSiteGrenoble";
import CreationSiteAnnecy from "./pages/CreationSiteAnnecy";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/creation-site-internet-chambery" element={<CreationSiteChambery />} />
          <Route path="/creation-site-internet-grenoble" element={<CreationSiteGrenoble />} />
          <Route path="/creation-site-internet-annecy" element={<CreationSiteAnnecy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
