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
      "Meambangun Ekosistem Pertanian yang Lebih Maju, Efisien, dan Berkelanjutan",
    subheadline:
      "AGRIMARKET DIGITAL hadir sebagai ayay ayayasdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe.",
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
      "Pasdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz.",
    highlights: [
      {
        title: "Berorientasi pada keberlanjutan",
        description:
          "asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz."
      },
      {
        title: "Mendukung petani lokal",
        description:
          "asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz."
      },
      {
        title: "Mengutamakan kualitas dan kepercayaan",
        description:
          "asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz."
      }
    ] satisfies Highlight[],
    vision:
      "asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz.",
    mission:
      "asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz."
  },
  services: [
    {
      title: "Distribusi Hasil Pertanian",
      description:
        "asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz.",
      icon: "Truck"
    },
    {
      title: "Kemitraan Petani",
      description:
        "asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz.",
      icon: "Handshake"
    },
    {
      title: "Penyediaan Produk Agrikultur",
      description:
        "asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz.",
      icon: "PackageCheck"
    },
    {
      title: "Konsultasi & Pendampingan",
      description:
        "asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz.",
      icon: "MessagesSquare"
    },
    {
      title: "Pengelolaan Rantai Pasok",
      description:
        "asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz.",
      icon: "Network"
    },
    {
      title: "Pengembangan Program Pertanian",
      description:
        "asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz.",
      icon: "Sprout"
    }
  ] satisfies ServiceItem[],
  advantages: [
    {
      title: "Pengalaman di sektor pertanian",
      description:
        "asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz."
    },
    {
      title: "Jaringan petani dan mitra luas",
      description:
        "asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz."
    },
    {
      title: "Proses kerja transparan",
      description:
        "asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz."
    },
    {
      title: "Fokus pada kualitas dan keberlanjutan",
      description:
        "asdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz."
    },
    {
      title: "Tim profesional dan responsif",
      description:
        ""
    }
  ] satisfies AdvantageItem[],
  portfolio: [
    {
      title: "Push Up sehari 100x",
      location: "Pesantren Hamka Padang",
      description:
        "Pasdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz.",
      icon: "UsersRound",
      gradient: "from-[#0F3D2E] via-[#166534] to-[#22C55E]"
    },
    {
      title: "Makan sepiring dua orang",
      location: "Kamar utsman",
      description:
        "Pasdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz.",
      icon: "Boxes",
      gradient: "from-[#166534] via-[#4D7C0F] to-[#D6A94A]"
    },
    {
      title: "Main BL",
      location: "Kandang ayam belakang SMA",
      description:
        "Pasdfghjkl qwertyuiop zxcvbnm. lkjasdf qweqwe zxcvzx asdqwe. poiyut rewq asdfg hjklmnb vcxz.",
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
