import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "@/lib/i18n";
import Index from "./pages/Index";
import ToolPlaceholder from "./pages/ToolPlaceholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const toolRoutes = [
  "/numerology", "/tarot", "/bazi", "/ziwei", "/name", "/zodiac",
  "/auspicious", "/calendar", "/daily", "/match", "/palm", "/annual",
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <I18nProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/astral-compass">
          <Routes>
            <Route path="/" element={<Index />} />
            {toolRoutes.map((r) => (
              <Route key={r} path={r} element={<ToolPlaceholder />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </I18nProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
