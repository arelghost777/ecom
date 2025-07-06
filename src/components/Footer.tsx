import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Colonne Aide */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Aide</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-yellow-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/retours" className="hover:text-yellow-400 transition-colors">
                  Retours & Échanges
                </Link>
              </li>
              <li>
                <Link href="/livraison" className="hover:text-yellow-400 transition-colors">
                  Livraison
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne Compte */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Mon Compte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/connexion" className="hover:text-yellow-400 transition-colors">
                  Connexion
                </Link>
              </li>
              <li>
                <Link href="/inscription" className="hover:text-yellow-400 transition-colors">
                  Créer un compte
                </Link>
              </li>
              <li>
                <Link href="/commandes" className="hover:text-yellow-400 transition-colors">
                  Suivi de commande
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-yellow-400 transition-colors">
                  Liste de souhaits
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne Informations */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cgv" className="hover:text-yellow-400 transition-colors">
                  Conditions générales
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-yellow-400 transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-yellow-400 transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-yellow-400 transition-colors">
                  Préférences cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Nous suivre</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" aria-label="Facebook" className="hover:text-yellow-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:text-yellow-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-yellow-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="YouTube" className="hover:text-yellow-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <p className="text-sm text-gray-400">
                Abonnez-vous pour recevoir nos offres exclusives
              </p>
              <Link 
                href="/newsletter" 
                className="inline-block mt-2 text-yellow-400 hover:underline text-sm"
              >
                S&apos;abonner →
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 GHOTIK - Tous droits réservés
          </div>
          <div className="flex space-x-4">
            <img 
              src="/payment-methods/visa.svg" 
              alt="Visa" 
              className="h-6 opacity-80" 
            />
            <img 
              src="/payment-methods/mastercard.svg" 
              alt="Mastercard" 
              className="h-6 opacity-80" 
            />
            <img 
              src="/payment-methods/paypal.svg" 
              alt="PayPal" 
              className="h-6 opacity-80" 
            />
            <img 
              src="/payment-methods/cb.svg" 
              alt="Carte Bancaire" 
              className="h-6 opacity-80" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
}