const steps = [
  {
    number: "01",
    title: "Écoute & Analyse",
    description: "Je prends le temps de comprendre votre projet, vos objectifs et votre cible.",
  },
//  {
//    number: "02",
//    title: "Conception",
//    description: "Création d'une maquette personnalisée qui reflète votre identité et vos besoins.",
//  },
  {
    number: "02",
    title: "Développement",
    description: "Réalisation de votre site avec les dernières technologies web pour une performance optimale.",
  },
  {
    number: "03",
    title: "Livraison & Suivi",
    description: "Mise en ligne sécurisée et accompagnement pour la maintenance et l'évolution de votre site.",
  },
];

const Process = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Mon Processus
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une méthode éprouvée pour transformer votre vision en réalité digitale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
