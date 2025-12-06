import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Overview from "./pages/Overview";
import Dashboard from "./pages/Dashboard";
import MobileApp from "./pages/MobileApp";
import Products from "./pages/Products";
import ProductOverview from "./pages/ProductOverview";
import ProductDetail from "./pages/ProductDetail";
import ProductConfigurator from "./pages/ProductConfigurator";
import FoodBeverage from "./pages/solutions/FoodBeverage";
import IndustrialSafety from "./pages/solutions/IndustrialSafety";
import Environmental from "./pages/solutions/Environmental";
import Healthcare from "./pages/solutions/Healthcare";
import Security from "./pages/solutions/Security";
import Blog from "./pages/Blog";
import CheeseProduction from "./pages/blog/CheeseProduction";
import BreweryFermentation from "./pages/blog/BreweryFermentation";
import CannabisDetection from "./pages/blog/CannabisDetection";
import AmmoniumNitrateDetection from "./pages/blog/AmmoniumNitrateDetection";
import ListeriaOutbreak from "./pages/blog/ListeriaOutbreak";
import HospitalVOCMonitoring from "./pages/blog/HospitalVOCMonitoring";
import ChemicalLeakPrevention from "./pages/blog/ChemicalLeakPrevention";
import AirportSecurityThreats from "./pages/blog/AirportSecurityThreats";
import PotteryKilnMonitoring from "./pages/blog/PotteryKilnMonitoring";
import PoultryBirdFlu from "./pages/blog/PoultryBirdFlu";
import DairyCowHealth from "./pages/blog/DairyCowHealth";
import SeafoodFreshness from "./pages/blog/SeafoodFreshness";
import MeatFreshness from "./pages/blog/MeatFreshness";
import NotFound from "./pages/NotFound";
import Login from './pages/Login';
import Navigation from './components/Navigation';
import LiveStudio from './studio/LiveStudio';
import ProtectedRoute from "./components/ProtectedRoute";
import MoldDetection from "./pages/blog/MoldDetection";
import Studionav from "./studio/StudioNav";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/overview" element={<ProductOverview />} />
          <Route path="/product/:handle" element={<ProductDetail />} />
          <Route path="/configurator" element={<ProductConfigurator />} />
          <Route path="/solutions/food-beverage" element={<FoodBeverage />} />
          <Route path="/solutions/industrial-safety" element={<IndustrialSafety />} />
          <Route path="/solutions/environmental" element={<Environmental />} />
          <Route path="/solutions/healthcare" element={<Healthcare />} />
          <Route path="/solutions/security" element={<Security />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/cheese-production" element={<CheeseProduction />} />
          <Route path="/blog/brewery-fermentation" element={<BreweryFermentation />} />
          <Route path="/blog/cannabis-detection" element={<CannabisDetection />} />
          <Route path="/blog/ammonium-nitrate-detection" element={<AmmoniumNitrateDetection />} />
          <Route path="/blog/listeria-outbreak" element={<ListeriaOutbreak />} />
          <Route path="/blog/hospital-voc-monitoring" element={<HospitalVOCMonitoring />} />
          <Route path="/blog/chemical-leak-prevention" element={<ChemicalLeakPrevention />} />
          <Route path="/blog/airport-security-threats" element={<AirportSecurityThreats />} />
          <Route path="/blog/pottery-kiln-monitoring" element={<PotteryKilnMonitoring />} />
          <Route path="/blog/poultry-bird-flu-detection" element={<PoultryBirdFlu />} />
          <Route path="/blog/dairy-cow-health-monitoring" element={<DairyCowHealth />} />
          <Route path="/blog/mold-detection" element={<MoldDetection />} />
          <Route path="/blog/seafood-freshness-monitoring" element={<SeafoodFreshness />} />
          <Route path="/blog/meat-freshness-monitoring" element={<MeatFreshness />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/studio/*" element={<Studionav />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/live-studio" 
            element={
              <ProtectedRoute>
                <LiveStudio />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
