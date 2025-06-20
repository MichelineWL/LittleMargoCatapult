import News1 from "@/public/images/news/news1.jpeg";
import News2 from "@/public/images/news/news2.webp";
import News3 from "@/public/images/news/news3.webp";
import News4 from "@/public/images/news/news4.jpg";

export interface NewsItem {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const newsItems: NewsItem[] = [
  {
    title: "Keren! Katapel Buatan Warga Depok Ini Mendunia",
    description: "Ketapel adalah permainan tradisional Indonesia. Siapa sangka ketapel buatan warga Depok, ini sudah dikirim ke Inggris, Malaysia, Jerman dan Prancis.",
    imageUrl: News1.src,
    link: "https://finance.detik.com/foto-bisnis/d-5727135/keren-katapel-buatan-warga-depok-ini-mendunia?page=1"
  },
  {
    title: "Empat atlet katapel Indonesia ikuti kejuaraan dunia di China",
    description: "Sebanyak empat atlet ketapel Indonesia berangkat secara mandiri untuk mengikuti kejuaraan dunia ketapel China Slingshot Club Competition (SCCC) 2024 yang berlangsung di Shanghai, China, 18-20 Oktober.",
    imageUrl: News2.src,
    link: "https://www.antaranews.com/berita/4408049/empat-atlet-katapel-indonesia-ikuti-kejuaraan-dunia-di-china"
  },
  {
    title: "Little Margo Catapult, Bisnis Katapel Anak Muda yang Tembus Pasar Internasional",
    description: "Satria Conayio merupakan salah satu contoh anak muda yang menjalankan bisnis dengan modal kreativitas. Berawal dari hobinya bermain katapel, ia pun kini menjalankan usaha Little Margo Catapult",
    imageUrl: News3.src,
    link: "https://www.goodnewsfromindonesia.id/2021/10/29/little-margo-catapult-produk-katapel-lokal-yang-tembus-pasar-internasional"
  }, 
  {
    title: "Raih Keuntungan Hingga ke Mancanegara Lewat Bisnis Ketapel",
    description: "Perajin menyelesaikan pembuatan kerajinan ketapel di Little Margo Catapult, Depok, Jawa Barat, Minggu (13/11/2022). Produksi ketapel dengan bahan limbah papan skate bekas tersebut dijual dengan harga mulai dari Rp150 ribu hingga Rp 2 juta per unit tergantung bentuk dan kerumitan desain.",
    imageUrl: News4.src,
    link: "https://www.suara.com/foto/2022/11/13/175246/raih-keuntungan-hingga-ke-mancanegara-lewat-bisnis-ketapel"
  }
];