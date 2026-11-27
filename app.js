(function () {
  "use strict";

  /* ================= DATA ================= */
  function slug(s) { return s.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

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
  var RES_CATS = ["Prompt", "Template", "Panduan", "Tools", "AI Agent"];

  // yt: ID video YouTube (11 karakter) → modal embed youtube-nocookie. Kosong = tombol play nonaktif.
  // thumbnail: URL gambar 16:9 milik sendiri. Kosong = fallback gradient.
  var VIDEOS = [
    { t: "Mengenal AI dari Nol", dur: "12:40", lvl: "Pemula", h: 235, yt: "", thumbnail: "", d: "Gambaran besar AI dan cara memanfaatkannya untuk konten dan pekerjaan sehari-hari.",
      pts: ["Apa itu AI dan apa yang bisa dilakukannya", "Mengenal berbagai tools AI", "Langkah pertama yang aman dan praktis"] },
    { t: "Teknik Prompt yang Efektif", dur: "18:05", lvl: "Pemula", h: 255, yt: "", thumbnail: "", d: "Cara menulis perintah agar hasil AI sesuai harapan.",
      pts: ["Rumus prompt dasar", "Memperbaiki hasil dengan iterasi", "Contoh prompt untuk konten"] },
    { t: "Bikin Ide Konten Tanpa Mentok", dur: "14:22", lvl: "Pemula", h: 270, yt: "", thumbnail: "", d: "Sistem sederhana untuk punya ide konten setiap hari.",
      pts: ["Menggali ide dari audiens", "Mengubah satu ide jadi banyak format", "Menyusun kalender konten"] },
    { t: "Caption dan Copywriting Promosi", dur: "16:48", lvl: "Pemula", h: 285, yt: "", thumbnail: "", d: "Menulis caption dan materi promosi yang jelas dan menarik dengan bantuan AI.",
      pts: ["Struktur copy yang efektif", "Menyesuaikan gaya per platform", "Mengedit hasil AI"] },
    { t: "Membuat Gambar dan Desain dengan AI", dur: "21:10", lvl: "Menengah", h: 220, yt: "", thumbnail: "", d: "Dari prompt visual sampai desain siap unggah, tanpa harus jadi desainer.",
      pts: ["Menulis prompt visual", "Menjaga konsistensi gaya", "Mengolah hasil jadi materi promosi"] },
    { t: "Membuat Video Pendek dengan AI", dur: "24:35", lvl: "Menengah", h: 300, yt: "", thumbnail: "", d: "Alur membuat video untuk TikTok, Reels, dan YouTube Shorts.",
      pts: ["Naskah dan storyboard dengan AI", "Menghasilkan visual dan suara", "Menyusun hasil akhir"] },
    { t: "AI Agent vs Chatbot: Apa Bedanya?", dur: "10:15", lvl: "Pemula", h: 245, yt: "", thumbnail: "", d: "Memahami cara kerja AI Agent dan kapan menggunakannya.",
      pts: ["Perbedaan mendasar", "Contoh kasus nyata", "Memilih pendekatan yang tepat"] },
    { t: "Membangun AI Agent Pertamamu", dur: "28:50", lvl: "Menengah", h: 262, yt: "", thumbnail: "", d: "Praktik membuat AI Agent sederhana langkah demi langkah tanpa coding.",
      pts: ["Menentukan tujuan agen", "Menulis instruksi dan workflow", "Uji coba dan perbaikan"] },
    { t: "Otomatisasi Kerja untuk Bisnis", dur: "19:30", lvl: "Menengah", h: 210, yt: "", thumbnail: "", d: "Memanfaatkan AI Agent untuk pekerjaan bisnis dan produktivitas.",
      pts: ["Mencari tugas yang layak diotomatisasi", "Merancang alur kerja", "Menghitung waktu yang dihemat"] }
  ];
  var LEVELS = ["Pemula", "Menengah"];

  var TAGS = ["Content Creation", "AI Agent", "Produktivitas", "Bisnis & UMKM", "Personal Branding"];
  var ARTICLES = [
    { g: "Content Creation", t: "5 Cara Menemukan Ide Konten Setiap Hari dengan AI", m: 5, iso: "2026-11-18",
      x: "Bingung mau posting apa? Gunakan AI sebagai partner brainstorming agar ide tidak pernah habis.",
      pts: ["Mulai dari pertanyaan audiens, bukan dari tools", "Minta AI membuat variasi sudut pandang", "Simpan ide terbaik di bank konten"] },
    { g: "Content Creation", t: "Rumus Caption yang Bikin Orang Berhenti Scroll", m: 4, iso: "2026-11-10",
      x: "Caption bagus punya hook kuat, isi jelas, dan ajakan yang tegas. AI membantumu menyusunnya lebih cepat.",
      pts: ["Tulis 5 versi hook lalu pilih yang terbaik", "Pertahankan suara aslimu saat mengedit", "Akhiri dengan satu ajakan yang jelas"] },
    { g: "Content Creation", t: "Dari Prompt ke Video: Alur Praktis untuk Pemula", m: 7, iso: "2026-10-22",
      x: "Video AI tidak harus rumit. Pahami alurnya: naskah, visual, suara, lalu penyuntingan.",
      pts: ["Tulis naskah pendek dan fokus", "Buat visual per adegan", "Rapikan hasil dan tambahkan teks"] },
    { g: "AI Agent", t: "Apa Itu AI Agent dan Kenapa Kamu Perlu Peduli?", m: 6, iso: "2026-11-15",
      x: "AI Agent bukan sekadar chatbot. Ia bisa menjalankan rangkaian tugas sesuai instruksi dan tujuan yang kamu tetapkan.",
      pts: ["Chatbot menjawab, agen mengerjakan", "Agen butuh tujuan, aturan, dan alur kerja", "Mulai dari tugas kecil yang berulang"] },
    { g: "AI Agent", t: "Menulis Instruksi AI Agent yang Jelas dan Aman", m: 6, iso: "2026-10-12",
      x: "Kualitas agen ditentukan oleh instruksinya. Susun peran, batasan, dan format hasil dengan rapi.",
      pts: ["Tentukan peran dan tugas utama", "Tulis batasan apa yang tidak boleh dilakukan", "Uji dengan skenario nyata"] },
    { g: "AI Agent", t: "Tugas Apa Saja yang Cocok Diserahkan ke AI Agent?", m: 5, iso: "2026-09-20",
      x: "Tidak semua pekerjaan cocok untuk agen. Cari yang berulang, berpola, dan memakan waktu.",
      pts: ["Ringkasan dan rangkuman", "Draf balasan dan pengingat", "Riset awal dan pengumpulan referensi"] },
    { g: "Produktivitas", t: "Rutinitas Kerja 30 Menit Lebih Hemat dengan AI", m: 4, iso: "2026-11-08",
      x: "Perubahan kecil pada rutinitas harianmu bisa menghemat waktu secara konsisten.",
      pts: ["Delegasikan draf pertama ke AI", "Gunakan template prompt yang sama", "Sisakan waktu untuk review manusia"] },
    { g: "Produktivitas", t: "Cara Meringkas Dokumen Panjang Tanpa Kehilangan Inti", m: 4, iso: "2026-10-05",
      x: "Minta AI merangkum dengan format yang kamu butuhkan, lalu cek poin pentingnya sendiri.",
      pts: ["Tentukan tujuan ringkasan", "Minta poin utama dan tindak lanjut", "Verifikasi bagian krusial"] },
    { g: "Bisnis & UMKM", t: "AI untuk UMKM: Mulai dari Mana?", m: 6, iso: "2026-11-12",
      x: "Pelaku UMKM bisa memakai AI untuk promosi, riset, dan layanan pelanggan tanpa investasi besar.",
      pts: ["Mulai dari konten promosi", "Lanjut ke riset pasar sederhana", "Otomatisasi tugas administratif"] },
    { g: "Bisnis & UMKM", t: "Membuat Materi Promosi Lebih Cepat untuk Jualan Online", m: 5, iso: "2026-10-16",
      x: "Dari deskripsi produk sampai visual iklan, AI mempercepat produksi materi promosi.",
      pts: ["Susun deskripsi produk yang jelas", "Buat variasi iklan untuk diuji", "Jaga konsistensi tampilan brand"] },
    { g: "Bisnis & UMKM", t: "Menemukan Peluang Layanan Baru Berbasis AI", m: 7, iso: "2026-09-14",
      x: "Riset masalah audiens, lalu rancang layanan yang memanfaatkan AI untuk menyelesaikannya.",
      pts: ["Petakan masalah yang sering muncul", "Uji ide dalam skala kecil", "Ukur hasil dan kembangkan"] },
    { g: "Personal Branding", t: "Membangun Personal Branding dari Nol dengan AI", m: 6, iso: "2026-11-20",
      x: "Personal branding dimulai dari kejelasan: siapa kamu, untuk siapa, dan apa yang kamu tawarkan.",
      pts: ["Rumuskan positioning singkat", "Tentukan 3 pilar konten", "Posting konsisten dengan jadwal realistis"] },
    { g: "Personal Branding", t: "Tetap Terdengar Seperti Dirimu Saat Memakai AI", m: 5, iso: "2026-10-09",
      x: "AI membantu menulis, tetapi ceritamu tetap harus terasa personal dan autentik.",
      pts: ["Berikan contoh tulisanmu sebagai acuan", "Tambahkan pengalaman pribadi", "Edit sampai terdengar natural"] }
  ];

  var CHIPS = [
    { l: "Prompt konten Instagram", href: "#/resources?kategori=prompt" },
    { l: "Bikin AI Agent pertama", href: "#/resources?kategori=ai-agent" },
    { l: "Video AI untuk jualan", href: "#/knowledges?q=video" },
    { l: "Personal branding", href: "#/articles?tag=personal-branding" },
    { l: "Otomatisasi kerja", href: "#/articles?tag=produktivitas" }
  ];

  var PAGES = {
    resources: { title: "Resources", h: "Kumpulan <em>resource</em> belajar", p: "Prompt, template, dan panduan praktis yang bisa langsung kamu pakai.",
      meta: "Kumpulan prompt, template, dan panduan praktis untuk belajar AI dari AI Creator Labs." },
    knowledges: { title: "Knowledges", h: "Pustaka <em>video</em> pembelajaran", p: "Belajar bertahap lewat video singkat, dari dasar AI sampai membangun AI Agent.",
      meta: "Pustaka video pembelajaran AI dari dasar sampai membangun AI Agent." },
    articles: { title: "Articles", h: "Artikel per <em>topik</em>", p: "Pilih satu topik, lalu baca artikel yang relevan untuk kebutuhanmu.",
      meta: "Artikel belajar AI per topik: content creation, AI Agent, produktivitas, bisnis, dan personal branding." }
  };
  var HOME_TITLE = "AI Creator Labs — Ruang Belajar AI";
  var HOME_META = "Ruang belajar AI untuk membuat konten dan membangun AI Agent, tanpa perlu coding. Jelajahi resource, video, dan artikel dari AI Creator Labs.";

  /* ================= UTIL ================= */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function tokens(q) { return q.toLowerCase().split(/[^a-z0-9&]+/).filter(function (w) { return w.length > 2; }); }
  function score(hay, q) {
    var tk = tokens(q); if (!tk.length) return 1;
    hay = hay.toLowerCase();
    return tk.reduce(function (n, w) { return n + (hay.indexOf(w) > -1 ? 1 : 0); }, 0);
  }
  function search(list, hayFn, q) {
    if (!q.trim()) return list;
    return list
      .map(function (it) { return { it: it, s: score(hayFn(it), q) }; })
      .filter(function (o) { return o.s > 0; })
      .sort(function (a, b) { return b.s - a.s; })
      .map(function (o) { return o.it; });
  }
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  function fmtDate(iso) { var p = iso.split("-"); return +p[2] + " " + MONTHS[+p[1] - 1] + " " + p[0]; }

  var ICON_SEARCH = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>';
  var ICON_ARROW = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var ICON_PLAY = '<svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';

  /* ================= URL STATE (#/halaman?param=nilai) ================= */
  function parseHash() {
    var h = location.hash.replace(/^#/, "");
    var i = h.indexOf("?");
    var path = (i > -1 ? h.slice(0, i) : h).replace(/^\/+|\/+$/g, "");
    return { name: path || "home", params: new URLSearchParams(i > -1 ? h.slice(i + 1) : "") };
  }
  function hrefFor(name, params) {
    var s = params.toString();
    return "#/" + name + (s ? "?" + s : "");
  }
  function chipHref(name, params, key, val) {
    var p = new URLSearchParams(params.toString());
    if (val) p.set(key, val); else p.delete(key);
    return hrefFor(name, p);
  }

  /* ================= KOMPONEN BERSAMA ================= */
  // chips: [{ v: nilai param ("" = semua), l: label, n?: jumlah }]
  function filterBar(name, P, key, chips, active, ph) {
    var q = P.get("q") || "";
    var chipHtml = chips.map(function (c) {
      var on = c.v === active;
      return '<a class="pill" href="' + esc(chipHref(name, P, key, c.v)) + '"' + (on ? ' aria-current="true"' : "") + '>' + esc(c.l) +
        (c.n != null ? '<span class="count">' + c.n + '</span>' : "") + '</a>';
    }).join("");
    return '<div class="fbar"><div class="fchips" role="group" aria-label="Filter">' + chipHtml + '</div>' +
      '<label class="search">' + ICON_SEARCH + '<span class="sr">Cari</span><input type="search" data-q placeholder="' + esc(ph) + '" value="' + esc(q) + '" maxlength="80" enterkeyhint="search"></label></div>';
  }
  function head(key) {
    var p = PAGES[key];
    return '<div class="page-head"><p class="eyebrow"><span class="dot"></span>' + p.title + '</p><h2>' + p.h + '</h2><p>' + p.p + '</p></div>';
  }
  function resultTitle(label, n, noun, q) {
    return '<h3 class="result-title" aria-live="polite">' + esc(label) + ' · ' + n + ' ' + noun + (q.trim() ? ' · “' + esc(q.trim()) + '”' : "") + '</h3>';
  }
  function emptyBox(name, q, label) {
    var what = q.trim() ? "“" + esc(q.trim()) + "”" : "“" + esc(label) + "”";
    return '<div class="glass empty"><p>Belum ada hasil untuk ' + what + '.</p><a class="pill" href="#/' + name + '">Reset filter</a></div>';
  }

  /* ================= RENDER HALAMAN ================= */
  function renderResources(P) {
    var kat = P.get("kategori") || "";
    if (RES_CATS.map(slug).indexOf(kat) < 0) kat = "";
    var q = P.get("q") || "";
    var list = search(RESOURCES, function (r) { return r.t + " " + r.d + " " + r.c; }, q);
    if (kat) list = list.filter(function (r) { return slug(r.c) === kat; });
    var chips = [{ v: "", l: "Semua" }].concat(RES_CATS.map(function (c) { return { v: slug(c), l: c }; }));
    var label = kat ? RES_CATS.filter(function (c) { return slug(c) === kat; })[0] : "Semua";
    var cards = list.map(function (r) {
      return '<button type="button" class="glass card" data-open="res" data-i="' + RESOURCES.indexOf(r) + '"><span class="tag">' + esc(r.c) + '</span><h3>' + esc(r.t) + '</h3><p>' + esc(r.d) + '</p><span class="more">Lihat detail ' + ICON_ARROW + '</span></button>';
    }).join("");
    return '<div class="wrap">' + head("resources") + filterBar("resources", P, "kategori", chips, kat, "Cari resource…") +
      resultTitle(label, list.length, "resource", q) + (list.length ? '<div class="grid">' + cards + "</div>" : emptyBox("resources", q, label)) + "</div>";
  }

  function renderKnowledges(P) {
    var lv = P.get("level") || "";
    if (LEVELS.map(slug).indexOf(lv) < 0) lv = "";
    var q = P.get("q") || "";
    var list = search(VIDEOS, function (v) { return v.t + " " + v.d + " " + v.lvl; }, q);
    if (lv) list = list.filter(function (v) { return slug(v.lvl) === lv; });
    var chips = [{ v: "", l: "Semua" }].concat(LEVELS.map(function (c) { return { v: slug(c), l: c }; }));
    var label = lv ? LEVELS.filter(function (c) { return slug(c) === lv; })[0] : "Semua";
    var cards = list.map(function (v) {
      return '<button type="button" class="glass card" data-open="vid" data-i="' + VIDEOS.indexOf(v) + '" aria-label="' + (v.yt ? "Putar video: " : "Lihat detail video: ") + esc(v.t) + '">' +
        thumb(v) + '<span class="tag">' + esc(v.lvl) + '</span><h3>' + esc(v.t) + '</h3><p>' + esc(v.d) + '</p></button>';
    }).join("");
    return '<div class="wrap">' + head("knowledges") + filterBar("knowledges", P, "level", chips, lv, "Cari video…") +
      resultTitle(label, list.length, "video", q) + (list.length ? '<div class="grid">' + cards + "</div>" : emptyBox("knowledges", q, label)) + "</div>";
  }

  function renderArticles(P) {
    var tag = P.get("tag") || "";
    if (TAGS.map(slug).indexOf(tag) < 0) tag = slug(TAGS[0]);
    var tagName = TAGS.filter(function (g) { return slug(g) === tag; })[0];
    var q = P.get("q") || "";
    var chips = TAGS.map(function (g) {
      return { v: slug(g), l: g, n: ARTICLES.filter(function (a) { return a.g === g; }).length };
    });
    var list = search(ARTICLES.filter(function (a) { return a.g === tagName; }), function (a) { return a.t + " " + a.x; }, q);
    if (!q.trim()) list = list.slice().sort(function (a, b) { return a.iso < b.iso ? 1 : -1; });
    var rows = list.map(function (a) {
      return '<button type="button" class="glass row" data-open="art" data-i="' + ARTICLES.indexOf(a) + '"><div class="body"><h3>' + esc(a.t) + '</h3><p>' + esc(a.x) + '</p><p class="meta">' + fmtDate(a.iso) + ' · ' + a.m + ' menit baca</p></div><span class="arrow">' + ICON_ARROW + '</span></button>';
    }).join("");
    return '<div class="wrap">' + head("articles") + filterBar("articles", P, "tag", chips, tag, "Cari artikel…") +
      resultTitle(tagName, list.length, "artikel", q) + (list.length ? '<div class="list">' + rows + "</div>" : emptyBox("articles", q, tagName)) + "</div>";
  }

  var RENDER = { resources: renderResources, knowledges: renderKnowledges, articles: renderArticles };

  function thumb(v) {
    var ready = /^[\w-]{11}$/.test(v.yt);
    return '<div class="thumb" style="--h:' + v.h + '">' +
      (v.thumbnail ? '<img src="' + esc(v.thumbnail) + '" alt="" width="640" height="360" loading="lazy" decoding="async">' : "") +
      '<span class="play' + (ready ? "" : " off") + '">' + ICON_PLAY + '</span>' +
      (ready ? "" : '<span class="soon">Belum tersedia</span>') +
      '<span class="dur">' + esc(v.dur) + '</span></div>';
  }

  function draw(name, keepFocus) {
    var el = $('[data-page="' + name + '"]');
    var active = document.activeElement;
    var hadSearch = keepFocus && active && active.hasAttribute && active.hasAttribute("data-q");
    var pos = hadSearch ? active.selectionStart : 0;
    el.innerHTML = RENDER[name](parseHash().params);
    if (hadSearch) {
      var inp = $("[data-q]", el); inp.focus();
      try { inp.setSelectionRange(pos, pos); } catch (e) {}
    }
  }

  /* ================= DETAIL (modal) ================= */
  var dlg = $("#detail"), dbody = $("#detail-body"), lastTrigger = null;
  function list(pts) { return "<ul>" + pts.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>"; }
  function openDetail(kind, i, trigger) {
    var h = "";
    if (kind === "res") {
      var r = RESOURCES[i];
      h = '<span class="tag">' + esc(r.c) + '</span><h3 id="detail-title">' + esc(r.t) + '</h3><p class="lead">' + esc(r.d) + '</p><h4>Isi resource</h4>' + list(r.pts);
    } else if (kind === "vid") {
      var v = VIDEOS[i], ready = /^[\w-]{11}$/.test(v.yt);
      // iframe baru dibuat setelah pengguna mengklik kartu video
      var media = ready
        ? '<div class="embed"><iframe src="https://www.youtube-nocookie.com/embed/' + v.yt + '?autoplay=1&rel=0" title="' + esc(v.t) + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>'
        : thumb(v);
      h = media + '<h3 id="detail-title">' + esc(v.t) + '</h3><p class="lead">' + esc(v.d) + '</p><h4>Yang kamu pelajari · ' + esc(v.lvl) + '</h4>' + list(v.pts) +
        (ready ? "" : '<button type="button" class="btn" disabled>Video belum tersedia</button>');
    } else {
      var a = ARTICLES[i];
      h = '<span class="tag">' + esc(a.g) + '</span><h3 id="detail-title">' + esc(a.t) + '</h3><p class="lead">' + esc(a.x) + '</p><h4>Poin penting · ' + a.m + ' menit baca</h4>' + list(a.pts);
    }
    dbody.innerHTML = h + '<button type="button" class="btn ghost" data-dismiss>Tutup</button>';
    lastTrigger = trigger;
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    document.documentElement.style.overflow = "hidden";
  }
  function closeDetail() { if (dlg.close) dlg.close(); else dlg.removeAttribute("open"); }
  dlg.addEventListener("close", function () {
    dbody.innerHTML = ""; // menghentikan dan membuang iframe video
    document.documentElement.style.overflow = "";
    if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
  });
  dlg.addEventListener("click", function (e) {
    if (e.target === dlg || e.target.closest("[data-dismiss]") || e.target.closest("#detail-close")) closeDetail();
  });

  /* ================= ROUTING ================= */
  var lastName = null, meta = $('meta[name="description"]');
  function route() {
    var R = parseHash(), name = R.name;
    var known = name === "home" || !!PAGES[name];
    var page = known ? name : "notfound";
    document.body.setAttribute("data-route", page);
    $$(".page").forEach(function (p) { p.hidden = p.getAttribute("data-page") !== page; });
    $$(".tabs a").forEach(function (a) {
      if (a.dataset.route === page) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    Object.keys(RENDER).forEach(function (k) { if (k !== page) $('[data-page="' + k + '"]').innerHTML = ""; });
    if (RENDER[page]) draw(page);
    if (page === "home") { document.title = HOME_TITLE; if (meta) meta.content = HOME_META; }
    else if (page === "notfound") { document.title = "Halaman tidak ditemukan — AI Creator Labs"; }
    else { document.title = PAGES[page].title + " — AI Creator Labs"; if (meta) meta.content = PAGES[page].meta; }
    if (lastName !== page) {
      window.scrollTo(0, 0);
      if (lastName !== null) $("#view").focus({ preventScroll: true });
    }
    lastName = page;
  }
  window.addEventListener("hashchange", route);

  /* ================= EVENTS ================= */
  document.addEventListener("click", function (e) {
    var open = e.target.closest("[data-open]");
    if (open) openDetail(open.dataset.open, +open.dataset.i, open);
  });
  document.addEventListener("input", function (e) {
    if (!e.target.hasAttribute || !e.target.hasAttribute("data-q")) return;
    var R = parseHash();
    if (e.target.value.trim()) R.params.set("q", e.target.value); else R.params.delete("q");
    history.replaceState(null, "", hrefFor(R.name, R.params)); // tidak menambah riwayat Back
    draw(R.name, true);
  });

  // Chip pintasan (deep link)
  $("#chips").innerHTML = CHIPS.map(function (c) {
    return '<li><a href="' + esc(c.href) + '">' + esc(c.l) + '</a></li>';
  }).join("");

  // Input bergaya chat → /resources?q=
  $("#chat").addEventListener("submit", function (e) {
    e.preventDefault();
    var input = $("#chat-input"), q = input.value.trim();
    if (!q) return;
    input.value = "";
    location.hash = "#/resources?q=" + encodeURIComponent(q);
  });

  /* ================= PARTIKEL ================= */
  (function particles() {
    var cv = $("#particles"), ctx = cv.getContext && cv.getContext("2d");
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!ctx || reduce) { cv.hidden = true; return; }
    var W, H, ps = [], raf = 0;
    function size() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.max(40, Math.min(60, Math.round(W * H / 20000)));
      ps = [];
      for (var i = 0; i < n; i++) ps.push({
        x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.5 + .4,
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
        var tw = .6 + .4 * Math.sin(t / 1200 + p.p);
        ctx.beginPath();
        ctx.fillStyle = "rgba(200,205,255," + (p.a * tw).toFixed(3) + ")";
        ctx.shadowColor = "rgba(150,150,255,.8)"; ctx.shadowBlur = 6;
        ctx.arc(p.x, p.y, p.r, 0, 6.2832); ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }
    function start() { cancelAnimationFrame(raf); size(); raf = requestAnimationFrame(frame); }
    var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(start, 200); });
    document.addEventListener("visibilitychange", function () {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(frame);
    });
    start();
  })();

  route();
})();
