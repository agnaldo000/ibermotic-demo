// CATÁLOGO DE EXEMPLO: substitua os dados e imagens pelos produtos reais.
const products = [{
    id: 1,
    name: "Lâmpada LED",
    category: "Iluminação",
    description: "Iluminação eficiente para espaços interiores.",
    price: "Consultar preço",
    image: "imagens/1.jpeg",
    tag: "Popular"
}, {
    id: 2,
    name: "Câmara de vigilância",
    category: "Segurança",
    description: "Solução de videovigilância para casa ou negócio.",
    price: "Consultar preço",
    image: "imagens/2.jpeg",
    tag: "Segurança"
    },
    {
        id: 3,
        name: "Fogão",
        category: "Cozinha",
        description: "Fogão para preparação de refeições.",
        price: "Consultar preço",
        image: "imagens/8.jpeg",
        tag: "Destaque"
    }
, {
    id: 4,
    name: "Disjuntor eléctrico",
    category: "Electricidade",
    description: "Componente para protecção de instalações eléctricas.",
    price: "Consultar preço",
    image: "imagens/3.jpeg",
    tag: "Eléctrico"
}, {
    id: 5,
    name: "Interruptor inteligente",
    category: "Domótica",
    description: "Controlo inteligente de iluminação e dispositivos.",
    price: "Consultar preço",
    image: "imagens/4.jpeg",
    tag: "Smart"
}, {
    id: 6,
    name: "Candeeiro decorativo",
    category: "Iluminação",
    description: "Opção decorativa para casa, loja ou escritório.",
    price: "Consultar preço",
    image: "imagens/9.jpeg",
    tag: "Design"
}, {
    id: 7,
    name: "Switch de rede",
    category: "Redes",
    description: "Para ligar vários dispositivos numa rede local.",
    price: "Consultar preço",
    image: "imagens/10.jpeg",
    tag: "Rede"
}, {
    id: 8,
    name: "Kit de alarme",
    category: "Segurança",
    description: "Sistema de alarme; confirme modelos disponíveis.",
    price: "Consultar preço",
    image: "imagens/11.jpeg",
    tag: "Protecção"
}];
let cartCount = 0;
const grid = document.getElementById("productGrid")
    , search = document.getElementById("searchInput")
    , filter = document.getElementById("categoryFilter")
    , count = document.getElementById("cartCount");
function renderProducts() {
    const q = search.value.trim().toLowerCase()
        , cat = filter.value;
    const list = products.filter(p => (cat === "Todos" || p.category === cat) && (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)));
    if (!list.length) {
        grid.innerHTML = '<p class="empty-state">Não foram encontrados produtos. Tenta outra pesquisa.</p>';
        return;
    }
    grid.innerHTML = list.map(p => `<article class="product-card"><div class="product-photo"><img src="${p.image}" alt="${p.name}" onerror="this.onerror=null;this.src='https://placehold.co/600x420/eaf1f5/173d59?text=Adicionar+imagem'"><span class="product-tag">${p.tag}</span></div><div class="product-info"><span class="product-category">${p.category}</span><h3>${p.name}</h3><p>${p.description}</p><div class="product-bottom"><span class="product-price">${p.price}</span><button class="add-btn" onclick="requestProduct(${p.id})">Pedir informação</button></div></div></article>`).join("");
}
function requestProduct(id) {
    const p = products.find(x => x.id === id);
    if (!p)
        return;
    cartCount++;
    count.textContent = cartCount;
    const phone = "258846551415";
    const msg = `Olá, Ibermotic! Gostaria de informações sobre: ${p.name}. Podem confirmar preço e disponibilidade?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
}
search.addEventListener("input", renderProducts);
filter.addEventListener("change", renderProducts);
document.querySelectorAll(".category-card").forEach(b => b.addEventListener("click", () => {
    filter.value = b.dataset.category;
    document.getElementById("produtos").scrollIntoView({
        behavior: "smooth"
    });
    renderProducts();
}
));
document.getElementById("menuToggle").addEventListener("click", () => document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => document.getElementById("nav").classList.remove("open")));
document.getElementById("whatsappLink").href = "https://wa.me/258846551415?text=" + encodeURIComponent("Olá, Ibermotic! Gostaria de obter informações sobre produtos e preços.");
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();

