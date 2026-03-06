import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à lancer votre projet web ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-moi pour un devis gratuit et personnalisé. Ensemble, créons le site
            qui fera la différence pour votre activité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              <Link to="/contact">Demander un devis</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground bg-primary-foreground text-primary hover:bg-transparent hover:text-primary-foreground text-lg px-8 py-6"
            >
              <Link to="/tarifs#simulateur">Estimer le prix</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
