import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Elab&apos;Site</h3>
            <p className="text-muted-foreground mb-4">
              Agence web à Chambéry pour des sites professionnels, sécurisés et optimisés.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Challes-les-Eaux, Savoie</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+33670453230"
                  className="hover:text-primary transition-colors"
                >
                  +33 6 70 45 32 30
                </a>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:contact@elabsite.fr"
                  className="hover:text-primary transition-colors"
                >
                  contact@elabsite.fr
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-foreground">Services</h4>
            <nav className="space-y-2">
              <Link
                to="/creation-site-internet-chambery"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Création site Chambéry
              </Link>
              <Link
                to="/creation-site-internet-grenoble"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Création site Grenoble
              </Link>
              <Link
                to="/creation-site-internet-annecy"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Création site Annecy
              </Link>
              <Link
                to="/tarifs"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Tarifs
              </Link>

              {/*
              <Link
                to="/realisations"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Réalisations
              </Link>
              */}
            </nav>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Elab&apos;Site. Tous droits réservés.</p>
          <nav className="flex gap-4">
            <Link to="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <Link
              to="/politique-de-confidentialite"
              className="hover:text-primary transition-colors"
            >
              Politique de confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
