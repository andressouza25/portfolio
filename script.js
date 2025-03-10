function toggleMenu() {
  const menu = document.getElementById("menu");
  const navbar = document.querySelector(".navbar-container");

  if (menu.style.display === "block") {
    menu.style.display = "none";
    navbar.classList.remove("active"); // Remove o fundo preto
  } else {
    menu.style.display = "block";
    navbar.classList.add("active"); // Adiciona o fundo preto
  }
}
