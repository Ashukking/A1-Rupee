
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-betting-dark">
      <div className="text-center glass-card p-12 max-w-md mx-auto">
        <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
          <span className="text-gold text-sm font-medium">404 Error</span>
        </div>
        <h1 className="text-6xl font-bold mb-4 text-gradient">Oops!</h1>
        <p className="text-white/70 text-xl mb-8">
          We couldn't find the page you're looking for.
        </p>
        <Button className="btn-primary" asChild>
          <a href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
