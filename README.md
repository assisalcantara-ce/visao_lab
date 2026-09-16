# Instituto Faz Bem Por Todo Pará - Portal Institucional

Website institucional, mapa de ações sociais e portal de acolhimento do **Instituto Faz Bem Por Todo Pará**. Focado em saúde visual comunitária, caravanas itinerantes de exames de vista, programa de óculos social e atendimento humanizado nos municípios do Pará.

---

## 🌟 Funcionalidades do Portal

- **Identidade Solidária & Amazônica:** Paleta inspirada nas cores do Pará e da Amazônia (Verde Esmeralda, Dourado Solar e Azul Acolhedor).
- **Frentes de Atuação:** Destaque para as Caravanas da Visão, Programa Óculos Social, Ações Ribeirinhas e nas Ilhas do Marajó, Triagem em Escolas e Cuidado com a Terceira Idade.
- **Painel de Municípios Atendidos:** Lista categorizada por regiões do Pará (Metropolitana, Baixo Tocantins, Nordeste, Marajó, Sudeste/Carajás, Baixo Amazonas).
- **Formulário de Parcerias & Solicitação de Ações:** Canal direto com redirecionamento para o WhatsApp da coordenação para prefeituras, lideranças comunitárias e igrejas levarem a caravana para suas localidades.
- **Depoimentos & Impacto:** Métricas de pessoas atendidas e óculos entregues.

---

## ⚙️ Como Personalizar

### 1. Alterar o WhatsApp da Coordenação
No arquivo `assets/js/main.js`:
```javascript
const CONFIG = {
  instituteName: "Instituto Faz Bem Por Todo Pará",
  whatsappNumber: "5591999999999", // Insira o DDD (ex: 91/93/94) + número sem espaços ou traços
  defaultMessage: "Olá! Vim pelo site do Instituto Faz Bem Por Todo Pará...",
};
```

### 2. Adicionar Novas Cidades ou Projetos
No mesmo arquivo `assets/js/main.js`, atualize as listas `PROJECTS` e `CITIES`.

---

## 🚀 Publicação

O repositório está integrado com a **Vercel** e o **GitHub**. Qualquer atualização enviada via `git push` é publicada automaticamente em tempo real!
