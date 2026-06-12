"use client";

import { motion } from "framer-motion";
import {
  Handshake,
  MessagesSquare,
  Network,
  PackageCheck,
  Sprout,
  Truck,
  type LucideIcon
} from "lucide-react";
import { company, type ServiceIcon } from "@/data/company";
import { SectionHeader } from "@/components/SectionHeader";

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  Truck,
  Handshake,
  PackageCheck,
  MessagesSquare,
  Network,
  Sprout
};

export function ServicesSection() {
  return (
    <section id="layanan" className="section-padding bg-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Layanan"
          title="Layanan Kami"
          description="Rangkaian solusi agribisnis yang dirancang untuk membantu petani, pelaku usaha, dan institusi menjalankan program pertanian secara lebih efisien."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {company.services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="group premium-card relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-goldAccent/40 hover:shadow-premium"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-freshGreen/10 transition group-hover:bg-goldAccent/15" />
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-deepGreen text-goldAccent shadow-sm">
                  <Icon size={25} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-deepGreen">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-mutedText">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
