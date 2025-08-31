// Product data & rendering for Gravexa Agrow
const PRODUCTS = [
  // Single size
  { id:'s3', name:'Ankur', suta:'3', type:'single', notes:'Smallest size, everyday cooking & snacks', packs:['200g','500g','1kg','25kg'], price: 'On request' },
  { id:'s4', name:'Prabha', suta:'4', type:'single', notes:'Balanced size for retail packs', packs:['200g','500g','1kg','25kg'], price: 'On request' },
  { id:'s5', name:'Shakti', suta:'5', type:'single', notes:'Larger everyday premium', packs:['200g','500g','1kg','25kg'], price: 'On request' },
  { id:'s6', name:'Divya', suta:'6', type:'single', notes:'Finest large size; luxury & export', packs:['200g','500g','1kg','25kg'], price: 'On request' },
  // Blends
  { id:'b35', name:'Saumya', suta:'3–5', type:'blend', notes:'Smooth 3–5 mix for value & texture', packs:['500g','1kg','25kg'], price:'On request' },
  { id:'b56', name:'Ujjwal', suta:'5–6', type:'blend', notes:'High expansion frying, superb crunch', packs:['500g','1kg','25kg'], price:'On request' },
  { id:'b46', name:'Tejas', suta:'4–6', type:'blend', notes:'Balanced mouthfeel, retail & HoReCa', packs:['500g','1kg','25kg'], price:'On request' },
  { id:'b6p', name:'Rajanya', suta:'6+', type:'blend', notes:'Elite selection above Suta 6', packs:['500g','1kg','25kg'], price:'On request' },
];

const catalog = document.getElementById('catalog');
const drawer = document.getElementById('drawer');
const drawerClose = document.getElementById('drawerClose');
const drawerTitle = document.getElementById('drawerTitle');
const drawerSub = document.getElementById('drawerSub');
const enquiryForm = document.getElementById('enquiryForm');

function seedSVG(label){
  // A tiny SVG thumb depicting a seed with the suta label
  return `
    <svg viewBox="0 0 160 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="g" cx="35%" cy="35%">
          <stop offset="0%" stop-color="#fff"/>
          <stop offset="45%" stop-color="#f3faf6"/>
          <stop offset="100%" stop-color="#cfead9"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="#f7faf8"/>
      <g transform="translate(40,22)">
        <ellipse rx="42" ry="36" fill="url(#g)" stroke="#d1e7dc"/>
      </g>
      <text x="82" y="78" text-anchor="middle" font-size="18" font-family="Inter" fill="#1A4D2E" font-weight="800">${label}</text>
    </svg>
  `;
}

function render(items){
  if(!catalog) return;
  catalog.innerHTML = items.map(p => `
    <article class="product" data-id="${p.id}">
      <div class="product-thumb">${seedSVG('Suta ' + p.suta)}</div>
      <span class="kicker">${p.type === 'single' ? 'Single Size' : 'Blend'}</span>
      <h3>${p.name}</h3>
      <div class="chips">
        <span>Suta ${p.suta}</span>
        ${p.packs.map(pk => `<span>${pk}</span>`).join('')}
      </div>
      <div class="price">${p.price}</div>
      <p class="small">${p.notes}</p>
      <div class="actions">
        <a class="btn ghost" href="#export">Export Info</a>
        <button class="btn primary" data-enquire="${p.id}">Enquire</button>
      </div>
    </article>
  `).join('');
}

function openDrawer(product){
  drawer.classList.remove('hidden');
  drawerTitle.textContent = `${product.name} — Suta ${product.suta}`;
  drawerSub.textContent = `${product.type === 'single' ? 'Single Size' : 'Blend'} • Packs: ${product.packs.join(', ')}`;
  enquiryForm.dataset.product = product.id;
}

function closeDrawer(){ drawer.classList.add('hidden'); }

function setupInteractions(){
  catalog.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-enquire]');
    if(!btn) return;
    const id = btn.getAttribute('data-enquire');
    const p = PRODUCTS.find(x => x.id === id);
    if(p) openDrawer(p);
  });
  drawerClose.addEventListener('click', closeDrawer);
  drawer.addEventListener('click', (e) => { if(e.target === drawer) closeDrawer(); });

  const search = document.getElementById('search');
  const category = document.getElementById('category');
  const suta = document.getElementById('suta');
  const pack = document.getElementById('pack');
  const sort = document.getElementById('sort');

  function applyFilters(){
    const list = filterProducts(PRODUCTS, {
      search: search.value,
      category: category.value,
      suta: suta.value,
      pack: pack.value,
      sort: sort.value,
    });
    render(list);
  }

  [search, category, suta, pack, sort].forEach(el => el && el.addEventListener('input', applyFilters));

  enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(enquiryForm).entries());
    const product = PRODUCTS.find(x => x.id === enquiryForm.dataset.product);
    alert(`Thank you!\n\nWe'll reach out shortly regarding: ${product ? product.name+' (Suta '+product.suta+')' : 'Product'}\nFrom: ${data.name}\nEmail: ${data.email}`);
    closeDrawer();
    e.target.reset();
  });

  applyFilters();
}

document.addEventListener('DOMContentLoaded', setupInteractions);
