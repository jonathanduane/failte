import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Home1 from "@/pages/home1";
import Home2 from "@/pages/home2";
import Home3 from "@/pages/home3";
import DABPlusPage from "@/pages/dab-plus";
import DABStationsPage from "@/pages/dab-stations";
import CoveragePage from "@/pages/coverage";
import NewsPage from "@/pages/news";
import BroadcastersPage from "@/pages/broadcasters";
import FeedbackPage from "@/pages/feedback";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home3} />
      <Route path="/home1" component={Home1} />
      <Route path="/home2" component={Home2} />
      <Route path="/home" component={Home} />
      <Route path="/dab-plus" component={DABPlusPage} />
      <Route path="/dab-stations" component={DABStationsPage} />
      <Route path="/coverage" component={CoveragePage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/broadcasters" component={BroadcastersPage} />
      <Route path="/feedback" component={FeedbackPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
