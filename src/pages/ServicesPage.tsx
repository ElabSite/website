import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Server, Code2, Globe, Palette, Rocket, ShieldCheck, Search, Smartphone, Gauge, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const wordpressFeatures = [
  "Interface d'administration intuitive",
  "Éditeur visuel Elementor Pro",
  "Mises à jour de contenu en autonomie",
  "Bibliothèque de plugins étendue",
  "Idéal pour blogs et contenus réguliers",
  "Formation à la prise en main incluse",
];

const reactFeatures = [
  "Performance et vitesse optimales",
  "Animations fluides et modernes",
  "Score SEO & Lighthouse maximisé",
  "Architecture sur mesure et évolutive",
  "Aucune dépendance à des plugins tiers",
  "Expérience utilisateur premium",
];

const expertise = [
  {
    icon: Server,
    title: "Infrastructure & DevOps",
    description: "Déploiement automatisé, CI/CD, hébergement optimisé. Votre site est entre les mains d'un ingénieur, pas d'un simple intégrateur.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité renforcée",
    description: "HTTPS, headers de sécurité, protection contre les injections et attaques XSS. La sécurité est intégrée dès la conception.",
  },
  {
    icon: Search,
    title: "SEO technique avancé",
    description: "Balisage sémantique, données structurées JSON-LD, Core Web Vitals optimisés pour un référencement naturel performant.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    description: "Chaque site est conçu d'abord pour mobile, puis adapté aux tablettes et ordinateurs. Responsive design garanti.",
  },
  {
    icon: Gauge,
    title: "Performance maximale",
    description: "Optimisation des images, lazy loading, code minifié. Des temps de chargement ultra-rapides pour vos visiteurs.",
  },
  {
    icon: Palette,
    title: "Design sur mesure",
    description: "Pas de templates génériques. Chaque projet est designé pour refléter votre identité et séduire vos clients.",
  },
];

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services création site web | WordPress & React | Elab'Site Chambéry";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Ingénieur DevOps diplômé de la Sorbonne, je crée votre site web sur WordPress Elementor ou en React. Sites performants, sécurisés et optimisés SEO à Chambéry."
      );
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-24 bg-accent/20">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              <GraduationCap className="w-4 h-4 mr-2" />
              Ingénieur DevOps — Sorbonne Université
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Mes Services de <span className="text-primary">Création Web</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Diplômé en ingénierie DevOps à la Sorbonne, je combine expertise technique avancée
              et sens du design pour créer des sites web qui performent réellement.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform" asChild>
              <Link to="/contact">Discuter de votre projet</Link>
            </Button>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Un ingénieur, pas un simple intégrateur
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le DevOps est une spécialisation du développement informatique qui allie
                développement logiciel et gestion d'infrastructure. Formé à{" "}
                <strong className="text-foreground">Sorbonne Université</strong>, je maîtrise
                l'ensemble de la chaîne : du code source au déploiement en production,
                en passant par la sécurité, la performance et l'automatisation.
                Résultat : des sites robustes, rapides et maintenables.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {expertise.map((item) => (
                <Card key={item.title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Deux technologies, un même objectif
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choisissez l'approche qui correspond le mieux à vos besoins et votre budget
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="relative hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">WordPress + Elementor</CardTitle>
                  <CardDescription className="text-base mt-2">
                    La solution éprouvée et accessible pour gérer votre contenu en toute autonomie
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-8">
                    {wordpressFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <Badge variant="outline" className="text-sm">
                      Recommandé pour : blogs, PME, contenu évolutif
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative border-2 border-primary shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Technologie moderne
                </div>
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Code2 className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Full React</CardTitle>
                  <CardDescription className="text-base mt-2">
                    La technologie de pointe utilisée par les géants du web pour une performance maximale
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-8">
                    {reactFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <Badge className="text-sm">
                      Recommandé pour : vitrine premium, landing pages, SaaS
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Comment ça se passe ?
              </h2>
              <p className="text-lg text-muted-foreground">
                Un processus simple et transparent, de l'idée à la mise en ligne
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { step: "01", title: "Échange", desc: "On discute de vos besoins, objectifs et budget pour définir la meilleure approche." },
                //{ step: "02", title: "Maquette", desc: "Je conçois le design de votre site et vous validez avant le développement." },
                { step: "02", title: "Développement", desc: "Création du site avec les meilleures pratiques de sécurité et performance." },
                { step: "03", title: "Mise en ligne", desc: "Déploiement, tests finaux et mise en production de votre site." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Rocket className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contactez-moi pour un devis gratuit et personnalisé sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform" asChild>
                <Link to="/contact">Demander un devis gratuit</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                <Link to="/tarifs">Voir les tarifs</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ServicesPage;
