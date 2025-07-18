// Mostra botão após loading
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("botaoContainer").style.display = "flex";
  }, 3000);
});

// Clicou no botão, mostra conteúdo
document.getElementById("surpresaBtn").addEventListener("click", () => {
  document.getElementById("botaoContainer").style.display = "none";
  document.getElementById("main").style.display = "block";
});

// Data de início
const inicio = new Date("2025-05-18T00:00:00");

setInterval(() => {
  const agora = new Date();
  const diff = agora - inicio;

  const segundos = Math.floor(diff / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const meses = Math.floor(dias / 30.44);
  const anos = Math.floor(meses / 12);

  document.getElementById("anos").textContent = String(anos).padStart(2, '0');
  document.getElementById("meses").textContent = String(meses % 12).padStart(2, '0');
  document.getElementById("dias").textContent = String(Math.floor(dias % 30.44)).padStart(2, '0');
  document.getElementById("horas").textContent = String(horas % 24).padStart(2, '0');
  document.getElementById("minutos").textContent = String(minutos % 60).padStart(2, '0');
  document.getElementById("segundos").textContent = String(segundos % 60).padStart(2, '0');
}, 1000);
