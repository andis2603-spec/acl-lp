<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AI Creator Labs — Tempat Belajar AI</title>
<meta name="description" content="Portal belajar AI dari AI Creator Labs: resource, video pembelajaran, dan artikel untuk AI Content Creator dan AI Agent Builder.">
<meta name="theme-color" content="#06070d">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='9' fill='%23161a3a'/%3E%3Cpath d='M16 6l9 5v10l-9 5-9-5V11z' fill='none' stroke='%23a9a4ff' stroke-width='2'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500&display=swap">
<link rel="stylesheet" href="styles.css">
</head>
<body data-route="home">

<div class="bg" aria-hidden="true">
  <div class="bg-visual"></div>
  <div class="bg-overlay"></div>
  <canvas id="particles"></canvas>
</div>

<a class="skip" href="#view">Lewati ke konten</a>

<header class="topbar" id="topbar">
  <a class="back" href="#/" aria-label="Kembali ke beranda">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
    <span>Beranda</span>
  </a>
  <a class="mini-brand" href="#/">AI Creator <em>Labs</em></a>
  <nav class="tabs" aria-label="Navigasi utama" data-nav="top">
    <a href="#/resources" data-route="resources">Resources</a>
    <a href="#/knowledges" data-route="knowledges">Knowledges</a>
    <a href="#/articles" data-route="articles">Articles</a>
  </nav>
</header>

<main id="view" tabindex="-1">

  <!-- BERANDA -->
  <section class="page" data-page="home">
    <div class="hero">
      <p class="eyebrow"><span class="dot"></span>Portal belajar publik</p>
      <p class="brand">AI Creator <em>Labs</em></p>
      <h1>
        <span class="h1-a">Tempat Belajar AI</span>
        <span class="h1-b">No #1 di Indonesia</span>
      </h1>
      <p class="sub">Kuasai pembuatan Content Creation, AI Agent, dan tingkatkan produktivitas bisnis dengan AI tanpa ribet coding.</p>

      <nav class="tabs hero-tabs" aria-label="Pilih jalur belajar" data-nav="hero">
        <a href="#/resources" data-route="resources">Resources</a>
        <a href="#/knowledges" data-route="knowledges">Knowledges</a>
        <a href="#/articles" data-route="articles">Articles</a>
      </nav>

      <ul class="chips" id="chips" aria-label="Topik populer"></ul>

      <form class="chat" id="chat" role="search" autocomplete="off">
        <label class="sr" for="chat-input">Tanya atau cari materi belajar</label>
        <input id="chat-input" type="text" placeholder="Mau belajar apa hari ini?" maxlength="120">
        <button type="submit" aria-label="Cari materi">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </button>
      </form>
      <p class="hint">Dari nol, tanpa coding. Pilih jalurmu di atas, atau ketik topik yang ingin kamu kuasai.</p>
    </div>

    <div class="long">

      <section class="block intro">
        <h2 class="big">Dari Nol Jadi <em>AI Creator</em> &amp; AI Agent Builder!</h2>
        <p class="lead">Belajar Bikin Konten Pakai AI dan Bangun AI Agent Sendiri, Meski Kamu Masih Pemula!</p>
        <p>Nggak perlu jago teknologi, nggak harus bisa coding, dan nggak perlu punya pengalaman sebelumnya.</p>
        <p>Lewat satu program belajar yang praktis dan mudah dipahami, kamu akan belajar memanfaatkan Artificial Intelligence (AI) untuk membuat konten promosi, membangun personal branding, hingga membuat AI Agent yang bisa membantu pekerjaanmu secara lebih otomatis.</p>
        <p class="strong">Saatnya bukan cuma jadi pengguna AI, tapi mulai jadi orang yang bisa memanfaatkan AI untuk menghasilkan sesuatu!</p>
      </section>

      <section class="block glass panel" aria-labelledby="s-today">
        <h2 class="big" id="s-today">AI bukan lagi masa depan. <em>AI sudah jadi kebutuhan hari ini!</em></h2>
        <p>Pernah merasa kesulitan membuat konten untuk promosi bisnis?</p>
        <p>Bingung mencari ide postingan setiap hari?</p>
        <p>Ingin punya personal branding, tetapi nggak tahu harus mulai dari mana?</p>
        <p>Atau pernah melihat orang lain membuat video AI, gambar keren, bahkan robot AI yang bisa bekerja otomatis, sementara kamu masih bingung cara membuatnya?</p>
        <p>Tenang, kamu nggak sendirian!</p>
        <p>Sekarang teknologi AI berkembang sangat cepat. Banyak pekerjaan yang dulunya membutuhkan waktu berjam-jam, kini bisa dibantu dengan AI.</p>
        <p>Kabar baiknya, kamu juga bisa mempelajarinya dari nol!</p>
        <p>Di E-Course ini, kamu akan diajak belajar secara bertahap, mulai dari mengenal AI, membuat konten kreatif, sampai memahami cara membangun AI Agent.</p>
        <p class="strong">Nggak harus pintar teknologi. Yang penting mau belajar dan praktik!</p>
      </section>

      <section class="block" aria-labelledby="s-learn">
        <p class="eyebrow"><span class="dot"></span>Materi</p>
        <h2 class="big" id="s-learn">Apa saja yang akan <em>kamu pelajari?</em></h2>
        <div class="mods">
          <article class="glass mod" style="--c:#a99bff">
            <span class="num">01</span>
            <h3>AI Content Creator</h3>
            <p class="mod-lead">Belajar membuat berbagai jenis konten dengan bantuan AI.</p>
            <ul class="ticks">
              <li>Mengenal berbagai tools AI untuk kebutuhan konten.</li>
              <li>Teknik membuat prompt yang efektif.</li>
              <li>Membuat ide konten untuk media sosial.</li>
              <li>Membuat caption dan copywriting promosi.</li>
              <li>Membuat gambar dan desain menggunakan AI.</li>
              <li>Membuat video menggunakan AI.</li>
              <li>Membuat konten untuk Instagram, TikTok, Facebook, dan YouTube.</li>
              <li>Membuat konten untuk jualan online dan personal branding.</li>
              <li>Membantu menyusun strategi konten secara lebih praktis.</li>
            </ul>
          </article>
          <article class="glass mod" style="--c:#7ea6ff">
            <span class="num">02</span>
            <h3>AI Agent Builder</h3>
            <p class="mod-lead">Bukan cuma membuat konten, kamu juga akan mengenal teknologi AI Agent!</p>
            <ul class="ticks">
              <li>Mengenal apa itu AI Agent dan bagaimana cara kerjanya.</li>
              <li>Memahami perbedaan AI Chatbot dan AI Agent.</li>
              <li>Belajar membuat AI Agent dari dasar.</li>
              <li>Mengenal tools untuk membangun AI Agent.</li>
              <li>Membuat AI Agent sesuai kebutuhan.</li>
              <li>Memahami instruksi dan workflow AI Agent.</li>
              <li>Mengenal otomatisasi pekerjaan menggunakan AI.</li>
              <li>Memanfaatkan AI Agent untuk membantu pekerjaan bisnis dan produktivitas.</li>
            </ul>
          </article>
          <article class="glass mod" style="--c:#4ade9b">
            <span class="num">03</span>
            <h3>AI Productivity &amp; Business</h3>
            <p class="mod-lead">Manfaatkan AI untuk membantu aktivitas sehari-hari dan pekerjaan bisnis.</p>
            <ul class="ticks">
              <li>Membantu riset ide bisnis dan konten.</li>
              <li>Membuat materi promosi lebih cepat.</li>
              <li>Membantu pekerjaan administratif.</li>
              <li>Meningkatkan produktivitas kerja.</li>
              <li>Menemukan peluang penggunaan AI untuk bisnis.</li>
              <li>Mengembangkan ide layanan dan produk berbasis AI.</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="block" aria-labelledby="s-who">
        <p class="eyebrow"><span class="dot"></span>Untuk siapa</p>
        <h2 class="big" id="s-who">Siapa yang cocok <em>ikut e-course ini?</em></h2>
        <p>Program ini cocok banget buat kamu yang:</p>
        <ul class="who">
          <li class="glass">Pemula yang ingin belajar AI dari nol.</li>
          <li class="glass">Pelaku UMKM yang ingin mempromosikan bisnis secara online.</li>
          <li class="glass">Content creator yang ingin membuat konten lebih praktis.</li>
          <li class="glass">Affiliate marketer yang membutuhkan banyak ide konten promosi.</li>
          <li class="glass">Digital marketer yang ingin meningkatkan skill.</li>
          <li class="glass">Freelancer yang ingin menambah kemampuan baru.</li>
          <li class="glass">Karyawan atau mahasiswa yang ingin meningkatkan produktivitas.</li>
          <li class="glass">Pemilik bisnis yang ingin mulai mengenal otomatisasi.</li>
          <li class="glass">Siapa pun yang ingin mengikuti perkembangan teknologi AI.</li>
        </ul>
        <p class="strong">Bahkan kalau selama ini kamu belum pernah menggunakan AI sekalipun, kamu tetap bisa mulai belajar di sini!</p>
      </section>

      <section class="block glass panel" aria-labelledby="s-why">
        <h2 class="big" id="s-why">Kenapa kamu perlu <em>belajar AI sekarang?</em></h2>
        <p>Bayangkan jika kamu bisa:</p>
        <ul class="ticks">
          <li>Membuat ide konten tanpa harus bingung setiap hari.</li>
          <li>Membuat materi promosi dengan bantuan AI.</li>
          <li>Mengembangkan personal branding secara konsisten.</li>
          <li>Membuat gambar dan video tanpa harus menjadi desainer profesional.</li>
          <li>Membangun AI Agent untuk membantu pekerjaan.</li>
          <li>Menghemat waktu dalam mengerjakan berbagai tugas.</li>
        </ul>
        <p>AI bukan berarti menggantikan kreativitasmu.</p>
        <p>Justru AI bisa menjadi partner untuk membantu kamu bekerja lebih cerdas, produktif, dan kreatif.</p>
        <p class="strong">Jangan sampai hanya menjadi penonton ketika orang lain sudah mulai memanfaatkan teknologi ini!</p>
      </section>

      <section class="block" aria-labelledby="s-testi">
        <p class="eyebrow"><span class="dot"></span>Testimoni</p>
        <h2 class="big" id="s-testi">Apa kata <em>mereka?</em></h2>
        <p class="note">Bagian ini dapat diisi dengan testimoni asli peserta setelah program berjalan.</p>
        <div class="testi">
          <button type="button" class="vcard" data-open="short" data-i="0" aria-label="Putar video testimoni 1">
            <span class="vthumb" style="--h:235"><span class="play"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M8 5.5v13l11-6.5z"/></svg></span><span class="vname">Nama Peserta</span></span>
            <span class="vcap">“[Masukkan pengalaman peserta setelah belajar membuat konten menggunakan AI.]”</span>
          </button>
          <button type="button" class="vcard" data-open="short" data-i="1" aria-label="Putar video testimoni 2">
            <span class="vthumb" style="--h:265"><span class="play"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M8 5.5v13l11-6.5z"/></svg></span><span class="vname">Nama Peserta</span></span>
            <span class="vcap">“[Masukkan pengalaman peserta ketika berhasil membuat AI Agent pertamanya.]”</span>
          </button>
          <button type="button" class="vcard" data-open="short" data-i="2" aria-label="Putar video testimoni 3">
            <span class="vthumb" style="--h:295"><span class="play"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M8 5.5v13l11-6.5z"/></svg></span><span class="vname">Nama Peserta</span></span>
            <span class="vcap">“[Masukkan pengalaman peserta tentang kemudahan mengikuti materi dari nol.]”</span>
          </button>
        </div>
      </section>

      <section class="block glass panel cta" aria-labelledby="s-cta">
        <p class="eyebrow"><span class="dot"></span>Mulai perjalanan AI-mu hari ini!</p>
        <p>Tidak perlu menunggu sampai kamu benar-benar paham teknologi.</p>
        <p>Tidak perlu menunggu sampai punya peralatan mahal.</p>
        <p>Tidak perlu menunggu sampai menjadi seorang ahli.</p>
        <p>Mulailah dari hal sederhana. Pelajari satu skill baru. Praktikkan. Kembangkan kemampuanmu.</p>
        <p>Karena peluang di era AI bukan hanya milik orang yang sudah ahli teknologi.</p>
        <p class="strong">Peluang juga terbuka untuk siapa saja yang mau belajar dan beradaptasi!</p>
        <h2 class="big" id="s-cta">Siap menjadi <em>AI Creator &amp; AI Agent Builder?</em></h2>
        <p>Yuk, mulai belajar dari nol dan bangun skill masa depanmu sekarang!</p>
        <!-- TODO: ganti href="#" dengan URL pendaftaran -->
        <a class="btn" href="#" data-cta>Klik tombol daftar sekarang</a>
        <p class="closing">Jangan cuma tahu tentang AI. Mulai gunakan AI untuk berkarya, membangun personal branding, dan mengembangkan bisnismu!</p>
      </section>

    </div>
  </section>

  <!-- HALAMAN ISI (diisi app.js) -->
  <section class="page" data-page="resources" hidden></section>
  <section class="page" data-page="knowledges" hidden></section>
  <section class="page" data-page="articles" hidden></section>
</main>

<footer class="foot">
  <span>© 2026 AI Creator Labs</span>
  <span class="foot-note">Dari nol jadi AI Creator &amp; AI Agent Builder.</span>
</footer>

<dialog id="detail" aria-labelledby="detail-title">
  <div class="detail-inner">
    <button class="close" id="detail-close" aria-label="Tutup detail">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
    <div id="detail-body"></div>
  </div>
</dialog>

<script src="app.js"></script>
</body>
</html>
