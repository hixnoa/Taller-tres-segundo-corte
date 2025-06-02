document.addEventListener("DOMContentLoaded", () => {
    const botonGuardar = document.getElementById("guardarProyecto");

    botonGuardar.addEventListener("click", () => {
        const codigo = document.getElementById("codigoProyecto").value;
        const titulo = document.getElementById("tituloProyecto").value;
        const area = document.getElementById("areaProyecto").value;
        const estado = document.querySelector('input[name="estado"]:checked')?.value || "";

        const proyecto = new Proyecto(codigo, titulo, area, estado);

        let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];
        proyectos.push(proyecto);
        localStorage.setItem("proyectos", JSON.stringify(proyectos));

        console.clear();
        console.log("Lista de proyectos guardados en localStorage:");
        console.log(proyectos);
    });
});

class Proyecto {
    constructor(codigo, titulo, area, estado) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.area = area;
        this.estado = estado;
    }
}