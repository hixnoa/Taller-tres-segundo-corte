function guardarPrograma() {
    const codigo = document.getElementById("codigo").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const duracion = document.getElementById("duracion").value.trim();
    const modalidad = document.getElementById("modalidad").value;

    if (!codigo || !nombre || !duracion || !modalidad) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    const programas = obtenerProgramas();

    if (programas.some(p => p.codigo === codigo)) {
        alert("Ya existe un programa con ese código.");
        return;
    }

    if (programas.some(p => p.nombre.toLowerCase() === nombre.toLowerCase())) {
        alert("Ya existe un programa con ese nombre.");
        return;
    }

    const nuevo = new Programa(codigo, nombre, duracion, modalidad);
    programas.push(nuevo);
    localStorage.setItem("programas", JSON.stringify(programas));
    limpiarFormulario();
    mostrarProgramas();
}

function obtenerProgramas() {
    return JSON.parse(localStorage.getItem("programas")) || [];
}

function mostrarProgramas() {
    const tabla = document.getElementById("tablaProgramas");
    tabla.innerHTML = "";
    const programas = obtenerProgramas();

    programas.forEach(programa => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${programa.codigo}</td>
            <td>${programa.nombre}</td>
            <td>${programa.duracion}</td>
            <td>${programa.modalidad}</td>
        `;
        tabla.appendChild(fila);
    });
}

function limpiarFormulario() {
    document.getElementById("formularioPrograma").reset();
}