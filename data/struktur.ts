/**
 * DATA CONTOH — ganti dengan data resmi himpunan.
 * Satu file ini mengendalikan seluruh halaman /struktur
 * dan /struktur/[slug].
 */

export interface PengurusInti {
  nama: string;
  prodi: string;
  jabatan: string;
  jabatanPendek: string;
  foto: string;
}

export interface Divisi {
  slug: string;
  nama: string;
  kepanjangan: string;
  deskripsi: string;
  foto: string;
  proker: string[];
  staf: { nama: string; peran: string }[];
}

export const ketua: PengurusInti = {
  nama: "Rizky Pratama",
  prodi: "KeuBank '23",
  jabatan: "KETUA HMPS KeuBank",
  jabatanPendek: "Ketua",
  foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
};

export const wakil: PengurusInti = {
  nama: "Salsabila Zahra",
  prodi: "KeuBank '23",
  jabatan: "WAKIL KETUA HMPS KeuBank",
  jabatanPendek: "Wakil Ketua",
  foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
};

export const sambutan: string[] = [
  "Di antara langkah dan waktu, kami berdiri bukan sekadar pengurus, melainkan mahasiswa yang membawa mimpi. Mimpi yang lahir dari harapan sederhana: menjadikan HMPS KeuBank lebih hangat, lebih dekat, dan lebih bermakna.",
  "Kami menyebut langkah ini Vistara Dharma. Vistara adalah keberanian untuk bertumbuh luas tanpa kehilangan arah, sementara Dharma adalah kompas kebenaran dan integritas yang menjaga setiap langkah kami tetap bermakna.",
  "Kabinet ini bukan milik segelintir orang, melainkan milik kita semua. Tempat suara menemukan ruang, gagasan menemukan bentuk, dan aksi menemukan makna. Perlahan kita berjalan bersama: bukan tentang menjadi sempurna, melainkan tentang menjadi berarti.",
];

export const divisi: Divisi[] = [
  {
    slug: "psdm",
    nama: "PSDM",
    kepanjangan: "Pengembangan Sumber Daya Mahasiswa",
    deskripsi:
      "Divisi yang memastikan setiap anggota tumbuh, dari kaderisasi, pelatihan soft skill, hingga menjaga kekeluargaan dan budaya organisasi.",
    foto: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
    proker: [
      "Kaderisasi anggota baru",
      "Pelatihan soft skill & kepemimpinan",
      "Makrab dan gathering anggota",
    ],
    staf: [
      { nama: "Dimas Arya", peran: "Kepala Divisi" },
      { nama: "Nadia Putri", peran: "Sekretaris Divisi" },
      { nama: "Fajar Nugroho", peran: "Staf Ahli" },
      { nama: "Intan Lestari", peran: "Staf" },
    ],
  },
  {
    slug: "akademik",
    nama: "Akademik",
    kepanjangan: "Akademik & Prestasi",
    deskripsi:
      "Divisi yang menjaga nalar kritis dan prestasi anggota lewat diskusi, riset, lomba, dan advokasi akademik mahasiswa KeuBank.",
    foto: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop",
    proker: [
      "Kelompok belajar & bedah materi",
      "Kompetisi dan delegasi lomba",
      "Advokasi akademik mahasiswa",
    ],
    staf: [
      { nama: "Bagas Saputra", peran: "Kepala Divisi" },
      { nama: "Kirana Dewi", peran: "Sekretaris Divisi" },
      { nama: "Yoga Firmansyah", peran: "Staf Ahli" },
      { nama: "Sinta Maharani", peran: "Staf" },
    ],
  },
  {
    slug: "humas",
    nama: "Humas",
    kepanjangan: "Hubungan Masyarakat & Kominfo",
    deskripsi:
      "Wajah dan suara himpunan ke publik. Mengelola media sosial, dokumentasi, publikasi, serta relasi dengan pihak internal dan eksternal kampus.",
    foto: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
    proker: [
      "Pengelolaan media sosial himpunan",
      "Dokumentasi & publikasi kegiatan",
      "Kunjungan dan relasi eksternal",
    ],
    staf: [
      { nama: "Farhan Hidayat", peran: "Kepala Divisi" },
      { nama: "Aulia Rahma", peran: "Sekretaris Divisi" },
      { nama: "Reza Aditya", peran: "Staf Desain" },
      { nama: "Putri Anjani", peran: "Staf" },
    ],
  },
  {
    slug: "kewirausahaan",
    nama: "Kewirausahaan",
    kepanjangan: "Kewirausahaan & Kreatif",
    deskripsi:
      "Divisi yang mengasah jiwa usaha anggota sekaligus menopang kemandirian dana organisasi lewat unit bisnis dan produk kreatif.",
    foto: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop",
    proker: [
      "Bazar dan lapak himpunan",
      "Merchandise resmi kabinet",
      "Pelatihan kewirausahaan",
    ],
    staf: [
      { nama: "Ilham Maulana", peran: "Kepala Divisi" },
      { nama: "Tiara Andini", peran: "Sekretaris Divisi" },
      { nama: "Galih Permana", peran: "Staf Bisnis" },
      { nama: "Rani Puspita", peran: "Staf" },
    ],
  },
];

export const nilaiOrganisasi: string[] = [
  "VISIONER",
  "INOVATIF",
  "BERINTEGRITAS",
  "PROFESIONAL",
  "BERMANFAAT",
];
