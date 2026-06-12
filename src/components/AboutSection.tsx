"use client";

import { motion } from "framer-motion";
import { CheckCircle2, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import { company } from "@/data/company";
import { SectionHeader } from "@/components/SectionHeader";

const highlightIcons = [ShieldCheck, HeartHandshake, CheckCircle2];

export function AboutSection() {
  return (
    <section id="tentang" className="section-padding bg-softCream">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              eyebrow="Tentang Kami"
              title={company.about.title}
              description={company.about.description}
              align="left"
            />
            <div className="mt-8 grid gap-4">
              {company.about.highlights.map((item, index) => {
                const Icon = highlightIcons[index] ?? CheckCircle2;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex gap-4 rounded-2xl border border-deepGreen/10 bg-white/70 p-4 shadow-sm"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-deepGreen text-goldAccent">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-bold text-deepGreen">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-mutedText">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-goldAccent/20 blur-2xl" />
            <div className="premium-card relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-goldAccent via-freshGreen to-deepGreen" />
              <div className="rounded-2xl bg-deepGreen p-6 text-white">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-goldAccent">
                      Visi & Misi
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-bold">
                      Pertanian yang Lebih Terkoneksi
                    </h3>
                  </div>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-goldAccent">
                    <Target size={26} aria-hidden="true" />
                  </span>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                    <p className="text-sm font-bold text-goldAccent">Visi</p>
                    <p className="mt-2 leading-7 text-white/80">
                      {company.about.vision}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                    <p className="text-sm font-bold text-goldAccent">Misi</p>
                    <p className="mt-2 leading-7 text-white/80">
                      {company.about.mission}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
