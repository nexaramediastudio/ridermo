"use client";

import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/layout/LoadingScreen";
import SmoothScroll from "@/components/layout/SmoothScroll";
import RouteScrollReset from "@/components/layout/RouteScrollReset";
import ScrollProgress from "@/components/home/ScrollProgress";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isHome = pathname === "/";
  const [ready, setReady] = useState(false);

  const handleLoadComplete = useCallback(() => setReady(true), []);

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <SmoothScroll>
      <RouteScrollReset />
      <LoadingScreen onComplete={handleLoadComplete} />
      {isHome && ready && <ScrollProgress />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={!ready}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </motion.div>
    </SmoothScroll>
  );
}
