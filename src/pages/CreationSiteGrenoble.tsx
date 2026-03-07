import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, Globe, Search, Shield, Zap, MapPin, Clock, Star, Users, ArrowRight, Monitor, Smartphone, BarChart3, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Globe,
    title: "Site vitrine professionnel",
    description: "Un site internet sur mesure conçu pour valoriser votre activité auprès de la clientèle grenobloise et iséroise.",
  },
  {
    icon: Smartphone,
    title: "Design responsive & mobile-first",
    description: "Votre site s'adapte à tous les écrans pour capter les clients de Grenoble, que ce soit sur mobile, tablette ou desktop.",
  },
  {
    icon: Search,
    title: "Référencement local Grenoble",
    description: "Stratégie SEO locale pour positionner votre site en tête des résultats Google dans l'agglomération grenobloise et en Isère.",
  },
  {
    icon: Shield,
    title: "Sécurité & hébergement",
    description: "Certificat SSL, protection DDoS et hébergement haute performance pour un site rapide et sécurisé.",
  },
  {
    icon: BarChart3,
    title: "Analytics & conversion",
    description: "Suivi des performances avec Google Analytics, optimisation du taux de conversion et reporting mensuel.",
  },
  {
    icon: Lock,
    title: "Conformité RGPD",
    description: "Site 100% conforme au RGPD : mentions légales, politique de cookies et formulaires sécurisés.",
  },
];

const advantages = [
  "Proximité avec les entreprises de l'agglomération grenobloise",
  "Expertise du marché local Isère & Rhône-Alpes",
  "Accompagnement dédié du brief au lancement",
  "Tarifs compétitifs sans intermédiaire",
  "Livraison rapide en 7 à 21 jours",
];

const faqs = [
  {
    question: "Quel est le prix d'un site internet à Grenoble ?",
    answer: "Mes offres démarrent à 190€ TTC pour une page unique professionnelle et à 390€ TTC pour un site vitrine complet (5 pages). Mes tarifs sont parmi les plus compétitifs de l'agglomération grenobloise.",
  },
  {
    question: "En combien de temps mon site sera-t-il en ligne à Grenoble ?",
    answer: "Je livre votre site en 7 jours (page unique), 15 jours (site vitrine standard) ou 21 jours (site vitrine + mini-boutique).",
  },
  {
    question: "Comment être bien référencé sur Google à Grenoble ?",
    answer: "J'applique une stratégie SEO locale complète : optimisation des balises, données structurées, Google Business Profile, contenu ciblé sur Grenoble et l'Isère, et maillage interne optimisé.",
  },
  {
    question: "Assurez-vous la maintenance des sites internet ?",
    answer: "Oui, je propose des forfaits de maintenance dès 29€/mois : mises à jour, sauvegardes, monitoring 24/7 et support technique réactif pour les entreprises grenobloises.",
  },
  {
    question: "Quels secteurs d'activité accompagnez-vous à Grenoble ?",
    answer: "Je travaille avec tous les professionnels : startups, PME, artisans, professions libérales, commerces et associations de Grenoble, Échirolles, Saint-Martin-d'Hères, Meylan et toute l'Isère.",
  },
];

const localKeywords = [
  "création site internet Grenoble",
  "agence web Grenoble",
  "développeur web Isère",
  "site vitrine Grenoble",
  "webmaster Grenoble",
  "référencement SEO Grenoble",
  "création site professionnel Isère",
  "site internet entreprise Grenoble",
];

const CreationSiteGrenoble = () => {
  useEffect(() => {
    document.title = "Création site internet Grenoble | Agence web Isère | Elab'Site";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Création de site internet à Grenoble par une agence web. Sites vitrine, SEO local Isère, design responsive. Devis gratuit sous 24h."
      );
    }
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Elab'Site - Création site internet Grenoble",
    description: "Agence web spécialisée dans la création de sites internet professionnels à Grenoble, Isère. Sites vitrine, référencement SEO local et maintenance.",
    url: "https://www.elabsite.fr/creation-site-internet-grenoble",
    telephone: "+336-70-45-32-30",
    email: "contact@elabsite.fr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Grenoble",
      addressRegion: "Isère",
      postalCode: "38000",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "45.1885",
      longitude: "5.7245",
    },
    areaServed: [
      { "@type": "City", name: "Grenoble" },
      { "@type": "City", name: "Échirolles" },
      { "@type": "City", name: "Saint-Martin-d'Hères" },
      { "@type": "City", name: "Meylan" },
      { "@type": "AdministrativeArea", name: "Isère" },
    ],
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        <header className="py-24 bg-accent/20">
          <div className="container mx-auto px-4 animate-fade-in">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4" />
                Agence web pour Grenoble, Isère
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Création de site internet à <span className="text-primary">Grenoble</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Votre <strong>agence web pour Grenoble</strong> crée des sites vitrine professionnels, 
                optimisés pour le <strong>référencement local en Isère</strong>. Performance, sécurité 
                et design sur mesure pour votre entreprise grenobloise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/contact">
                    Demander un devis gratuit
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                  <Link to="/tarifs#simulateur">Estimer le prix</Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              {[
                //{ icon: Users, value: "50+", label: "Clients Rhône-Alpes" },
                { icon: Star, value: "5/5", label: "Satisfaction client" },
                { icon: Clock, value: "7 jours", label: "Livraison express" },
                { icon: Monitor, value: "100%", label: "Sites responsive" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <stat.icon className="w-8 h-8 text-primary mb-2" />
                  <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" aria-labelledby="services-grenoble">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="services-grenoble" className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Mes services de création web pour Grenoble
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Une offre complète pour les entreprises grenobloises : conception, développement, 
                référencement local et maintenance de votre site internet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service) => (
                <Card key={service.title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30" aria-labelledby="pourquoi-grenoble">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="pourquoi-grenoble" className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Pourquoi faire appel à mon expertise pour Grenoble ?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Mon <strong>expertise du marché grenoblois</strong> et ma connaissance de l'écosystème 
                  entrepreneurial isérois me permettent de créer des sites parfaitement adaptés 
                  à votre cible locale.
                </p>
                <ul className="space-y-4">
                  {advantages.map((adv) => (
                    <li key={adv} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Zones desservies</h3>
                <p className="text-muted-foreground mb-6">
                  J'interviens dans toute l'<strong>Isère</strong> et la région Rhône-Alpes :
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Grenoble (38000)", "Échirolles", "Saint-Martin-d'Hères", "Meylan",
                    "Fontaine", "Seyssinet-Pariset", "Voiron", "Bourgoin-Jallieu",
                    "Vienne", "Villefontaine",
                  ].map((city) => (
                    <div key={city} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      {city}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">…et bien d'autres villes en Isère et alentours.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" aria-labelledby="tarifs-grenoble">
          <div className="container mx-auto px-4 text-center">
            <h2 id="tarifs-grenoble" className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Tarifs création site internet Grenoble
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              Des prix transparents, adaptés aux entreprises grenobloises, sans surprise ni frais cachés.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { name: "Page Unique", price: "190", desc: "Auto-entrepreneurs & indépendants" },
                { name: "Site Vitrine", price: "390", desc: "PME & commerces grenoblois", popular: true },
                { name: "Site Vitrine+", price: "890", desc: "Entreprises & startups" },
              ].map((plan) => (
                <Card key={plan.name} className={`text-center p-6 ${plan.popular ? "border-2 border-primary shadow-lg" : ""}`}>
                  {plan.popular && <div className="text-xs font-semibold text-primary mb-2">★ POPULAIRE</div>}
                  <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.desc}</p>
                  <div className="text-4xl font-bold text-foreground mb-1">{plan.price}€</div>
                  <span className="text-sm text-muted-foreground">TTC</span>
                </Card>
              ))}
            </div>
            <Button size="lg" className="mt-8 text-lg px-8 py-6" asChild>
              <Link to="/tarifs">Voir tous les tarifs détaillés</Link>
            </Button>
          </div>
        </section>

        <section className="py-20 bg-secondary/30" aria-labelledby="faq-grenoble">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 id="faq-grenoble" className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
                Questions fréquentes – Création site web Grenoble
              </h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group bg-card rounded-xl p-6 shadow-sm">
                    <summary className="font-bold text-foreground cursor-pointer list-none flex items-center justify-between">
                      <h3 className="text-lg pr-4">{faq.question}</h3>
                      <span className="text-primary text-2xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12" aria-label="Mots-clés liés">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {localKeywords.map((kw) => (
                <span key={kw} className="bg-secondary/50 text-muted-foreground text-xs px-3 py-1 rounded-full">{kw}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lancez votre site internet à Grenoble dès maintenant
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Obtenez un devis gratuit et personnalisé pour votre projet web. Réponse sous 48h garantie.
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

export default CreationSiteGrenoble;
