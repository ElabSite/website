import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  useEffect(() => {
    document.title = "Politique de confidentialité | Elab'Site";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Politique de confidentialité d'Elab'Site – Protection des données personnelles, droits RGPD et gestion des cookies.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl prose prose-neutral dark:prose-invert">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Politique de confidentialité</h1>

          <p className="text-muted-foreground leading-relaxed mb-8">
            La présente politique de confidentialité décrit comment <strong>Elab'Site</strong> collecte, utilise et protège vos données personnelles conformément au <strong>Règlement Général sur la Protection des Données (RGPD – UE 2016/679)</strong> et à la loi Informatique et Libertés.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">1. Responsable du traitement</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Elab'Site</strong><br />
              Siège : Challes-les-Eaux, 73190, Savoie, France<br />
              Email : <a href="mailto:contact@elabsite.fr" className="text-primary hover:underline">contact@elabsite.fr</a><br />
              Le responsable du traitement est [Nom du responsable à compléter].
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
              Ces données sont collectées uniquement lorsque vous remplissez volontairement le formulaire de contact. Aucune donnée n'est collectée automatiquement à votre insu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">3. Finalités du traitement</h2>
            <p className="text-muted-foreground leading-relaxed">Vos données sont utilisées exclusivement pour :</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
              <li>Répondre à vos demandes de contact ou de devis</li>
              <li>Vous recontacter dans le cadre d'un projet web</li>
              <li>Établir un devis ou une proposition commerciale</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Vos données ne sont <strong>jamais vendues, cédées ou partagées</strong> à des tiers à des fins commerciales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">4. Base légale</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le traitement de vos données repose sur votre <strong>consentement</strong> (article 6.1.a du RGPD), exprimé lors de l'envoi du formulaire de contact, ainsi que sur l'<strong>intérêt légitime</strong> (article 6.1.f) de répondre à vos demandes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">5. Durée de conservation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les données issues du formulaire de contact sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter du dernier contact, conformément aux recommandations de la CNIL. Elles sont ensuite supprimées de manière sécurisée.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">6. Vos droits (RGPD)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              <li><strong>Droit d'accès</strong> : obtenir la confirmation du traitement de vos données et en recevoir une copie</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la limitation</strong> : restreindre le traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:contact@elabsite.fr" className="text-primary hover:underline">contact@elabsite.fr</a>. Nous répondrons dans un délai de 30 jours.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Vous pouvez également déposer une réclamation auprès de la <strong>CNIL</strong> :{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">7. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ce site est un site statique hébergé sur <strong>GitHub Pages</strong>. Il n'utilise <strong>aucun cookie de tracking, publicitaire ou analytique</strong>. Aucun outil de mesure d'audience tiers (Google Analytics, etc.) n'est installé. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés par le navigateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">8. Hébergement et sécurité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site est hébergé sur <strong>GitHub Pages</strong> (GitHub, Inc., San Francisco, USA). GitHub peut être amené à traiter certaines données techniques (adresse IP, logs serveur) dans le cadre de l'hébergement. Consultez la{" "}
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">politique de confidentialité de GitHub</a> pour plus d'informations.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Le nom de domaine est géré par <strong>LWS (Ligne Web Services)</strong>, 10 rue de Penthièvre, 75008 Paris.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              La connexion au site est sécurisée par le protocole <strong>HTTPS</strong> (certificat SSL fourni par GitHub Pages).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">9. Transfert de données hors UE</h2>
            <p className="text-muted-foreground leading-relaxed">
              L'hébergement sur GitHub Pages implique un transfert de données aux États-Unis. GitHub, Inc. adhère au <strong>Data Privacy Framework (DPF)</strong> UE-États-Unis, garantissant un niveau de protection adéquat conformément aux exigences du RGPD.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3">10. Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cette politique peut être mise à jour à tout moment. La date de dernière mise à jour est indiquée ci-dessous. Nous vous encourageons à la consulter régulièrement.
            </p>
          </section>

          <p className="text-sm text-muted-foreground italic">Dernière mise à jour : février 2026</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
