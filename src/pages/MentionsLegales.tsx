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
              L&apos;ensemble du contenu du site (textes, images, photographies, illustrations, logos, graphismes,
              icônes, vidéos, éléments téléchargeables, structure, mise en page, charte graphique, code source) est, sauf
              mention contraire, la propriété exclusive d&apos;Elab&apos;Site ou de ses partenaires et est protégé par le
              droit de la propriété intellectuelle.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Toute reproduction, représentation, modification, publication, adaptation, traduction ou exploitation,
              totale ou partielle, de tout ou partie du site, par quelque procédé que ce soit, est interdite sans
              l&apos;autorisation écrite préalable d&apos;Elab&apos;Site, sauf exceptions prévues par la loi.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Toute utilisation non autorisée du site ou de l&apos;un quelconque de ses éléments pourra faire
              l&apos;objet de poursuites, notamment au titre de la contrefaçon.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">5. Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Elab&apos;Site s&apos;efforce de fournir sur ce site des informations aussi précises et à jour que
              possible. Toutefois, ces informations sont fournies à titre indicatif et peuvent être modifiées à tout
              moment, sans préavis. Elab&apos;Site ne saurait garantir l&apos;exactitude, l&apos;exhaustivité ou
              l&apos;actualité des informations diffusées sur le site.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              L&apos;utilisateur reconnaît utiliser les informations disponibles sur le site sous sa responsabilité
              exclusive. Elab&apos;Site ne pourra être tenue responsable des dommages directs ou indirects (notamment
              perte de données, perte d&apos;exploitation, préjudice commercial) résultant de l&apos;accès ou de
              l&apos;utilisation du site, ou de l&apos;impossibilité d&apos;y accéder.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Le site peut contenir des liens vers des sites tiers. Elab&apos;Site n&apos;exerce aucun contrôle sur ces
              sites et ne pourra être tenue responsable de leur contenu, de leurs pratiques ou de leur disponibilité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">6. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ce site n&apos;utilise pas de cookies de mesure d&apos;audience, de tracking publicitaire ou de ciblage.
              Seuls des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être utilisés
              (par exemple pour la sécurité, l&apos;équilibrage, la gestion technique du site ou certaines fonctionnalités).
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies. Le refus de cookies
              techniques peut toutefois dégrader certaines fonctionnalités.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Pour plus d&apos;informations sur la manière dont vos données sont traitées, consultez la{" "}
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
