import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  useEffect(() => {
    document.title = "Mentions légales | Elab'Site";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Mentions légales du site Elab'Site – Agence web à Chambéry, Savoie. Informations légales, éditeur, hébergeur et prestataires.",
      );
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
              <strong>Elab&apos;Site</strong>
              <br />
              Statut : EI
              <br />
              Siège : Challes-les-Eaux, 73190, Savoie, France
              <br />
              SIRET : 88828400700042 (ProCloud Digital)
              <br />
              Email :{" "}
              <a
                href="mailto:contact@elabsite.fr"
                className="text-primary hover:underline"
              >
                contact@elabsite.fr
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">2. Hébergement</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site est hébergé par :<br />
              <strong>GitHub, Inc.</strong> (via GitHub Pages)
              <br />
              88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis
              <br />
              Site web :{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com
              </a>
            </p>

            <p className="text-muted-foreground leading-relaxed mt-2">
              Nom de domaine enregistré et géré par :<br />
              <strong>LWS (Ligne Web Services)</strong>
              <br />
              10 rue de Penthièvre, 75008 Paris, France
              <br />
              Site web :{" "}
              <a
                href="https://www.lws.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                lws.fr
              </a>
            </p>
          </section>

          {/* NOUVEAU : prestataire formulaire */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">3. Formulaire de contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le formulaire de contact du site utilise un service tiers de traitement de formulaires
              (<strong>Formspree</strong>) afin d’acheminer les messages vers notre adresse de contact
              et de protéger le formulaire contre le spam (notamment via des mécanismes de type CAPTCHA).
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Pour plus d’informations sur la manière dont vos données sont traitées, consultez la{" "}
              <Link to="/politique-de-confidentialite" className="text-primary hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">4. Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed">
              L&apos;ensemble du contenu du site (textes, images, logos, graphismes, icônes, structure) est la propriété
              exclusive d&apos;Elab&apos;Site ou de ses partenaires. Toute reproduction, représentation,[...]
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">5. Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Elab&apos;Site s&apos;efforce de fournir des informations exactes et à jour. Toutefois, l&apos;éditeur ne
              saurait être tenu responsable des erreurs, omissions ou résultats obtenus suite à l&apos;utilis[...]
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">6. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ce site n&apos;utilise pas de cookies de tracking ou publicitaires. Seuls des cookies techniques
              strictement nécessaires au bon fonctionnement du site peuvent être utilisés. Pour plus d&apos;in[...]
              <Link to="/politique-de-confidentialite" className="text-primary hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">7. Droit applicable</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux compétents
              de Chambéry seront seuls compétents.
            </p>
          </section>

          <p className="text-sm text-muted-foreground italic">Dernière mise à jour : mars 2026</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
