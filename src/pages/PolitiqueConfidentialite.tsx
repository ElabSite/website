import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  useEffect(() => {
    document.title = "Politique de confidentialité | Elab'Site";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Politique de confidentialité d'Elab'Site – Protection des données personnelles, formulaire de contact (Formspree), droits RGPD et gestion des cookies.",
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl prose prose-neutral dark:prose-invert">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Politique de confidentialité
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-8">
            La présente politique de confidentialité décrit comment <strong>Elab&apos;Site</strong>{" "}
            collecte, utilise et protège vos données personnelles conformément au{" "}
            <strong>Règlement Général sur la Protection des Données (RGPD)</strong>.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">
              1. Responsable du traitement
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Elab&apos;Site</strong>
              <br />
              Siège : Challes-les-Eaux, 73190, Savoie, France
              <br />
              Email :{" "}
              <a href="mailto:contact@elabsite.fr" className="text-primary hover:underline">
                contact@elabsite.fr
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">2. Données collectées</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Les données personnelles collectées via le formulaire de contact sont :
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>Nom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Sujet et contenu du message</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Des données techniques peuvent également être traitées à des fins de sécurité et de lutte
              contre le spam (par exemple : horodatage, adresse IP et informations de navigateur), notamment
              via le prestataire de formulaire.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">
              3. Finalités du traitement
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Vos données sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
              <li>Répondre à vos demandes de contact ou de devis</li>
              <li>Vous recontacter dans le cadre d&apos;un projet web</li>
              <li>Établir un devis ou une proposition commerciale</li>
              <li>Assurer la sécurité du formulaire et lutter contre le spam</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Vos données ne sont <strong>jamais vendues, cédées ou partagées</strong> à des tiers à des
              fins commerciales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">4. Base légale</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le traitement de vos données repose sur votre <strong>consentement</strong> (article 6.1.a
              du RGPD), exprimé lors de l&apos;envoi du formulaire de contact, ainsi que sur l&apos;
              <strong>intérêt légitime</strong> d&apos;Elab&apos;Site à répondre aux demandes et à protéger le
              formulaire contre les abus (article 6.1.f du RGPD).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">
              5. Prestataires (sous-traitants) – Formulaire de contact (Formspree)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Le formulaire de contact est opéré via le service <strong>Formspree</strong>, qui agit en
              qualité de <strong>sous-traitant</strong> pour le traitement technique des messages envoyés
              via le formulaire.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Les données transmises via le formulaire peuvent être traitées par Formspree afin de livrer
              votre message et d&apos;appliquer des mesures anti-spam (par exemple CAPTCHA).
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Vous pouvez consulter la documentation et la politique de confidentialité de Formspree pour
              plus d&apos;informations sur leurs traitements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">6. Durée de conservation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les données issues du formulaire de contact sont conservées pendant une durée maximale de{" "}
              <strong>3 ans</strong> à compter du dernier contact, sauf obligation légale contraire ou
              nécessité de conservation plus longue pour la gestion d&apos;un litige.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">7. Vos droits (RGPD)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li>
                <strong>Droit d&apos;accès</strong> : obtenir la confirmation du traitement de vos données
                et en recevoir une copie
              </li>
              <li>
                <strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes
              </li>
              <li>
                <strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données
              </li>
              <li>
                <strong>Droit à la limitation</strong> : restreindre le traitement de vos données
              </li>
              <li>
                <strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré
              </li>
              <li>
                <strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:contact@elabsite.fr" className="text-primary hover:underline">
                contact@elabsite.fr
              </a>
              . Nous répondrons dans un délai de 30 jours.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Vous pouvez également déposer une réclamation auprès de la <strong>CNIL</strong> :{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.cnil.fr
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">8. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ce site est un site statique hébergé sur <strong>GitHub Pages</strong>. Il n&apos;utilise{" "}
              <strong>aucun cookie de tracking, publicitaire ou analytique</strong>. Aucun outil de mesure
              d&apos;audience n&apos;est installé par Elab&apos;Site.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Pour plus d&apos;informations sur les traitements de données techniques pouvant être réalisés
              par l&apos;hébergeur, consultez la{" "}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                politique de confidentialité de GitHub
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">9. Hébergement et sécurité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site est hébergé sur <strong>GitHub Pages</strong> (GitHub, Inc., San Francisco, USA). GitHub peut être
              amené à traiter certaines données techniques (adresse IP, logs serveur) dans le cadre de l&apos;hébergement.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Le nom de domaine est géré par <strong>LWS (Ligne Web Services)</strong>, 10 rue de Penthièvre, 75008 Paris.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              La connexion au site est sécurisée par le protocole <strong>HTTPS</strong> (certificat SSL fourni par GitHub
              Pages).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">10. Transfert de données hors UE</h2>
            <p className="text-muted-foreground leading-relaxed">
              L&apos;hébergement sur GitHub Pages implique un transfert de données aux États-Unis. Par ailleurs, l&apos;utilisation
              de prestataires tiers (ex. Formspree) est susceptible d&apos;impliquer un traitement de données en dehors de
              l&apos;Union Européenne selon leur infrastructure. Dans ce cas, ces transferts sont encadrés par des mécanismes
              de protection appropriés (par exemple clauses contractuelles types, et/ou cadres de transfert reconnus selon les
              informations fournies par les prestataires).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">11. Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cette politique peut être mise à jour à tout moment. La date de dernière mise à jour est indiquée ci-dessous.
              Nous vous encourageons à la consulter régulièrement.
            </p>
          </section>

          <p className="text-sm text-muted-foreground italic">Dernière mise à jour : mars 2026</p>

          <p className="text-xs text-muted-foreground mt-6">
            Note : ce modèle est fourni à titre informatif et ne constitue pas un conseil juridique.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
