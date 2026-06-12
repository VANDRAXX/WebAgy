"use client";

import { FormEvent } from "react";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  type LucideIcon
} from "lucide-react";
import { company } from "@/data/company";
import { SectionHeader } from "@/components/SectionHeader";

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("Contact form submitted", Object.fromEntries(formData.entries()));
    window.alert("Terima kasih. Pesan Anda sudah tercatat di tampilan demo.");
    event.currentTarget.reset();
  };

  return (
    <section id="kontak" className="section-padding bg-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Kontak"
          title="Hubungi Kami"
          description="Diskusikan kebutuhan distribusi, kemitraan petani, atau program pertanian berkelanjutan bersama tim kami."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-5">
            <div className="premium-card p-6">
              <h3 className="font-display text-2xl font-bold text-deepGreen">
                Informasi Perusahaan
              </h3>
              <div className="mt-6 grid gap-4">
                <ContactRow
                  icon={MapPin}
                  label="Alamat"
                  value={company.contact.address}
                />
                <ContactRow icon={Mail} label="Email" value={company.contact.email} />
                <ContactRow
                  icon={Phone}
                  label="Telepon/WA"
                  value={company.contact.phone}
                />
                <ContactRow
                  icon={Clock}
                  label="Jam Operasional"
                  value={company.contact.hours}
                />
              </div>
            </div>

            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-deepGreen/10 bg-deepGreen p-6 text-white shadow-soft">
              <div className="absolute inset-0 bg-cream-grid bg-[length:38px_38px] opacity-10" />
              <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-goldAccent/20 blur-2xl" />
              <div className="relative flex h-full min-h-[232px] flex-col justify-between">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-goldAccent">
                      Lokasi
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold">
                      Google Maps Placeholder
                    </h3>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-goldAccent">
                    <MapPin size={24} aria-hidden="true" />
                  </span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <p className="text-sm leading-6 text-white/75">
                    ADALAH POKOKNYA
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="premium-card p-6 sm:p-8">
            <div className="mb-7 flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-deepGreen text-goldAccent">
                <MessageCircle size={23} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold text-deepGreen">
                  Kirim Pesan
                </h3>
                <p className="mt-2 text-sm leading-6 text-mutedText">
                  Form ini hanya UI demo dan tidak mengirim data ke backend.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <Field label="Nama" name="nama" placeholder="Nama lengkap" />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="nama@email.com"
              />
              <Field
                label="Nomor WhatsApp"
                name="whatsapp"
                placeholder="+62 812-0000-0000"
              />
              <div>
                <label
                  htmlFor="pesan"
                  className="mb-2 block text-sm font-bold text-deepGreen"
                >
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  required
                  rows={5}
                  placeholder="Ceritakan kebutuhan agribisnis Anda"
                  className="w-full resize-none rounded-2xl border border-deepGreen/10 bg-softCream px-4 py-3 text-sm text-darkText outline-none transition placeholder:text-mutedText/60 focus:border-goldAccent focus:bg-white focus:ring-4 focus:ring-goldAccent/15"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-deepGreen px-6 py-4 text-sm font-bold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-forestGreen"
              >
                <Send size={18} aria-hidden="true" />
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl bg-softCream p-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-forestGreen shadow-sm">
        <Icon size={20} aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-mutedText">
          {label}
        </p>
        <p className="mt-1 font-semibold text-deepGreen">{value}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-bold text-deepGreen">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-2xl border border-deepGreen/10 bg-softCream px-4 py-3 text-sm text-darkText outline-none transition placeholder:text-mutedText/60 focus:border-goldAccent focus:bg-white focus:ring-4 focus:ring-goldAccent/15"
      />
    </div>
  );
}
