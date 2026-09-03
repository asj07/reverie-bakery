// ==== Reverie Synaptic Pulse Bakery — shared data + cart ====
const WA_NUMBER = "919000000000"; // placeholder Coimbatore WhatsApp — swap for real

const IMG = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

const PRODUCTS = [
  {
    id: "dutch-truffle", name: "Dutch Truffle Cake", cat: "Signature Cakes",
    price: 780, mrp: 950, rating: 4.9, reviews: 214, tag: "Bestseller",
    short: "Rich Belgian chocolate ganache layers, baked fresh daily.",
    images: ["1578985545062-69928b1d9587","1565958011703-44f9829ba187","1606313564200-e75d5e30476c"],
    about: [
      "Three layers of moist chocolate sponge soaked in cocoa syrup",
      "Finished with silky Belgian dark-chocolate ganache",
      "Made with pure butter, premium cocoa and fresh dairy — no harmful additives",
      "Available in 0.5–3 Kg; eggless option on request",
    ],
    desc: "Our most-loved creation. The Dutch Truffle is a celebration of chocolate — deep, velvety ganache wrapped around cloud-soft sponge, finished with delicate chocolate curls. Baked fresh every morning at our Coimbatore atelier and perfect for birthdays, anniversaries, or an indulgent everyday treat.",
    weightOpts: true,
  },
  {
    id: "chicken-puff", name: "Hot Chicken Puff", cat: "Savories",
    price: 35, mrp: 40, rating: 4.8, reviews: 512, tag: "Hot",
    short: "Golden, crisp, spicy — baked fresh every afternoon.",
    images: ["1608897013039-887f21d8c804","1601000937973-49d4c1d2a05a","1619535860434-ba1d8fa12536"],
    about: [
      "Flaky, buttery multi-layer pastry",
      "Spiced minced chicken filling, Coimbatore-style",
      "Baked golden and served hot every afternoon",
      "A local favourite for after-school & tea-time",
    ],
    desc: "The puff that Coimbatore queues for. A crisp, golden, buttery pastry shell hugging a generously spiced chicken filling. Baked in small batches through the afternoon so every bite is hot and shatteringly crisp.",
    weightOpts: false,
  },
  {
    id: "veg-puff", name: "Veg Spicy Puff", cat: "Savories",
    price: 30, mrp: 35, rating: 4.7, reviews: 328, tag: "",
    short: "Flaky pastry with spiced vegetable filling.",
    images: ["1601000937973-49d4c1d2a05a","1608897013039-887f21d8c804","1587244141911-b7e3c3f7b6a6"],
    about: [
      "Crisp layered pastry, 100% vegetarian",
      "Spiced potato & mixed-veg filling",
      "Baked fresh through the day",
      "Perfect tea-time savoury",
    ],
    desc: "A vegetarian classic — spiced potato and mixed vegetables folded into flaky, golden pastry. Light, crisp, and endlessly moreish.",
    weightOpts: false,
  },
  {
    id: "milk-bread", name: "Fluffy Milk Bread", cat: "Breads",
    price: 55, mrp: 65, rating: 4.8, reviews: 176, tag: "",
    short: "Soft, pillowy loaf, baked twice daily.",
    images: ["1509440159596-0249088772ff","1555507036-ab1f4038808a","1598373182133-52452f7691ef"],
    about: [
      "Ultra-soft, pillowy crumb",
      "Baked twice daily for maximum freshness",
      "Pure dairy, no preservatives",
      "Ideal for toast, sandwiches & French toast",
    ],
    desc: "A soft, feathery milk loaf with a golden crust and cloud-like crumb. Baked twice a day so you always take home a fresh one. Wonderful toasted with butter or as the base for a weekend sandwich.",
    weightOpts: false,
  },
  {
    id: "black-forest", name: "Black Forest Cake", cat: "Signature Cakes",
    price: 720, mrp: 880, rating: 4.7, reviews: 143, tag: "",
    short: "Cherries, fresh cream & chocolate shavings.",
    images: ["1565958011703-44f9829ba187","1578985545062-69928b1d9587","1606313564200-e75d5e30476c"],
    about: [
      "Chocolate sponge layered with fresh cream",
      "Real cherries & chocolate shavings",
      "Light, not overly sweet",
      "Available 0.5–3 Kg; eggless on request",
    ],
    desc: "A timeless favourite — airy chocolate sponge layered with whipped fresh cream, cherries, and a flurry of chocolate shavings. Balanced and light, it's the crowd-pleaser for any celebration.",
    weightOpts: true,
  },
  {
    id: "butterscotch-pastry", name: "Butterscotch Pastry", cat: "Pastries",
    price: 60, mrp: 75, rating: 4.6, reviews: 98, tag: "",
    short: "Caramel crunch in every creamy bite.",
    images: ["1588195538326-c5b1e9f80a1b","1578985545062-69928b1d9587","1606313564200-e75d5e30476c"],
    about: [
      "Vanilla sponge with butterscotch cream",
      "Praline crunch topping",
      "Individually portioned",
      "A tea-time indulgence",
    ],
    desc: "Layers of vanilla sponge and silky butterscotch cream, crowned with a golden praline crunch. A single-serve slice of pure comfort.",
    weightOpts: false,
  },
  {
    id: "butter-cookies", name: "Butter Cookies (250g)", cat: "Cookies",
    price: 120, mrp: 140, rating: 4.8, reviews: 205, tag: "",
    short: "Classic melt-in-mouth tea cookies.",
    images: ["1499636136210-6f4ee915583e","1558961363-fa8fdf82db35","1590080876351-9f0b9c1a2d4e"],
    about: [
      "Rich pure-butter shortbread",
      "Melt-in-the-mouth texture",
      "250g resealable pack",
      "Perfect with chai or coffee",
    ],
    desc: "Buttery, crumbly shortbread cookies baked the traditional way with real butter. The ideal companion to your evening chai. Comes in a 250g pack.",
    weightOpts: false,
  },
  {
    id: "red-velvet", name: "Red Velvet Slice", cat: "Pastries",
    price: 90, mrp: 110, rating: 4.7, reviews: 121, tag: "New",
    short: "Velvety sponge with cream-cheese frosting.",
    images: ["1586985289906-406988974504","1578985545062-69928b1d9587","1565958011703-44f9829ba187"],
    about: [
      "Signature red velvet sponge",
      "Tangy cream-cheese frosting",
      "Individually portioned slice",
      "Eggless option available",
    ],
    desc: "A striking crimson sponge with a subtle cocoa note, layered with tangy cream-cheese frosting. Elegant, moist, and just sweet enough.",
    weightOpts: false,
  },
];

const WEIGHTS = [["0.5 Kg",0.5],["1.0 Kg",1],["2.0 Kg",2],["3.0 Kg+",3]];

function getProduct(id){ return PRODUCTS.find(p=>p.id===id); }
function inr(n){ return "₹"+Number(n).toLocaleString("en-IN"); }
function discountPct(p){ return p.mrp>p.price ? Math.round((p.mrp-p.price)/p.mrp*100) : 0; }
function stars(r){ const f=Math.round(r); return "★".repeat(f)+"☆".repeat(5-f); }

// ==== Cart (localStorage shared across pages) ====
function loadCart(){ try{ return JSON.parse(localStorage.getItem("rsp-cart")||"[]"); }catch(e){ return []; } }
function saveCart(c){ localStorage.setItem("rsp-cart", JSON.stringify(c)); }
function cartCount(){ return loadCart().reduce((s,c)=>s+c.q,0); }
function cartTotal(){ return loadCart().reduce((s,c)=>s+c.p*c.q,0); }
function addToCart(name,price,qty){
  const c=loadCart(); const ex=c.find(x=>x.n===name);
  if(ex) ex.q+=qty; else c.push({n:name,p:price,q:qty});
  saveCart(c);
}
function waOrder(){
  const c=loadCart(); if(!c.length){alert("Your basket is empty!");return;}
  let msg="*New Order — Reverie Synaptic Pulse Bakery*%0A%0A";
  c.forEach(x=>{ msg+=`• ${x.n} × ${x.q} = ₹${x.p*x.q}%0A`; });
  msg+=`%0A*Estimated Total: ₹${cartTotal()}*%0A%0APlease confirm availability & pickup/delivery.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`,"_blank");
}
