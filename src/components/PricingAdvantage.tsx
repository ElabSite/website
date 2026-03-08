import { Zap, Target, TrendingDown } from "lucide-react";

const PricingAdvantage = () => {
  return (
    <section className="py-24 bg-accent/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Ma différence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Des tarifs jusqu&apos;à 40% moins chers
            </h2>
            <p className="text-xl text-muted-foreground">
              Sans compromis sur la qualité ni le professionnalisme
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 justify-items-center text-center">
            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in w-full max-w-xl">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Technologies modernes &amp; processus optimisés
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                J&apos;utilise les derniers outils et frameworks de développement web. Cette approche moderne me permet de
                créer des sites performants en deux fois moins de temps, tout en garantissant une qualité supérieure et
                des performances optimales.
              </p>
            </div>

            <div
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in w-full max-w-xl"
              style={{ animationDelay: "100ms" }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Spécialisation = efficacité maximale
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                100% focalisé sur les sites vitrine et pages uniques, je maîtrise parfaitement ce domaine. Cette
                spécialisation me permet d&apos;avoir des processus rodés, des templates optimisés et une expertise
                pointue qui se traduit par des tarifs compétitifs.
              </p>
            </div>
          </div>

          <div
            className="bg-primary text-primary-foreground p-8 rounded-2xl text-center animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <TrendingDown className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <p className="text-xl font-semibold mb-2">
              Résultat : Des sites web professionnels à des prix justes
            </p>
            <p className="text-lg opacity-90">
              La qualité d&apos;une grande agence, sans les coûts de structure élevés
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl -z-0" />
    </section>
  );
};

export default PricingAdvantage;
