const ingresoRutina = document.querySelector("#boton_ingresar");

ingresoRutina.addEventListener("click", () => {
  const codigo = document.querySelector("#codigo").value;
  if (codigo === "32576841") {
    window.location.href = "./pages/rutina.html";
  } else {
    alert("CÓDIGO INVÁLIDO");
  }
});
