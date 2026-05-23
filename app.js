let currentLang = 'ar';
let activeCategory = 'all';

const container = document.getElementById('menuContainer');
const tabs = document.getElementById('categoryTabs');
const search = document.getElementById('searchInput');
const langBtn = document.getElementById('langBtn');
const categories = [...new Set(MENU_DATA.map(item => item.category))];

function t(ar, en){ return currentLang === 'ar' ? ar : en; }
function catLabel(cat){ return currentLang === 'ar' ? cat : (CATEGORY_EN[cat] || cat); }
function normalize(text){ return (text || '').toString().toLowerCase().trim(); }

function updateStaticText(){
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('en', currentLang === 'en');
  document.querySelectorAll('[data-ar][data-en]').forEach(el => el.textContent = t(el.dataset.ar, el.dataset.en));
  document.querySelectorAll('[data-ar-placeholder][data-en-placeholder]').forEach(el => el.placeholder = t(el.dataset.arPlaceholder, el.dataset.enPlaceholder));
  langBtn.textContent = currentLang === 'ar' ? 'English' : 'العربية';
}

function renderTabs(){
  tabs.innerHTML = '';
  const all = document.createElement('button');
  all.className = 'tab' + (activeCategory === 'all' ? ' active' : '');
  all.textContent = t('الكل', 'All');
  all.onclick = () => { activeCategory = 'all'; render(); };
  tabs.appendChild(all);
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'tab' + (activeCategory === cat ? ' active' : '');
    btn.textContent = catLabel(cat);
    btn.onclick = () => { activeCategory = cat; render(); };
    tabs.appendChild(btn);
  });
}

function render(){
  updateStaticText();
  renderTabs();
  const q = normalize(search.value);
  let filtered = MENU_DATA.filter(item => activeCategory === 'all' || item.category === activeCategory);
  if(q){
    filtered = filtered.filter(item => [item.category,item.name_ar,item.name_en,item.desc_ar,item.desc_en,item.price].some(v => normalize(v).includes(q)));
  }
  const grouped = {};
  filtered.forEach(item => { (grouped[item.category] ||= []).push(item); });
  container.innerHTML = '';
  if(!filtered.length){
    container.innerHTML = `<div class="empty">${t('لا توجد نتائج مطابقة', 'No matching results')}</div>`;
    return;
  }
  Object.keys(grouped).forEach(cat => {
    const section = document.createElement('section');
    section.className = 'category';
    section.innerHTML = `<div class="category-head"><h2>${catLabel(cat)}</h2><span class="category-count">${grouped[cat].length} ${t('أطباق', 'items')}</span></div><div class="grid"></div>`;
    const grid = section.querySelector('.grid');
    grouped[cat].forEach(item => {
      const card = document.createElement('article');
      card.className = 'card';
      const name = currentLang === 'ar' ? item.name_ar : item.name_en;
      const secondary = currentLang === 'ar' ? item.name_en : item.name_ar;
      const desc = currentLang === 'ar' ? item.desc_ar : item.desc_en;
      const desc2 = currentLang === 'ar' ? item.desc_en : item.desc_ar;
      card.innerHTML = `<div class="card-top"><div><h3 class="name">${name}</h3><p class="en">${secondary}</p></div><div class="price">${item.price}</div></div><p class="desc">${desc}</p><p class="desc en-desc">${desc2}</p>`;
      grid.appendChild(card);
    });
    container.appendChild(section);
  });
}

search.addEventListener('input', render);
langBtn.addEventListener('click', () => { currentLang = currentLang === 'ar' ? 'en' : 'ar'; render(); });
render();
