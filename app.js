(function () {
  "use strict";

  /* ================= DATA ================= */
  var RESOURCES = [
    { t: "Prompt Pack Konten Instagram", c: "Prompt", d: "Kumpulan prompt siap pakai untuk ide feed, Reels, dan caption yang konsisten.",
      pts: ["30 prompt ide konten per niche", "Format caption dengan hook, isi, dan ajakan", "Cara menyesuaikan gaya bahasa brand"] },
    { t: "Template Kalender Konten 30 Hari", c: "Template", d: "Kerangka jadwal posting sebulan penuh untuk Instagram, TikTok, dan YouTube.",
      pts: ["Pembagian konten edukasi, jualan, dan interaksi", "Kolom ide, format, dan status produksi", "Cara mengisi kalender dengan bantuan AI"] },
    { t: "Panduan Prompt Efektif untuk Pemula", c: "Panduan", d: "Rumus menulis perintah ke AI agar hasilnya jelas, relevan, dan bisa langsung dipakai.",
      pts: ["Peran, konteks, tugas, dan format hasil", "Contoh prompt buruk vs prompt baik", "Teknik memperbaiki hasil lewat revisi bertahap"] },
    { t: "Checklist Memilih Tools AI", c: "Tools", d: "Cara memilih tools AI untuk teks, gambar, dan video sesuai kebutuhan dan budget.",
      pts: ["Kriteria menilai tools: fungsi, harga, kemudahan", "Daftar pertanyaan sebelum berlangganan", "Kombinasi tools untuk alur kerja konten"] },
    { t: "Blueprint AI Agent Pertama", c: "AI Agent", d: "Peta langkah dari ide sampai AI Agent sederhana yang membantu pekerjaanmu.",
      pts: ["Menentukan tugas yang cocok untuk agen", "Menyusun tujuan, batasan, dan hasil akhir", "Uji coba dan perbaikan agen"] },
    { t: "Template Instruksi AI Agent", c: "AI Agent", d: "Format instruksi untuk mengarahkan perilaku AI Agent secara rapi dan konsisten.",
      pts: ["Struktur instruksi: peran, aturan, alur kerja", "Contoh untuk agen CS, riset, dan konten", "Tips agar agen tidak keluar jalur"] },
    { t: "Panduan Chatbot vs AI Agent", c: "AI Agent", d: "Pahami perbedaan keduanya dan kapan masing-masing paling berguna.",
      pts: ["Cara kerja chatbot dan AI Agent", "Studi kasus pekerjaan bisnis", "Kapan perlu otomatisasi"] },
    { t: "Workflow Otomatisasi Tugas Admin", c: "Template", d: "Contoh alur kerja untuk merapikan pesan, ringkasan, dan pengingat harian.",
      pts: ["Memetakan tugas berulang", "Merancang alur input, proses, hasil", "Mengukur waktu yang dihemat"] },
    { t: "Prompt Riset Ide Bisnis", c: "Prompt", d: "Prompt untuk menggali peluang, audiens, dan ide layanan berbasis AI.",
      pts: ["Riset audiens dan masalah utama mereka", "Membandingkan ide produk dan layanan", "Menyusun ringkasan peluang"] },
    { t: "Prompt Copywriting Jualan", c: "Prompt", d: "Prompt untuk menulis deskripsi produk, iklan singkat, dan materi promosi.",
      pts: ["Rumus copy: masalah, solusi, bukti, ajakan", "Variasi gaya untuk berbagai platform", "Cara mengedit hasil AI agar terasa manusiawi"] },
    { t: "Panduan Personal Branding dengan AI", c: "Panduan", d: "Langkah membangun citra diri yang konsisten dengan bantuan AI.",
      pts: ["Menentukan positioning dan gaya bicara", "Ide konten yang memperkuat keahlian", "Rutinitas posting yang realistis"] },
    { t: "Cheatsheet Prompt Gambar & Video AI", c: "Prompt", d: "Kata kunci visual, gaya, dan komposisi untuk gambar serta video pendek.",
      pts: ["Elemen prompt visual: subjek, gaya, cahaya", "Contoh untuk konten jualan", "Alur membuat video pendek dengan AI"] }
  ];
  var RES_CATS = ["Semua", "Prompt", "Template", "Panduan", "Tools", "AI Agent"];

  var VIDEOS = [
    { t: "Mengenal AI dari Nol", dur: "12:40", lvl: "Pemula", h: 235, d: "Gambaran besar AI dan cara memanfaatkannya untuk konten dan pekerjaan sehari-hari.",
      pts: ["Apa itu AI dan apa yang bisa dilakukannya", "Mengenal berbagai tools AI", "Langkah pertama yang aman dan praktis"] },
    { t: "Teknik Prompt yang Efektif", dur: "18:05", lvl: "Pemula", h: 255, d: "Cara menulis perintah agar hasil AI sesuai harapan.",
      pts: ["Rumus prompt dasar", "Memperbaiki hasil dengan iterasi", "Contoh prompt untuk konten"] },
    { t: "Bikin Ide Konten Tanpa Mentok", dur: "14:22", lvl: "Pemula", h: 270, d: "Sistem sederhana untuk punya ide konten setiap hari.",
      pts: ["Menggali ide dari audiens", "Mengubah satu ide jadi banyak format", "Menyusun kalender konten"] },
    { t: "Caption dan Copywriting Promosi", dur: "16:48", lvl: "Pemula", h: 285, d: "Menulis caption dan materi promosi yang jelas dan menarik dengan bantuan AI.",
      pts: ["Struktur copy yang efektif", "Menyesuaikan gaya per platform", "Mengedit hasil AI"] },
    { t: "Membuat Gambar dan Desain dengan AI", dur: "21:10", lvl: "Menengah", h: 220, d: "Dari prompt visual sampai desain siap unggah, tanpa harus jadi desainer.",
      pts: ["Menulis prompt visual", "Menjaga konsistensi gaya", "Mengolah hasil jadi materi promosi"] },
    { t: "Membuat Video Pendek dengan AI", dur: "24:35", lvl: "Menengah", h: 300, d: "Alur membuat video untuk TikTok, Reels, dan YouTube Shorts.",
      pts: ["Naskah dan storyboard dengan AI", "Menghasilkan visual dan suara", "Menyusun hasil akhir"] },
    { t: "AI Agent vs Chatbot: Apa Bedanya?", dur: "10:15", lvl: "Pemula", h: 245, d: "Memahami cara kerja AI Agent dan kapan menggunakannya.",
      pts: ["Perbedaan mendasar", "Contoh kasus nyata", "Memilih pendekatan yang tepat"] },
    { t: "Membangun AI Agent Pertamamu", dur: "28:50", lvl: "Menengah", h: 262, d: "Praktik membuat AI Agent sederhana langkah demi langkah tanpa coding.",
      pts: ["Menentukan tujuan agen", "Menulis instruksi dan workflow", "Uji coba dan perbaikan"] },
    { t: "Otomatisasi Kerja untuk Bisnis", dur: "19:30", lvl: "Menengah", h: 210, d: "Memanfaatkan AI Agent untuk pekerjaan bisnis dan produktivitas.",
      pts: ["Mencari tugas yang layak diotomatisasi", "Merancang alur kerja", "Menghitung waktu yang dihemat"] }
  ];

  // Isi `src` dengan URL video pendek (mp4) tiap peserta; kosong = tampil placeholder.
  var SHORTS = [
    { name: "Nama Peserta", src: "", quote: "[Masukkan pengalaman peserta setelah belajar membuat konten menggunakan AI.]" },
    { name: "Nama Peserta", src: "", quote: "[Masukkan pengalaman peserta ketika berhasil membuat AI Agent pertamanya.]" },
    { name: "Nama Peserta", src: "", quote: "[Masukkan pengalaman peserta tentang kemudahan mengikuti materi dari nol.]" }
  ];

  var TAGS = ["Content Creation", "AI Agent", "Produktivitas", "Bisnis & UMKM", "Personal Branding"];
  var ARTICLES = [
    { g: "Content Creation", t: "5 Cara Menemukan Ide Konten Setiap Hari dengan AI", m: 5, d: "Nov 2026",
      x: "Bingung mau posting apa? Gunakan AI sebagai partner brainstorming agar ide tidak pernah habis.",
      pts: ["Mulai dari pertanyaan audiens, bukan dari tools", "Minta AI membuat variasi sudut pandang", "Simpan ide terbaik di bank konten"] },
    { g: "Content Creation", t: "Rumus Caption yang Bikin Orang Berhenti Scroll", m: 4, d: "Nov 2026",
      x: "Caption bagus punya hook kuat, isi jelas, dan ajakan yang tegas. AI membantumu menyusunnya lebih cepat.",
      pts: ["Tulis 5 versi hook lalu pilih yang terbaik", "Pertahankan suara aslimu saat mengedit", "Akhiri dengan satu ajakan yang jelas"] },
    { g: "Content Creation", t: "Dari Prompt ke Video: Alur Praktis untuk Pemula", m: 7, d: "Okt 2026",
      x: "Video AI tidak harus rumit. Pahami alurnya: naskah, visual, suara, lalu penyuntingan.",
      pts: ["Tulis naskah pendek dan fokus", "Buat visual per adegan", "Rapikan hasil dan tambahkan teks"] },
    { g: "AI Agent", t: "Apa Itu AI Agent dan Kenapa Kamu Perlu Peduli?", m: 6, d: "Nov 2026",
      x: "AI Agent bukan sekadar chatbot. Ia bisa menjalankan rangkaian tugas sesuai instruksi dan tujuan yang kamu tetapkan.",
      pts: ["Chatbot menjawab, agen mengerjakan", "Agen butuh tujuan, aturan, dan alur kerja", "Mulai dari tugas kecil yang berulang"] },
    { g: "AI Agent", t: "Menulis Instruksi AI Agent yang Jelas dan Aman", m: 6, d: "Okt 2026",
      x: "Kualitas agen ditentukan oleh instruksinya. Susun peran, batasan, dan format hasil dengan rapi.",
      pts: ["Tentukan peran dan tugas utama", "Tulis batasan apa yang tidak boleh dilakukan", "Uji dengan skenario nyata"] },
    { g: "AI Agent", t: "Tugas Apa Saja yang Cocok Diserahkan ke AI Agent?", m: 5, d: "Sep 2026",
      x: "Tidak semua pekerjaan cocok untuk agen. Cari yang berulang, berpola, dan memakan waktu.",
      pts: ["Ringkasan dan rangkuman", "Draf balasan dan pengingat", "Riset awal dan pengumpulan referensi"] },
    { g: "Produktivitas", t: "Rutinitas Kerja 30 Menit Lebih Hemat dengan AI", m: 4, d: "Nov 2026",
      x: "Perubahan kecil pada rutinitas harianmu bisa menghemat waktu secara konsisten.",
      pts: ["Delegasikan draf pertama ke AI", "Gunakan template prompt yang sama", "Sisakan waktu untuk review manusia"] },
    { g: "Produktivitas", t: "Cara Meringkas Dokumen Panjang Tanpa Kehilangan Inti", m: 4, d: "Okt 2026",
      x: "Minta AI merangkum dengan format yang kamu butuhkan, lalu cek poin pentingnya sendiri.",
      pts: ["Tentukan tujuan ringkasan", "Minta poin utama dan tindak lanjut", "Verifikasi bagian krusial"] },
    { g: "Bisnis & UMKM", t: "AI untuk UMKM: Mulai dari Mana?", m: 6, d: "Nov 2026",
      x: "Pelaku UMKM bisa memakai AI untuk promosi, riset, dan layanan pelanggan tanpa investasi besar.",
      pts: ["Mulai dari konten promosi", "Lanjut ke riset pasar sederhana", "Otomatisasi tugas administratif"] },
    { g: "Bisnis & UMKM", t: "Membuat Materi Promosi Lebih Cepat untuk Jualan Online", m: 5, d: "Okt 2026",
      x: "Dari deskripsi produk sampai visual iklan, AI mempercepat produksi materi promosi.",
      pts: ["Susun deskripsi produk yang jelas", "Buat variasi iklan untuk diuji", "Jaga konsistensi tampilan brand"] },
    { g: "Bisnis & UMKM", t: "Menemukan Peluang Layanan Baru Berbasis AI", m: 7, d: "Sep 2026",
      x: "Riset masalah audiens, lalu rancang layanan yang memanfaatkan AI untuk menyelesaikannya.",
      pts: ["Petakan masalah yang sering muncul", "Uji ide dalam skala kecil", "Ukur hasil dan kembangkan"] },
    { g: "Personal Branding", t: "Membangun Personal Branding dari Nol dengan AI", m: 6, d: "Nov 2026",
      x: "Personal branding dimulai dari kejelasan: siapa kamu, untuk siapa, dan apa yang kamu tawarkan.",
      pts: ["Rumuskan positioning singkat", "Tentukan 3 pilar konten", "Posting konsisten dengan jadwal realistis"] },
    { g: "Personal Branding", t: "Tetap Terdengar Seperti Dirimu Saat Memakai AI", m: 5, d: "Okt 2026",
      x: "AI membantu menulis, tetapi ceritamu tetap harus terasa personal dan autentik.",
      pts: ["Berikan contoh tulisanmu sebagai acuan", "Tambahkan pengalaman pribadi", "Edit sampai terdengar natural"] }
  ];

  var CHIPS = [
    { l: "Prompt konten Instagram", r: "resources", q: "instagram" },
    { l: "Bikin AI Agent pertama", r: "resources", q: "agent" },
    { l: "Video AI untuk jualan", r: "knowledges", q: "video" },
    { l: "Personal branding", r: "articles", tag: "Personal Branding" },
    { l: "Otomatisasi kerja", r: "articles", tag: "Produktivitas" }
  ];

  var PAGES = {
    resources: { title: "Resources", h: "Kumpulan <em>resource</em> belajar", p: "Prompt, template, dan panduan praktis yang bisa langsung kamu pakai." },
    knowledges: { title: "Knowledges", h: "Pustaka <em>video</em> pembelajaran", p: "Belajar bertahap lewat video singkat, dari dasar AI sampai membangun AI Agent." },
    articles: { title: "Articles", h: "Artikel per <em>topik</em>", p: "Pilih satu topik, lalu baca artikel yang relevan untuk kebutuhanmu." }
  };

  /* ================= STATE & UTIL ================= */
  var state = { q: "", cat: "Semua", tag: TAGS[0] };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function tokens(q) { return q.toLowerCase().split(/[^a-z0-9&]+/).filter(function (w) { return w.length > 2; }); }
  function score(hay, q) {
    var tk = tokens(q); if (!tk.length) return 1;
    hay = hay.toLowerCase();
    return tk.reduce(function (n, w) { return n + (hay.indexOf(w) > -1 ? 1 : 0); }, 0);
  }
  function filterBy(list, hayFn) {
    if (!state.q.trim()) return list;
    return list
      .map(function (it) { return { it: it, s: score(hayFn(it), state.q) }; })
      .filter(function (o) { return o.s > 0; })
      .sort(function (a, b) { return b.s - a.s; })
      .map(function (o) { return o.it; });
  }

  var ICON_SEARCH = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>';
  var ICON_ARROW = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var ICON_PLAY = '<svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M8 5.5v13l11-6.5z"/></svg>';

  /* ================= RENDER ================= */
  function head(key) {
    var p = PAGES[key];
    return '<div class="page-head"><p class="eyebrow"><span class="dot"></span>' + p.title + '</p><h2>' + p.h + '</h2><p>' + p.p + '</p></div>';
  }
  function searchBox(ph) {
    return '<label class="search">' + ICON_SEARCH + '<span class="sr">Cari</span><input type="search" data-q placeholder="' + ph + '" value="' + esc(state.q) + '" maxlength="80"></label>';
  }
  function qNote(n) {
    if (!state.q.trim()) return "";
    return '<p class="qnote">' + n + ' hasil untuk “' + esc(state.q) + '”<button class="pill" data-clear>Hapus pencarian</button></p>';
  }
  function emptyBox() {
    return '<div class="glass empty"><p>Belum ada yang cocok dengan pencarianmu.</p><button class="pill" data-clear>Tampilkan semua</button></div>';
  }

  function renderResources() {
    var list = filterBy(RESOURCES, function (r) { return r.t + " " + r.d + " " + r.c; });
    if (state.cat !== "Semua") list = list.filter(function (r) { return r.c === state.cat; });
    var filters = RES_CATS.map(function (c) {
      return '<button class="pill" data-cat="' + esc(c) + '" aria-pressed="' + (state.cat === c) + '">' + esc(c) + '</button>';
    }).join("");
    var cards = list.map(function (r) {
      return '<button class="glass card" data-open="res" data-i="' + RESOURCES.indexOf(r) + '"><span class="tag">' + esc(r.c) + '</span><h3>' + esc(r.t) + '</h3><p>' + esc(r.d) + '</p><span class="more">Lihat detail ' + ICON_ARROW + '</span></button>';
    }).join("");
    return '<div class="wrap">' + head("resources") +
      '<div class="toolbar"><div class="filters" role="group" aria-label="Kategori">' + filters + '</div>' + searchBox("Cari resource…") + '</div>' +
      qNote(list.length) + (list.length ? '<div class="grid">' + cards + '</div>' : emptyBox()) + '</div>';
  }

  function renderKnowledges() {
    var list = filterBy(VIDEOS, function (v) { return v.t + " " + v.d + " " + v.lvl + " video"; });
    var cards = list.map(function (v) {
      return '<button class="glass card" data-open="vid" data-i="' + VIDEOS.indexOf(v) + '">' +
        '<div class="thumb" style="--h:' + v.h + '"><span class="play">' + ICON_PLAY + '</span><span class="dur">' + v.dur + '</span></div>' +
        '<span class="tag">' + esc(v.lvl) + '</span><h3>' + esc(v.t) + '</h3><p>' + esc(v.d) + '</p></button>';
    }).join("");
    return '<div class="wrap">' + head("knowledges") +
      '<div class="toolbar">' + searchBox("Cari video…") + '</div>' +
      qNote(list.length) + (list.length ? '<div class="grid">' + cards + '</div>' : emptyBox()) + '</div>';
  }

  function renderArticles() {
    var tagbar = TAGS.map(function (g) {
      var n = ARTICLES.filter(function (a) { return a.g === g; }).length;
      return '<button class="pill" data-tag="' + esc(g) + '" aria-pressed="' + (state.tag === g) + '">' + esc(g) + '<span class="count">' + n + '</span></button>';
    }).join("");
    var rows = ARTICLES.map(function (a, i) { return { a: a, i: i }; })
      .filter(function (o) { return o.a.g === state.tag; })
      .map(function (o) {
        return '<button class="glass row" data-open="art" data-i="' + o.i + '"><div class="body"><h3>' + esc(o.a.t) + '</h3><p>' + esc(o.a.x) + '</p><p class="meta">' + esc(o.a.d) + ' · ' + o.a.m + ' menit baca</p></div><span class="arrow">' + ICON_ARROW + '</span></button>';
      }).join("");
    return '<div class="wrap">' + head("articles") +
      '<div class="tagbar" role="group" aria-label="Pilih topik">' + tagbar + '</div>' +
      '<div class="list">' + rows + '</div></div>';
  }

  var RENDER = { resources: renderResources, knowledges: renderKnowledges, articles: renderArticles };

  function draw(route, keepFocus) {
    var el = $('[data-page="' + route + '"]');
    var active = document.activeElement;
    var hadSearch = keepFocus && active && active.hasAttribute && active.hasAttribute("data-q");
    var pos = hadSearch ? active.selectionStart : 0;
    el.innerHTML = RENDER[route]();
    if (hadSearch) {
      var inp = $("[data-q]", el); inp.focus();
      try { inp.setSelectionRange(pos, pos); } catch (e) {}
    }
  }

  /* ================= DETAIL ================= */
  var dlg = $("#detail"), dbody = $("#detail-body"), lastTrigger = null;
  function list(pts) { return "<ul>" + pts.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>"; }
  function openDetail(kind, i, trigger) {
    var h = "";
    if (kind === "res") {
      var r = RESOURCES[i];
      h = '<span class="tag">' + esc(r.c) + '</span><h3 id="detail-title">' + esc(r.t) + '</h3><p class="lead">' + esc(r.d) + '</p><h4>Isi resource</h4>' + list(r.pts);
    } else if (kind === "short") {
      var s = SHORTS[i];
      h = (s.src
        ? '<video class="short" controls playsinline preload="metadata" src="' + esc(s.src) + '"></video>'
        : '<div class="thumb" style="--h:' + [235, 265, 295][i] + '"><span class="play">' + ICON_PLAY + '</span></div>') +
        '<h3 id="detail-title">' + esc(s.name) + '</h3><p class="lead">' + esc(s.quote) + '</p>' +
        (s.src ? "" : '<p class="meta">Video testimoni akan tersedia setelah program berjalan.</p>');
    } else if (kind === "vid") {
      var v = VIDEOS[i];
      h = '<div class="thumb" style="--h:' + v.h + '"><span class="play">' + ICON_PLAY + '</span><span class="dur">' + v.dur + '</span></div><h3 id="detail-title">' + esc(v.t) + '</h3><p class="lead">' + esc(v.d) + '</p><h4>Yang kamu pelajari · ' + esc(v.lvl) + '</h4>' + list(v.pts);
    } else {
      var a = ARTICLES[i];
      h = '<span class="tag">' + esc(a.g) + '</span><h3 id="detail-title">' + esc(a.t) + '</h3><p class="lead">' + esc(a.x) + '</p><h4>Poin penting · ' + a.m + ' menit baca</h4>' + list(a.pts);
    }
    dbody.innerHTML = h + '<button class="btn ghost" data-dismiss>Tutup</button>';
    lastTrigger = trigger;
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    document.documentElement.style.overflow = "hidden";
  }
  function closeDetail() {
    if (dlg.close) dlg.close(); else dlg.removeAttribute("open");
  }
  dlg.addEventListener("close", function () {
    document.documentElement.style.overflow = "";
    if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
  });
  dlg.addEventListener("click", function (e) {
    if (e.target === dlg || e.target.closest("[data-dismiss]") || e.target.closest("#detail-close")) closeDetail();
  });

  /* ================= ROUTING ================= */
  function route() {
    var r = (location.hash.replace(/^#\/?/, "").split("?")[0] || "home");
    if (r !== "home" && !PAGES[r]) r = "home";
    document.body.setAttribute("data-route", r);
    $$(".page").forEach(function (p) { p.hidden = p.getAttribute("data-page") !== r; });
    $$(".tabs a").forEach(function (a) {
      if (a.dataset.route === r) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    if (r !== "home") draw(r);
    document.title = (r === "home" ? "AI Creator Labs — Tempat Belajar AI" : PAGES[r].title + " — AI Creator Labs");
    window.scrollTo(0, 0);
    if (route.first) $("#view").focus({ preventScroll: true });
    route.first = true;
  }
  window.addEventListener("hashchange", route);

  function go(r) {
    if (location.hash === "#/" + r) route(); else location.hash = "#/" + r;
  }

  /* ================= EVENTS ================= */
  document.addEventListener("click", function (e) {
    var t = e.target;
    var open = t.closest("[data-open]");
    if (open) return openDetail(open.dataset.open, +open.dataset.i, open);
    var cat = t.closest("[data-cat]");
    if (cat) { state.cat = cat.dataset.cat; return draw("resources"); }
    var tag = t.closest("[data-tag]");
    if (tag) { state.tag = tag.dataset.tag; return draw("articles"); }
    if (t.closest("[data-clear]")) {
      state.q = ""; state.cat = "Semua";
      return draw(document.body.getAttribute("data-route"));
    }
  });
  document.addEventListener("input", function (e) {
    if (e.target.hasAttribute && e.target.hasAttribute("data-q")) {
      state.q = e.target.value;
      draw(document.body.getAttribute("data-route"), true);
    }
  });

  // Chips
  $("#chips").innerHTML = CHIPS.map(function (c, i) {
    return '<li><button type="button" data-chip="' + i + '">' + esc(c.l) + '</button></li>';
  }).join("");
  $("#chips").addEventListener("click", function (e) {
    var b = e.target.closest("[data-chip]"); if (!b) return;
    var c = CHIPS[+b.dataset.chip];
    state.q = c.q || ""; state.cat = "Semua";
    if (c.tag) state.tag = c.tag;
    go(c.r);
  });

  // Input bergaya chat
  $("#chat").addEventListener("submit", function (e) {
    e.preventDefault();
    var input = $("#chat-input"), q = input.value.trim();
    state.cat = "Semua";
    if (!q) { state.q = ""; return go("resources"); }
    var low = q.toLowerCase(), r = "resources";
    if (/video|tonton|kelas|belajar lewat/.test(low)) r = "knowledges";
    else if (/artikel|baca|tips|cara /.test(low)) r = "articles";
    if (r === "articles") {
      var best = TAGS.map(function (g) {
        var s = ARTICLES.filter(function (a) { return a.g === g; }).reduce(function (n, a) { return n + score(a.t + " " + a.x + " " + g, q); }, 0);
        return { g: g, s: s };
      }).sort(function (a, b) { return b.s - a.s; })[0];
      if (best && best.s > 0) state.tag = best.g;
      state.q = "";
    } else {
      state.q = q;
    }
    input.value = "";
    go(r);
  });

  /* ================= PARTIKEL ================= */
  (function particles() {
    var cv = $("#particles"), ctx = cv.getContext && cv.getContext("2d");
    if (!ctx) return;
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    var W, H, dpr, ps = [], raf = 0;
    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(70, Math.max(24, W * H / 18000)));
      ps = [];
      for (var i = 0; i < n; i++) ps.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.5 + .4,
        vx: (Math.random() - .5) * .12, vy: -(Math.random() * .22 + .04),
        a: Math.random() * .5 + .2, p: Math.random() * 6.28
      });
    }
    function frame(t) {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < ps.length; i++) {
        var p = ps[i];
        p.x += p.vx; p.y += p.vy;
        if (p.y < -6) { p.y = H + 6; p.x = Math.random() * W; }
        if (p.x < -6) p.x = W + 6; else if (p.x > W + 6) p.x = -6;
        var tw = reduce ? 1 : .6 + .4 * Math.sin(t / 1200 + p.p);
        ctx.beginPath();
        ctx.fillStyle = "rgba(200,205,255," + (p.a * tw).toFixed(3) + ")";
        ctx.shadowColor = "rgba(150,150,255,.8)"; ctx.shadowBlur = 6;
        ctx.arc(p.x, p.y, p.r, 0, 6.2832); ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(frame);
    }
    function start() { cancelAnimationFrame(raf); size(); raf = requestAnimationFrame(frame); }
    var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(start, 200); });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) cancelAnimationFrame(raf); else if (!reduce) raf = requestAnimationFrame(frame);
    });
    start();
  })();

  route();
})();
