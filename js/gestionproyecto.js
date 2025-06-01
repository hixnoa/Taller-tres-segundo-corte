window.addEventListener("load", () => {
    mostrarProyectos();
});

function guardarProyecto() {
    const codigo = document.getElementById("codigo").value.trim();
    const titulo = document.getElementById("titulo").value.trim();
    const area = document.getElementById("area").value;
    const estado = document.getElementById("estado").value;

    if (!codigo || !titulo || !area || !estado) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    const proyectos = obtenerProyectos();

    if (proyectos.some(p => p.codigo === codigo)) {
        alert("Ya existe un proyecto con ese código.");
        return;
    }

    if (proyectos.some(p => p.titulo.toLowerCase() === titulo.toLowerCase())) {
        alert("Ya existe un proyecto con ese título.");
        return;
    }

    const nuevo = new Proyecto(codigo, titulo, area, estado);
    proyectos.push(nuevo);
    localStorage.setItem("proyectos", JSON.stringify(proyectos));
    limpiarFormulario();
    mostrarProyectos();
}

function obtenerProyectos() {
    return JSON.parse(localStorage.getItem("proyectos")) || [];
}

function mostrarProyectos() {
    const lista = document.getElementById("lista-proyectos");
    lista.innerHTML = "";
    const proyectos = obtenerProyectos();

    proyectos.forEach(proyecto => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${proyecto.codigo}</td>
            <td>${proyecto.titulo}</td>
            <td>${proyecto.area}</td>
            <td>${proyecto.estado}</td>
        `;
        lista.appendChild(fila);
    });
}

function limpiarFormulario() {
    document.getElementById("formulario-proyecto").reset();
}