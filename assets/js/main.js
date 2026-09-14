// Configurações Globais da Loja / Ótica
const CONFIG = {
  storeName: "VisãoLab - Ótica & Laboratório Digital",
  whatsappNumber: "5511999999999", // Altere para o WhatsApp real da ótica (com DDI e DDD)
  defaultMessage: "Olá! Vim através do site da VisãoLab e gostaria de tirar dúvidas ou agendar um atendimento.",
};

// Catálogo de Produtos em Destaque
const PRODUCTS = [
  {
    id: 1,
    name: "Classic Acetato Havana",
    category: "grau-feminino",
    badge: "Mais Vendido",
    format: "Quadrado / Redondo",
    material: "Acetato Italiano",
    desc: "Armação elegante com tons tartaruga, leveza e alta durabilidade para o dia a dia.",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80",
    tags: ["Antirreflexo", "Luz Azul", "Multifocal"]
  },
  {
    id: 2,
    name: "Titanium Tech Black",
    category: "grau-masculino",
    badge: "Ultra Leve",
    format: "Retangular",
    material: "Titânio Aeroespacial",
    desc: "Apenas 14 gramas de peso. Resistente à corrosão e ajuste anatômico perfeito.",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600&q=80",
    tags: ["Hipoalergênico", "Alta Resistência"]
  },
  {
    id: 3,
    name: "Sun Aviator Gold Gradient",
    category: "solar",
    badge: "Tendência",
    format: "Aviador",
    material: "Liga Metálica Dourada",
    desc: "Lentes polarizadas UV400 com degradê elegante e hastes finas de máximo conforto.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    tags: ["Polarizado", "Proteção UV400"]
  },
  {
    id: 4,
    name: "Cat Eye Cristal Rose",
    category: "grau-feminino",
    badge: "Destaque",
    format: "Gatinho",
    material: "Acetato Translúcido",
    desc: "Design moderno estilo gatinho em acetato transparente rosê. Realça qualquer olhar.",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=80",
    tags: ["Moda", "Design Europeu"]
  },
  {
    id: 5,
    name: "Urban Matte Woodside",
    category: "grau-masculino",
    badge: "Novo",
    format: "Clubmaster / Vintage",
    material: "Metal & Acetato Fosco",
    desc: "Inspiração retrô com toques modernos de acabamento fosco e encaixe ergonômico.",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80",
    tags: ["Estilo Urbano", "Conforto"]
  },
  {
    id: 6,
    name: "Horizon Dark Polarized",
    category: "solar",
    badge: "Proteção Total",
    format: "Wayfarer",
    material: "Policarbonato Flex",
    desc: "Óculos de sol robusto com lentes escuras espelhadas, bloqueio 100% de raios UVA/UVB.",
    image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=600&q=80",
    tags: ["Esportivo", "Lentes Polarizadas"]
  },
  {
    id: 7,
    name: "Flex Kids Confort",
    category: "infantil",
    badge: "Indestrutível",
    format: "Oval Flexível",
    material: "Silicone Macio / TR90",
    desc: "Sem partes pontiagudas, altamente flexível com tirinha elástica de segurança.",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80",
    tags: ["Hipoalergênico", "Ultra Resistente"]
  },
  {
    id: 8,
    name: "Lentes de Contato HidroGel HD",
    category: "lentes",
    badge: "Laboratório",
    format: "Descarte Mensal/Diário",
    material: "Silicone Hidrogel 65% Água",
    desc: "Oxigenação contínua da córnea, hidratação durante todo o dia sem ressecamento.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    tags: ["Alta Umectação", "Grau ou Estética"]
  }
];

// Função para gerar o link do WhatsApp
function generateWhatsAppUrl(message) {
  const encodedMsg = encodeURIComponent(message || CONFIG.defaultMessage);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMsg}`;
}

// Inicialização após o DOM estar pronto
document.addEventListener("DOMContentLoaded", () => {
  initWhatsAppLinks();
  initCatalog();
  initMobileMenu();
  initFaqAccordion();
  initContactForm();
  initFaceShapeQuiz();
});

// Atualiza links com o número de WhatsApp configurado
function initWhatsAppLinks() {
  const directWaButtons = document.querySelectorAll(".btn-whatsapp-direct");
  directWaButtons.forEach(btn => {
    btn.href = generateWhatsAppUrl(CONFIG.defaultMessage);
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
  });
}

// Renderização e Filtro do Catálogo
function initCatalog() {
  const container = document.getElementById("catalog-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!container) return;

  function renderProducts(category = "todos") {
    container.innerHTML = "";
    
    const filtered = category === "todos" 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.category === category);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12 text-slate-500">
          <p class="text-lg">Nenhum modelo encontrado nesta categoria.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(product => {
      const waMessage = `Olá! Vi o modelo *${product.name}* (${product.material}) no site da VisãoLab e gostaria de saber o valor e disponibilidade.`;
      const waUrl = generateWhatsAppUrl(waMessage);

      const card = document.createElement("div");
      card.className = "product-card bg-white rounded-2xl overflow-hidden border border-slate-100 flex flex-col group";
      card.innerHTML = `
        <div class="relative overflow-hidden aspect-[4/3] bg-slate-100">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-sky-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
            ${product.badge}
          </span>
          <span class="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full">
            ${product.format}
          </span>
        </div>
        
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-medium text-sky-600 uppercase tracking-wider">${product.material}</span>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-2">${product.name}</h3>
            <p class="text-slate-600 text-sm mb-4 line-clamp-2">${product.desc}</p>
            
            <div class="flex flex-wrap gap-1.5 mb-4">
              ${product.tags.map(tag => `<span class="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-md">${tag}</span>`).join('')}
            </div>
          </div>

          <div class="pt-3 border-t border-slate-100">
            <a 
              href="${waUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-medium text-sm transition-colors duration-200"
            >
              <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.514-4.486 10-10 10-1.682 0-3.264-.423-4.661-1.164l-5.339 1.396 1.424-5.207c-.838-1.458-1.324-3.149-1.324-4.949 0-5.514 4.486-10 10-10s10 4.486 10 10z"/>
              </svg>
              Consultar Modelo
            </a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Eventos dos botões de filtro
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("bg-sky-600", "text-white", "shadow-sm");
        b.classList.add("bg-white", "text-slate-700", "hover:bg-slate-100");
      });

      btn.classList.add("bg-sky-600", "text-white", "shadow-sm");
      btn.classList.remove("bg-white", "text-slate-700", "hover:bg-slate-100");

      const category = btn.getAttribute("data-category");
      renderProducts(category);
    });
  });

  // Render inicial
  renderProducts("todos");
}

// Menu Mobile
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

// Accordion do FAQ
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener("click", () => {
      const isOpen = !answer.classList.contains("hidden");

      // Fecha todos os outros
      document.querySelectorAll(".faq-answer").forEach(ans => ans.classList.add("hidden"));
      document.querySelectorAll(".faq-icon").forEach(ic => ic.classList.remove("rotate-180"));

      if (!isOpen) {
        answer.classList.remove("hidden");
        if (icon) icon.classList.add("rotate-180");
      }
    });
  });
}

// Formulário de Contato Rápido
function initContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value || "";
    const phone = document.getElementById("phone")?.value || "";
    const msg = document.getElementById("message")?.value || "";

    const fullMessage = `Olá! Meu nome é *${name}* (Tel: ${phone}). Mensagem enviada pelo formulário do site: "${msg}"`;
    const redirectUrl = generateWhatsAppUrl(fullMessage);

    if (feedback) {
      feedback.classList.remove("hidden");
      feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    setTimeout(() => {
      window.open(redirectUrl, "_blank");
    }, 1000);
  });
}

// Mini Consultoria de Estilo (Descubra sua armação)
function initFaceShapeQuiz() {
  const shapeButtons = document.querySelectorAll(".face-shape-btn");
  const resultContainer = document.getElementById("quiz-result");

  const recommendations = {
    redondo: {
      title: "Rosto Redondo",
      recommend: "Armações Retangulares, Quadradas e Geométricas",
      tip: "Linhas retas e ângulos bem definidos ajudam a alongar as feições e criar equilíbrio visual perfeito.",
      example: "Experimente armações com cantos acentuados ou modelos Wayfarer estruturados."
    },
    quadrado: {
      title: "Rosto Quadrado",
      recommend: "Armações Redondas, Ovais ou Estilo Aviador",
      tip: "Formatos curvilíneos e com cantos arredondados suavizam os ângulos marcantes do maxilar e da testa.",
      example: "Óculos redondos em acetato fino ou aviadores clássicos de metal."
    },
    oval: {
      title: "Rosto Oval",
      recommend: "Quase todos os modelos combinam com você!",
      tip: "Por ter proporções equilibradas, você tem liberdade para ousar em armações oversized, gatinho ou retangulares.",
      example: "Modelos Cat Eye (gatinho) ou armações geométricas contemporâneas."
    },
    coracao: {
      title: "Rosto Coração / Triangular",
      recommend: "Armações Gatinho, Ovais ou Rimless (sem aro)",
      tip: "Modelos com base mais larga ou armações leves na parte inferior equilibram a testa mais ampla.",
      example: "Armações de metal fino ou estilo Clubmaster suave."
    }
  };

  shapeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      shapeButtons.forEach(b => b.classList.remove("ring-2", "ring-sky-600", "bg-sky-50"));
      btn.classList.add("ring-2", "ring-sky-600", "bg-sky-50");

      const shape = btn.getAttribute("data-shape");
      const data = recommendations[shape];

      if (data && resultContainer) {
        resultContainer.innerHTML = `
          <div class="p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-sky-100 animate-fadeIn">
            <span class="text-xs font-bold uppercase tracking-wider text-sky-600">Recomendação Personalizada</span>
            <h4 class="text-xl font-extrabold text-slate-900 mt-1 mb-2">${data.recommend}</h4>
            <p class="text-slate-600 text-sm mb-3">${data.tip}</p>
            <p class="text-xs text-sky-700 bg-sky-100/70 p-2.5 rounded-lg"><strong>Dica de estilo:</strong> ${data.example}</p>
            <div class="mt-4">
              <a 
                href="${generateWhatsAppUrl(`Olá! Fiz o teste no site e meu formato de rosto é ${data.title}. Gostaria de ver armações recomendadas!`)}" 
                target="_blank" 
                class="inline-flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-700"
              >
                Conversar com nosso consultor óptico
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>
        `;
      }
    });
  });
}
