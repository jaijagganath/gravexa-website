const assert = require('assert');
const { filterProducts } = require('../filter.js');

const PRODUCTS = [
  { id:'s3', name:'Ankur', suta:'3', type:'single', notes:'Smallest size, everyday cooking & snacks', packs:['200g','500g','1kg','25kg'], price: 'On request' },
  { id:'s4', name:'Prabha', suta:'4', type:'single', notes:'Balanced size for retail packs', packs:['200g','500g','1kg','25kg'], price: 'On request' },
  { id:'s5', name:'Shakti', suta:'5', type:'single', notes:'Larger everyday premium', packs:['200g','500g','1kg','25kg'], price: 'On request' },
  { id:'s6', name:'Divya', suta:'6', type:'single', notes:'Finest large size; luxury & export', packs:['200g','500g','1kg','25kg'], price: 'On request' },
  { id:'b35', name:'Saumya', suta:'3–5', type:'blend', notes:'Smooth 3–5 mix for value & texture', packs:['500g','1kg','25kg'], price:'On request' },
  { id:'b56', name:'Ujjwal', suta:'5–6', type:'blend', notes:'High expansion frying, superb crunch', packs:['500g','1kg','25kg'], price:'On request' },
  { id:'b46', name:'Tejas', suta:'4–6', type:'blend', notes:'Balanced mouthfeel, retail & HoReCa', packs:['500g','1kg','25kg'], price:'On request' },
  { id:'b6p', name:'Rajanya', suta:'6+', type:'blend', notes:'Elite selection above Suta 6', packs:['500g','1kg','25kg'], price:'On request' },
];

// Test filter by pack
t(function filterByPack(){
  const res = filterProducts(PRODUCTS, { pack: '500g' });
  assert.ok(res.length > 0, 'no products returned');
  assert.ok(res.every(p => p.packs.includes('500g')), 'returned product without 500g pack');
});

// Test sort by suta
t(function sortBySuta(){
  const res = filterProducts(PRODUCTS, { sort: 'suta' });
  const nums = res.map(p => parseInt(p.suta.replace('+','').split('–')[0],10));
  const sorted = [...nums].sort((a,b)=>a-b);
  assert.deepStrictEqual(nums, sorted, 'products not sorted by suta');
});

function t(fn){
  try {
    fn();
    console.log('✓', fn.name);
  } catch (err) {
    console.error('✗', fn.name, err.message);
    process.exit(1);
  }
}
