"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const SCROLL_SHOW = 50;
const SCROLL_HIDE = 15;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();

  const isHome = pathname === "/";
  const showBar = scrolled || !isHome;

  useEffect(() => {
    if (!lenis) return;

    const onScroll = () => {
      const y = lenis.scroll;
      setScrolled((prev) => {
        if (y > SCROLL_SHOW) return true;
        if (y < SCROLL_HIDE) return false;
        return prev;
      });
    };

    onScroll();
    lenis.on("scroll", onScroll);
    return () => lenis.off("scroll", onScroll);
  }, [lenis]);

  useEffect(() => {
    if (!lenis) return;
    if (mobileOpen) {
      lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis.start();
      document.body.style.overflow = "";
    }
  }, [mobileOpen, lenis]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: showBar ? "rgba(11, 11, 11, 0.88)" : "rgba(11, 11, 11, 0)",
        borderColor: showBar ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0)",
        paddingTop: showBar ? 12 : 20,
        paddingBottom: showBar ? 12 : 20,
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-white">
            Ride<span className="text-tvs-red">rmo</span>
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-gray-text sm:block">
            TVS Showroom
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-white ${
                  pathname === link.href ? "text-tvs-red" : "text-gray-text"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-tvs-red"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary" className="!px-6 !py-2.5 !text-xs">
            Book Test Ride
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.06] bg-[#0B0B0B]/98 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-4 py-3 text-base font-medium ${
                      pathname === link.href
                        ? "bg-tvs-red/10 text-tvs-red"
                        : "text-gray-text hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button href="/contact" variant="primary" className="w-full">
                  Book Test Ride
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
