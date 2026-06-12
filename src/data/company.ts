export type ServiceIcon =
  | "Truck"
  | "Handshake"
  | "PackageCheck"
  | "MessagesSquare"
  | "Network"
  | "Sprout";

export type PortfolioIcon = "UsersRound" | "Boxes" | "Leaf";

export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: ServiceIcon;
}

export interface AdvantageItem {
  title: string;
  description: string;
}

export interface PortfolioItem {
  title: string;
  location: string;
  description: string;
  icon: PortfolioIcon;
  gradient: string;
}

export interface ContactItem {
  label: string;
  value: string;
}

export const company = {
  name: "AGRIMARKET DIGITAL",
  tagline: "Belanja Mudah, Hasil Melimpah",
  logoMarkUrl: "/brand/agrimarket-digital-logo-mark.jpg",
  logoFullUrl: "/brand/agrimarket-digital-logo-full.jpg",
  navItems: [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Kontak", href: "#kontak" }
  ] satisfies NavItem[],
  hero: {
    badge: "Company Profile Agribisnis Modern",
    headline:
      "Membangun Ekosistem Pertanian yang Lebih Maju, Efisien, dan Berkelanjutan",
    subheadline:
      "AGRIMARKET DIGITAL hadir sebagai mitra strategis bagi petani, pelaku usaha, dan institusi dalam menghadirkan solusi pertanian yang modern, terpercaya, dan berorientasi pada hasil.",
    primaryCta: "Konsultasi Sekarang",
    secondaryCta: "Lihat Layanan",
    stats: [
      { value: "500+", label: "Petani Mitra" },
      { value: "120+", label: "Proyek Pertanian" },
      { value: "98%", label: "Kepuasan Klien" }
    ] satisfies Metric[]
  },
  about: {
    title: "Tentang AGRIMARKET DIGITAL",
    description:
      "Perusahaan ini berfokus pada pengembangan sektor pertanian melalui layanan distribusi, pendampingan, pengelolaan hasil tani, dan solusi agribisnis yang menghubungkan kebutuhan pasar dengan potensi petani lokal.",
    highlights: [
      {
        title: "Berorientasi pada keberlanjutan",
        description:
          "Mengutamakan praktik agribisnis yang menjaga produktivitas lahan dan nilai jangka panjang."
      },
      {
        title: "Mendukung petani lokal",
        description:
          "Membangun kemitraan yang adil melalui pendampingan, akses pasar, dan proses kerja terukur."
      },
      {
        title: "Mengutamakan kualitas dan kepercayaan",
        description:
          "Memastikan hasil tani, layanan, dan kolaborasi berjalan transparan serta konsisten."
      }
    ] satisfies Highlight[],
    vision:
      "Menjadi mitra agribisnis terpercaya yang memperkuat ekosistem pertanian Indonesia.",
    mission:
      "Menghubungkan petani, pelaku usaha, dan institusi melalui distribusi, pendampingan, dan solusi rantai pasok yang modern."
  },
  services: [
    {
      title: "Distribusi Hasil Pertanian",
      description:
        "Pengelolaan distribusi produk tani dari sumber lokal menuju pasar yang lebih luas dan stabil.",
      icon: "Truck"
    },
    {
      title: "Kemitraan Petani",
      description:
        "Program kerja sama dengan petani untuk meningkatkan kualitas produksi dan akses penjualan.",
      icon: "Handshake"
    },
    {
      title: "Penyediaan Produk Agrikultur",
      description:
        "Penyediaan kebutuhan agrikultur pilihan untuk mendukung produktivitas lahan dan budidaya.",
      icon: "PackageCheck"
    },
    {
      title: "Konsultasi & Pendampingan",
      description:
        "Pendampingan praktis bagi petani, usaha, dan institusi dalam menjalankan program pertanian.",
      icon: "MessagesSquare"
    },
    {
      title: "Pengelolaan Rantai Pasok",
      description:
        "Membantu proses pasok hasil tani agar lebih efisien, terukur, dan transparan.",
      icon: "Network"
    },
    {
      title: "Pengembangan Program Pertanian",
      description:
        "Perancangan program pertanian berkelanjutan untuk komunitas, korporasi, dan wilayah binaan.",
      icon: "Sprout"
    }
  ] satisfies ServiceItem[],
  advantages: [
    {
      title: "Pengalaman di sektor pertanian",
      description:
        "Memahami kebutuhan lapangan, standar kualitas, dan dinamika distribusi hasil tani."
    },
    {
      title: "Jaringan petani dan mitra luas",
      description:
        "Terhubung dengan komunitas petani, pelaku usaha, dan mitra distribusi di berbagai wilayah."
    },
    {
      title: "Proses kerja transparan",
      description:
        "Setiap kolaborasi dirancang dengan alur yang jelas, akuntabel, dan mudah dipantau."
    },
    {
      title: "Fokus pada kualitas dan keberlanjutan",
      description:
        "Menjaga standar produk dan dampak positif bagi petani, pasar, serta lingkungan."
    },
    {
      title: "Tim profesional dan responsif",
      description:
        "Dukungan tim yang cepat, komunikatif, dan siap menyesuaikan kebutuhan mitra."
    }
  ] satisfies AdvantageItem[],
  portfolio: [
    {
      title: "Push Up sehari 100x",
      location: "Pesantren Hamka Padang",
      description:
        "daoihskjnfhjgansjh akjsgdakj sjdhsjda auh sdakua shduhdushak aishdkahsdkjghsukhei aajhsjdhguahdaa.",
      icon: "UsersRound",
      gradient: "from-[#0F3D2E] via-[#166534] to-[#22C55E]"
    },
    {
      title: "Makan sepiring dua orang",
      location: "Kamar utsman",
      description:
        "ashshah uasgygua ajhskjdg wjbe2uhiwu ajshuauihsa ashjhksans shsjhduhs auauasb auhsusa.",
      icon: "Boxes",
      gradient: "from-[#166534] via-[#4D7C0F] to-[#D6A94A]"
    },
    {
      title: "Main BL",
      location: "Kandang ayam belakang SMA",
      description:
        "AKtivitasi sodok meyodok bersama sdkhsjahaishd ajkhsags ajgyysa ashgshgdada.",
      icon: "Leaf",
      gradient: "from-[#0F3D2E] via-[#14532D] to-[#84CC16]"
    }
  ] satisfies PortfolioItem[],
  stats: [
    { value: "500+", label: "Petani Mitra" },
    { value: "120+", label: "Proyek & Aktivitas" },
    { value: "25+", label: "Wilayah Distribusi" },
    { value: "98%", label: "Kepuasan Mitra" }
  ] satisfies Metric[],
  cta: {
    title: "Siap Mengembangkan Potensi Pertanian Bersama Kami?",
    description:
      "Hubungi tim kami untuk berdiskusi mengenai kebutuhan agribisnis, kemitraan petani, distribusi, maupun program pertanian berkelanjutan.",
    primaryLabel: "Hubungi via WhatsApp",
    secondaryLabel: "Lihat Profil Perusahaan"
  },
  contact: {
    address: "Kampus Unand, Limau Manis, Kec. Pauh, Kota Padang",
    email: "agyhamkuy@anjay.com",
    phone: "+62 822-8395-8363",
    whatsappNumber: "6282283958363",
    hours: "Senin - Jumat, 08.00 - 17.00",
    message:
      "Halo AGRIMARKET DIGITAL, saya ingin berdiskusi tentang kebutuhan agribisnis."
  },
  footerDescription:
    "Mitra agribisnis modern untuk distribusi hasil tani, kemitraan petani, pendampingan, dan solusi pertanian berkelanjutan."
} as const;
