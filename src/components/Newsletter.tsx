'use client';
import { Mail, Gift } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous ajouteriez la logique d'inscription
    console.log('Email submitted:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-10 shadow-lg">
          {isSubscribed ? (
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500 mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Merci pour votre inscription !</h2>
              <p className="text-lg mb-6">
                Vous recevrez bientôt notre prochaine newsletter avec les meilleures offres PS5.
              </p>
              <Button 
                variant="outline" 
                className="bg-transparent text-white border-white hover:bg-white hover:text-blue-900"
                onClick={() => setIsSubscribed(false)}
              >
                S'abonner à nouveau
              </Button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="h-6 w-6 text-yellow-300" />
                  <span className="font-semibold text-yellow-300">OFFRE EXCEPTIONNELLE</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Restez informé des <span className="text-yellow-300">promotions PS5</span>
                </h2>
                <p className="text-lg mb-4">
                  Abonnez-vous à notre newsletter et recevez en exclusivité :
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">✓</span>
                    <span>10% de réduction immédiate pour les nouveaux abonnés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Accès 24h en avance aux soldes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">✓</span>
                    <span>Alertes exclusives sur les stocks PS5</span>
                  </li>
                </ul>
              </div>

              <div className="md:w-1/2 w-full">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Votre adresse email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="votre@email.com"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-lg"
                  >
                    S'abonner
                  </Button>
                  <p className="text-xs text-white/70">
                    En vous abonnant, vous acceptez nos conditions d'utilisation.
                    <br />Désabonnement possible à tout moment.
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}