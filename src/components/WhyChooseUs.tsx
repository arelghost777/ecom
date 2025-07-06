'use client';
import { ShieldCheck, BadgePercent, CreditCard, RotateCw, Headset, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <BadgePercent className="h-8 w-8" />,
      title: "Jusqu'à 40% de réduction",
      description: "Des promotions exclusives toute l'année sur nos best-sellers"
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Garantie 2 ans",
      description: "Tous nos produits sont couverts par notre garantie longue durée"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Paiement sécurisé",
      description: "Transactions cryptées avec 3D Secure"
    },
    {
      icon: <RotateCw className="h-8 w-8" />,
      title: "Retours faciles",
      description: "30 jours pour changer d'avis, sans justification"
    },
    {
      icon: <Headset className="h-8 w-8" />,
      title: "Support 7j/7",
      description: "Assistance technique disponible même le week-end"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Pourquoi acheter chez <span className="text-primary">GHOTIK</span> ?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg">
            <span className="font-bold">+5000 clients satisfaits</span> depuis notre création
          </p>
          <div className="flex justify-center space-x-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-sm text-muted-foreground ml-1">4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
}