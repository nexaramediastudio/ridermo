"use client";

import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
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

  if (!ready) {
    return <LoadingScreen onComplete={handleLoadComplete} />;
  }

  return (
    <SmoothScroll>
      <RouteScrollReset />
      {isHome && <ScrollProgress />}
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </SmoothScroll>
  );
}
