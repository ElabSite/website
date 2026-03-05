import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  useEffect(() => {
    document.title = "Mentions légales | Elab'Site";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Mentions légales du site Elab'Site – Agence web à Chambéry, Savoie. Informations légales, éditeur, hébergeur.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl prose prose-neutral dark:prose-invert">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Mentions légales</h1>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">1. Éditeur du site</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site <strong>elabsite.fr</strong> est édité par :<br />
              <strong>Elab'Site</strong><br />
              Statut : EI<br />
              Siège : Challes-les-Eaux, 73190, Savoie, France<br />
              SIRET : 88828400700042 (ProCloud Digital) <br />
              Email : <a href="mailto:contact@elabsite.fr" className="text-primary hover:underline">contact@elabsite.fr</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">2. Hébergement</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site est hébergé par :<br />
              <strong>GitHub, Inc.</strong> (via GitHub Pages)<br />
              88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis<br />
              Site web : <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com</a>
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Nom de domaine enregistré et géré par :<br />
              <strong>LWS (Ligne Web Services)</strong><br />
              10 rue de Penthièvre, 75008 Paris, France<br />
              Site web : <a href="https://www.lws.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">lws.fr</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">3. Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed">
              L'ensemble du contenu du site (textes, images, logos, graphismes, icônes, structure) est la propriété exclusive d'Elab'Site ou de ses partenaires. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, est interdite sans autorisation écrite préalable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">4. Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Elab'Site s'efforce de fournir des informations exactes et à jour. Toutefois, l'éditeur ne saurait être tenu responsable des erreurs, omissions ou résultats obtenus suite à l'utilisation de ces informations. Les liens hypertextes vers des sites tiers n'engagent pas la responsabilité de l'éditeur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">5. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ce site n'utilise pas de cookies de tracking ou publicitaires. Seuls des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être utilisés. Pour plus d'informations, consultez notre{" "}
              <Link to="/politique-de-confidentialite" className="text-primary hover:underline">politique de confidentialité</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">6. Droit applicable</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux compétents de Chambéry seront seuls compétents.
            </p>
          </section>

          <p className="text-sm text-muted-foreground italic">Dernière mise à jour : février 2026</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
