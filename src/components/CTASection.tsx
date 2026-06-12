"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { whatsappLink } from "@/lib/utils";

export function CTASection() {
  const waHref = whatsappLink(company.contact.whatsappNumber, company.contact.message);

  return (
    <section className="relative overflow-hidden bg-softCream py-20 sm:py-24">
      <div className="absolute inset-0 bg-cream-grid bg-[length:42px_42px] opacity-50" />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-deepGreen via-forestGreen to-[#103827] p-7 text-white shadow-premium sm:p-10 lg:p-14"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full border border-goldAccent/30 bg-goldAccent/10 px-4 py-1.5 text-sm font-bold text-goldAccent">
                Kolaborasi Agribisnis
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-normal sm:text-4xl lg:text-5xl">
                {company.cta.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                {company.cta.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-goldAccent px-6 py-4 text-sm font-bold text-deepGreen shadow-glow transition hover:-translate-y-0.5 hover:bg-[#e5bd62]"
              >
                <MessageCircle size={18} aria-hidden="true" />
                {company.cta.primaryLabel}
              </a>
              <a
                href="#tentang"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                {company.cta.secondaryLabel}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
