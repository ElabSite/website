import { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Calculator,
  RotateCcw,
  Shield,
  User,
  Mail,
} from "lucide-react";

type Step = "pages" | "pagesList" | "autonomy" | "features" | "extras" | "contact" | "result";

const BASE_PRICE_ONE_PAGE = 190;
const PRICE_PER_EXTRA_PAGE = 100;
const AUTONOMY_PRICE = 200;

/**
 * IMPORTANT: mets ici ton endpoint Formspree
 * Format: https://formspree.io/f/XXXXXXX
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXX";

/*
const maintenancePlans = [
  { ... }
];
*/

const pageOptions = [
  { id: "accueil", label: "Page d'accueil", price: 100 },
  { id: "services", label: "Page Services", price: 100 },
  { id: "about", label: "Page À propos", price: 100 },
  { id: "contact", label: "Page Contact", price: 100 },
  { id: "realisations", label: "Page Réalisations / Portfolio", price: 100 },
  { id: "tarifs", label: "Page Tarifs", price: 100 },
  { id: "blog", label: "Blog (section articles)", price: 100 },
  { id: "faq", label: "Page FAQ", price: 100 },
  { id: "temoignages", label: "Page Témoignages", price: 100 },
];

const featureOptions = [
  { id: "form-contact", label: "Formulaire de contact", price: 0, included: true },
  { id: "seo", label: "Optimisation SEO complète", price: 0, included: true },
  { id: "google-maps", label: "Intégration Google Maps", price: 0, included: true },
  { id: "social", label: "Intégration réseaux sociaux", price: 0, included: true },
  { id: "cookie-banner", label: "Bannière cookies RGPD", price: 0, included: true },
  { id: "speed-opti", label: "Optimisation performance", price: 0, included: true },
  { id: "analytics", label: "Google Analytics", price: 50 },
  { id: "multi-lang", label: "Site multilingue (2 langues)", price: 400 },
  { id: "chat", label: "Chat en ligne / WhatsApp", price: 80 },
];

const extraOptions = [
  { id: "booking", label: "Système de prise de rendez-vous", price: 300, desc: "Calendrier intégré avec notifications" },
  { id: "airbnb-sync", label: "Synchronisation calendrier Airbnb", price: 350, desc: "Synchro automatique des disponibilités" },
  { id: "stripe", label: "Paiement en ligne (Stripe)", price: 400, desc: "Accepter les paiements par carte bancaire" },
  { id: "paypal", label: "Paiement en ligne (PayPal)", price: 350, desc: "Accepter les paiements via PayPal" },
  { id: "newsletter", label: "Newsletter / Mailing list", price: 150, desc: "Inscription et envoi d'emails" },
  { id: "ecommerce-light", label: "Mini boutique (jusqu'à 10 produits)", price: 500, desc: "Catalogue produits avec panier" },
  { id: "gallery", label: "Galerie photo avancée", price: 120, desc: "Lightbox, filtres et diaporama" },
  { id: "avis-google", label: "Intégration avis Google", price: 80, desc: "Affichage automatique des avis" },
];

const PriceSimulator = () => {
  const [step, setStep] = useState<Step>("pages");
  const [pageCount, setPageCount] = useState<"1" | "5" | "custom">("1");
  const [customPages, setCustomPages] = useState(7);
  const [selectedPages, setSelectedPages] = useState<string[]>(["accueil"]);
  const [wantsAutonomy, setWantsAutonomy] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "form-contact",
    "seo",
    "google-maps",
    "social",
    "cookie-banner",
    "speed-opti",
  ]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactErrors, setContactErrors] = useState<{ name?: string; email?: string }>({});

  // évite le double envoi si re-render
  const estimateSentRef = useRef(false);

  const steps: Step[] = ["pages", "pagesList", "autonomy", "features", "extras", "contact", "result"];
  const currentIndex = steps.indexOf(step);

  const stepLabels: Record<Step, string> = {
    pages: "Nombre de pages",
    pagesList: "Choix des pages",
    autonomy: "Autonomie",
    features: "Fonctionnalités",
    extras: "Services additionnels",
    contact: "Vos coordonnées",
    result: "Votre estimation",
  };

  const toggleItem = (
    id: string,
    list: string[],
    setList: (v: string[]) => void,
    alwaysOn?: boolean,
  ) => {
    if (alwaysOn) return;
    setList(list.includes(id) ? list.filter((i) => i !== id) : [...list, id]);
  };

  const getEffectivePageCount = () => {
    if (pageCount === "1") return 1;
    if (pageCount === "5") return 5;
    return customPages;
  };

  const isPageFreeIn5Pack = (pageId: string) => {
    if (pageCount !== "5") return false;
    if (pageId === "accueil") return true;
    if (pageId === "blog") return false;
    return true;
  };

  const getPagePriceForRecap = (pageId: string) => {
    if (pageCount === "5" && isPageFreeIn5Pack(pageId)) return 0;
    const page = pageOptions.find((p) => p.id === pageId);
    return page?.price || PRICE_PER_EXTRA_PAGE;
  };

  const calculatePrice = () => {
    let total = BASE_PRICE_ONE_PAGE;

    const extraPages = selectedPages.filter((p) => p !== "accueil");
    if (pageCount === "5") {
      extraPages.forEach((pId) => {
        if (pId === "blog") total += 100;
      });
    } else if (pageCount === "custom") {
      total += extraPages.length * PRICE_PER_EXTRA_PAGE;
    }

    if (wantsAutonomy) total += AUTONOMY_PRICE;

    selectedFeatures.forEach((fId) => {
      const feature = featureOptions.find((f) => f.id === fId);
      if (feature) total += feature.price;
    });

    selectedExtras.forEach((eId) => {
      const extra = extraOptions.find((e) => e.id === eId);
      if (extra) total += extra.price;
    });

    return total;
  };

  const next = () => {
    if (currentIndex < steps.length - 1) {
      if (step === "pages" && pageCount === "1") {
        setSelectedPages(["accueil"]);
        setStep("autonomy");
      } else {
        setStep(steps[currentIndex + 1]);
      }
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      if (step === "autonomy" && pageCount === "1") {
        setStep("pages");
      } else {
        setStep(steps[currentIndex - 1]);
      }
    }
  };

  const validateContact = () => {
    const errors: { name?: string; email?: string } = {};
    if (!contactName.trim()) errors.name = "Veuillez entrer votre nom ou celui de votre entreprise";
    if (!contactEmail.trim()) errors.email = "Veuillez entrer votre adresse email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+\.[^\s@]+$/.test(contactEmail.trim())) {
      // fallback, mais on garde ta regex d’origine juste après
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail.trim())) errors.email = "Adresse email invalide";

    setContactErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const reset = () => {
    setStep("pages");
    setPageCount("1");
    setCustomPages(7);
    setSelectedPages(["accueil"]);
    setWantsAutonomy(false);
    setSelectedFeatures(["form-contact", "seo", "google-maps", "social", "cookie-banner", "speed-opti"]);
    setSelectedExtras([]);
    setContactName("");
    setContactEmail("");
    setContactErrors({});
    estimateSentRef.current = false;
  };

  const maxPages = getEffectivePageCount();

  const selectedPagesLabels = useMemo(() => {
    return selectedPages.map((id) => pageOptions.find((p) => p.id === id)?.label ?? id).join(", ");
  }, [selectedPages]);

  const selectedFeaturesLabels = useMemo(() => {
    return selectedFeatures.map((id) => featureOptions.find((f) => f.id === id)?.label ?? id).join(", ");
  }, [selectedFeatures]);

  const selectedExtrasLabels = useMemo(() => {
    return selectedExtras.map((id) => extraOptions.find((e) => e.id === id)?.label ?? id).join(", ");
  }, [selectedExtras]);

  const buildEstimateMessage = () => {
    const total = calculatePrice();

    const pagesRecap = selectedPages
      .map((pId) => {
        const label = pageOptions.find((p) => p.id === pId)?.label ?? pId;
        const price = getPagePriceForRecap(pId);
        return `- ${label}: ${price === 0 ? "Inclus" : `+${price}€`}`;
      })
      .join("\n");

    const paidFeaturesRecap = selectedFeatures
      .map((fId) => featureOptions.find((f) => f.id === fId))
      .filter((f): f is NonNullable<(typeof featureOptions)[number]> => Boolean(f))
      .filter((f) => !f.included && f.price > 0)
      .map((f) => `- ${f.label}: +${f.price}€`)
      .join("\n");

    const extrasRecap = selectedExtras
      .map((eId) => {
        const extra = extraOptions.find((e) => e.id === eId);
        return extra ? `- ${extra.label}: +${extra.price}€` : `- ${eId}`;
      })
      .join("\n");

    return [
      "Nouvelle estimation (simulateur)",
      "",
      `Nom / Entreprise: ${contactName}`,
      `Email: ${contactEmail}`,
      "",
      `Pack pages: ${pageCount === "custom" ? `${customPages} pages` : pageCount === "1" ? "1 page" : "jusqu'à 5 pages"}`,
      `Pages: ${selectedPagesLabels || "—"}`,
      "",
      "Détail pages:",
      pagesRecap || "—",
      "",
      `Autonomie: ${wantsAutonomy ? `Oui (+${AUTONOMY_PRICE}€)` : "Non"}`,
      "",
      `Fonctionnalités (toutes): ${selectedFeaturesLabels || "—"}`,
      paidFeaturesRecap ? `\nFonctionnalités payantes:\n${paidFeaturesRecap}` : "",
      extrasRecap ? `\nExtras:\n${extrasRecap}` : "",
      "",
      `TOTAL estimé: ${total.toLocaleString("fr-FR")}€ TTC`,
      "",
      "Note: estimation indicative, devis final sur demande.",
    ]
      .filter(Boolean)
      .join("\n");
  };

  // ENVOI AUTO quand on arrive sur "result"
  useEffect(() => {
    const shouldSend =
      step === "result" &&
      !estimateSentRef.current &&
      contactName.trim().length > 0 &&
      contactEmail.trim().length > 0;

    if (!shouldSend) return;

    if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.includes("XXXX")) {
      // On évite de casser l'UX si c'est mal configuré
      console.warn("FORMSPREE_ENDPOINT non configuré dans PriceSimulator.tsx");
      estimateSentRef.current = true;
      return;
    }

    estimateSentRef.current = true;

    // fire-and-forget (on ne bloque pas l’affichage)
    (async () => {
      try {
        const fd = new FormData();
        fd.append("name", contactName);
        fd.append("email", contactEmail);
        fd.append("subject", "Estimation site web — Simulateur Elab'Site");
        fd.append("message", buildEstimateMessage());
        fd.append("_gotcha", "");

        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: fd,
        });

        if (!res.ok) {
          console.warn("Formspree error", await res.text());
        }
      } catch (err) {
        console.warn("Impossible d'envoyer l'estimation", err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  return (
    <section id="simulateur" className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4" />
            Simulateur de prix
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Estimez le coût de votre site à Chambéry
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Configurez votre projet étape par étape et obtenez une estimation personnalisée en quelques clics.
          </p>
        </div>

        {/* Progress bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex justify-between mb-2">
            {steps.map((s, i) => (
              <div
                key={s}
                className={`text-xs font-medium transition-colors ${
                  i <= currentIndex ? "text-primary" : "text-muted-foreground/50"
                }`}
              >
                <span className="hidden sm:inline">{stepLabels[s]}</span>
                <span className="sm:hidden">{i + 1}</span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardContent className="p-6 md:p-8">
            {/* --- Le reste de ton composant est identique à celui que tu as, je ne change que le behavior d’envoi. --- */}

            {/* Step: Pages count */}
            {step === "pages" && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-foreground">De combien de pages avez-vous besoin ?</h3>
                <div className="grid gap-4">
                  {[
                    { value: "1" as const, label: "Page unique", desc: "Idéal pour une landing page ou carte de visite en ligne" },
                    { value: "5" as const, label: "Jusqu'à 5 pages", desc: "Site vitrine classique — pages incluses dans le forfait" },
                    { value: "custom" as const, label: "Plus de 5 pages", desc: "Site complet — chaque page supplémentaire à +100€" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setPageCount(option.value)}
                      className={`text-left p-4 rounded-lg border-2 transition-all ${
                        pageCount === option.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <div className="font-semibold text-foreground">{option.label}</div>
                      <div className="text-sm text-muted-foreground mt-1">{option.desc}</div>
                    </button>
                  ))}
                </div>

                {pageCount === "custom" && (
                  <div className="flex items-center gap-3">
                    <label className="text-sm font-medium text-foreground">Nombre de pages :</label>
                    <Input
                      type="number"
                      min={6}
                      max={30}
                      value={customPages}
                      onChange={(e) =>
                        setCustomPages(Math.max(6, Math.min(30, parseInt(e.target.value) || 6)))
                      }
                      className="w-24"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Step: Pages list */}
            {step === "pagesList" && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-foreground">
                  Quelles pages souhaitez-vous ?
                  <span className="text-sm font-normal text-muted-foreground ml-2">
                    ({selectedPages.length}/{maxPages} sélectionnées)
                  </span>
                </h3>

                {pageCount === "5" && (
                  <p className="text-sm text-primary bg-primary/5 p-3 rounded-lg">
                    📦 Forfait 5 pages : toutes les pages sont incluses sauf la section Blog (+100€).
                  </p>
                )}

                <div className="grid gap-3">
                  {pageOptions.map((page) => {
                    const isAccueil = page.id === "accueil";
                    const isFreeIn5 = isPageFreeIn5Pack(page.id);
                    const isSelected = selectedPages.includes(page.id);
                    const isDisabled = !isSelected && selectedPages.length >= maxPages;

                    const displayPrice =
                      pageCount === "5"
                        ? page.id === "blog"
                          ? "+100€"
                          : "Inclus"
                        : isAccueil
                          ? "Inclus"
                          : `+${page.price}€`;

                    return (
                      <label
                        key={page.id}
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                          isSelected ? "border-primary bg-primary/5" : "border-border"
                        } ${
                          isDisabled && !isSelected
                            ? "opacity-40 cursor-not-allowed"
                            : "hover:border-primary/30"
                        }`}
                      >
                        <Checkbox
                          checked={isSelected}
                          disabled={isAccueil || (isDisabled && !isSelected)}
                          onCheckedChange={() => toggleItem(page.id, selectedPages, setSelectedPages, isAccueil)}
                        />

                        <div className="flex-1">
                          <span className="font-medium text-foreground">{page.label}</span>
                          {(isFreeIn5 || isAccueil) && pageCount !== "custom" && (
                            <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                              Inclus
                            </span>
                          )}
                        </div>

                        <span
                          className={`text-sm ${
                            isFreeIn5 || isAccueil ? "text-primary font-medium" : "text-muted-foreground"
                          }`}
                        >
                          {displayPrice}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step: Autonomy */}
            {step === "autonomy" && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-foreground">Souhaitez-vous modifier votre site vous-même ?</h3>
                <p className="text-muted-foreground">
                  Avec l&apos;option autonomie, vous pourrez mettre à jour vos textes, images et contenus sans compétence technique.
                </p>

                <div className="grid gap-4">
                  <button
                    onClick={() => setWantsAutonomy(false)}
                    className={`text-left p-4 rounded-lg border-2 transition-all ${
                      !wantsAutonomy ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="font-semibold text-foreground">Non, je vous confie la gestion</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Je m&apos;occupe des modifications pour vous (inclus dans les forfaits maintenance)
                    </div>
                  </button>

                  <button
                    onClick={() => setWantsAutonomy(true)}
                    className={`text-left p-4 rounded-lg border-2 transition-all ${
                      wantsAutonomy ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="font-semibold text-foreground">Oui, je veux être autonome (+{AUTONOMY_PRICE}€)</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Interface d&apos;administration simple pour modifier vos contenus à tout moment
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Step: Features */}
            {step === "features" && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-foreground">Quelles fonctionnalités souhaitez-vous ?</h3>
                <div className="grid gap-3">
                  {featureOptions.map((feature) => {
                    const isIncluded = feature.included;
                    const isSelected = selectedFeatures.includes(feature.id);

                    return (
                      <label
                        key={feature.id}
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                          isSelected ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                        }`}
                      >
                        <Checkbox
                          checked={isSelected}
                          disabled={isIncluded}
                          onCheckedChange={() => toggleItem(feature.id, selectedFeatures, setSelectedFeatures, isIncluded)}
                        />

                        <div className="flex-1">
                          <span className="font-medium text-foreground">{feature.label}</span>
                          {isIncluded && (
                            <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                              Inclus
                            </span>
                          )}
                        </div>

                        {!isIncluded && <span className="text-sm text-muted-foreground">+{feature.price}€</span>}
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step: Extras */}
            {step === "extras" && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-foreground">Services additionnels</h3>
                <p className="text-muted-foreground">Ajoutez des fonctionnalités avancées selon vos besoins.</p>

                <div className="grid gap-3">
                  {extraOptions.map((extra) => {
                    const isSelected = selectedExtras.includes(extra.id);

                    return (
                      <label
                        key={extra.id}
                        className={`flex items-center gap-3 p-4 rounded-lg border transition-all cursor-pointer ${
                          isSelected ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                        }`}
                      >
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => toggleItem(extra.id, selectedExtras, setSelectedExtras)}
                        />

                        <div className="flex-1">
                          <div className="font-medium text-foreground">{extra.label}</div>
                          <div className="text-sm text-muted-foreground">{extra.desc}</div>
                        </div>

                        <span className="text-sm font-semibold text-foreground">+{extra.price}€</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step: Contact */}
            {step === "contact" && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-foreground">Vos coordonnées</h3>
                <p className="text-muted-foreground">
                  Renseignez vos informations pour recevoir votre estimation personnalisée.
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Nom / Entreprise *
                    </label>
                    <Input
                      placeholder="Votre nom ou le nom de votre entreprise"
                      value={contactName}
                      onChange={(e) => {
                        setContactName(e.target.value);
                        setContactErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                    />
                    {contactErrors.name && <p className="text-sm text-destructive">{contactErrors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Adresse email *
                    </label>
                    <Input
                      type="email"
                      placeholder="votre@email.fr"
                      value={contactEmail}
                      onChange={(e) => {
                        setContactEmail(e.target.value);
                        setContactErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                    />
                    {contactErrors.email && <p className="text-sm text-destructive">{contactErrors.email}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step: Result */}
            {step === "result" && (
              <div className="space-y-6 animate-fade-in text-center">
                <h3 className="text-xl font-bold text-foreground">Votre estimation personnalisée</h3>

                <div className="bg-primary/5 border-2 border-primary rounded-2xl p-8">
                  <div className="text-sm text-muted-foreground mb-2">Estimation à partir de</div>
                  <div className="text-5xl font-bold text-primary mb-2">
                    {calculatePrice().toLocaleString("fr-FR")}€
                  </div>
                  <div className="text-sm text-muted-foreground">TTC • Devis final personnalisé sur demande</div>

                  <p className="text-xs text-muted-foreground mt-4">
                    Nous vous recontacterons à l’adresse <strong>{contactEmail || "—"}</strong> si besoin.
                  </p>
                </div>

                {/* Summary (inchangé) */}
                <div className="text-left space-y-4">
                  <h4 className="font-semibold text-foreground">Récapitulatif :</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-1 border-b border-border">
                      <span className="text-muted-foreground">Site de base (1 page)</span>
                      <span className="font-medium text-foreground">{BASE_PRICE_ONE_PAGE}€</span>
                    </div>

                    {selectedPages
                      .filter((p) => p !== "accueil")
                      .map((pId) => {
                        const page = pageOptions.find((po) => po.id === pId);
                        const price = getPagePriceForRecap(pId);

                        return page ? (
                          <div key={pId} className="flex justify-between py-1 border-b border-border">
                            <span className="text-muted-foreground flex items-center gap-1">
                              <Check className="w-3 h-3 text-primary" />
                              {page.label}
                            </span>
                            <span className="font-medium text-foreground">
                              {price === 0 ? <span className="text-primary">Inclus</span> : `+${price}€`}
                            </span>
                          </div>
                        ) : null;
                      })}

                    {wantsAutonomy && (
                      <div className="flex justify-between py-1 border-b border-border">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Check className="w-3 h-3 text-primary" />
                          Autonomie de gestion
                        </span>
                        <span className="font-medium text-foreground">+{AUTONOMY_PRICE}€</span>
                      </div>
                    )}

                    {selectedFeatures
                      .filter((f) => !featureOptions.find((fo) => fo.id === f)?.included)
                      .map((fId) => {
                        const feature = featureOptions.find((fo) => fo.id === fId);

                        return feature ? (
                          <div key={fId} className="flex justify-between py-1 border-b border-border">
                            <span className="text-muted-foreground flex items-center gap-1">
                              <Check className="w-3 h-3 text-primary" />
                              {feature.label}
                            </span>
                            <span className="font-medium text-foreground">+{feature.price}€</span>
                          </div>
                        ) : null;
                      })}

                    {selectedExtras.map((eId) => {
                      const extra = extraOptions.find((eo) => eo.id === eId);

                      return extra ? (
                        <div key={eId} className="flex justify-between py-1 border-b border-border">
                          <span className="text-muted-foreground flex items-center gap-1">
                            <Check className="w-3 h-3 text-primary" />
                            {extra.label}
                          </span>
                          <span className="font-medium text-foreground">+{extra.price}€</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button onClick={reset} variant="outline" className="flex-1 gap-2">
                    <RotateCcw className="w-4 h-4" />
                    Recommencer
                  </Button>
                  <Button asChild className="flex-1">
                    <a href="/contact">Demander un devis gratuit</a>
                  </Button>
                </div>
              </div>
            )}

            {/* Navigation */}
            {step !== "result" && (
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="ghost"
                  onClick={prev}
                  disabled={currentIndex === 0}
                  className="gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Précédent
                </Button>
                <Button
                  onClick={() => {
                    if (step === "contact") {
                      if (validateContact()) next();
                    } else {
                      next();
                    }
                  }}
                  className="gap-2"
                >
                  {currentIndex === steps.length - 2 ? "Voir l'estimation" : "Suivant"}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PriceSimulator;
