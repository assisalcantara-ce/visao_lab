// Configurações do Instituto Faz Bem Por Todo Pará
const CONFIG = {
  instituteName: "Instituto Faz Bem Por Todo Pará",
  whatsappNumber: "5591988833907", // WhatsApp oficial do Instituto: (91) 98883-3907
  defaultMessage: "Olá! Vim pelo site do Instituto Faz Bem Por Todo Pará e gostaria de informações sobre os mutirões de saúde visual e atendimento social.",
};

// Projetos e Frentes de Atuação
const PROJECTS = [
  {
    id: 1,
    title: "Caravana da Visão Itinerante",
    category: "saude-visual",
    badge: "Mutirão Comunitário",
    desc: "Unidades móveis equipadas com aparelhos de refração e optometria de alta precisão que viajam até bairros periféricos e cidades do interior do Pará.",
    impact: "+35.000 pessoas atendidas",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    tags: ["Exame Completo", "Auto-refrator", "Gratuito / Social"]
  },
  {
    id: 2,
    title: "Programa Óculos Social",
    category: "oculos-social",
    badge: "Inclusão & Cidadania",
    desc: "Acesso a armações modernas, leves e resistentes com lentes corretivas de alta qualidade a custo popular subsidiado para famílias em vulnerabilidade.",
    impact: "+28.000 óculos entregues",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600&q=80",
    tags: ["Armações Novas", "Antirreflexo", "Garantia"]
  },
  {
    id: 3,
    title: "Visão nas Comunidades Ribeirinhas",
    category: "ribeirinhos",
    badge: "Amazônia Profunda",
    desc: "Ações fluviais levando cuidado visual e triagem para populações ribeirinhas, quilombolas e ilhas do Marajó e Baixo Tocantins.",
    impact: "+40 comunidades visitadas",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80",
    tags: ["Acesso Fluvial", "Marajó", "Cuidado Humanizado"]
  },
  {
    id: 4,
    title: "Olhar do Futuro nas Escolas",
    category: "infantil",
    badge: "Educação & Infância",
    desc: "Triagem visual precoce em alunos da rede pública para diagnosticar miopia e astigmatismo que prejudicam o aprendizado escolar.",
    impact: "+12.000 crianças avaliadas",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    tags: ["Apoio Pedagógico", "Infantil", "Prevenção"]
  },
  {
    id: 5,
    title: "Cuidado com a Melhor Idade",
    category: "idosos",
    badge: "Dignidade & Autonomia",
    desc: "Atenção prioritária a idosos para detecção de presbiopia (vista cansada), triagem preventiva de catarata e glaucoma com encaminhamento.",
    impact: "+15.000 idosos acolhidos",
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=600&q=80",
    tags: ["Leitura e Autonomia", "Multifocais", "Acolhimento"]
  },
  {
    id: 6,
    title: "Mutirão da Cidadania & Bem-Estar",
    category: "cidadania",
    badge: "Ação Integrada",
    desc: "Eventos comunitários com aferição de pressão arterial, glicemia, orientações preventivas de saúde e distribuição de materiais informativos.",
    impact: "+50 bairros beneficiados",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    tags: ["Saúde Geral", "Voluntariado", "Solidariedade"]
  }
];

// Cidades e Regiões com Ações no Pará
const CITIES = [
  { name: "Belém", region: "metropolitana", status: "Base Central & Ações Semanais", count: "35+ Ações" },
  { name: "Ananindeua", region: "metropolitana", status: "Atendimento Contínuo", count: "22+ Ações" },
  { name: "Marituba / Benevides", region: "metropolitana", status: "Ações Periódicas", count: "14+ Ações" },
  { name: "Castanhal", region: "nordeste", status: "Polo Nordeste", count: "18+ Ações" },
  { name: "Abaetetuba", region: "baixo-tocantins", status: "Polo Ribeirinho", count: "16+ Ações" },
  { name: "Cametá", region: "baixo-tocantins", status: "Ação Fluvial Realizada", count: "10+ Ações" },
  { name: "Breves / Soure (Marajó)", region: "marajo", status: "Expedição Marajó", count: "12+ Ações" },
  { name: "Barcarena", region: "baixo-tocantins", status: "Atendimento Comunitário", count: "11+ Ações" },
  { name: "Marabá", region: "sudeste", status: "Polo Carajás", count: "20+ Ações" },
  { name: "Parauapebas / Canaã", region: "sudeste", status: "Mutirão Solidário", count: "15+ Ações" },
  { name: "Santarém", region: "baixo-amazonas", status: "Polo Tapajós", count: "14+ Ações" },
  { name: "Bragança / Capanema", region: "nordeste", status: "Circuito da Visão", count: "12+ Ações" },
  { name: "Tucuruí", region: "sudeste", status: "Ação Realizada", count: "8+ Ações" },
  { name: "Paragominas", region: "nordeste", status: "Atendimento Integrado", count: "9+ Ações" }
];

// Gerador de links para WhatsApp
function generateWhatsAppUrl(message) {
  const encodedMsg = encodeURIComponent(message || CONFIG.defaultMessage);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMsg}`;
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  initWhatsAppLinks();
  initProjects();
  initCities();
  initMobileMenu();
  initFaqAccordion();
  initPartnerForm();
});

// Atualiza botões com o WhatsApp configurado
function initWhatsAppLinks() {
  const directWaButtons = document.querySelectorAll(".btn-whatsapp-direct");
  directWaButtons.forEach(btn => {
    btn.href = generateWhatsAppUrl(CONFIG.defaultMessage);
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
  });
}

// Renderiza os Projetos Sociais
function initProjects() {
  const container = document.getElementById("projects-grid");
  const filterButtons = document.querySelectorAll(".filter-project-btn");

  if (!container) return;

  function render(category = "todos") {
    container.innerHTML = "";

    const filtered = category === "todos"
      ? PROJECTS
      : PROJECTS.filter(p => p.category === category);

    filtered.forEach(project => {
      const waMessage = `Olá! Gostaria de saber mais ou participar do projeto *${project.title}* do Instituto Faz Bem Por Todo Pará.`;
      const waUrl = generateWhatsAppUrl(waMessage);

      const card = document.createElement("div");
      card.className = "social-card bg-white rounded-3xl overflow-hidden border border-slate-200/80 flex flex-col justify-between shadow-sm hover:border-brand-inst/40 group";
      card.innerHTML = `
        <div>
          <div class="relative overflow-hidden aspect-[16/10] bg-slate-100">
            <img 
              src="${project.image}" 
              alt="${project.title}" 
              loading="lazy" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span class="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-brand-vibrant/30">
              ${project.badge}
            </span>
          </div>

          <div class="p-6">
            <div class="flex items-center gap-2 mb-2">
              <span class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-inst bg-brand-vibrant/10 px-2.5 py-1 rounded-md">
                <svg class="w-3.5 h-3.5 text-brand-vibrant" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                ${project.impact}
              </span>
            </div>
            
            <h3 class="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-inst transition-colors">
              ${project.title}
            </h3>
            
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
              ${project.desc}
            </p>

            <div class="flex flex-wrap gap-1.5 mb-2">
              ${project.tags.map(t => `<span class="bg-slate-100 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded-md">${t}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="p-6 pt-0">
          <a 
            href="${waUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-navy hover:bg-brand-inst text-white font-bold text-xs uppercase tracking-wider transition-colors duration-200 shadow-sm"
          >
            Apoiar ou Solicitar Vagas
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>
      `;
      container.appendChild(card);
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("bg-brand-inst", "text-white", "shadow-sm");
        b.classList.add("bg-white", "text-slate-700", "hover:bg-slate-100");
      });

      btn.classList.add("bg-brand-inst", "text-white", "shadow-sm");
      btn.classList.remove("bg-white", "text-slate-700", "hover:bg-slate-100");

      const category = btn.getAttribute("data-category");
      render(category);
    });
  });

  render("todos");
}

// Renderiza os Municípios Atendidos
function initCities() {
  const container = document.getElementById("cities-grid");
  const filterBtns = document.querySelectorAll(".filter-city-btn");

  if (!container) return;

  function render(region = "todos") {
    container.innerHTML = "";
    const filtered = region === "todos" ? CITIES : CITIES.filter(c => c.region === region);

    filtered.forEach(city => {
      const waMsg = `Olá! Sou de *${city.name} - Pará* e gostaria de saber quando será a próxima caravana/mutirão do Instituto Faz Bem por aqui.`;
      const waUrl = generateWhatsAppUrl(waMsg);

      const div = document.createElement("div");
      div.className = "bg-white p-4 rounded-2xl border border-slate-200 hover:border-brand-vibrant/60 shadow-sm transition-all flex items-center justify-between group";
      div.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-brand-vibrant/10 text-brand-inst flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-brand-inst group-hover:text-white transition-colors">
            PA
          </div>
          <div>
            <h4 class="font-bold text-brand-navy text-sm leading-tight">${city.name}</h4>
            <p class="text-[11px] text-slate-500">${city.status}</p>
          </div>
        </div>
        <div class="text-right shrink-0">
          <span class="inline-block text-[10px] font-extrabold text-brand-navy bg-brand-vibrant/15 px-2 py-0.5 rounded-full mb-1">
            ${city.count}
          </span>
          <div>
            <a href="${waUrl}" target="_blank" class="text-[11px] font-bold text-brand-inst hover:text-brand-vibrant flex items-center gap-1">
              Ver datas
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      `;
      container.appendChild(div);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-brand-navy", "text-white");
        b.classList.add("bg-white", "text-slate-600", "hover:bg-slate-50");
      });
      btn.classList.add("bg-brand-navy", "text-white");
      btn.classList.remove("bg-white", "text-slate-600", "hover:bg-slate-50");
      render(btn.getAttribute("data-region"));
    });
  });

  render("todos");
}

// Menu Mobile
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => menu.classList.toggle("hidden"));
  links.forEach(l => l.addEventListener("click", () => menu.classList.add("hidden")));
}

// FAQ Accordion
function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const q = item.querySelector(".faq-question");
    const a = item.querySelector(".faq-answer");
    const ic = item.querySelector(".faq-icon");

    if (!q || !a) return;

    q.addEventListener("click", () => {
      const isOpen = !a.classList.contains("hidden");
      document.querySelectorAll(".faq-answer").forEach(el => el.classList.add("hidden"));
      document.querySelectorAll(".faq-icon").forEach(el => el.classList.remove("rotate-180"));

      if (!isOpen) {
        a.classList.remove("hidden");
        if (ic) ic.classList.add("rotate-180");
      }
    });
  });
}

// Formulário para Líderes / Parcerias / Voluntários
function initPartnerForm() {
  const form = document.getElementById("partner-form");
  const feedback = document.getElementById("partner-feedback");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("p-name")?.value || "";
    const city = document.getElementById("p-city")?.value || "";
    const role = document.getElementById("p-role")?.value || "Morador / Beneficiário";
    const phone = document.getElementById("p-phone")?.value || "";
    const msg = document.getElementById("p-message")?.value || "";

    const fullMessage = `*SOLICITAÇÃO DE AÇÃO / PARCERIA - INSTITUTO FAZ BEM POR TODO PARÁ*\n\n` +
      `👤 *Nome:* ${name}\n` +
      `📍 *Município/Bairro:* ${city}\n` +
      `🏷️ *Perfil:* ${role}\n` +
      `📱 *Telefone/WhatsApp:* ${phone}\n` +
      `💬 *Mensagem/Objetivo:* ${msg}`;

    const redirectUrl = generateWhatsAppUrl(fullMessage);

    if (feedback) {
      feedback.classList.remove("hidden");
    }

    setTimeout(() => {
      window.open(redirectUrl, "_blank");
    }, 900);
  });
}
