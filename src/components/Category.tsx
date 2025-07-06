'use client';
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function CategorySection() {
  const categories = [
    {
      id: 1,
      title: "Consoles PS5",
      description: "Découvrez les dernières éditions",
      image: "/ps4.jpg",
      link: "/consoles",
      bgColor: "bg-gradient-to-br from-blue-900 to-black",
    },
    {
      id: 2,
      title: "Accessoires",
      description: "Optimisez votre expérience gaming",
      image: "/ps1.jpg",
      link: "/accessoires",
      bgColor: "bg-gradient-to-br from-gray-900 to-black",
    },
    {
      id: 3,
      title: "Packs Exclusifs",
      description: "Économisez avec nos bundles",
      image: "/ctr.jpg",
      link: "/packs",
      bgColor: "bg-gradient-to-br from-red-900 to-black",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Nos Catégories Phares
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link 
              href={category.link} 
              key={category.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={cn(
                "aspect-square overflow-hidden relative",
                category.bgColor
              )}>
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-80 group-hover:scale-120 ease-in-out transition transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-lg md:text-xl opacity-90">
                    {category.description}
                  </p>
                  <button className="mt-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all">
                    Voir les produits
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link 
            href="/boutique" 
            className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Voir toute la boutique
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}