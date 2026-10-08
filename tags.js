(function (w) {
  var BY_CAT = {};

  var MAX = 8;
  var BY_SLUG = {};
  var CAT_SLUGS = {};

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
    mergeUserTags: mergeUserTags
  };
})(window);