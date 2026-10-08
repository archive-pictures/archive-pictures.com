(function (w) {
  var BY_CAT = {
    Add: [
      { slug: "add-image", name: "add image" },
      { slug: "add-picture", name: "add picture" },
      { slug: "add-photo", name: "add photo" },
      { slug: "upload-image", name: "upload image" },
      { slug: "upload-photo", name: "upload photo" },
      { slug: "добавить-изображение", name: "добавить изображение" },
      { slug: "добавить-картинку", name: "добавить картинку" },
      { slug: "добавить-фото", name: "добавить фото" },
      { slug: "загрузить-изображение", name: "загрузить изображение" },
      { slug: "загрузить-фото", name: "загрузить фото" },
      { slug: "додати-зображення", name: "додати зображення" },
      { slug: "додати-фото", name: "додати фото" },
      { slug: "anadir-imagen", name: "añadir imagen" },
      { slug: "subir-foto", name: "subir foto" },
      { slug: "bild-hinzufugen", name: "Bild hinzufügen" },
      { slug: "foto-hochladen", name: "Foto hochladen" },
      { slug: "ajouter-image", name: "ajouter image" },
      { slug: "telecharger-photo", name: "téléverser photo" },
      { slug: "adicionar-imagem", name: "adicionar imagem" },
      { slug: "aggiungere-immagine", name: "aggiungere immagine" },
      { slug: "dodaj-obraz", name: "dodaj obraz" },
      { slug: "resim-ekle", name: "resim ekle" },
      { slug: "tianjia-tupian", name: "添加图片" },
      { slug: "gazo-wo-tsuika", name: "画像を追加" },
      { slug: "sajin-chuga", name: "사진 추가" }
    ],
    Download: [
      { slug: "download-image", name: "download image" },
      { slug: "download-picture", name: "download picture" },
      { slug: "download-photo", name: "download photo" },
      { slug: "save-image", name: "save image" },
      { slug: "скачать-изображение", name: "скачать изображение" },
      { slug: "скачать-картинку", name: "скачать картинку" },
      { slug: "скачать-фото", name: "скачать фото" },
      { slug: "сохранить-изображение", name: "сохранить изображение" },
      { slug: "завантажити-зображення", name: "завантажити зображення" },
      { slug: "завантажити-фото", name: "завантажити фото" },
      { slug: "descargar-imagen", name: "descargar imagen" },
      { slug: "guardar-foto", name: "guardar foto" },
      { slug: "bild-herunterladen", name: "Bild herunterladen" },
      { slug: "foto-speichern", name: "Foto speichern" },
      { slug: "telecharger-image", name: "télécharger image" },
      { slug: "baixar-imagem", name: "baixar imagem" },
      { slug: "scaricare-immagine", name: "scaricare immagine" },
      { slug: "pobierz-obraz", name: "pobierz obraz" },
      { slug: "resim-indir", name: "resim indir" },
      { slug: "xiazai-tupian", name: "下载图片" },
      { slug: "gazo-wo-download", name: "画像をダウンロード" },
      { slug: "sajin-dadungi", name: "사진 다운로드" }
    ],
    Pictures: [
      { slug: "image", name: "image" },
      { slug: "images", name: "images" },
      { slug: "picture", name: "picture" },
      { slug: "pictures", name: "pictures" },
      { slug: "photo", name: "photo" },
      { slug: "photos", name: "photos" },
      { slug: "gallery", name: "gallery" },
      { slug: "archive-pictures", name: "archive pictures" },
      { slug: "изображение", name: "изображение" },
      { slug: "изображения", name: "изображения" },
      { slug: "картинка", name: "картинка" },
      { slug: "картинки", name: "картинки" },
      { slug: "фото", name: "фото" },
      { slug: "фотографии", name: "фотографии" },
      { slug: "галерея", name: "галерея" },
      { slug: "архив-картинок", name: "архив картинок" },
      { slug: "зображення", name: "зображення" },
      { slug: "картинки-ua", name: "картинки" },
      { slug: "фото-ua", name: "фото" },
      { slug: "галерея-ua", name: "галерея" },
      { slug: "imagen", name: "imagen" },
      { slug: "imagenes", name: "imágenes" },
      { slug: "foto-es", name: "foto" },
      { slug: "galeria", name: "galería" },
      { slug: "bild", name: "Bild" },
      { slug: "bilder", name: "Bilder" },
      { slug: "foto-de", name: "Foto" },
      { slug: "galerie", name: "Galerie" },
      { slug: "image-fr", name: "image" },
      { slug: "photos-fr", name: "photos" },
      { slug: "galerie-fr", name: "galerie" },
      { slug: "imagem", name: "imagem" },
      { slug: "fotos", name: "fotos" },
      { slug: "galeria-pt", name: "galeria" },
      { slug: "immagine", name: "immagine" },
      { slug: "foto-it", name: "foto" },
      { slug: "galleria", name: "galleria" },
      { slug: "obraz", name: "obraz" },
      { slug: "zdjecie", name: "zdjęcie" },
      { slug: "galeria-pl", name: "galeria" },
      { slug: "resim", name: "resim" },
      { slug: "fotograf", name: "fotoğraf" },
      { slug: "galeri", name: "galeri" },
      { slug: "tupian", name: "图片" },
      { slug: "zhaopian", name: "照片" },
      { slug: "tuku", name: "图库" },
      { slug: "gazo", name: "画像" },
      { slug: "shashin", name: "写真" },
      { slug: "gyarari", name: "ギャラリー" },
      { slug: "sajin", name: "사진" },
      { slug: "imiji", name: "이미지" },
      { slug: "gaellori", name: "갤러리" }
    ],
    Share: [
      { slug: "share-image", name: "share image" },
      { slug: "share-picture", name: "share picture" },
      { slug: "image-link", name: "image link" },
      { slug: "iframe-image", name: "iframe image" },
      { slug: "поделиться-изображением", name: "поделиться изображением" },
      { slug: "ссылка-на-картинку", name: "ссылка на картинку" },
      { slug: "поделиться-фото", name: "поделиться фото" },
      { slug: "podilitysya-zobrazhennyam", name: "поділитися зображенням" },
      { slug: "compartir-imagen", name: "compartir imagen" },
      { slug: "bild-teilen", name: "Bild teilen" },
      { slug: "partager-image", name: "partager image" },
      { slug: "compartilhar-imagem", name: "compartilhar imagem" },
      { slug: "condividere-immagine", name: "condividere immagine" },
      { slug: "udostepnij-obraz", name: "udostępnij obraz" },
      { slug: "resim-paylas", name: "resim paylaş" },
      { slug: "fenxiang-tupian", name: "分享图片" },
      { slug: "gazo-wo-kyoyu", name: "画像を共有" },
      { slug: "sajin-gongyu", name: "사진 공유" }
    ]
  };

  var MAX = 8;
  var BY_SLUG = {};
  var CAT_SLUGS = {};
  Object.keys(BY_CAT).forEach(function (cat) {
    BY_CAT[cat].forEach(function (t) {
      BY_SLUG[t.slug] = t;
      CAT_SLUGS[t.slug] = true;
    });
  });

  function slugify(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/[^a-z0-9а-я]+/gi, "-")
      .replace(/^-+|-+$/g, "");
  }

  function mergeUserTags(list) {
    (list || []).forEach(function (t) {
      if (!t) return;
      var slug = String(t.slug || "").trim() || slugify(t.name);
      var name = String(t.name || "").trim() || slug;
      if (!slug) return;
      if (!BY_SLUG[slug]) {
        BY_SLUG[slug] = { slug: slug, name: name, user: true };
      } else if (!CAT_SLUGS[slug] && name) {
        BY_SLUG[slug].name = name;
      }
    });
  }

  function loadUserTags() {
    return fetch("data/tags.json?t=" + Date.now())
      .then(function (r) {
        if (!r.ok) return [];
        return r.json();
      })
      .then(function (d) {
        var list = Array.isArray(d) ? d : [];
        mergeUserTags(list);
        return list;
      })
      .catch(function () {
        return [];
      });
  }

  function fromName(name) {
    var n = String(name || "").trim();
    if (!n) return null;
    var slug = slugify(n);
    if (!slug) return null;
    if (BY_SLUG[slug] && BY_SLUG[slug].name) {
      return { slug: slug, name: BY_SLUG[slug].name, kind: "name" };
    }
    return { slug: slug, name: n, kind: "name" };
  }

  function isCategorySlug(slug) {
    return !!CAT_SLUGS[slug];
  }

  function parseTagSlugs(raw) {
    if (Array.isArray(raw)) {
      return raw
        .map(function (x) {
          if (!x) return "";
          if (typeof x === "object") return String(x.slug || x.name || "").trim();
          return String(x).trim();
        })
        .filter(Boolean)
        .map(function (x) {
          return BY_SLUG[x] ? x : slugify(x);
        })
        .filter(Boolean);
    }
    return String(raw || "")
      .split(",")
      .map(function (x) {
        return x.trim();
      })
      .filter(Boolean)
      .map(function (x) {
        return BY_SLUG[x] ? x : slugify(x);
      })
      .filter(Boolean);
  }

  function tagName(slug) {
    return (BY_SLUG[slug] && BY_SLUG[slug].name) || slug;
  }

  function tagHref(slug) {
    return "?id=pictures&tag=" + encodeURIComponent(slug);
  }

  function imageHasTag(image, slug) {
    if (!slug) return false;
    return parseTagSlugs(image && image.g).indexOf(slug) !== -1;
  }

  function tagsForCategory(catName) {
    return BY_CAT[catName] || [];
  }

  function fromFileName(fileName, imageId) {
    var raw = String(fileName || imageId || "").replace(/\.[^.]+$/, "");
    var parts = raw.toLowerCase().split(/[^a-z0-9а-яё]+/i).filter(function (p) {
      return p.length >= 2;
    });
    var out = [];
    var seen = {};
    function push(slug, name) {
      if (!slug || seen[slug]) return;
      seen[slug] = true;
      out.push({ slug: slug, name: name || tagName(slug) });
    }
    parts.forEach(function (p) {
      var slug = slugify(p);
      if (!slug) return;
      if (BY_SLUG[slug]) push(slug, BY_SLUG[slug].name);
      else push(slug, p);
    });
    if (imageId) {
      var idSlug = slugify(imageId);
      if (idSlug) push(idSlug, imageId);
    }
    return out.slice(0, MAX);
  }

  function allSiteTags() {
    var list = [];
    Object.keys(BY_CAT).forEach(function (cat) {
      BY_CAT[cat].forEach(function (t) {
        list.push({ slug: t.slug, name: t.name });
      });
    });
    return list;
  }

  w.AP_TAGS = {
    MAX: MAX,
    byCat: BY_CAT,
    bySlug: BY_SLUG,
    slugify: slugify,
    parse: parseTagSlugs,
    name: tagName,
    href: tagHref,
    has: imageHasTag,
    forCategory: tagsForCategory,
    fromName: fromName,
    fromFileName: fromFileName,
    isCategory: isCategorySlug,
    loadUserTags: loadUserTags,
    mergeUserTags: mergeUserTags,
    allSiteTags: allSiteTags
  };
})(window);
