import enasaLogo from "@/assets/enasa_logo.svg";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import airlytiQLogo from "@/assets/AirlytiQ_White.svg";
import airlytiqText from "@/assets/airlytiq-text.png";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Documentation", "API"],
    Company: ["About Us", "Careers", "Press", "Contact"],
    Resources: ["Blog", "Case Studies", "Help Center", "Community"],
  };

  const linkUrls = {
    "Blog": "/blog",
    "Features": "#features",
    "Pricing": "#",
    "Documentation": "#",
    "API": "#",
    "About Us": "/about",
    "Careers": "#",
    "Press": "#",
    "Contact": "/contact",
    "Case Studies": "#",
    "Help Center": "#",
    "Community": "#",
  };

  return (
    <footer className="bg-brand-navy text-white py-10">
      <div className="container mx-auto px-4">
        {/* Grid: 5 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo Column */}
          <Link to="/" className="block">
            <div>
              <div className="flex items-center space-x-2 mb-4">
              <img src={airlytiQLogo} alt="AirlytiQ Icon" className="h-8 w-auto" />
            </div>
            <p className="text-white/60 text-sm">
              Making invisible risks visible through smell intelligence.
            </p>
            </div>
          </Link>

          {/* Dynamic Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={linkUrls[link] || "#"}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect Column (moved beside Resources) */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.linkedin.com/company/en%C3%A4sa/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition">
                <Youtube size={20} />
              </a>
            </div>
            <p className="text-white/60 text-sm">
              © 2024 <span className="font-brand tracking-wide">AirlytiQ</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;