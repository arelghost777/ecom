'use client';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Variantes d'animation
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 1, 
      ease: [0.2, 0.65, 0.3, 0.9],
      delay: 0.3
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6,
      delay: 0.6,
      type: "spring",
      stiffness: 200
    }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { scale: 0.98 }
};

export default function HeroSlider() {
    const slides = [
        {
            id: 1,
            title: "PS5 Edition Standard",
            description: "Livraison gratuite + 2 accessoires offerts",
            price: "499,99 €",
            cta: "Acheter maintenant",
            image: "/pc3.png",
            bgColor: "bg-gradient-to-r from-blue-900 to-black",
            link: "/produits/ps5-standard"
        },
        {
            id: 2,
            title: "PS5 Edition Digitale",
            description: "Livraison gratuite + 2 accessoires offerts",
            price: "399,99 €",
            cta: "Acheter maintenant",
            image: "/pc1.webp",
            bgColor: "bg-gradient-to-r from-purple-900 to-black",
            link: "/produits/ps5-digital"
        },
        {
            id: 3,
            title: "Accessoires PS5",
            description: "Manettes, casques et plus encore",
            price: "À partir de 59,99 €",
            cta: "Découvrir les accessoires",
            image: "/gc2.webp",
            bgColor: "bg-gradient-to-r from-red-900 to-black",
            link: "/accessoires"
        },
    ];

    return (
        <section className="relative w-full md:h-[600px] p-2">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ 
                    delay: 5000, 
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                pagination={{ 
                    clickable: true,
                    dynamicBullets: true,
                    dynamicMainBullets: 3
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                speed={800} // Durée de transition entre slides
                className="h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className={`flex items-center justify-center h-full rounded-xl ${slide.bgColor} text-white relative py-6 overflow-hidden`}>
                            {/* Overlay animé */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.3 }}
                                transition={{ duration: 1.5 }}
                                className="absolute inset-0 bg-black/30"
                            />
                            
                            <div className="relative text-center p-6 container mx-auto flex flex-col md:flex-row items-center gap-8 z-10">
                                {/* Contenu texte */}
                                <motion.div 
                                    className="order-last md:w-1/2 space-y-4 md:space-y-6"
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        visible: {
                                            transition: { staggerChildren: 0.1 }
                                        }
                                    }}
                                >
                                    <motion.h1 
                                        variants={{textVariants}}
                                        className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
                                    >
                                        {slide.title}
                                    </motion.h1>
                                    
                                    <motion.p 
                                        variants={{textVariants}}
                                        className="text-lg md:text-xl text-gray-200"
                                    >
                                        {slide.description}
                                    </motion.p>
                                    
                                    <motion.p 
                                        variants={{textVariants}}
                                        className="text-2xl md:text-3xl font-bold text-yellow-400"
                                    >
                                        {slide.price}
                                    </motion.p>
                                    
                                    <motion.div variants={{textVariants}}>
                                        <Link href={slide.link}>
                                            <motion.button 
                                                variants={{buttonVariants}}
                                                whileHover="hover"
                                                whileTap="tap"
                                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
                                            >
                                                {slide.cta}
                                            </motion.button>
                                        </Link>
                                    </motion.div>
                                </motion.div>

                                {/* Image produit */}
                                <motion.div 
                                    className="order-first md:w-1/2 flex justify-center"
                                    initial="hidden"
                                    animate="visible"
                                    variants={{imageVariants}}
                                >
                                    <motion.div
                                        animate={{
                                            y: [0, -15, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <Image 
                                            src={slide.image} 
                                            alt={slide.title}
                                            width={500}
                                            height={500}
                                            className="max-h-[250px] md:max-h-[400px] object-contain"
                                            priority={slide.id === 1}
                                        />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            {/* Custom Navigation Arrows avec animation */}
            <motion.div 
                className="swiper-button-next hidden md:block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            />
            <motion.div 
                className="swiper-button-prev hidden md:block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            />
        </section>
    );
}