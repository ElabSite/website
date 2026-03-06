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
    description: "Un site web sur mesure qui reflète votre image de marque et met en valeur vos services auprès de votre clientèle chambérienne.",
  },
  {
    icon: Smartphone,
    title: "Design responsive & mobile-first",
    description: "Votre site s'adapte parfaitement à tous les écrans : smartphone, tablette et ordinateur pour toucher tous vos clients à Chambéry.",
  },
  {
    icon: Search,
    title: "Référencement local Chambéry",
    description: "Optimisation SEO locale pour apparaître en haut des résultats Google quand vos clients cherchent vos services en Savoie.",
  },
  {
    icon: Shield,
    title: "Sécurité & performance",
    description: "Certificat SSL, protection contre les attaques, temps de chargement optimisé pour une expérience utilisateur irréprochable.",
  },
  {
    icon: BarChart3,
    title: "Suivi & analytics",
    description: "Intégration Google Analytics et Search Console pour suivre vos visiteurs et optimiser votre visibilité en continu.",
  },
  {
    icon: Lock,
    title: "RGPD & conformité",
    description: "Site conforme au RGPD avec mentions légales, politique de confidentialité et gestion des cookies intégrées.",
  },
];

const advantages = [
  "Agence web local implantée à Chambéry",
  "Connaissance du tissu économique savoyard",
  "Accompagnement personnalisé de A à Z",
  "Tarifs jusqu'à 40% inférieurs aux grandes agences",
  "Sites livrés en 7 à 21 jours",
];

const faqs = [
  {
    question: "Combien coûte la création d'un site internet à Chambéry ?",
    answer: "Mes tarifs commencent à 190€ TTC pour une page unique et à partir de 390€ TTC pour un site vitrine complet jusqu'à 5 pages. Je propose des prix compétitifs grâce à ma structure légère et mes outils modernes.",
  },
  {
    question: "Combien de temps faut-il pour créer un site web à Chambéry ?",
    answer: "Selon la formule choisie, votre site peut-être livré en 7 jours (page unique), 15 jours (site vitrine) ou 21 jours (site vitrine + mini-boutique).",
  },
  {
    question: "Mon site sera-t-il bien référencé sur Google à Chambéry ?",
    answer: "Oui, tous mes sites incluent une optimisation SEO locale ciblant Chambéry et la Savoie : balises meta, données structurées, contenu optimisé, inscription Google Business Profile et stratégie de mots-clés locaux.",
  },
  {
    question: "Proposez-vous la maintenance du site après la création ?",
    answer: "Absolument. Je propose des forfaits de maintenance à partir de 29€/mois incluant mises à jour de sécurité, sauvegardes, monitoring et support technique.",
  },
  {
    question: "Quels types d'entreprises accompagnez-vous à Chambéry ?",
    answer: "J'accompagne tous les professionnels : artisans, commerçants, professions libérales, PME, associations et auto-entrepreneurs de Chambéry et ses environs (Aix-les-Bains, Albertville, La Motte-Servolex).",
  },
];

const localKeywords = [
  "création site internet Chambéry",
  "agence web Chambéry",
  "développeur web Savoie",
  "site vitrine Chambéry",
  "webmaster Chambéry",
  "référencement SEO Chambéry",
  "création site professionnel Savoie",
  "site internet artisan Chambéry",
];

const CreationSiteChambery = () => {
  useEffect(() => {
    document.title = "Création site internet Chambéry | Agence web Savoie | Elab'Site";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Création de site internet à Chambéry par une agence web local. Sites vitrine professionnels, référencement SEO local, design responsive. Devis gratuit sous 24h."
      );
    }
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Elab'Site - Création site internet Chambéry",
    description: "Agence web spécialisée dans la création de sites internet professionnels à Chambéry, Savoie. Sites vitrine, référencement SEO local et maintenance.",
    url: "https://www.elabsite.fr/creation-site-internet-chambery",
    telephone: "+33-XXX-XXX-XXX",
    email: "contact@elabsite.fr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chambéry",
      addressRegion: "Savoie",
      postalCode: "73000",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "45.5646",
      longitude: "5.9178",
    },
    areaServed: [
      { "@type": "City", name: "Chambéry" },
      { "@type": "City", name: "Aix-les-Bains" },
      { "@type": "City", name: "Albertville" },
      { "@type": "City", name: "La Motte-Servolex" },
      { "@type": "AdministrativeArea", name: "Savoie" },
    ],
    priceRange: "€€",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [],
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
                Agence web à Chambéry, Savoie
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Création de site internet à <span className="text-primary">Chambéry</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Votre <strong>agence web à Chambéry</strong> conçoit des sites vitrine professionnels, 
                optimisés pour le <strong>référencement local en Savoie</strong>. Design sur mesure, 
                performance et sécurité garantis.
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
                //{ icon: Users, value: "50+", label: "Clients en Savoie" },
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

        <section className="py-20" aria-labelledby="services-chambery">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="services-chambery" className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Mes services de création web à Chambéry
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Une offre complète pour votre présence en ligne en Savoie : du design à l'hébergement, 
                en passant par le référencement local.
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

        <section className="py-20 bg-secondary/30" aria-labelledby="pourquoi-chambery">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="pourquoi-chambery" className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Pourquoi choisir mon expertise web à Chambéry ?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  En tant qu'<strong>agence web local à Chambéry</strong>, je comprends les besoins 
                  spécifiques des entreprises savoyardes. Ma proximité géographique me permet 
                  d'offrir un accompagnement personnalisé et réactif.
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
                  J'interviens dans toute la <strong>Savoie</strong> et les départements limitrophes :
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Chambéry (73000)", "Aix-les-Bains", "Albertville", "La Motte-Servolex",
                    "Cognin", "Jacob-Bellecombette", "Barberaz", "Montmélian",
                    "Saint-Jean-de-Maurienne", "La Ravoire",
                  ].map((city) => (
                    <div key={city} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      {city}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">…et bien d'autres villes en Savoie et alentours.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" aria-labelledby="tarifs-chambery">
          <div className="container mx-auto px-4 text-center">
            <h2 id="tarifs-chambery" className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Tarifs création site internet Chambéry
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              Des prix transparents et compétitifs, adaptés aux budgets des entreprises de Chambéry et Savoie.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { name: "Page Unique", price: "190", desc: "Idéal auto-entrepreneurs" },
                { name: "Site Vitrine", price: "390", desc: "PME & artisans", popular: true },
                { name: "Site Vitrine + mini-boutique", price: "890", desc: "PME avec vente en ligne" },
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

        <section className="py-20 bg-secondary/30" aria-labelledby="faq-chambery">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 id="faq-chambery" className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
                Questions fréquentes – Création site web Chambéry
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
              Prêt à lancer votre site internet à Chambéry ?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contactez-moi pour un devis gratuit et personnalisé. Réponse garantie sous 48h.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              Demander mon devis gratuit
            </Button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default CreationSiteChambery;
