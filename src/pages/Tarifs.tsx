import { Check, Shield, Wrench, Search, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PriceSimulator from "@/components/PriceSimulator";
import { useEffect } from "react";

const plans = [
  {
    name: "Page Unique",
    price: "190",
    description: "Idéal pour les indépendants et auto-entrepreneurs",
    features: [
      "1 page professionnelle responsive",
      "Design sur mesure",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Hébergement 1 an inclus",
      "Certificat SSL inclus",
      "Mise en ligne sous 7 jours",
    ],
    popular: false,
  },
  {
    name: "Site Vitrine",
    price: "390",
    description: "Pour les PME et artisans qui veulent se démarquer",
    features: [
      "Jusqu'à 5 pages personnalisées",
      "Design premium sur mesure",
      "Formulaire de contact avancé",
      "Optimisation SEO complète",
      "Hébergement 1 an inclus",
      "Certificat SSL inclus",
      "Intégration Google Maps",
      "Intégration réseaux sociaux",
      "Mise en ligne sous 15 jours",
    ],
    popular: true,
  },
  {
    name: "Site Vitrine + mini-boutique",
    price: "890",
    description: "Pour les entreprises souhaitant vendre ses produits",
    features: [
      "Jusqu'à 5 pages personnalisées",
      "Boutique avec 10 produits max",
      "Design premium sur mesure",
      "Formulaire de contact avancé",
      "Optimisation SEO complète",
      "Hébergement 1 an inclus",
      "Certificat SSL inclus",
      "Intégration Google Maps",
      "Intégration réseaux sociaux",
      "Mise en ligne sous 15 jours",
    ],
    popular: false,
  },
];

const maintenancePlans = [
  {
    name: "Essentiel",
    price: "19",
    period: "/mois",
    features: [
      "Mises à jour de sécurité",
      "Sauvegardes hebdomadaires",
      "Surveillance et maintien en ligne",
      "Correction de bugs",
    ],
  },
  {
    name: "Confort",
    price: "59",
    period: "/mois",
    features: [
      "Tout du plan Essentiel",
      "Modifications mineures (2/mois)",
      "Rapport de performance mensuel",
    ],
  },
  {
    name: "Premium",
    price: "99",
    period: "/mois",
    features: [
      "Tout du plan Confort",
      "Modifications mineures (5/mois)",
      "Modifications majeures (2/an)",
      "Sauvegardes quotidiennes",
      "Optimisation SEO continue",
      "Priorité de traitement",
    ],
  },
];

const Tarifs = () => {
  useEffect(() => {
    document.title = "Tarif site internet Chambéry | Prix création site web | Elab'Site";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Découvrez mes tarifs pour la création de site internet à Chambéry. Sites vitrine à partir de 190€ TTC, maintenance dès 19€/mois. Devis gratuit."
      );
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-24 bg-accent/20">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Tarifs transparents
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
              Tarif site internet à Chambéry
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des prix justes et compétitifs pour votre site web professionnel en Savoie.
              Jusqu'à 40% moins cher que les agences traditionnelles.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Création de site web
              </h2>
              <p className="text-muted-foreground text-lg">
                Choisissez la formule adaptée à vos besoins
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative text-center transition-all duration-300 hover:shadow-xl ${
                    plan.popular
                      ? "border-2 border-primary shadow-lg scale-105"
                      : "hover:-translate-y-1"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Le plus populaire
                    </div>
                  )}
                  <CardHeader className="items-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-5xl font-bold text-foreground">{plan.price}€</span>
                      <span className="text-muted-foreground ml-1">TTC</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-left mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Demander un devis
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <PriceSimulator />

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Wrench className="w-4 h-4" />
                Maintenance fonctionnelle
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Forfaits de maintenance
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Gardez votre site performant, sécurisé et à jour avec mes forfaits de maintenance mensuels.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {maintenancePlans.map((plan) => (
                <Card key={plan.name} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="items-center">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">{plan.price}€</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-left mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full">
                      Souscrire
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Pourquoi mes tarifs sont plus compétitifs ?
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Zap,
                  title: "Technologies modernes",
                  desc: "Des outils dernière génération qui réduisent le temps de développement sans sacrifier la qualité.",
                },
                {
                  icon: Search,
                  title: "Spécialisation",
                  desc: "100% focalisé sur les sites vitrine, j'ai des processus rodés et une expertise pointue.",
                },
                {
                  icon: Shield,
                  title: "Structure légère",
                  desc: "Pas de bureaux luxueux ni d'intermédiaires : les économies sont directement répercutées sur mes prix.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Obtenez votre devis gratuit
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contactez-moi pour discuter de votre projet. Devis personnalisé sous 48h.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
            <Link to="/contact">Demander un devis gratuit</Link>
            </Button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Tarifs;
