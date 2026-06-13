"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { company } from "@/data/company";
import { SectionHeader } from "@/components/SectionHeader";

export function AdvantagesSection() {
  return (
    <section id="keunggulan" className="section-padding bg-softCream leaf-pattern">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Keunggulan"
              title="Mengapa Memilih Kami?"
              description="asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz."
              align="left"
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mt-8 rounded-3xl bg-deepGreen p-6 text-white shadow-premium"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-goldAccent text-deepGreen">
                  <ShieldCheck size={24} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-bold">Standar Kerja Terukur</h3>
                  <p className="mt-2 leading-7 text-white/75">
                    asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {company.advantages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.52, delay: index * 0.06 }}
                className="rounded-2xl border border-deepGreen/10 bg-white/80 p-5 shadow-soft backdrop-blur"
              >
                <CheckCircle2 className="text-forestGreen" size={25} />
                <h3 className="mt-4 font-bold text-deepGreen">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mutedText">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
