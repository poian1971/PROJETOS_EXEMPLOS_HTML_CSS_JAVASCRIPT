// ========================================
// DADOS DA APLICAÇÃO
// ========================================

const promocoesData = [
  {
    id: 1,
    badge: 'Mais Vendido',
    title: 'Combo Bacon Lovers',
    description: '2x Bacon Burguer + 2 Batatas Grandes + 2 Refrigerantes',
    oldPrice: 'R$ 89,90',
    newPrice: 'R$ 69,90',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=312&fit=crop'
  },
  {
    id: 2,
    badge: 'Promoção',
    title: 'Terça do Cheese',
    description: 'Cheeseburguer Duplo + Batata Média + Refri por preço fixo',
    oldPrice: 'R$ 45,90',
    newPrice: 'R$ 29,90',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=312&fit=crop'
  },
  {
    id: 3,
    badge: 'Novo',
    title: 'Combo Família',
    description: '4 Hambúrgueres à escolha + 4 Batatas + 2L Refri + 4 Sobremesas',
    oldPrice: 'R$ 179,90',
    newPrice: 'R$ 139,90',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&h=312&fit=crop'
  }
];

const cardapioData = {
  'Clássicos': [
    { id: 1, name: 'Cheeseburguer Clássico', price: 'R$ 24,90', desc: 'Pão brioche, carne 150g angus, queijo cheddar, alface, tomate, cebola roxa e molho especial', ingredients: ['Angus 150g', 'Cheddar', 'Brioche', 'Molho Especial'], badge: '⭐ Favorito', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', rating: 4.9 },
    { id: 2, name: 'Bacon Burguer', price: 'R$ 29,90', desc: 'Pão brioche, carne 180g angus, bacon crocante, queijo cheddar duplo, cebola caramelizada e molho BBQ', ingredients: ['Angus 180g', 'Bacon', 'Cheddar Duplo', 'BBQ'], badge: '🔥 Top Vendas', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop', rating: 4.8 },
    { id: 3, name: 'Double Cheese', price: 'R$ 34,90', desc: 'Pão brioche, 2x carne 150g angus, 2x cheddar, picles, cebola roxa e molho da casa', ingredients: ['2x Angus 150g', '2x Cheddar', 'Picles', 'Molho da Casa'], badge: '', image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop', rating: 4.7 },
    { id: 4, name: 'Hambúrguer Simples', price: 'R$ 19,90', desc: 'Pão brioche, carne 150g angus, alface, tomate, cebola e molho tradicional', ingredients: ['Angus 150g', 'Alface', 'Tomate', 'Molho Tradicional'], badge: '', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop', rating: 4.5 }
  ],
  'Especiais': [
    { id: 5, name: 'Truffle Burguer', price: 'R$ 39,90', desc: 'Pão brioche com gergelim, carne 180g angus, queijo brie, cogumelos salteados, rúcula e maionese de trufa negra', ingredients: ['Angus 180g', 'Brie', 'Cogumelos', 'Trufa Negra'], badge: '🍄 Premium', image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop', rating: 4.9 },
    { id: 6, name: 'Blue Cheese Burger', price: 'R$ 36,90', desc: 'Pão australiano, carne 180g angus, queijo gorgonzola, peras grelhadas, nozes e redução de balsâmico', ingredients: ['Angus 180g', 'Gorgonzola', 'Peras', 'Nozes'], badge: '🧀 Especial', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop', rating: 4.7 },
    { id: 7, name: 'Spicy Jalapeño', price: 'R$ 32,90', desc: 'Pão brioche, carne 180g angus, queijo pepper jack, jalapeños frescos, bacon, cebola crispy e molho chipotle', ingredients: ['Angus 180g', 'Pepper Jack', 'Jalapeños', 'Chipotle'], badge: '🌶️ Picante', image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop', rating: 4.6 },
    { id: 8, name: 'Smash Burguer', price: 'R$ 27,90', desc: 'Pão de batata, 2x carne smash 80g, queijo americano, cebola grelhada, picles e molho smash', ingredients: ['2x Smash 80g', 'Americano', 'Cebola Grelhada', 'Molho Smash'], badge: '🥄 Tendência', image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop', rating: 4.8 }
  ],
  'Vegetarianos': [
    { id: 9, name: 'Beyond Burger', price: 'R$ 32,90', desc: 'Pão brioche, hambúrguer vegetal Beyond Meat, queijo cheddar vegano, alface, tomate, cebola e molho especial', ingredients: ['Beyond Meat', 'Cheddar Vegano', 'Brioche', 'Molho Especial'], badge: '🌱 Vegano', image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop', rating: 4.6 },
    { id: 10, name: 'Portobello Burger', price: 'R$ 28,90', desc: 'Pão australiano, cogumelo portobello grelhado, queijo brie, rúcula, tomate seco e pesto de manjericão', ingredients: ['Portobello', 'Brie', 'Rúcula', 'Pesto'], badge: '🍄 Vegetariano', image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop', rating: 4.5 },
    { id: 11, name: 'Falafel Burger', price: 'R$ 26,90', desc: 'Pão integral, hambúrguer de grão-de-bico, tahine, hommus, tabule, pepino e hortelã', ingredients: ['Grão-de-bico', 'Tahine', 'Hommus', 'Tabule'], badge: '🥙 Saudável', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop', rating: 4.4 }
  ],
  'Acompanhamentos': [
    { id: 12, name: 'Batata Frita Artesanal', price: 'R$ 14,90', desc: 'Batatas rústicas cortadas na casca, fritas duas vezes, com alecrim e sal grosso', ingredients: ['Batata Rústica', 'Alecrim', 'Sal Grosso'], badge: '', image: 'https://images.unsplash.com/photo-1573080491-1d20ba34854c?w=400&h=300&fit=crop', rating: 4.7 },
    { id: 13, name: 'Batata Doce Frita', price: 'R$ 16,90', desc: 'Palitos de batata doce crocantes com páprica defumada e maionese de alho', ingredients: ['Batata Doce', 'Páprica', 'Maionese Alho'], badge: '🍠 Doce', image: 'https://images.unsplash.com/photo-1595457000902-572a7fdae185?w=400&h=300&fit=crop', rating: 4.6 },
    { id: 14, name: 'Onion Rings', price: 'R$ 15,90', desc: 'Anéis de cebola empanados na cerveja, crocantes por fora, macios por dentro', ingredients: ['Cebola', 'Empanado Cerveja', 'Molho Ranch'], badge: '🧅 Crocante', image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop', rating: 4.5 },
    { id: 15, name: 'Combo Batatas (3 sabores)', price: 'R$ 34,90', desc: 'Porção mista: batata rústica, batata doce e onion rings com 3 molhos', ingredients: ['3 Sabores', '3 Molhos', 'Grande'], badge: '🎁 Melhor Valor', image: 'https://images.unsplash.com/photo-1573080491-1d20ba34854c?w=400&h=300&fit=crop', rating: 4.8 }
  ],
  'Bebidas': [
    { id: 16, name: 'Refrigerantes (Lata)', price: 'R$ 6,90', desc: 'Coca-Cola, Coca Zero, Guaraná, Sprite, Fanta Laranja/Uva', ingredients: ['350ml', 'Gelado'], badge: '', image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop', rating: 4.5 },
    { id: 17, name: 'Milkshake Artesanal', price: 'R$ 18,90', desc: 'Sabores: Chocolate Belga, Morango Fresh, Doce de Leite, Baunilha com Calda', ingredients: ['Sorvete Premium', 'Leite Integral', 'Calda'], badge: '🍦 Gelado', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop', rating: 4.9 },
    { id: 18, name: 'Suco Natural', price: 'R$ 12,90', desc: 'Laranja, Abacaxi com Hortelã, Melancia, Maracujá, Detox (couve, maçã, gengibre)', ingredients: ['100% Natural', 'Sem Açúcar', '500ml'], badge: '🍊 Saudável', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop', rating: 4.7 },
    { id: 19, name: 'Cerveja Artesanal', price: 'R$ 16,90', desc: 'IPA, Witbier, Amber Ale, Stout - 500ml gelada', ingredients: ['500ml', 'Artesanal', 'Gelada'], badge: '🍺 Adulto', image: 'https://images.unsplash.com/photo-1568540361563-881a9c4b9d6e?w=400&h=300&fit=crop', rating: 4.6 }
  ],
  'Sobremesas': [
    { id: 20, name: 'Brownie com Sorvete', price: 'R$ 16,90', desc: 'Brownie de chocolate 70% quente, sorvete de baunilha, calda de chocolate e nozes', ingredients: ['Chocolate 70%', 'Sorvete Baunilha', 'Nozes'], badge: '🍫 Clássico', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop', rating: 4.8 },
    { id: 21, name: 'Petit Gateau', price: 'R$ 18,90', desc: 'Bolinho de chocolate com recheio cremoso, sorvete de creme e framboesas frescas', ingredients: ['Chocolate Meio Amargo', 'Sorvete Creme', 'Framboesas'], badge: '🍰 Premium', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop', rating: 4.9 },
    { id: 22, name: 'Churros com Doce de Leite', price: 'R$ 14,90', desc: 'Churros crocantes polvilhados com açúcar e canela, recheados com doce de leite argentino', ingredients: ['Massa Fresca', 'Doce de Leite', 'Canela'], badge: '🥨 Tradicional', image: 'https://images.unsplash.com/photo-1586985289071-9c658a1e3b3c?w=400&h=300&fit=crop', rating: 4.7 }
  ]
};

const galeriaImages = [
  { src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop', alt: 'Cheeseburguer clássico suculento', title: 'Clássico Perfeito', desc: 'Nosso best-seller' },
  { src: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop', alt: 'Bacon burguer com bacon crocante', title: 'Bacon Lovers', desc: 'Crocância irresistível' },
  { src: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&h=600&fit=crop', alt: 'Truffle burguer com cogumelos', title: 'Truffle Experience', desc: 'Sabor sofisticado' },
  { src: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&h=600&fit=crop', alt: 'Hambúrguer vegetariano beyond meat', title: 'Green Burger', desc: '100% vegetal' },
  { src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop', alt: 'Blue cheese burger com peras', title: 'Gourmet Blue', desc: 'Combinação única' },
  { src: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&h=600&fit=crop', alt: 'Double cheese burguer', title: 'Dupla Camada', desc: 'Para os famintos' },
  { src: 'https://images.unsplash.com/photo-1573080491-1d20ba34854c?w=800&h=600&fit=crop', alt: 'Batatas fritas artesanais', title: 'Batatas Perfeitas', desc: 'Crocantes por fora' },
  { src: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=600&fit=crop', alt: 'Milkshake artesanal chocolate', title: 'Shake Artesanal', desc: 'Cremoso e gelado' },
  { src: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop', alt: 'Brownie com sorvete', title: 'Doce Final', desc: 'Brownie quente' }
];

const depoimentosData = [
  {
    stars: 5,
    text: 'Melhor hambúrguer da cidade! A carne é suculenta, o pão brioche derrete na boca e o molho especial é viciante. Já virei cliente fiel e recomendo para todos os amigos.',
    author: 'Carlos Eduardo',
    location: 'São Paulo - SP',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
  {
    stars: 5,
    text: 'Pedi o Truffle Burguer e foi uma experiência gastronômica incrível! O queijo brie com cogumelos e maionese de trufa é algo de outro mundo. Entrega rápida e embalagem impecável.',
    author: 'Marina Santos',
    location: 'Campinas - SP',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
  },
  {
    stars: 5,
    text: 'Finalmente um lugar que faz hambúrguer vegetariano decente! O Beyond Burger é sensacional, nem parece que não tem carne. Minha esposa (que come carne) também adorou.',
    author: 'Rafael Oliveira',
    location: 'Santos - SP',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    stars: 5,
    text: 'O Combo Família salvou nosso domingo! Veio tudo quente, bem embalado e a quantidade é generosa. As batatas rústicas são as melhores que já comi. Voltaremos com certeza.',
    author: 'Fernanda Lima',
    location: 'São Bernardo - SP',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  },
  {
    stars: 5,
    text: 'Atendimento nota 10! Fiz o pedido pelo WhatsApp, chegou em 25 minutos. O Smash Burger é incrível, a cebola caramelizada faz toda diferença. Melhor custo-benefício da região.',
    author: 'Lucas Ferreira',
    location: 'Santo André - SP',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
  },
  {
    stars: 5,
    text: 'Peço aqui toda terça-feira na promoção do Cheese! Consistência impecável - sempre vem perfeito. O app de fidelidade dá desconto progressivo, muito vantajoso.',
    author: 'Juliana Costa',
    location: 'Diadema - SP',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
  }
];

// ========================================
// ESTADO DA APLICAÇÃO
// ========================================

let currentCategory = 'Clássicos';
let currentTestimonial = 0;
let lightboxIndex = 0;

// ========================================
// FUNÇÕES DE RENDERIZAÇÃO
// ========================================

function renderPromocoes() {
  const grid = document.getElementById('promocoesGrid');
  grid.innerHTML = promocoesData.map((promo, index) => `
    <article class="promo-card" animacao delay="${index + 1}">
      <span class="promo-badge">${promo.badge}</span>
      <div class="promo-image">
        <img src="${promo.image}" alt="${promo.title}" loading="lazy">
      </div>
      <div class="promo-content">
        <h3 class="promo-title">${promo.title}</h3>
        <p class="promo-description">${promo.description}</p>
        <div class="promo-footer">
          <div class="promo-price">
            <span class="price-old">${promo.oldPrice}</span>
            <span class="price-new">${promo.newPrice}</span>
          </div>
          <button class="btn btn-primary" onclick="scrollToCardapio()">Peça Agora</button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderCategoryTabs() {
  const tabs = document.getElementById('categoryTabs');
  const categories = Object.keys(cardapioData);
  tabs.innerHTML = categories.map((cat, index) => `
    <button class="tab-btn ${cat === currentCategory ? 'active' : ''}" 
            onclick="switchCategory('${cat}')" 
            animacao delay="${index + 1}">
      ${cat}
    </button>
  `).join('');
}

function renderMenuItems() {
  const grid = document.getElementById('menuGrid');
  const items = cardapioData[currentCategory] || [];
  grid.innerHTML = items.map((item, index) => `
    <article class="menu-item" animacao delay="${(index % 6) + 1}">
      <div class="menu-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}
      </div>
      <div class="menu-content">
        <div class="menu-header">
          <h3 class="menu-title">${item.name}</h3>
          <span class="menu-price">${item.price}</span>
        </div>
        <p class="menu-description">${item.desc}</p>
        <div class="menu-ingredients">
          ${item.ingredients.map(ing => `<span class="ingredient-tag">${ing}</span>`).join('')}
        </div>
        <div class="menu-footer">
          <div class="menu-rating">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span>${item.rating}</span>
          </div>
          <button class="add-btn" onclick="addToCart(${item.id}, '${item.name.replace(/'/g, "\\'")}', '${item.price}')" aria-label="Adicionar ${item.name} ao carrinho">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderGaleria() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = galeriaImages.map((img, index) => `
    <figure class="gallery-item ${index === 0 || index === 4 ? 'large' : ''}" 
            onclick="openLightbox(${index})" 
            animacao delay="${(index % 6) + 1}"
            role="button" 
            tabindex="0"
            aria-label="Ver ${img.title} em tamanho maior">
      <img src="${img.src}" alt="${img.alt}" loading="lazy">
      <figcaption class="gallery-overlay">
        <div class="gallery-info">
          <h3 class="gallery-title">${img.title}</h3>
          <p class="gallery-desc">${img.desc}</p>
        </div>
      </figcaption>
    </figure>
  `).join('');
}

function renderDepoimentos() {
  const slider = document.getElementById('testimonialsSlider');
  const dots = document.getElementById('sliderDots');

  slider.innerHTML = depoimentosData.map((dep, index) => `
    <article class="testimonial-card" animacao delay="${index + 1}">
      <div class="testimonial-stars">
        ${Array(dep.stars).fill('<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>').join('')}
      </div>
      <p class="testimonial-text">"${dep.text}"</p>
      <div class="testimonial-author">
        <img src="${dep.avatar}" alt="${dep.author}" class="author-avatar" loading="lazy">
        <div class="author-info">
          <span class="author-name">${dep.author}</span>
          <span class="author-location">${dep.location}</span>
        </div>
      </div>
    </article>
  `).join('');

  dots.innerHTML = depoimentosData.map((_, index) => `
    <button class="slider-dot ${index === 0 ? 'active' : ''}" 
            onclick="goToTestimonial(${index})" 
            aria-label="Ir para depoimento ${index + 1}"></button>
  `).join('');
}

// ========================================
// INTERAÇÕES
// ========================================

function switchCategory(category) {
  currentCategory = category;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === category);
  });
  renderMenuItems();
  observeAnimations();
}

function scrollToCardapio() {
  document.getElementById('cardapio').scrollIntoView({ behavior: 'smooth' });
}

function addToCart(id, name, price) {
  // Feedback visual
  const btn = event.currentTarget;
  const originalHTML = btn.innerHTML;
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
  btn.style.background = 'var(--gradient-secondary)';

  // Toast notification
  showToast(`${name} adicionado ao carrinho!`);

  setTimeout(() => {
    btn.innerHTML = originalHTML;
    btn.style.background = '';
  }, 1500);

  // Aqui integraria com carrinho real
  console.log('Adicionado ao carrinho:', { id, name, price });
}

function showToast(message) {
  // Remove toast existente
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 24px;
    background: var(--gradient-primary);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
    z-index: 2000;
    animation: slideInRight 0.3s ease-out;
    font-weight: 500;
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease-in forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Lightbox
function openLightbox(index) {
  lightboxIndex = index;
  const lightbox = document.getElementById('lightbox') || createLightbox();
  const img = lightbox.querySelector('img');
  img.src = galeriaImages[index].src;
  img.alt = galeriaImages[index].alt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function createLightbox() {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <button class="lightbox-close" onclick="closeLightbox()" aria-label="Fechar">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <button class="lightbox-nav lightbox-prev" onclick="navigateLightbox(-1)" aria-label="Anterior">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <img src="" alt="">
    <button class="lightbox-nav lightbox-next" onclick="navigateLightbox(1)" aria-label="Próxima">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
    </button>
  `;
  document.body.appendChild(lightbox);

  // Fechar clicando no fundo
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Teclado
  document.addEventListener('keydown', handleLightboxKeydown);

  return lightbox;
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function navigateLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + galeriaImages.length) % galeriaImages.length;
  const lightbox = document.getElementById('lightbox');
  const img = lightbox.querySelector('img');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = galeriaImages[lightboxIndex].src;
    img.alt = galeriaImages[lightboxIndex].alt;
    img.style.opacity = '1';
  }, 150);
}

function handleLightboxKeydown(e) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox || !lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
  if (e.key === 'ArrowRight') navigateLightbox(1);
}

// Testimonials Slider
function goToTestimonial(index) {
  currentTestimonial = index;
  const slider = document.getElementById('testimonialsSlider');
  const cards = slider.querySelectorAll('.testimonial-card');
  const cardWidth = cards[0].offsetWidth + 24; // width + gap
  slider.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
  updateDots();
}

function updateDots() {
  document.querySelectorAll('.slider-dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentTestimonial);
  });
}

// Auto-slide testimonials
let testimonialInterval;

function startTestimonialAutoSlide() {
  testimonialInterval = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % depoimentosData.length;
    goToTestimonial(currentTestimonial);
  }, 5000);
}

function stopTestimonialAutoSlide() {
  clearInterval(testimonialInterval);
}

// Mobile Menu
function toggleMobileMenu() {
  const menu = document.getElementById('navMenu');
  const btn = document.getElementById('mobileMenuBtn');
  menu.classList.toggle('active');
  btn.classList.toggle('active');
  document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
  const menu = document.getElementById('navMenu');
  const btn = document.getElementById('mobileMenuBtn');
  menu.classList.remove('active');
  btn.classList.remove('active');
  document.body.style.overflow = '';
}

// Header scroll effect
function handleHeaderScroll() {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Newsletter form
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const email = input.value.trim();

  if (!email || !email.includes('@')) {
    showToast('Por favor, insira um e-mail válido');
    return;
  }

  const btn = e.target.querySelector('button');
  const originalText = btn.textContent;
  btn.textContent = 'Cadastrando...';
  btn.disabled = true;

  // Simula API call
  setTimeout(() => {
    showToast('🎉 Cadastrado! 15% de desconto no seu primeiro pedido!');
    input.value = '';
    btn.textContent = originalText;
    btn.disabled = false;
  }, 1500);
}

// Scroll animations
function observeAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('[animacao]').forEach(el => observer.observe(el));
}

// Smooth scroll para links internos
function handleAnchorLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMobileMenu();
      }
    });
  });
}

// Parallax hero
function handleParallax() {
  const heroBg = document.querySelector('.hero-bg::after');
  const heroBurger = document.querySelector('.hero-burger');
  const scrollY = window.scrollY;

  if (heroBurger && scrollY < window.innerHeight) {
    heroBurger.style.transform = `perspective(1000px) rotateY(-5deg) rotateX(5deg) translateY(${scrollY * 0.1}px)`;
  }
}

// ========================================
// INICIALIZAÇÃO
// ========================================

function init() {
  // Renderiza componentes
  renderPromocoes();
  renderCategoryTabs();
  renderMenuItems();
  renderGaleria();
  renderDepoimentos();

  // Event listeners
  document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);
  document.getElementById('newsletterForm').addEventListener('submit', handleNewsletterSubmit);
  window.addEventListener('scroll', handleHeaderScroll);
  window.addEventListener('scroll', handleParallax);

  // Inicia observadores
  observeAnimations();
  handleAnchorLinks();
  startTestimonialAutoSlide();

  // Pausa auto-slide no hover
  const slider = document.getElementById('testimonialsSlider');
  slider.addEventListener('mouseenter', stopTestimonialAutoSlide);
  slider.addEventListener('mouseleave', startTestimonialAutoSlide);

  // Touch swipe para testimonials
  let touchStartX = 0;
  slider.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX, { passive: true });
  slider.addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      currentTestimonial = (currentTestimonial + (diff > 0 ? 1 : -1) + depoimentosData.length) % depoimentosData.length;
      goToTestimonial(currentTestimonial);
    }
  }, { passive: true });

  // Adiciona estilos de animação do toast
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight { from { opacity: 0; transform: translateX(100px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes slideOutRight { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(100px); } }
  `;
  document.head.appendChild(style);

  console.log('🍔 BurgerHub carregado com sucesso!');
}

document.addEventListener('DOMContentLoaded', init);