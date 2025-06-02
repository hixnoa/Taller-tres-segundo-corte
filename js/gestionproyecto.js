document.addEventListener("DOMContentLoaded", () => {
    const botonGuardar = document.getElementById("guardarProyecto");

    botonGuardar.addEventListener("click", () => {
        const codigo = document.getElementById("codigoProyecto").value.trim();
        const titulo = document.getElementById("tituloProyecto").value.trim();
        const area = document.getElementById("areaProyecto").value;
        const estado = document.querySelector('input[name="estado"]:checked')?.value || "";

        if (!codigo || !titulo || !area || !estado) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        const proyecto = new Proyecto(codigo, titulo, area, estado);

        let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];
        proyectos.push(proyecto);
        localStorage.setItem("proyectos", JSON.stringify(proyectos));

        console.clear();
        console.log("Lista de proyectos guardados:");
        console.log(proyectos);

        document.getElementById("formulario-proyecto").reset();
    });
});