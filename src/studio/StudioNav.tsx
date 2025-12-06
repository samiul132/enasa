import { useNavigate } from "react-router-dom";
import enasaLogo from "@/assets/enasa_logo.svg";

const StudioNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container-fluid mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          {/* Center: Logo */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-3 focus:outline-none hover:opacity-90 transition-opacity"
          >
            <img
              src={enasaLogo}
              alt="E-Nāsa Logo"
              className="w-10 h-10 select-none"
            />
            <span className="text-xl font-bold text-primary whitespace-nowrap select-none">
              E-Näsa
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default StudioNav;




/* IGNORE */