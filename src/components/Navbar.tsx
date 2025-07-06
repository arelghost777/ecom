'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setIsMobileMenuOpen(false);
    window.addEventListener('routechange', handleRouteChange);
    return () => window.removeEventListener('routechange', handleRouteChange);
  }, []);

  // Handle scroll and body overflow
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Mobile menu items data
  const mobileMenuItems = [
    {
      title: "Console PS5",
      items: [
        { href: "/consoles/standard", label: "Édition Standard" },
        { href: "/consoles/digital", label: "Édition Digitale" },
        { href: "/consoles/bundles", label: "Bundles Exclusifs" },
      ]
    },
    {
      title: "Accessoires",
      items: [
        { href: "/accessories/controllers", label: "Manettes" },
        { href: "/accessories/headsets", label: "Casques" },
        { href: "/accessories/charging", label: "Stations de charge" },
      ]
    },
    {
      singleItems: [
        { href: "/promotions", label: "Promotions" },
        { href: "/support", label: "Support" },
      ]
    }
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all",
      isScrolled ? "border-b shadow-sm" : ""
    )}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center sticky top-0 z-60">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-barlow font-bold tracking-wider text-2xl hover:opacity-80 transition-opacity">
              GHOTIK
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8" role="navigation">
            <NavigationMenu>
              <NavigationMenuList>
                {/* PS5 Console Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:bg-accent/50">
                    Console PS5
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                          <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-accent" asChild>
                        <Link href="/consoles/standard">
                            <h2 className="mb-2 mt-4 text-lg font-medium">
                              Édition Standard
                            </h2>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Avec lecteur Blu-ray Ultra HD
                            </p>
                        </Link>
                          </NavigationMenuLink>
                      </li>
                      <li>
                          <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-accent" asChild>
                        <Link href="/consoles/digital">
                            <h2 className="mb-2 mt-4 text-lg font-medium">
                              Édition Digitale
                            </h2>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Téléchargez vos jeux directement
                            </p>
                        </Link>
                          </NavigationMenuLink>
                      </li>
                      <li className="md:col-span-2">
                          <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-accent" asChild>
                        <Link href="/consoles/bundles">
                            <h2 className="mb-2 mt-4 text-lg font-medium">
                              Bundles Exclusifs
                            </h2>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Console + jeux + accessoires
                            </p>
                        </Link>
                          </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Accessories Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:bg-accent/50">
                    Accessoires
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
                      <li>
                          <NavigationMenuLink className="flex flex-col items-center justify-center p-4 rounded-md hover:bg-accent" asChild>
                        <Link href="/accessories/controllers">
                            <div className="text-lg font-medium mb-2">Manettes</div>
                            <p className="text-sm text-center text-muted-foreground">
                              DualSense et plus
                            </p>
                        </Link>
                          </NavigationMenuLink>
                      </li>
                      <li>
                          <NavigationMenuLink className="flex flex-col items-center justify-center p-4 rounded-md hover:bg-accent" asChild>
                        <Link href="/accessories/headsets">
                            <div className="text-lg font-medium mb-2">Casques</div>
                            <p className="text-sm text-center text-muted-foreground">
                              Audio 3D immersif
                            </p>
                        </Link>
                          </NavigationMenuLink>
                      </li>
                      <li>
                          <NavigationMenuLink className="flex flex-col items-center justify-center p-4 rounded-md hover:bg-accent" asChild>
                        <Link href="/accessories/charging">
                            <div className="text-lg font-medium mb-2">Stations de charge</div>
                            <p className="text-sm text-center text-muted-foreground">
                              Chargez jusqu&apos;à 2 manettes
                            </p>
                        </Link>
                          </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Promotions Link */}
                <NavigationMenuItem>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-accent/50")} asChild>
                  <Link href="/promotions">
                      Promotions
                  </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Support Link */}
                <NavigationMenuItem>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-accent/50")} asChild>
                  <Link href="/support">
                      Support
                  </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hidden sm:inline-flex" asChild>
              <Link href="/search">
                <Search className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hidden sm:inline-flex" asChild>
              <Link href="/account">
                <User className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full relative" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen} 
              aria-controls="mobile-menu" 
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
        id="mobile-menu"
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out",
          "md:hidden",
          isMobileMenuOpen 
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="container flex flex-col pt-20 pb-8 px-4 border bg-blur bg-white dark:bg-black overflow-auto backdrop-blur-lg">
          <nav className="flex-1 space-y-6">
            {mobileMenuItems.map((section, index) => (
              <div key={index} className="space-y-2">
                {section.title && (
                  <h3 className="text-lg font-semibold px-4">{section.title}</h3>
                )}
                
                {section.items && (
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link 
                          href={item.href}
                          className="block px-4 py-2 rounded-lg hover:bg-accent transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                
                {section.singleItems && (
                  <div className="space-y-1">
                    {section.singleItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-lg font-medium rounded-lg hover:bg-accent transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="pt-6 border-t border-muted">
            <div className="flex items-center justify-center space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link href="/search" onClick={() => setIsMobileMenuOpen(false)}>
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Rechercher</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link href="/account" onClick={() => setIsMobileMenuOpen(false)}>
                  <User className="h-5 w-5" />
                  <span className="sr-only">Mon compte</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full relative" asChild>
                <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Panier</span>
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
}