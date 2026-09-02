import type { Metadata } from 'next';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SiteHeader } from '../../components/SiteHeader';
import { SiteFooter } from '../../components/SiteFooter';

const title = 'Sejarah dan Evolusi Bantal Sepanjang Zaman — Majalah Syrius';
const description = 'Jejaki sejarah bantal dari penyokong kepala keras di Mesir Purba, Mesopotamia, China dan Jepun sehingga bantal lembut berisi bulu menjadi lazim di Eropah.';

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
    images: [{ url: '/syrius-corporate-pillow-blank.jpg', width: 1600, height: 1600, alt: 'Bantal sublimasi korporat Syrius' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/syrius-corporate-pillow-blank.jpg'],
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sejarah dan evolusi bantal sepanjang zaman',
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
        Sejarah dan evolusi bantal <em style={{ fontStyle: 'normal' }}>sepanjang zaman.</em>
      </h1>
      <p style={{ color: 'var(--text)', fontSize: 13, margin: '0 0 20px' }} data-reveal>8 minit bacaan</p>
      <p className="lede" data-reveal style={{ marginTop: 0 }}>
        Bantal merupakan salah satu objek harian yang jarang difikirkan tentang asal usulnya, walaupun ia telah wujud dalam pelbagai bentuk sejak zaman tamadun purba lagi. Jauh sebelum bantal lembut berisi bulu atau kapas seperti yang biasa digunakan hari ini, kebanyakan tamadun awal di Mesir, Asia Barat dan Asia Timur sebenarnya lebih banyak menggunakan penyokong kepala yang keras, diperbuat daripada bahan seperti batu, kayu, gading atau seramik. Bentuk, bahan dan tujuan penggunaannya berbeza-beza mengikut tamadun, sebelum akhirnya bantal lembut seperti yang dikenali pada hari ini berkembang secara meluas bermula di Eropah.
      </p>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Penyokong kepala di Mesir Purba dan Mesopotamia</h2>
        <p>Sebelum bantal lembut seperti yang dikenali hari ini wujud, banyak tamadun purba di Mesir dan Asia Barat menggunakan penyokong kepala yang keras semasa tidur. Di Mesir Purba, objek ini diperbuat daripada pelbagai bahan seperti kayu, batu (termasuk batu jenis calcite yang turut disebut sebagai alabaster Mesir), gading dan seramik. Bentuknya lazimnya terdiri daripada tapak rata yang lebih luas, tiang penyokong yang sempit di bahagian tengah, dan bahagian atas berbentuk lengkung untuk menampung tengkuk atau leher penggunanya. Penyokong kepala jenis ini digunakan sepanjang tempoh yang sangat panjang dalam sejarah Mesir, iaitu bermula seawal Zaman Dinasti Awal (sekitar 3000 hingga 2625 Sebelum Masihi) sehingga era Ptolemaik. Salah satu contoh paling terkenal ialah lapan penyokong kepala yang ditemui dalam makam Firaun Tutankhamun, yang memerintah sekitar tahun 1332 hingga 1323 Sebelum Masihi pada zaman Dinasti Kelapan Belas (kira-kira 1539 hingga 1292 Sebelum Masihi secara keseluruhan), menurut catatan Muzium Glencairn.</p>
        <p>Penggunaan penyokong kepala keras ini bukan sekadar soal keselesaan. Dalam iklim panas Mesir, bentuknya dipercayai membantu pengudaraan di sekitar kepala ketika tidur, sekali gus mengurangkan haba. Penyokong berasaskan kayu turut dianggap lebih bersih berbanding kain kerana tidak mudah menjadi sarang serangga. Fungsi lain yang tidak kurang penting ialah melindungi gaya rambut, wig dan hiasan kepala yang rumit daripada rosak atau kusut ketika tidur, memandangkan susunan rambut sebegini mengambil masa dan kepakaran untuk disiapkan. Dalam konteks kepercayaan Mesir Purba, penyokong kepala turut dikaitkan dengan idea kebangkitan semula dan perlindungan sepanjang malam, sering dihiasi dengan gambaran dewa pelindung seperti Bes dan Taweret. Oleh sebab bahan seperti gading dan batu jenis tertentu tergolong mahal serta memerlukan kemahiran pertukangan yang tinggi, penyokong kepala yang lebih halus ukirannya turut menjadi penanda status sosial pemiliknya.</p>
        <p>Beberapa objek berbentuk penyokong kepala turut dikaitkan dengan tamadun Mesopotamia purba di rantau yang kini dikenali sebagai Iraq, misalnya objek berbentuk bulan sabit yang diukir daripada batu kapur. Namun begitu, rekod arkeologi mengenainya tidak sebanyak dan tidak setersusun bukti yang ditemui di Mesir, dan tarikh tepat penggunaannya kekal sebagai persoalan terbuka dalam kajian arkeologi Timur Tengah.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>China: bantal keras sebagai lambang kesihatan dan status</h2>
        <p>Di China, penyokong kepala keras turut mempunyai sejarah yang panjang, dengan bantal seramik atau porselin dipercayai mula muncul sekitar Dinasti Sui (581 hingga 618 Masihi). Contoh bantal porselin tertua yang pernah ditemui berbentuk kotak, digali dari sebuah makam milik seorang pegawai bernama Zhang Sheng di Anyang, wilayah Henan, dan dianggarkan berasal dari abad keenam Masihi. Era kegemilangan penghasilan bantal porselin pula berlaku semasa Dinasti Song (960 hingga 1279), apabila pengeluarannya berkembang pada skala yang lebih besar disertai teknik dan corak hiasan yang lebih pelbagai. Salah satu contoh yang masih tersimpan ialah bantal porselin putih berbentuk kanak-kanak daripada era Song Utara, yang kini disimpan di Muzium Istana, Beijing.</p>
        <p>Bantal keras di China turut memenuhi fungsi yang lebih luas berbanding sekadar alat tidur. Bahan seperti batu, jed, buluh, kayu dan porselin dipercayai dapat menyejukkan kepala pada cuaca panas, mengekalkan susunan rambut yang telah disikat kemas, menstabilkan pergelangan tangan tabib semasa pemeriksaan denyut nadi dalam perubatan tradisional China, serta menyokong lengan penulis atau pelukis semasa menghasilkan karya kaligrafi. Versi yang lebih kecil dan mudah alih turut dibawa oleh pengembara dalam perjalanan jauh.</p>
        <p>Corak hiasan pada bantal ini turut membawa makna simbolik tertentu. Motif singa dipercayai dapat menghalau roh jahat, manakala motif naga pula dikhaskan untuk golongan diraja dan bangsawan. Bantal berbentuk bunga teratai atau bayi lazimnya dihadiahkan semasa perkahwinan sebagai lambang harapan untuk mendapat cahaya mata. Pada Dinasti Yuan (1279 hingga 1368), reka bentuk bantal turut meniru bentuk seni bina dan alat persembahan pentas, manakala bantal biru putih dari kawasan Jingdezhen terkenal dengan ukiran halus. Penggunaan bantal seramik kemudiannya berkurangan pada Dinasti Ming (1368 hingga 1644) dan Dinasti Qing (1644 hingga 1911) apabila pilihan terhadap bahan lain yang lebih lembut semakin meluas, walaupun penghasilannya masih diteruskan secara terhad di sesetengah kawasan utara China sehingga sekitar tahun 1950-an dan 1960-an sebelum akhirnya ditinggalkan dalam kehidupan seharian.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Jepun: takamakura dan penjagaan gaya rambut tradisional</h2>
        <p>Di Jepun, penyokong kepala tradisional dikenali sebagai <em lang="ja" style={{ fontStyle: 'normal' }}>takamakura</em>, yang secara literal bermaksud bantal tinggi. Berbeza daripada penyokong kepala Mesir atau China yang menampung keseluruhan kepala, takamakura direka dengan tapak kayu yang selalunya bersalut lakuer berkilat, berbentuk sedikit melengkung bagi membolehkan sedikit pergerakan legar semasa digunakan. Di bahagian atasnya pula diletakkan bantalan kecil yang lebih lembut, sering diisi dengan sekam gandum atau bahan seumpamanya, supaya berat kepala tidak menekan terus ke atas rambut ketika tidur.</p>
        <p>Sebab utama takamakura digunakan adalah untuk mengekalkan gaya rambut tradisional Jepun yang dikenali sebagai <em lang="ja" style={{ fontStyle: 'normal' }}>nihongami</em>, terutamanya dalam kalangan geisha dan pelatih mereka yang digelar maiko. Gaya rambut sebegini memerlukan masa dan kepakaran yang tinggi untuk disiapkan serta perlu dikekalkan tanpa diubah selama beberapa hari berturut-turut. Dengan tidur menggunakan takamakura, susunan rambut di bahagian atas kekal tidak terjejas sepanjang malam. Kebanyakan takamakura berlapis lakuer dan kain yang masih wujud hari ini berasal dari abad ke-19, manakala versi berbahan porselin pula lebih banyak bertarikh dari awal hingga pertengahan abad ke-20, menunjukkan amalan ini masih diteruskan sehingga agak lewat dalam sejarah sebelum bantal lembut menjadi pilihan utama.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Peralihan kepada bantal lembut di Eropah</h2>
        <p>Berbeza daripada tradisi penyokong kepala keras di Mesir, Mesopotamia, China dan Jepun, masyarakat Eropah akhirnya lebih memilih bantal lembut berisi bulu, kapas atau bahan sejenis sebagai piawai. Namun begitu, peralihan ini berlaku secara beransur-ansur dan turut dipengaruhi oleh kelas sosial serta peraturan rasmi, bukan sekadar hasil satu ciptaan tunggal. Menjelang penghujung Zaman Pertengahan, perdagangan barangan tidur seperti tilam dan bantal berisi bulu, wol, jerami dan pelbagai jenis kapuk tumbuhan, iaitu gebu halus daripada biji tumbuhan yang dikenali sebagai <em lang="en" style={{ fontStyle: 'normal' }}>reed mace</em> dan <em lang="en" style={{ fontStyle: 'normal' }}>thistle</em>, semakin berkembang di England, sehingga pihak berkuasa turut mengawal selianya. Menurut catatan sejarawan Universiti Manchester, sebuah akta di England pada tahun 1499 telah melarang penjualan bahan pengisi tilam dan bantal yang digelar <em lang="en" style={{ fontStyle: 'normal' }}>corrupte stuffes</em> kerana dianggap membahayakan kesihatan, manakala peraturan yang disemak semula pada tahun 1552 secara khusus melarang penjualan kapuk daripada tumbuhan reed mace dan thistle untuk tujuan perdagangan, walaupun kegunaan peribadi tidak turut disekat.</p>
        <p>Kawalan ke atas bahan pengisi bantal ini terus berlanjutan. Rekod dari tahun 1594 menunjukkan sekumpulan tukang perabot dan pembekal katil di London memohon kepada seorang pegawai diraja bernama William Cecil, dengan hujah bahawa kapuk tumbuhan memerlukan tempoh pengeringan selama setahun penuh sebelum selamat digunakan, manakala pesaing mereka pula berhujah sebaliknya, iaitu bahan itu sama ada membiakkan hama pada peringkat awal atau menyebabkan pelbagai penyakit kotor tidak kira berapa lama ia dikeringkan. Perdagangan barangan tidur dan upholsteri ini turut diselia oleh sebuah badan berpiagam diraja bernama Worshipful Company of Upholders, yang menerima piagam pada tahun 1626 dan menjalankan pemeriksaan serta mengenakan denda ke atas penjual bahan pengisi bermutu rendah sehingga ke abad ke-18. Rekod-rekod seperti ini menunjukkan bantal lembut sudah menjadi barangan yang cukup lazim dalam masyarakat, bukan lagi terhad kepada golongan bangsawan semata-mata, sehingga memerlukan sistem kawal selia yang formal.</p>
        <p>Peralihan daripada barangan mewah golongan atasan kepada keperluan rumah tangga biasa terus dipercepatkan sejak abad ke-18, apabila laluan perdagangan yang semakin luas serta pengindustrian pengeluaran tekstil menjadikan kain kapas dan bahan pengisi bantal lebih murah serta mudah didapati secara meluas. Proses inilah yang akhirnya mengubah bantal lembut, yang pada asalnya dikaitkan dengan golongan bangsawan, menjadi barangan pengeluaran besar-besaran yang boleh dimiliki hampir semua isi rumah seperti yang dilihat pada hari ini.</p>
      </div>

      <div data-reveal>
        <h2 style={{ color: 'var(--ink)', fontSize: 22, letterSpacing: '-.01em', margin: '40px 0 14px' }}>Fungsi purba, bentuk moden</h2>
        <p>Jika dilihat secara keseluruhan, objek yang boleh dianggap sebagai bentuk awal bantal pada asalnya tidak dicipta semata-mata untuk keselesaan seperti yang difahami pada hari ini. Di Mesir Purba, dan menurut sumber sejarah popular juga di Mesopotamia, tujuan utamanya ialah mengurus haba, mengelakkan serangga dan menjaga hiasan kepala. Di China, penekanannya dipercayai lebih kepada kesejukan, kepercayaan berkaitan kesihatan, serta ketelitian pertukangan. Di Jepun pula, fungsi utamanya lebih tertumpu kepada mengekalkan gaya rambut yang rumit. Hanya di Eropah, menerusi satu proses panjang merentasi Zaman Pertengahan, Zaman Renaissance dan Revolusi Perindustrian, bantal lembut berisi bahan seperti bulu dan kapas akhirnya menjadi pilihan utama yang meluas.</p>
        <p>Namun begitu, unsur daripada tradisi lama ini tidak sepenuhnya hilang. Bantal atau penyokong leher yang lebih tegas bentuknya masih boleh dijumpai di sesetengah bahagian Asia hari ini, malah turut dipasarkan atas sebab kesihatan seperti sokongan postur leher dan tulang belakang. Ini menunjukkan garis pemisah antara penyokong kepala berfungsi dan bantal untuk keselesaan, yang mula dilukis sejak ribuan tahun lalu, sebenarnya tidak pernah benar-benar tertutup.</p>
        <p>Evolusi bantal sepanjang zaman ini menunjukkan bagaimana satu keperluan tidur yang asas boleh dibentuk secara berbeza mengikut iklim, kepercayaan dan struktur sosial sesebuah tamadun.</p>
      </div>

      <div data-reveal style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
        <h2 style={{ color: 'var(--ink)', fontSize: 16, letterSpacing: '-.01em', margin: '0 0 10px' }}>Rujukan</h2>
        <ul style={{ paddingLeft: 20, margin: 0, display: 'grid', gap: 8, color: 'var(--text)', fontSize: 13.5 }}>
          <li>Glencairn Museum. <a href="https://www.glencairnmuseum.org/newsletter/2018/7/25/headrests-in-glencairns-egyptian-collection-practicality-and-protection" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>Headrests in Glencairn&rsquo;s Egyptian Collection: Practicality and Protection</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>China Daily. <a href="https://www.chinadaily.com.cn/a/202303/23/WS641c0009a31057c47ebb62a1.html" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>A journey through the history of Chinese porcelain pillows</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>University of Manchester, Sleeping Well project blog. <a href="https://sites.manchester.ac.uk/sleeping-well/2022/11/02/bedding-down-in-early-modern-england/" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>Bedding &lsquo;Down&rsquo; in Early Modern England</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
          <li>Tokyo Jinja in Doha. <a href="https://www.tokyojinjaindoha.com/2013/04/02/takamakura-a-geishas-hard-night-sleep/" target="_blank" rel="noreferrer"><em lang="en" style={{ fontStyle: 'italic' }}>Takamakura&hellip; A Geisha&rsquo;s Hard Night Sleep</em><span className="sr-only"> (buka di tab baharu)</span></a>.</li>
        </ul>
      </div>

      <p data-reveal style={{ marginTop: 32 }}>Sedang mencari bantal korporat bercetak logo untuk syarikat anda? <a className="text-link text-link--right" href="/panduan">Lihat panduan menempah <span aria-hidden="true">→</span></a></p>
    </div></article>

    <SiteFooter />
  </main>;
}
