// Toggle Menu Functionality (sem alterações)
function toggleMenu() {
  const menu = document.getElementById("menu");
  const navbar = document.querySelector(".navbar-container");
  menu.classList.toggle("active");
  navbar.classList.toggle("active"); // Adiciona ou remove o fundo preto
}

// Linguagem
document.addEventListener("DOMContentLoaded", function () {
  const langBtn = document.getElementById("language-toggle");
  let currentLang = localStorage.getItem("language") || "pt";

  function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    const inputs = document.querySelectorAll("[data-i18n-placeholder]");

    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === "INPUT" && element.type === "submit") {
          element.value = translations[lang][key]; // Atualiza botões do tipo input
        } else {
          element.innerHTML = translations[lang][key];
        }
      }
    });

    inputs.forEach((input) => {
      const key = input.getAttribute("data-i18n-placeholder");
      if (translations[lang] && translations[lang][key]) {
        input.placeholder = translations[lang][key];
      }
    });

    // Atualiza o botão de troca de idioma
    langBtn.innerHTML = lang === "pt" ? "🇺🇸 EN" : "🇧🇷 PT";

    // Salva a escolha no localStorage
    localStorage.setItem("language", lang);
  }

  // Aplica o idioma salvo ao carregar a página
  setLanguage(currentLang);

  // Alterna entre PT e EN ao clicar no botão
  langBtn.addEventListener("click", function () {
    currentLang = currentLang === "pt" ? "en" : "pt";
    setLanguage(currentLang);
  });
});

// Observador para Projetos
const projectItems = document.querySelectorAll(".project-item");
const observerProjects = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Adiciona a classe 'visible' quando o projeto entra na área visível

        // Reinicia a animação removendo e adicionando novamente a classe 'slit-in-horizontal'
        entry.target.classList.remove("slit-in-horizontal");
        void entry.target.offsetWidth; // Força uma reflow para reiniciar a animação
        entry.target.classList.add("slit-in-horizontal");
      } else {
        entry.target.classList.remove("visible"); // Remove a classe 'visible' quando o projeto sai da área visível
      }
    });
  },
  { threshold: 0.2 }
); // Define o limiar de visibilidade (20% do item visível)

projectItems.forEach((item) => {
  observerProjects.observe(item); // Inicia a observação dos itens
});

// Seleciona a imagem da seção "Sobre Mim"
const aboutImage = document.querySelector(".about-me-content img");

// Configuração do Intersection Observer para a imagem
const observerImage = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Quando a imagem entra na tela, adiciona a classe 'visible' para torná-la visível
        entry.target.classList.add("visible");
      } else {
        // Quando a imagem sai da tela, remove a classe 'visible' para fazê-la desaparecer
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.2 } // Quando 20% da imagem estiver visível
);

// Inicia a observação da imagem
observerImage.observe(aboutImage);
