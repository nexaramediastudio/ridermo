"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MIN_DURATION_MS = 2200;

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const finishedRef = useRef(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const start = Date.now();
    let raf = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const tick = () => {
      const elapsed = Date.now() - start;
      const target = Math.min(92, (elapsed / MIN_DURATION_MS) * 92);
      setProgress((p) => Math.max(p, target));
      if (elapsed < MIN_DURATION_MS) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;

      const remaining = Math.max(0, MIN_DURATION_MS - (Date.now() - start));
      timeouts.push(
        setTimeout(() => {
          setProgress(100);
          timeouts.push(
            setTimeout(() => {
              setVisible(false);
              document.body.style.overflow = "";
              onComplete();
            }, 400)
          );
        }, remaining)
      );
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      cancelAnimationFrame(raf);
      timeouts.forEach(clearTimeout);
      window.removeEventListener("load", finish);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B0B0B]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tvs-red/25 blur-[120px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-tvs-red/10 blur-[80px]"
            animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex flex-col items-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <motion.span
                className="text-2xl font-bold text-tvs-red"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                R
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-bold tracking-tight text-white md:text-5xl"
            >
              Ride<span className="text-tvs-red">rmo</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-gray-text"
            >
              TVS Showroom
            </motion.p>

            <div className="mt-12 h-[2px] w-48 overflow-hidden rounded-full bg-white/10 md:w-56">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-tvs-red via-red-400 to-tvs-red shadow-[0_0_12px_rgba(225,6,0,0.6)]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.15, ease: "easeOut" }}
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
