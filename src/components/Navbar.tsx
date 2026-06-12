"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-deepGreen/10 bg-softCream/90 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        className={cn(
          "section-shell flex items-center justify-between gap-5 transition-[height] duration-500 ease-out",
          isScrolled ? "h-20" : "h-28 sm:h-32"
        )}
      >
        <a
          href="#beranda"
          aria-label="Kembali ke beranda"
          className={cn(
            "flex min-w-0 items-center transition-[gap] duration-500",
            isScrolled ? "gap-3" : "gap-4"
          )}
          onClick={() => setIsOpen(false)}
        >
          <span
            className={cn(
              "grid shrink-0 place-items-center overflow-hidden border border-deepGreen/10 bg-white shadow-glow transition-all duration-500 ease-out",
              isScrolled
                ? "h-12 w-12 rounded-2xl p-1"
                : "h-20 w-20 rounded-[1.65rem] p-1.5 sm:h-24 sm:w-24 sm:rounded-[1.85rem] sm:p-2"
            )}
          >
            <Image
              src={company.logoMarkUrl}
              alt={`${company.name} logo`}
              width={220}
              height={160}
              priority
              className="h-full w-full object-contain"
            />
          </span>
          <span className="min-w-0">
            <span
              className={cn(
                "block truncate font-bold leading-tight transition-all duration-500",
                isScrolled
                  ? "text-sm text-deepGreen sm:text-base"
                  : "text-base text-white sm:text-lg"
              )}
            >
              {company.name}
            </span>
            <span
              className={cn(
                "hidden text-xs font-medium transition-colors duration-500 sm:block",
                isScrolled ? "text-mutedText" : "text-white/75"
              )}
            >
              {company.tagline}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {company.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                isScrolled
                  ? "text-deepGreen/80 hover:bg-white/70 hover:text-deepGreen"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 rounded-full bg-deepGreen px-5 py-3 text-sm font-bold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-forestGreen"
          >
            <Phone size={17} aria-hidden="true" />
            Hubungi Kami
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-2xl border border-deepGreen/10 bg-white/80 text-deepGreen shadow-sm lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="section-shell pb-5 lg:hidden"
          >
            <div className="premium-card overflow-hidden p-2">
              {company.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-deepGreen transition hover:bg-softCream"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#kontak"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-deepGreen px-4 py-3 text-sm font-bold text-white"
              >
                <Phone size={17} aria-hidden="true" />
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
