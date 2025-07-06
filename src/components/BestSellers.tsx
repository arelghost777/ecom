'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Star, ArrowRight } from 'lucide-react';

export default function BestSellers() {
  const bestSellers = [
    {
      id: 1,
      name: "PS5 Édition Digitale",
      price: 449.99,
      originalPrice: 499.99,
      image: "/pc3.png",
      rating: 4.8,
      reviews: 124,
      link: "/produits/ps5-digital"
    },
    {
      id: 2,
      name: "Casque Pulse 3D",
      price: 99.99,
      originalPrice: 129.99,
      image: "/pc4.jpg",
      rating: 4.6,
      reviews: 89,
      link: "/produits/pulse-3d"
    },
    {
      id: 3,
      name: "Manette DualSense",
      price: 69.99,
      originalPrice: 79.99,
      image: "/pc5.webp",
      rating: 4.7,
      reviews: 156,
      link: "/produits/dualsense"
    },
    {
      id: 4,
      name: "Station de Charge DualSense",
      price: 39.99,
      originalPrice: 49.99,
      image: "/pc1.webp",
      rating: 4.5,
      reviews: 72,
      link: "/produits/charging-station"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Nos Best-Sellers</h2>
          <Link href="/best-sellers" className="flex items-center text-primary hover:underline">
            Voir tout <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-12"
        >
          {bestSellers.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow pb-4">
                <div className="relative h-60">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {product.originalPrice && (
                    <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <div className="flex items-center">
                    <span className="text-xl font-bold">{product.price.toFixed(2)}€</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
                        {product.originalPrice.toFixed(2)}€
                      </span>
                    )}
                  </div>
                  <Button className="w-full mt-4" asChild>
                    <Link href={product.link}>
                      Ajouter au panier
                    </Link>
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}