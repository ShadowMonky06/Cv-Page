document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
    });
  }
});

function descargarCV() {
  const link = document.createElement("a");
  link.href = "Moises Alejandro Echevarria Ibañez_cv.pdf";
  link.download = "Moises Alejandro Echevarria Ibañez_cv.pdf";
  link.click();
}
