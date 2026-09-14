# VisãoLab - Website Institucional & Catálogo de Ótica

Site moderno, responsivo e de alta conversão desenvolvido para a ótica **VisãoLab**. Inclui catálogo interativo com filtros, consultoria visual por formato de rosto, integração direta com WhatsApp para orçamentos e agendamentos, e apresentação dos diferenciais do laboratório óptico digital.

---

## 🚀 Como Executar Localmente

Como o projeto é construído em HTML5, Tailwind CSS e JavaScript puro (sem necessidade de compilação ou banco de dados), você pode:

1. **Abrir diretamente no navegador:** Dê um duplo clique no arquivo `index.html`.
2. **Ou usar um servidor local:**
   ```bash
   # Com Python:
   python -m http.server 8080

   # Ou com Node (npx serve):
   npx serve .
   ```
   Em seguida, acesse no navegador: `http://localhost:8080`.

---

## ⚙️ Como Personalizar

### 1. Alterar o WhatsApp e Nome da Loja
No início do arquivo `assets/js/main.js`:
```javascript
const CONFIG = {
  storeName: "VisãoLab - Ótica & Laboratório Digital",
  whatsappNumber: "5511999999999", // Insira o DDI (55) + DDD + Número sem traços ou espaços
  defaultMessage: "Olá! Vim através do site da VisãoLab...",
};
```

### 2. Adicionar ou Editar Produtos no Catálogo
No mesmo arquivo `assets/js/main.js`, localize o array `PRODUCTS`. Você pode adicionar fotos, alterar nomes, materiais, categorias (`grau-feminino`, `grau-masculino`, `solar`, `infantil`, `lentes`):
```javascript
{
  id: 1,
  name: "Classic Acetato Havana",
  category: "grau-feminino",
  badge: "Mais Vendido",
  format: "Quadrado / Redondo",
  material: "Acetato Italiano",
  desc: "Armação elegante com tons tartaruga...",
  image: "https://url-da-foto.jpg",
  tags: ["Antirreflexo", "Luz Azul", "Multifocal"]
}
```

### 3. Alterar Endereço, Telefones e CNPJ
No arquivo `index.html`, vá até a seção `#contato` e o rodapé `<footer>` para atualizar o endereço físico, horário de funcionamento e redes sociais.

---

## 📁 Estrutura de Arquivos

```
visaolab/
├── index.html            # Estrutura completa e semântica do site
├── assets/
│   ├── css/
│   │   └── style.css     # Estilos personalizados, animações e glassmorphism
│   └── js/
│       └── main.js       # Catálogo dinâmico, filtros, links de WhatsApp e quiz de rosto
└── README.md             # Documentação do projeto
```

---

## 🌐 Como Publicar na Internet

Este site pode ser publicado gratuitamente ou com domínio próprio em serviços como:
- **Netlify / Vercel:** Basta arrastar a pasta `visaolab` no painel.
- **GitHub Pages:** Subir o repositório e ativar o GitHub Pages na raiz.
- **Hospedagem Tradicional (cPanel, Hostinger, Locaweb):** Enviar os arquivos via FTP para a pasta `public_html`.
