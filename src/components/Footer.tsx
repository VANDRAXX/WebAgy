import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deepGreen text-white">
      <div className="section-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <a href="#beranda" className="flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white p-1">
                <Image
                  src={company.logoMarkUrl}
                  alt={`${company.name} logo`}
                  width={72}
                  height={52}
                  className="h-full w-full object-contain"
                />
              </span>
              <span>
                <span className="block font-bold">{company.name}</span>
                <span className="text-sm text-white/60">{company.tagline}</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm leading-7 text-white/70">
              {company.footerDescription}
            </p>
          </div>

          <FooterGroup title="Quick Links">
            {company.navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </FooterGroup>

          <FooterGroup title="Layanan">
            {company.services.slice(0, 5).map((service) => (
              <a key={service.title} href="#layanan">
                {service.title}
              </a>
            ))}
          </FooterGroup>

          <div>
            <h3 className="font-bold text-goldAccent">Kontak</h3>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              <p className="flex gap-3">
                <MapPin size={17} className="shrink-0 text-goldAccent" />
                {company.contact.address}
              </p>
              <p className="flex gap-3">
                <Mail size={17} className="shrink-0 text-goldAccent" />
                {company.contact.email}
              </p>
              <p className="flex gap-3">
                <Phone size={17} className="shrink-0 text-goldAccent" />
                {company.contact.phone}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
          Copyright {year} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-bold text-goldAccent">{title}</h3>
      <div className="mt-5 grid gap-3 text-sm text-white/70 [&_a]:transition [&_a:hover]:text-white">
        {children}
      </div>
    </div>
  );
}
