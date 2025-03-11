function toggleMenu() {
  const menu = document.getElementById("menu");
  const navbar = document.querySelector(".navbar-container");
  menu.classList.toggle("active");
  navbar.classList.toggle("active"); // Adiciona ou remove o fundo preto
}

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
