import type { Metadata } from 'next';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';

const title = 'Asal-Usul Perkataan Bantal dan Pillow — Majalah Syrius';
const description = 'Asal-usul perkataan "bantal" dalam Bahasa Melayu dan "pillow" dalam Bahasa Inggeris disorot menerusi rekod linguistik Austronesia dan Latin-Jermanik.';

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
  headline: 'Dari mana datangnya perkataan bantal dan pillow?',
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
    <SiteHeader base="/" active="majalah" enHref="/en/majalah/asal-usul-perkataan-bantal-dan-pillow" />

    <article className="section" id="artikel" tabIndex={-1}><div className="container" style={{ maxWidth: 720 }}>
      <a className="eyebrow" href="/majalah" data-reveal>← MAJALAH</a>
      <h1 style={{ color: 'var(--ink)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.15, fontSize: 'clamp(26px, 3.6vw, 38px)', margin: '16px 0 8px' }} data-reveal>
        Dari mana datangnya perkataan <em style={{ fontStyle: 'normal' }}>bantal dan pillow?</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>5 minit bacaan</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        Bantal ialah salah satu objek harian yang paling akrab dengan kehidupan manusia, namun jarang seseorang bertanya dari mana datangnya nama yang digunakan untuknya. Perkataan &ldquo;bantal&rdquo; dalam Bahasa Melayu dan &ldquo;pillow&rdquo; dalam Bahasa Inggeris masing-masing mempunyai sejarah bahasa yang panjang dan berasal daripada rumpun bahasa yang berbeza sama sekali, namun kedua-duanya memperlihatkan corak yang menarik apabila makna asal sesuatu perkataan beransur berubah mengikut peredaran zaman. Artikel ini menelusuri rekod linguistik yang boleh disemak bagi kedua-dua perkataan tersebut, sambil mengakui secara jujur bahagian yang masih belum dapat dipastikan oleh para pengkaji bahasa sehingga kini.
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Warisan Austronesia &ldquo;bantal&rdquo;: rekonstruksi bahasa purba</h2>
        <p>Menurut <em lang="en" style={{ fontStyle: 'italic' }}>Austronesian Comparative Dictionary</em> (ACD), iaitu pangkalan data perbandingan bahasa Austronesia yang disusun oleh ahli linguistik Robert Blust dan rakan-rakan, perkataan &ldquo;bantal&rdquo; dikaitkan dengan satu bentuk rekonstruksi hipotesis dalam kajian perbandingan bahasa Austronesia, ditulis sebagai <em style={{ fontStyle: 'italic' }}>*bantal</em> pada peringkat Proto-Melayu-Polinesia Barat (<em lang="en" style={{ fontStyle: 'normal' }}>Proto-Western Malayo-Polynesian</em>) — bukan perkataan yang pernah direkodkan sebenar dalam mana-mana teks purba, sebaliknya bentuk yang disimpulkan ahli bahasa daripada perbandingan kata seasal. ACD mencadangkan makna rekonstruksi ini sebagai &ldquo;ikatan atau bungkusan kain atau pakaian&rdquo;. Bentuk ini bukan sekadar wujud dalam Bahasa Melayu, tetapi mempunyai kata seasal (<em lang="en" style={{ fontStyle: 'normal' }}>cognate</em>) dalam pelbagai bahasa Austronesia yang lain, antaranya bantal dalam Bahasa Jawa dan Bahasa Sunda yang turut bermaksud &ldquo;bantal&rdquo;, bantal dalam Bahasa Jawa Kuno yang bermaksud &ldquo;kain; seikat kain sebagai satu ukuran&rdquo;, bantal dalam Bahasa Iban yang membawa kedua-dua makna &ldquo;kusyen, bantal&rdquo; dan &ldquo;ikatan kain&rdquo;, serta bántal dalam Bahasa Cebuano yang bermaksud &ldquo;membungkus sesuatu, seperti pakaian kotor&rdquo;.</p>
        <p>Walau bagaimanapun, penyusun ACD sendiri turut menyatakan bahawa sebahagian daripada perbandingan kata seasal ini kemungkinan besar merupakan hasil peminjaman kata sesama bahasa Austronesia yang berkenaan, bukan semestinya pewarisan langsung daripada satu bahasa purba yang tunggal. Mereka mengakui masih belum pasti sama ada peminjaman ini berlaku pada bilangan bahasa yang cukup besar untuk menjejaskan kesahihan rekonstruksi bentuk purba tersebut. Oleh itu, walaupun kaitan &ldquo;bantal&rdquo; dengan makna asal &ldquo;ikatan kain&rdquo; mempunyai sokongan akademik yang kukuh, asal-usul tepat perkataan ini, sama ada ia benar-benar diwarisi sejak zaman purba atau terbentuk melalui pertukaran kata antara masyarakat Austronesia yang bertetangga, masih tergolong sebagai persoalan yang diperdebatkan oleh ahli bahasa, bukan fakta yang muktamad.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Daripada ikatan kain kepada galang kepala</h2>
        <p>Jika benar perkataan &ldquo;bantal&rdquo; pada asalnya merujuk kepada &ldquo;ikatan atau bungkusan kain&rdquo;, maka makna itu telah mengalami peluasan dan penyempitan yang ketara sehingga merujuk khusus kepada galang kepala seperti yang difahami hari ini. Kamus Dewan Edisi Keempat, terbitan Dewan Bahasa dan Pustaka, kini mendefinisikan &ldquo;bantal&rdquo; sebagai galang kepala atau alas tempat duduk yang diperbuat daripada kain dijahit seperti karung dan diisi dengan bahan seperti kekabu. Kamus yang sama turut merekodkan beberapa variasi seperti bantal golek (bantal panjang berbentuk bulat), bantal seraga (bantal bulat bersulam) dan bantal sandar.</p>
        <p>Menariknya, Kamus Dewan turut mencatatkan satu makna lain bagi &ldquo;bantal&rdquo; yang bersifat khusus dalam bidang pertekstilan, iaitu sebagai unit ukuran bagi benang, dengan satu bantal bersamaan enam belas tukal. Makna sebagai unit &ldquo;ikatan atau kumpulan&rdquo; ini secara kebetulan sejajar dengan makna purba &ldquo;ikatan kain&rdquo; yang dicadangkan menerusi rekonstruksi Proto-Melayu-Polinesia Barat di atas, walaupun tiada kajian yang secara khusus mengesahkan bahawa kedua-dua makna ini berkait secara langsung dari segi sejarah perkataan.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Pillow: warisan Latin menerusi bahasa Jermanik</h2>
        <p>Berbeza daripada &ldquo;bantal&rdquo;, asal-usul perkataan &ldquo;pillow&rdquo; dalam Bahasa Inggeris lebih jelas dapat dikesan kerana rumpun bahasa Indo-Eropah mempunyai rekod bertulis yang jauh lebih panjang. Menurut Etymonline, kamus etimologi yang disusun oleh Douglas Harper berdasarkan sumber-sumber leksikografi bahasa Inggeris yang diiktiraf, perkataan Inggeris Pertengahan (<em lang="en" style={{ fontStyle: 'italic' }}>Middle English</em>) <em lang="en" style={{ fontStyle: 'italic' }}>pilwe</em> diturunkan daripada perkataan Inggeris Lama (<em lang="en" style={{ fontStyle: 'italic' }}>Old English</em>) <em lang="ang" style={{ fontStyle: 'italic' }}>pyle</em>, yang bermaksud kusyen atau bantal katil. Perkataan Old English ini pula berasal daripada bentuk Jermanik Barat purba yang direkonstruksikan sebagai <em style={{ fontStyle: 'italic' }}>*pulwi(n)</em>, yang turut menghasilkan kata seasal dalam beberapa bahasa Jermanik yang lain, antaranya <em lang="en" style={{ fontStyle: 'italic' }}>puli</em> dalam Bahasa Saxon Lama, <em lang="en" style={{ fontStyle: 'italic' }}>polu</em> dalam Bahasa Belanda Pertengahan, <em lang="nl" style={{ fontStyle: 'italic' }}>peluw</em> dalam Bahasa Belanda moden, <em lang="en" style={{ fontStyle: 'italic' }}>pfuliwi</em> dalam Bahasa Jerman Tinggi Lama, dan <em lang="de" style={{ fontStyle: 'italic' }}>Pfühl</em> dalam Bahasa Jerman moden.</p>
        <p>Bentuk Jermanik Barat ini pula, menurut Etymonline, dipercayai dipinjam pada peringkat awal, sekitar abad kedua atau ketiga Masihi, daripada perkataan Latin <em lang="la" style={{ fontStyle: 'italic' }}>pulvinus</em> yang bermaksud kusyen kecil atau bantal kecil. Namun Etymonline turut mengakui bahawa asal-usul perkataan Latin pulvinus itu sendiri tidak dapat dipastikan dengan jelas. Ini bermakna, sungguhpun rantaian peminjaman daripada Latin ke bahasa Jermanik hingga ke Bahasa Inggeris dapat disahkan dengan agak yakin, punca paling asal perkataan tersebut, iaitu sebelum ia wujud dalam Bahasa Latin, masih kekal sebagai persoalan yang tidak terjawab.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Peluasan makna dan penggunaan pillow</h2>
        <p>Dari segi ejaan, bentuk moden &ldquo;pillow&rdquo; hanya mula ditetapkan sekitar pertengahan abad ke-15, setelah melalui pelbagai variasi ejaan pada zaman Inggeris Pertengahan. Dari segi makna, perkataan ini pada mulanya merujuk khusus kepada galang kepala bagi seseorang yang sedang berbaring, sebelum makna itu meluas merangkumi apa-apa kusyen lembut yang berisi bahan seperti bulu halus atau kapuk secara umum, sebagaimana kegunaannya hari ini.</p>
        <p>Etymonline turut mencatatkan beberapa kata majmuk yang terbentuk daripada &ldquo;pillow&rdquo; pada pelbagai zaman, seperti <em lang="en" style={{ fontStyle: 'normal' }}>pillow-case</em> (1745, merujuk kepada sarung bantal), <em lang="en" style={{ fontStyle: 'normal' }}>pillow fight</em> (1837, merujuk permainan berlawan bantal secara berjenaka), <em lang="en" style={{ fontStyle: 'normal' }}>pillow-sham</em> (1867, merujuk sarung bantal berhias yang bersifat perhiasan semata-mata dan bukan untuk kegunaan tidur seharian), dan <em lang="en" style={{ fontStyle: 'normal' }}>pillow talk</em> (1939, merujuk perbualan mesra di atas katil). Bentuk kata kerja &ldquo;to pillow&rdquo;, yang bermaksud membaringkan sesuatu di atas bantal, pula mula digunakan sekitar tahun 1620-an.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Dua perkataan, dua trajektori bahasa</h2>
        <p>Membandingkan kedua-dua perkataan ini memperlihatkan satu persamaan yang menarik walaupun kedua-duanya datang daripada rumpun bahasa yang tidak berkaitan langsung, iaitu rumpun Austronesia bagi &ldquo;bantal&rdquo; dan rumpun Indo-Eropah bagi &ldquo;pillow&rdquo;. Kedua-dua perkataan didapati bermula daripada makna yang lebih umum, iaitu &ldquo;ikatan atau bungkusan kain&rdquo; bagi bantal, dan &ldquo;kusyen atau bantal kecil&rdquo; bagi pulvinus dalam Bahasa Latin, sebelum makna tersebut beransur mengecil dan mengkhusus kepada objek galang kepala yang dikenali hari ini. Perkembangan ini selari dengan corak umum dalam kajian etimologi, di mana nama sesuatu objek harian sering kali berasal daripada perkataan yang pada mulanya menggambarkan bahan atau fungsi objek itu, bukan bentuk akhirnya.</p>
        <p>Namun begitu, tahap kepastian bagi kedua-dua rantaian sejarah ini tidak sama. Rantaian bagi &ldquo;pillow&rdquo; menerusi Bahasa Latin dan Jermanik disokong oleh rekod bertulis yang panjang serta kesepakatan meluas dalam kalangan pengkaji bahasa Inggeris. Sebaliknya, kaitan &ldquo;bantal&rdquo; dengan bentuk purba Austronesia *bantal masih berstatus cadangan berasaskan kaedah perbandingan, dengan pengkaji bahasa sendiri mengakui kemungkinan sebahagian buktinya terbentuk daripada peminjaman kata sesama bahasa serumpun, bukan pewarisan tunggal yang tidak berbelah bahagi.</p>
        <p>Sejarah kedua-dua perkataan ini menunjukkan bagaimana nama bagi objek yang paling biasa dalam kehidupan seharian sekalipun boleh menyimpan lapisan bahasa purba yang masih diteliti oleh ahli linguistik hingga ke hari ini.</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>Rujukan</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Etymonline (Douglas Harper). <a href="https://www.etymonline.com/word/pillow" target="_blank" rel="noreferrer">pillow (entri etimologi)<span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>Austronesian Comparative Dictionary (ACD), disusun oleh Robert Blust dan Stephen Trussel, kini diselenggara oleh Alexander D. Smith. <a href="https://acd.clld.org/cognatesets/25127" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>Cognate Set: *bantal &lsquo;bundle of cloth or clothes&rsquo;</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>Pusat Rujukan Persuratan Melayu (PRPM), Dewan Bahasa dan Pustaka. <a href="https://prpm.dbp.gov.my/Cari1?keyword=bantal" target="_blank" rel="noreferrer">bantal — Kamus Dewan Edisi Keempat<span className="sr-only"> (buka di tab baharu)</span></a>.</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>Sedang mencari bantal korporat bercetak logo untuk syarikat anda? <a className="text-link text-link--right" href="/panduan">Lihat panduan menempah <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter />
  </main>;
}
