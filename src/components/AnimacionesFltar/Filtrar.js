// utils.js
export function obtenerDepartamentos(nuevo_Pais) {
    var nuevo_Departamento = [];
    if (nuevo_Pais === "Colombia") {
        nuevo_Departamento = ["Antioquia", "Bogotá D.C.", "Valle del Cauca", "Cundinamarca", "Santander", "Atlántico", "Nariño", "Córdoba"];
    } else if (nuevo_Pais === "Peru") {
        nuevo_Departamento = ["Lima", "Arequipa", "Cusco", "Piura", "La Libertad", "Lambayeque", "Junín", "Ancash"];
    } else if (nuevo_Pais === "Ecuador") {
        nuevo_Departamento = ["Azuay", "Bolívar", "Cañar", "Carchi", "Chimborazo", "El Oro", "Esmeraldas", "Guayas"];
    }
    return nuevo_Departamento;
}

export function actualizarDepartamentos() {
    var nuevo_Pais = document.getElementById("nuevo_Pais").value;
    var departamentoSelect = document.getElementById("nuevo_Departamento");

    // Eliminamos las opciones anteriores
    while (departamentoSelect.options.length > 0) {
        departamentoSelect.remove(0);
    }

    // Obtenemos los departamentos del país ingresado
    var departamentosDelPais = obtenerDepartamentos(nuevo_Pais);

    // Creamos las opciones en el select
    for (var i = 0; i < departamentosDelPais.length; i++) {
        var option = document.createElement("option");
        option.text = departamentosDelPais[i];
        departamentoSelect.add(option);
    }
}
