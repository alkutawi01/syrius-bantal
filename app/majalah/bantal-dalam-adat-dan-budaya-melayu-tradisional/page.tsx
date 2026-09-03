import type { Metadata } from 'next';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';

const title = 'Bantal dalam Adat dan Budaya Melayu Tradisional — Majalah Syrius';
const description = 'Bantal peluk, bantal pelamin dan pantang larang berkaitan bantal turut menyimpan sejarah dan makna tersendiri dalam adat budaya Melayu tradisional.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'article',
    publishedTime: '2026-09-02',
    modifiedTime: '2026-09-02',
    locale: 'ms_MY',
    siteName: 'Syrius',
    images: [{ url: '/syrius-corporate-pillow-og.jpg', width: 1200, height: 630, type: 'image/jpeg', alt: 'Bantal sublimasi korporat Syrius' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/syrius-corporate-pillow-og.jpg'],
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bantal dalam adat dan budaya Melayu tradisional',
  description,
  image: '/syrius-corporate-pillow-blank.jpg',
  datePublished: '2026-09-02',
  dateModified: '2026-09-02',
  author: { '@type': 'Organization', name: 'Syrius' },
  publisher: { '@type': 'Organization', name: 'Syrius', logo: { '@type': 'ImageObject', url: '/syrius-logo.png' } },
};

export default function Artikel() {
  return <main>
    <a className="skip-link" href="#artikel">Langkau ke kandungan utama</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <ScrollReveal />
    <SiteHeader base="/" active="majalah" />

    <article className="section" id="artikel" tabIndex={-1}><div className="container" style={{ maxWidth: 720 }}>
      <a className="eyebrow" href="/majalah" data-reveal>← MAJALAH</a>
      <h1 style={{ color: 'var(--ink)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.15, fontSize: 'clamp(26px, 3.6vw, 38px)', margin: '16px 0 8px' }} data-reveal>
        Bantal dalam adat dan budaya <em style={{ fontStyle: 'normal' }}>Melayu tradisional.</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>4 minit bacaan</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        Bagi kebanyakan orang, bantal hanyalah alat tidur yang digunakan setiap malam tanpa banyak difikirkan. Namun dalam budaya Melayu tradisional, bantal memainkan peranan yang jauh lebih luas daripada sekadar mengalas kepala. Ia muncul dalam istiadat perkahwinan, tersimpan dalam peribahasa dan perbendaharaan kata, malah menjadi asas kepada pantang larang yang masih disebut oleh generasi tua sehingga kini. Artikel ini menelusuri beberapa peranan bantal tersebut berdasarkan sumber bertulis yang boleh disahkan, termasuk aspek yang masih diperdebatkan atau tidak seragam di seluruh Alam Melayu.
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Bantal peluk dan gelaran &ldquo;Dutch wife&rdquo;: asal-usul sebuah nama</h2>
        <p>Bantal panjang berbentuk selinder yang direngkuh ketika tidur dikenali di Malaysia sebagai bantal peluk, manakala di Indonesia ia lebih dikenali sebagai guling. Objek yang serupa turut wujud di serata Asia Tenggara dengan nama masing-masing, misalnya <em lang="vi" style={{ fontStyle: 'normal' }}>gối ôm</em> di Vietnam dan <em lang="th" style={{ fontStyle: 'normal' }}>monkhang</em> di Thailand, kesemuanya membawa maksud yang hampir sama, iaitu bantal yang direngkuh semasa tidur.</p>
        <p>Dalam kalangan penutur Inggeris, bantal jenis ini turut dikenali sebagai &ldquo;Dutch wife&rdquo;, walaupun asal-usul tepat nama ini masih diperdebatkan dan tidak dapat disahkan secara muktamad. Satu versi yang sering diceritakan mengaitkan nama ini dengan zaman penjajahan Belanda di Hindia Timur (kini Indonesia) pada abad ke-19, apabila pegawai dan askar Belanda yang berkhidmat di rantau tropika ini dikatakan turut menggunakan bantal panjang penduduk tempatan. Walau bagaimanapun, dakwaan bahawa bantal ini &ldquo;dicipta&rdquo; oleh orang Belanda hanyalah cerita popular yang diwarisi turun-temurun, bukan fakta sejarah yang disahkan. Terdapat juga versi lain yang menyebut gelaran &ldquo;Dutch wife&rdquo; sebenarnya berasal daripada sindiran orang Inggeris terhadap saingan kolonial mereka, iaitu Belanda, sejajar dengan penggunaan perkataan &ldquo;Dutch&rdquo; bernada merendah-rendah yang sudah lama wujud dalam bahasa Inggeris, seperti dalam ungkapan &ldquo;Dutch courage&rdquo;.</p>
        <p>Penyebaran istilah ini ke Tanah Melayu dan Singapura turut dapat dilihat menerusi sepucuk surat pembaca yang disiarkan akhbar <em lang="en" style={{ fontStyle: 'italic' }}>Singapore Free Press</em> pada 3 September 1923, apabila seorang lelaki British meluahkan rasa kehilangannya kerana hotel-hotel di London tidak menyediakan &ldquo;Dutch wife&rdquo;, selepas tujuh tahun tinggal di Singapura dan Negeri-Negeri Selat. Reka bentuk asalnya turut dilaporkan berbeza daripada bantal masa kini, iaitu anyaman rotan berongga yang dibalut kain linen bagi membolehkan udara beredar bebas dan mengekalkan kesejukan pada waktu malam yang panas dan lembap, jauh sebelum penghawa dingin tersedia secara meluas.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Bantal dalam istiadat perkahwinan: pelamin dan majlis bersanding</h2>
        <p>Dalam istiadat perkahwinan Melayu tradisional, khususnya pada majlis bersanding, bantal turut menjadi sebahagian daripada susun atur pelamin atau pentas pengantin. Dalam tradisi Melayu Riau, termasuk di Batam, sebuah wilayah yang dahulunya sebahagian daripada Kesultanan Johor-Riau-Lingga-Pahang, catatan warisan budaya daripada Dinas Kebudayaan dan Pariwisata Kota Batam merekodkan bahawa pelamin tradisional di sana dilengkapi dengan pelbagai jenis bantal secara berperingkat, iaitu empat bantal gadok, lapan bantal seraga, bantal telur buaya, bantal sandar, serta bantal guling dan tilam. Sumber yang sama turut mendokumentasikan peterakne, iaitu pentas bertingkat berasingan yang digunakan sepanjang majlis untuk acara seperti tepung tawar dan makan bersuap, menunjukkan bahawa pelamin berserta susunan bantalnya hanyalah sebahagian daripada satu set perkakas istiadat perkahwinan yang lebih besar.</p>
        <p>Sebahagian daripada istilah ini turut disahkan dalam Kamus Dewan terbitan Dewan Bahasa dan Pustaka, yang mentakrifkan bantal seraga sebagai bantal bulat yang disulam, dan bantal sandar sebagai bantal untuk bersandar. Ini menunjukkan bantal-bantal tersebut bukan sekadar hiasan, tetapi turut berfungsi menyokong kedudukan pengantin yang duduk bersila di atas pelamin sepanjang majlis berlangsung.</p>
        <p>Perlu diingatkan bahawa jenis dan bilangan bantal pada pelamin boleh berbeza mengikut negeri, keturunan diraja setempat dan adat setempat, dan susunan yang dinyatakan di atas tidak semestinya seragam di seluruh Alam Melayu, memandangkan tidak banyak sumber akademik yang mendokumentasikannya secara terperinci bagi setiap wilayah.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Bantal dalam bahasa dan peribahasa Melayu</h2>
        <p>Menurut Kamus Dewan terbitan Dewan Bahasa dan Pustaka, bantal ditakrifkan sebagai galang kepala atau alas tempat duduk yang diperbuat daripada kain dijahit seperti karung dan diisi dengan kekabu, sabut, span dan sebagainya. Selain bantal golek atau bantal peluk, iaitu bantal bulat yang panjang, kamus turut merekodkan istilah seperti berbantal dan berbantalkan, yang membawa maksud menggunakan sesuatu sebagai pengalas kepala.</p>
        <p>Perkataan bantal turut hidup dalam sekurang-kurangnya dua peribahasa Melayu yang masih digunakan. Ungkapan &ldquo;orang mengantuk disorongkan bantal&rdquo; membawa maksud memperoleh sesuatu yang memang diingini atau diperlukan tepat pada masanya, seolah-olah tanpa diminta, manakala peribahasa &ldquo;lepas bantal berganti tikar&rdquo; merujuk kepada seorang lelaki yang berkahwin dengan adik atau kakak kepada isterinya yang telah meninggal dunia. Kewujudan peribahasa seperti ini menunjukkan bahawa bantal, sebagai objek harian yang paling rapat dengan tidur dan rehat, telah lama menjadi metafora dalam cara berfikir dan bertutur masyarakat Melayu, jauh melangkaui fungsinya yang literal.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Pantang larang: bantal sebagai simbol penghormatan kepada kepala</h2>
        <p>Salah satu pantang larang Melayu tradisional yang masih disebut sehingga kini ialah larangan duduk di atas bantal. Dalam kepercayaan popular masyarakat Melayu, sesiapa yang duduk di atas bantal boleh ditimpa bisul. Sumber yang sama turut mencatatkan sebab yang lebih praktikal di sebalik larangan tersebut, iaitu supaya bantal terjaga daripada koyak atau pecah, dan kerana dianggap tidak sopan meletakkan punggung di atas kain yang sepatutnya mengalas kepala.</p>
        <p>Pantang larang seperti ini sebenarnya mencerminkan nilai yang lebih besar dalam budaya Melayu, iaitu penghormatan terhadap kepala sebagai bahagian tubuh yang dianggap mulia dan tidak patut diperlakukan sambil lewa. Amaran tentang akibat fizikal seperti bisul berfungsi sebagai kaedah mendidik, terutamanya kepada kanak-kanak, supaya menghormati barangan yang berkait rapat dengan kepala. Tiada bukti perubatan yang menyokong kaitan literal antara tabiat duduk di atas bantal dengan penyakit bisul, dan pantang larang ini lebih tepat difahami sebagai alat pendidikan nilai yang diwarisi secara lisan daripada satu generasi kepada generasi seterusnya.</p>
        <p>Daripada asal-usul namanya yang unik, kedudukannya dalam istiadat perkahwinan, sehingga jejaknya dalam peribahasa dan pantang larang, bantal jelas menyimpan lapisan sejarah dan makna budaya yang jauh lebih kaya daripada fungsinya sebagai alat tidur semata-mata.</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>Rujukan</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Wikipedia Bahasa Melayu. <a href="https://ms.wikipedia.org/wiki/Pantang_larang_Melayu" target="_blank" rel="noreferrer">Pantang larang Melayu<span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>Mothership.SG. <a href="https://mothership.sg/2017/10/the-dutch-wife-is-a-pillow-with-regional-origins-but-it-has-evolved-into-a-sex-doll/" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>The Dutch wife is a pillow with regional origins, but it has evolved into a sex doll</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>Dinas Kebudayaan dan Pariwisata Kota Batam. <a href="https://disbudpar.batam.go.id/2020/07/14/mengungkap-peninggalan-budaya-tak-benda-berupa-pelamin-dan-peterakne-melayu/" target="_blank" rel="noreferrer">Mengungkap Peninggalan Budaya Tak Benda Berupa Pelamin dan Peterakne Melayu<span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>Pusat Rujukan Persuratan Melayu (PRPM), Dewan Bahasa dan Pustaka. <a href="https://prpm.dbp.gov.my/cari1?keyword=bantal" target="_blank" rel="noreferrer">Bantal<span className="sr-only"> (buka di tab baharu)</span></a>.</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>Sedang mencari bantal korporat bercetak logo untuk syarikat anda? <a className="text-link text-link--right" href="/panduan">Lihat panduan menempah <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter />
  </main>;
}
