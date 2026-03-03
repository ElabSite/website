import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const projects = [
  {
    title: "Boulangerie Savoyarde",
    category: "Site Vitrine",
    description:
      "Site vitrine moderne pour une boulangerie artisanale à Chambéry. Mise en valeur des produits et commandes en ligne.",
    tags: ["Site Vitrine", "SEO", "Responsive"],
    color: "bg-accent/30",
  },
  {
    title: "Cabinet Dupont — Avocat",
    category: "Page Unique",
    description:
      "Landing page professionnelle pour un cabinet d'avocat. Design épuré et formulaire de prise de rendez-vous.",
    tags: ["Page Unique", "Formulaire", "Design Premium"],
    color: "bg-primary/10",
  },
  {
    title: "Plomberie Alpes Services",
    category: "Site Vitrine",
    description:
      "Site multi-pages avec zone d'intervention, galerie de réalisations et système de demande de devis.",
    tags: ["Site Vitrine", "Google Maps", "Devis en ligne"],
    color: "bg-secondary/50",
  },
  {
    title: "Yoga Lac du Bourget",
    category: "Page Unique",
    description:
      "Page unique élégante avec planning des cours, tarifs et réservation en ligne pour un studio de yoga.",
    tags: ["Page Unique", "Réservation", "Animations"],
    color: "bg-accent/20",
  },
  {
    title: "Menuiserie Tradition Bois",
    category: "Site Vitrine+",
    description:
      "Site complet avec portfolio de réalisations, blog intégré et optimisation SEO avancée pour un artisan menuisier.",
    tags: ["Site Vitrine+", "Blog", "SEO Avancé"],
    color: "bg-primary/5",
  },
  {
    title: "Restaurant Le Savoyard",
    category: "Site Vitrine",
    description:
      "Site vitrine avec menu en ligne, système de réservation et intégration TripAdvisor pour un restaurant à Aix-les-Bains.",
    tags: ["Site Vitrine", "Réservation", "Menu en ligne"],
    color: "bg-secondary/30",
  },
];

const Realisations = () => {
  useEffect(() => {
    document.title = "Mes réalisations web à Chambéry | Portfolio | Elab'Site";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Découvrez mes réalisations de sites web à Chambéry et en Savoie. Sites vitrine, pages uniques pour artisans, PME et indépendants."
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
              Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
              Mes réalisations
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez les sites web que j'ai créés pour des entreprises de Chambéry et de Savoie.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div
                    className={`h-48 ${project.color} flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <ExternalLink className="w-8 h-8 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-secondary px-3 py-1 rounded-full text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Votre projet sera le prochain ?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Rejoignez mes clients satisfaits à Chambéry et en Savoie.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              Démarrer mon projet
            </Button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Realisations;
