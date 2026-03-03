import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, FileText, Settings, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Vitrine",
    description: "Des sites web élégants et performants qui mettent en valeur votre activité et attirent vos clients.",
  },
  {
    icon: FileText,
    title: "Pages Uniques",
    description: "Landing pages optimisées pour convertir vos visiteurs en clients avec un message clair et impactant.",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Un suivi régulier de votre site pour garantir sa sécurité, ses performances et sa disponibilité.",
  },
  {
    icon: Shield,
    title: "Sécurité & SEO",
    description: "Tous les sites sont livrés avec les standards de sécurité et un référencement optimisé inclus.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Mes Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une expertise complète pour votre projet web, de la conception à la maintenance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
