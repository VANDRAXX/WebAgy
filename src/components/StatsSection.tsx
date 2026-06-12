"use client";

import { motion } from "framer-motion";
import { company } from "@/data/company";

export function StatsSection() {
  return (
    <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] bg-deepGreen p-6 text-white shadow-premium sm:p-8 lg:p-10"
        >
          <div className="absolute inset-0 bg-hero-radial opacity-80" />
          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {company.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur"
              >
                <p className="font-display text-4xl font-bold text-goldAccent lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/75">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
