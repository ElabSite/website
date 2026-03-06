import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Veuillez entrer votre nom").max(100, "Nom trop long"),
  email: z.string().trim().email("Adresse email invalide").max(255, "Email trop long"),
  phone: z.string().trim().max(20, "Numéro trop long").optional(),
  subject: z.string().trim().min(1, "Veuillez entrer un sujet").max(200, "Sujet trop long"),
  message: z.string().trim().min(10, "Le message doit contenir au moins 10 caractères").max(2000, "Message trop long"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    const body = `Nom: ${data.name}%0D%0AEmail: ${data.email}%0D%0ATéléphone: ${data.phone || "Non renseigné"}%0D%0A%0D%0A${encodeURIComponent(data.message)}`;
    const mailtoLink = `mailto:contact@elabsite.fr?subject=${encodeURIComponent(data.subject)}&body=${body}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Redirection vers votre messagerie",
        description: "Votre client mail s'est ouvert avec le message pré-rempli.",
      });
      form.reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Contactez-moi
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une question, un projet ? Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-6">
                <div className="bg-secondary/30 rounded-xl p-6 space-y-6">
                  <h2 className="text-xl font-bold text-foreground">Mes coordonnées</h2>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Adresse</p>
                      <p className="text-muted-foreground text-sm">Challes-les-Eaux, Savoie (73)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:contact@elabsite.fr" className="text-primary text-sm hover:underline">
                        contact@elabsite.fr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Téléphone</p>
                      <a href="tel:+33670453230" className="text-muted-foreground hover:text-primary transition-colors">
                      +33 6 70 45 32 30
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 bg-card border border-border rounded-xl p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom *</FormLabel>
                          <FormControl><Input placeholder="Votre nom" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl><Input type="email" placeholder="votre@email.fr" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Téléphone</FormLabel>
                          <FormControl><Input placeholder="06 XX XX XX XX" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="subject" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sujet *</FormLabel>
                          <FormControl><Input placeholder="Objet de votre message" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl><Textarea placeholder="Décrivez votre projet ou votre demande..." rows={6} {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
