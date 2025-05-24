const openMenu     = document.querySelector("#open-menu");
const closeMenu    = document.querySelector("#close-menu");
const aside        = document.querySelector("aside");

// Menú hamburguesa
openMenu.addEventListener("click",  () => aside.classList.add("aside-visible"));
closeMenu.addEventListener("click", () => aside.classList.remove("aside-visible"));

// Botones del menú
const btnDashboard = document.querySelector("#btn-dashboard");
const btnPowerBI   = document.querySelector("#btn-powerbi");
const btnETL       = document.querySelector("#btn-etl");

const powerBIContainer = document.querySelector("#powerbi-container");
const etlContainer     = document.querySelector("#etl-container");

const tituloPrincipal  = document.querySelector("#titulo-principal");
const contenedorProd   = document.querySelector("#contenedor-productos");

// Función helper para resetear todo
function resetAll() {
  // Oculta ambos iframes
  powerBIContainer.style.display = "none";
  etlContainer.style.display     = "none";

  // Muestra contenido original
  contenedorProd.style.display   = "grid";
  tituloPrincipal.style.display = "block";

  // Quita clase active de todos los botones
  [btnDashboard, btnPowerBI, btnETL].forEach(btn => btn.classList.remove("active"));
}

// Dashboard
btnDashboard.addEventListener("click", () => {
  aside.classList.remove("aside-visible");
  resetAll();
  btnDashboard.classList.add("active");
});

// Power BI
btnPowerBI.addEventListener("click", () => {
  aside.classList.remove("aside-visible");
  resetAll();
  btnPowerBI.classList.add("active");

  // Ocultar dashboard original
  contenedorProd.style.display   = "none";
  tituloPrincipal.style.display = "none";

  // Mostrar iframe Power BI
  powerBIContainer.style.display = "block";
});

// ETL
btnETL.addEventListener("click", () => {
  aside.classList.remove("aside-visible");
  resetAll();
  btnETL.classList.add("active");

  // Ocultar dashboard original
  contenedorProd.style.display   = "none";
  tituloPrincipal.style.display = "none";

  // Mostrar iframe ETL
  etlContainer.style.display = "block";
});
