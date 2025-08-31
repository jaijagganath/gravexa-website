function filterProducts(products, options = {}) {
  const { search = '', category = 'all', suta = 'any', pack = 'any', sort = 'default' } = options;
  let list = products.slice();

  const q = search.toLowerCase().trim();
  if (q) {
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.suta.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q) ||
      p.notes.toLowerCase().includes(q)
    );
  }

  if (category !== 'all') {
    list = list.filter(p => p.type === category);
  }

  if (suta !== 'any') {
    list = list.filter(p => p.suta.includes(suta));
  }

  if (pack !== 'any') {
    list = list.filter(p => p.packs.includes(pack));
  }

  if (sort === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === 'suta') {
    const n = s => parseInt(s.replace('+', '').split('–')[0], 10);
    list.sort((a, b) => n(a.suta) - n(b.suta));
  }

  return list;
}

if (typeof module !== 'undefined') {
  module.exports = { filterProducts };
}
if (typeof window !== 'undefined') {
  window.filterProducts = filterProducts;
}
