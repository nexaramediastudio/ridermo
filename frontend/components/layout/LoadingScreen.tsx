"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/ui/BrandLogo";
import BrandWordmark from "@/components/ui/BrandWordmark";

const MIN_DURATION_MS = 2200;

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const finishedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const start = Date.now();
    let raf = 0;
    let fadeTimer = 0;

    const complete = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      setProgress(100);
      fadeTimer = window.setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
        onCompleteRef.current();
      }, 400);
    };

    const tick = () => {
      const elapsed = Date.now() - start;
      const target = Math.min(100, (elapsed / MIN_DURATION_MS) * 100);
      setProgress(target);
      if (elapsed < MIN_DURATION_MS) {
        raf = requestAnimationFrame(tick);
      } else {
        complete();
      }
    };
    raf = requestAnimationFrame(tick);

    const failSafe = window.setTimeout(complete, MIN_DURATION_MS + 800);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(failSafe);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0B0B]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tvs-red/20 blur-[120px]" />

          <div className="relative z-10 flex flex-col items-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
            >
              <BrandLogo size={56} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-bold tracking-tight md:text-5xl"
            >
              <BrandWordmark />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-gray-text"
            >
              TVS Showroom
            </motion.p>

            <div className="mt-12 h-[2px] w-48 overflow-hidden rounded-full bg-white/10 md:w-56">
              <div
                className="h-full rounded-full bg-gradient-to-r from-tvs-red via-red-400 to-tvs-red shadow-[0_0_12px_rgba(225,6,0,0.5)] transition-[width] duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-4 text-[11px] font-medium tabular-nums tracking-widest text-gray-text">
              {Math.round(progress)}%
            </p>
          </div>

          <p className="absolute bottom-10 text-[10px] uppercase tracking-[0.3em] text-gray-text/60">
            Authorized TVS Dealer
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
