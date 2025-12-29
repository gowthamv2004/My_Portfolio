import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VulnerabilityScanningDemo from "./pages/demos/VulnerabilityScanningDemo";
import NetworkTrafficDemo from "./pages/demos/NetworkTrafficDemo";
import VisionAIDemo from "./pages/demos/VisionAIDemo";
import WasteManagementDemo from "./pages/demos/WasteManagementDemo";
import CoffeeShopDemo from "./pages/demos/CoffeeShopDemo";
import FlightPriceDemo from "./pages/demos/FlightPriceDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/demos/vulnerability-scanning" element={<VulnerabilityScanningDemo />} />
          <Route path="/demos/network-traffic" element={<NetworkTrafficDemo />} />
          <Route path="/demos/vision-ai" element={<VisionAIDemo />} />
          <Route path="/demos/waste-management" element={<WasteManagementDemo />} />
          <Route path="/demos/coffee-shop" element={<CoffeeShopDemo />} />
          <Route path="/demos/flight-price" element={<FlightPriceDemo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
