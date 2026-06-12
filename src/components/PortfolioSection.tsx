"use client";

import { motion } from "framer-motion";
import { Boxes, Leaf, MapPin, UsersRound, type LucideIcon } from "lucide-react";
import { company, type PortfolioIcon } from "@/data/company";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

const portfolioIcons: Record<PortfolioIcon, LucideIcon> = {
  UsersRound,
  Boxes,
  Leaf
};

export function PortfolioSection() {
  return (
    <section id="portofolio" className="section-padding bg-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Portofolio"
          title="Portofolio & Aktivitas"
          description={`Beberapa contoh aktivitas dan program agribisnis yang merepresentasikan fokus kerja ${company.name}.`}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {company.portfolio.map((project, index) => {
            const Icon = portfolioIcons[project.icon];
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-deepGreen/10 bg-softCream shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium"
              >
                <div
                  className={cn(
                    "relative h-56 overflow-hidden bg-gradient-to-br p-6 text-white",
                    project.gradient
                  )}
                >
                  <div className="absolute inset-0 opacity-25 field-lines" />
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/20" />
                  <div className="absolute bottom-4 right-4 grid h-20 w-20 place-items-center rounded-[1.5rem] bg-white/20 backdrop-blur">
                    <Icon size={36} aria-hidden="true" />
                  </div>
                  <div className="relative flex h-full flex-col justify-between">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-bold">
                      Aktivitas Agribisnis
                    </span>
                    <div className="max-w-[15rem]">
                      <p className="font-display text-2xl font-bold leading-tight">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-forestGreen">
                    <MapPin size={16} aria-hidden="true" />
                    {project.location}
                  </div>
                  <p className="leading-7 text-mutedText">{project.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
