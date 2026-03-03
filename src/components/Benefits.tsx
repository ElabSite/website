import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Sites optimisés pour le référencement Google (SEO)",
  "Sécurité SSL et protection contre les menaces",
  "Design responsive adapté à tous les écrans",
  "Performances optimales et temps de chargement rapide",
  "Formation et documentation complète",
  "Support technique et maintenance inclus",
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Ce que j'inclus dans chaque projet
            </h2>
            <p className="text-xl text-muted-foreground">
              Un service complet pour votre tranquillité d'esprit
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/30 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;