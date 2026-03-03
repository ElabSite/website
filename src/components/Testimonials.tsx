import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Gérante",
    company: "Boulangerie L'Épi Doré",
    initials: "SM",
    rating: 5,
    text: "Un travail remarquable ! Mon site est magnifique, rapide et mes clients me disent qu'il est très facile à utiliser. Le référencement local a vraiment boosté ma visibilité sur Chambéry.",
  },
  {
    name: "Thomas Durand",
    role: "Directeur",
    company: "Alpes Immobilier",
    initials: "TD",
    rating: 5,
    text: "Professionnel et réactif. Le site en React est d'une rapidité impressionnante et le design est exactement ce que nous voulions. Nos demandes de contact ont augmenté de 40% depuis la mise en ligne.",
  },
  {
    name: "Marie Lefèvre",
    role: "Fondatrice",
    company: "Studio Yoga Harmonie",
    initials: "ML",
    rating: 5,
    text: "Je cherchais quelqu'un de confiance pour créer mon site WordPress. Résultat impeccable, je gère mon contenu en toute autonomie grâce à la formation incluse. Je recommande à 100% !",
  },
  {
    name: "Laurent Berger",
    role: "Artisan",
    company: "LB Rénovation",
    initials: "LB",
    rating: 5,
    text: "Excellent rapport qualité-prix. Le site est moderne, sécurisé et très bien référencé. J'apparais maintenant en première page Google sur mes mots-clés. Un vrai plus pour mon activité.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ce que disent mes clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfaction de mes clients est ma meilleure carte de visite
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              <CardContent className="pt-8 pb-6 px-6">
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3">
                  <Avatar className="h-11 w-11">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {t.role} — {t.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
