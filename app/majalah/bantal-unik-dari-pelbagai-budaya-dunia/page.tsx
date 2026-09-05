import type { Metadata } from 'next';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';

const title = 'Bantal Unik dari Pelbagai Budaya di Dunia — Majalah Syrius';
const description = 'Telusuri sejarah bantal unik dunia: bantal kayu takamakura Jepun, bantal kulit soba, bantal seramik dinasti China, dan penyokong kepala kayu Afrika.';

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
  headline: 'Bantal unik dari pelbagai budaya di dunia',
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
    <SiteHeader base="/" active="majalah" enHref="/en/majalah/bantal-unik-dari-pelbagai-budaya-dunia" zhHref="/zh/majalah/bantal-unik-dari-pelbagai-budaya-dunia" />

    <article className="section" id="artikel" tabIndex={-1}><div className="container" style={{ maxWidth: 720 }}>
      <a className="eyebrow" href="/majalah" data-reveal>← MAJALAH</a>
      <h1 style={{ color: 'var(--ink)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.15, fontSize: 'clamp(26px, 3.6vw, 38px)', margin: '16px 0 8px' }} data-reveal>
        Bantal unik dari pelbagai <em style={{ fontStyle: 'normal' }}>budaya dunia.</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>6 minit bacaan</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        Bantal seperti yang biasa digunakan hari ini, iaitu berbentuk segi empat, lembut dan berisi kapas atau buih, sebenarnya hanya satu daripada pelbagai bentuk alat penyokong kepala yang pernah dicipta oleh tamadun manusia. Di sebalik fungsi asasnya yang sama, iaitu menyokong kepala dan leher semasa berehat atau tidur, pelbagai budaya di dunia telah mencipta penyelesaian yang sangat berbeza mengikut keperluan, gaya hidup, malah kepercayaan masing-masing, daripada bantal kayu tinggi di Jepun, bantal keras berbahan seramik di China, sehingga penyokong kepala kayu di pelbagai wilayah Afrika.
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Bantal kayu tinggi Jepun: takamakura dan hakomakura</h2>
        <p>Di Jepun, golongan yang memakai gaya rambut rumit seperti geisha dan maiko (perantis geisha) secara tradisional menggunakan penyokong kepala kayu, bukan bantal empuk biasa, kerana sanggul rambut mereka, iaitu gaya yang dikenali sebagai <em lang="ja" style={{ fontStyle: 'normal' }}>shimada</em>, boleh terlerai jika kepala dibaringkan rata di atas permukaan yang lembut. Sanggul jenis ini boleh mengambil masa berjam-jam, malah kadangkala sehari penuh untuk disiapkan, dan lazimnya dijangka bertahan sehingga hampir seminggu sebelum perlu disusun semula. Bagi mengatasi masalah ini, mereka menggunakan bantal kayu tinggi yang dikenali sebagai <em lang="ja" style={{ fontStyle: 'normal' }}>takamakura</em>, iaitu tapak kayu bersalut lakuer berbentuk sedikit melengkung supaya boleh sedikit bergoyang, dengan sebuah gulungan berlapis kain sutera diletakkan di atasnya sebagai tempat rehat tengkuk. Dengan reka bentuk ini, kepala dan sanggul kekal terangkat sepenuhnya daripada permukaan bantal sepanjang malam.</p>
        <p>Satu lagi variasi yang popular ialah <em lang="ja" style={{ fontStyle: 'normal' }}>hakomakura</em>, atau &ldquo;bantal kotak&rdquo;, yang menggantikan tapak kayu ringkas dengan sebuah kotak kayu bersalut lakuer, dan sesetengah versinya turut dilengkapi laci kecil di dalamnya, sesuai untuk menyimpan barang peribadi semasa tidur. Gulungan kain di atasnya lazimnya diisi dengan kulit soba, seperti yang dihuraikan pada bahagian seterusnya. Kebanyakan contoh hakomakura dan takamakura yang masih terselamat dianggarkan berasal dari sekitar abad ke-19 hingga awal abad ke-20, termasuk era Meiji (1868-1912), dan kini menjadi barangan koleksi antik yang dihargai oleh pengumpul serta peniaga barangan warisan Jepun. Sesetengah sumber turut mencatatkan bahawa reka bentuk serupa turut digunakan oleh golongan lelaki, termasuk kalangan samurai, bagi tujuan yang sama iaitu mengekalkan gaya rambut bersanggul (dikenali sebagai <em lang="ja" style={{ fontStyle: 'normal' }}>chonmage</em> bagi golongan lelaki) sepanjang malam, walaupun rekod terperinci mengenai amalan ini bagi golongan lelaki tidak sekukuh rekod bagi geisha dan maiko.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Bantal kulit soba: kejuruteraan ringkas dari Jepun</h2>
        <p>Selain bentuk bantal kayu tinggi, Jepun turut mewariskan satu lagi jenis bantal yang unik daripada segi bahan isiannya, iaitu bantal kulit soba, atau dikenali sebagai <em lang="ja" style={{ fontStyle: 'normal' }}>sobagara makura</em>. Isian bantal ini bukan kapas atau buih, sebaliknya kulit luar biji soba (<em lang="en" style={{ fontStyle: 'normal' }}>buckwheat</em>) yang tertinggal selepas proses pengisaran menjadi tepung untuk membuat mi soba. Kulit yang keras dan berongga ini menghasilkan permukaan bantal yang agak tegas tetapi tetap menurut bentuk kepala dan leher penggunanya, sekali gus membantu mengekalkan kedudukan tulang belakang yang sejajar sepanjang tidur. Sifat semula jadi kulit soba turut membolehkan udara beredar dengan baik di dalam bantal, menjadikannya sejuk dan tidak lembap walaupun digunakan dalam cuaca panas.</p>
        <p>Penggunaan kulit soba sebagai bahan isi bantal telah lama dikenali dalam budaya Jepun — sesetengah sumber mengaitkannya dengan budaya kitar semula pada zaman Edo (1603-1867), manakala sumber lain mengesan amalan seumpama ini lebih awal lagi — namun tarikh tepat bilakah amalan ini sebenarnya bermula tidak dapat disahkan secara akademik dan kekal sebagai perkara yang tidak jelas dalam rekod sejarah bertulis. Yang lebih pasti ialah bantal kulit soba kekal digunakan secara meluas di Jepun sehingga ke hari ini, malah sering dikaitkan sebagai penawar tradisional bagi masalah yang dalam bahasa Jepun disebut <em lang="ja" style={{ fontStyle: 'normal' }}>katakori</em>, iaitu ketegangan pada bahu dan tengkuk.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Bantal seramik keras dari China: warisan Dinasti Sui hingga Song</h2>
        <p>Berbeza sepenuhnya daripada konsep bantal lembut yang dikenali hari ini, masyarakat China pada zaman dahulu turut menggunakan bantal yang diperbuat daripada seramik atau porselin yang keras. Contoh paling awal yang direkodkan ialah sebuah bantal berbentuk kotak yang ditemui dalam makam seorang pegawai bernama Zhang Sheng di Anyang, wilayah Henan, bertarikh sekitar abad ke-6 pada zaman Dinasti Sui (581-618). Bantal seramik kemudiannya berkembang meluas semasa Dinasti Tang (618-907), bukan sekadar sebagai alat tidur, malah turut digunakan untuk kegunaan lain: tabib tradisional China meletakkannya di bawah pergelangan tangan pesakit semasa memeriksa nadi, jurutulis khat menggunakannya untuk menyokong lengan semasa menulis, manakala pengembara turut membawa bantal seramik kecil sebagai alat tidur mudah alih dalam perjalanan.</p>
        <p>Bantal seramik mencapai era kegemilangannya pada zaman Dinasti Song (960-1279), apabila ia menjadi barangan rumah yang lazim dimiliki oleh keluarga kelas pertengahan dan atasan, dengan variasi bentuk dan saiz yang lebih pelbagai berbanding sebelumnya. Salah satu contoh yang paling terkenal ialah bantal porselin putih berbentuk kanak-kanak dari relau Ding pada era Dinasti Song Utara, yang kini disimpan di Muzium Istana (Palace Museum) di Beijing. Sebuah lagi contoh yang hampir serupa turut disimpan di Muzium Istana Kebangsaan di Taipei, dan hanya beberapa contoh lengkap sahaja yang diketahui masih wujud di dunia hari ini. Selepas era ini, penghasilan bantal seramik mula merosot pada zaman Dinasti Yuan (1279-1368) berikutan sekatan terhadap perkembangan ekonomi komoditi dan perusahaan kraf tangan, sebelum akhirnya semakin ditinggalkan pada zaman Dinasti Ming dan Qing (1368-1911) apabila masyarakat mula lebih menggemari bantal yang lebih lembut, sekali gus menandakan berakhirnya satu tradisi yang bertahan hampir satu milenium.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Penyokong kepala kayu di Afrika: antara fungsi, status dan kepercayaan</h2>
        <p>Di benua Afrika, pelbagai kumpulan etnik turut mempunyai tradisi tersendiri berkaitan penyokong kepala kayu, yang berfungsi seakan-akan bantal tetapi dalam bentuk yang jauh lebih keras dan mudah alih. Dokumentasi oleh muzium akademik seperti Lam Museum of Anthropology di Wake Forest University, Amerika Syarikat, menunjukkan bahawa reka bentuk penyokong kepala ini amat berbeza mengikut kumpulan etnik. Sebagai contoh, penyokong kepala masyarakat Luba di Republik Demokratik Congo sering diukir dengan figura wanita, melambangkan peranan wanita sebagai penyokong dalam struktur masyarakat mereka. Sementara itu, sesetengah penyokong kepala masyarakat Shona di Zimbabwe direka dengan dua lekuk leher yang melambangkan perpaduan sepasang suami isteri, manakala motif bulatan sepusat yang diukir padanya turut dikaitkan dengan kepercayaan bahawa mimpi merupakan satu bentuk komunikasi rohani dengan roh nenek moyang.</p>
        <p>Bagi masyarakat Turkana yang hidup secara nomad di Kenya, penyokong kepala mereka direka lebih ringan dan mudah dibawa, malah dilengkapi gelung atau tali kulit pada tapaknya supaya boleh dibawa bersama semasa berpindah tempat. Menariknya, masyarakat Boni, turut dikenali sebagai Aweer, yang majoritinya tinggal di kawasan pantai Lamu dan Tana River di Kenya (dengan sebilangan kecil turut terdapat di selatan Somalia), pula mengukir penyokong kepala yang agak tidak stabil. Menurut penerangan koleksi Lam Museum of Anthropology, reka bentuk sebegini dipercayai membantu pengguna kekal peka terhadap persekitaran sepanjang malam, sebagai langkah berjaga-jaga bagi melindungi ternakan. Di Ethiopia pula, pelbagai kumpulan seperti Oromo, Sidaama dan Gurage turut mencipta penyokong kepala kayu dengan corak geometri yang pelbagai, yang secara umumnya berfungsi untuk mengekalkan gaya rambut semasa tidur serta menunjukkan status pemiliknya, berbanding membawa makna kerohanian yang mendalam seperti sesetengah tradisi lain di benua yang sama.</p>
        <p>Menariknya, tradisi ini tidak seragam di seluruh Afrika. Di Ghana, misalnya, masyarakat Akan dan kerajaan Ashanti lebih dikenali dengan tradisi bangku kayu suci yang dipanggil <em lang="ak" style={{ fontStyle: 'normal' }}>dwa</em>, berbanding penyokong kepala. Bangku ini bukan sekadar tempat duduk, sebaliknya dianggap sebagai objek keramat yang melambangkan kuasa dan kedudukan pemiliknya, sehingga setiap ketua Akan turut menerima bangku rasminya sendiri sebagai sebahagian daripada upacara pelantikan ke jawatan. Perbezaan ini menunjukkan bahawa walaupun objek kayu untuk kegunaan berehat atau upacara tersebar luas di Afrika, makna dan bentuknya berbeza mengikut wilayah dan budaya masing-masing, dan tidak semuanya boleh disamaratakan sebagai satu bentuk bantal yang serupa.</p>
        <p>Pelbagai bentuk bantal dan penyokong kepala ini menunjukkan bahawa keperluan asas manusia untuk berehat sentiasa dibentuk oleh iklim, cara hidup dan nilai budaya sesebuah masyarakat.</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>Rujukan</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>CGTN. <a href="https://news.cgtn.com/news/2023-03-22/A-journey-through-the-history-of-Chinese-porcelain-pillows-1inI90PTAbe/index.html" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>A journey through the history of Chinese porcelain pillows</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>Lam Museum of Anthropology, Wake Forest University. <a href="https://lammuseum.wfu.edu/exhibits/virtual/headrests-the-exhibit/headrests-from-africa/" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>Headrests from Africa</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>Africa &amp; Beyond. <a href="https://www.africaandbeyond.com/utilitarian-artifacts-headrests.html" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>Utilitarian Artifacts | Headrests</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>Good Night&rsquo;s Rest. <a href="https://goodnights.rest/takamakura-japanese-geisha-pillow/" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>What&rsquo;s a Takamakura? Japanese Geisha Pillow</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>J-Life International. <a href="https://jlifeinternational.com/pages/what-is-soba-gara-makura" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>What Is Soba Gara Makura Or Buckwheat Hull Pillows</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>Shibui Japanese Antiques &amp; Furniture. <a href="https://shibui.com/products/antique-japanese-box-pillow-lacquered-high-pillows-set-of-3" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>Antique Japanese Hakomakura Box Pillow, Lacquered High Pillows</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>Wikipedia. <a href="https://en.wikipedia.org/wiki/Dwa_(stool)" target="_blank" rel="noreferrer">Dwa (stool)<span className="sr-only"> (buka di tab baharu)</span></a>.</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>Sedang mencari bantal korporat bercetak logo untuk syarikat anda? <a className="text-link text-link--right" href="/panduan">Lihat panduan menempah <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter />
  </main>;
}
