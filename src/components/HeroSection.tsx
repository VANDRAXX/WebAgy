"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, CheckCircle2, Leaf, Sprout } from "lucide-react";
import { company } from "@/data/company";

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative isolate overflow-hidden bg-deepGreen pt-28 text-white sm:pt-32"
    >
      <div className="absolute inset-0 -z-20 bg-hero-radial" />
      <div className="absolute inset-0 -z-10 opacity-20 field-lines" />
      <div className="absolute -left-24 top-32 h-64 w-64 rounded-full bg-freshGreen/20 blur-3xl" />
      <div className="absolute -right-28 bottom-16 h-72 w-72 rounded-full bg-goldAccent/20 blur-3xl" />

      <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-14 pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
            <Sprout size={16} className="text-goldAccent" aria-hidden="true" />
            {company.hero.badge}
          </div>
          <h1 className="text-balance font-display text-4xl font-bold leading-[1.04] tracking-normal sm:text-5xl lg:text-6xl xl:text-7xl">
            {company.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            {company.hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontak"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-goldAccent px-6 py-4 text-sm font-bold text-deepGreen shadow-glow transition hover:-translate-y-0.5 hover:bg-[#e5bd62]"
            >
              {company.hero.primaryCta}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              {company.hero.secondaryCta}
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {company.hero.stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
              >
                <p className="text-2xl font-bold text-goldAccent sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-medium leading-5 text-white/70 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur sm:block" />
          <div className="absolute -right-5 top-14 grid h-16 w-16 place-items-center rounded-full bg-goldAccent text-deepGreen shadow-glow">
            <Leaf size={28} aria-hidden="true" />
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-premium backdrop-blur-xl">
            <div className="absolute inset-0 leaf-pattern opacity-80" />
            <div className="relative rounded-[1.5rem] bg-softCream p-5 text-darkText shadow-2xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-forestGreen">
                    Agro Operations
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-deepGreen">
                    Panen Terukur, Pasok Stabil
                  </h3>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-deepGreen text-goldAccent">
                  <BarChart3 size={22} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-deepGreen via-forestGreen to-freshGreen p-4 text-white">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-14 rounded-xl border border-white/10 bg-white/10"
                    />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <div>
                    <p className="text-sm text-white/70">Kualitas panen</p>
                    <p className="text-2xl font-bold">Grade A</p>
                  </div>
                  <CheckCircle2 className="text-goldAccent" size={32} />
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {company.hero.stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-deepGreen/10 bg-white p-4"
                  >
                    <p className="text-2xl font-black text-deepGreen">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs font-semibold leading-5 text-mutedText">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
