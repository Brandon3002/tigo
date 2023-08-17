function validarNumero(input) {
    input.value = input.value.replace(/\D/g, ''); // Elimina cualquier carácter que no sea número
}

const municipiosPorDepartamento = {
    antioquia: ["Medellín", "Envigado", "Bello", "Itagüí", "Sabaneta", "Rionegro", "La Ceja"],
    atlantico: ["Barranquilla", "Soledad", "Malambo", "Puerto Colombia", "Sabanagrande"],
    bogota: ["Bogotá"],
    valle: ["Cali", "Palmira", "Yumbo", "Buga", "Tuluá"],
    santander: ["Bucaramanga", "Floridablanca", "Girón", "Piedecuesta", "Barbosa"],
    caldas: ["Manizales", "Villamaría", "Chinchiná", "Palestina"],
    risaralda: ["Pereira", "Dosquebradas", "La Virginia", "Santa Rosa de Cabal"],
    quindio: ["Armenia", "Calarcá", "La Tebaida", "Montenegro"],
    bolivar: ["Cartagena", "Turbaco", "Magangué", "Arjona", "Mompós"],
    magdalena: ["Santa Marta", "Ciénaga", "Fundación", "Aracataca", "El Banco"],
    tolima: ["Ibagué", "Cajamarca", "Espinal", "Melgar", "Girardot"],
    norteSantander: ["Cúcuta", "Ocaña", "Pamplona", "Villa del Rosario", "Los Patios"]
    // Agrega más departamentos y municipios aquí
};

function cargarMunicipios() {
    const departamentoSeleccionado = document.getElementById("departamento").value;
    const municipioSelect = document.getElementById("municipio");
    
    // Eliminar opciones anteriores
    municipioSelect.innerHTML = "";
    
    // Agregar las opciones de municipios del departamento seleccionado
    municipiosPorDepartamento[departamentoSeleccionado].forEach(municipio => {
        const option = document.createElement("option");
        option.value = municipio;
        option.text = municipio;
        municipioSelect.appendChild(option);
    });
}

function cargarMunicipios2() {
    const departamentoSeleccionado = document.getElementById("departamento2").value;
    const municipioSelect = document.getElementById("municipio2");
    
    // Eliminar opciones anteriores
    municipioSelect.innerHTML = "";
    
    // Agregar las opciones de municipios del departamento seleccionado
    municipiosPorDepartamento[departamentoSeleccionado].forEach(municipio2 => {
        const option = document.createElement("option");
        option.value = municipio2;
        option.text = municipio2;
        municipioSelect.appendChild(option);
    });
}
 // Esta función se encarga de verificar si los correos electrónicos coinciden
function verificarCorreos() {
    const correo1 = document.getElementById("correo1").value;
    const correo2 = document.getElementById("correo2").value;
    
    if (correo1 !== correo2) {
        document.getElementById("correo2").setCustomValidity("Los correos electrónicos no coinciden.");
    } else {
        document.getElementById("correo2").setCustomValidity("");
    }
}

// Agregar el evento input a los campos de correo electrónico
document.getElementById("correo1").addEventListener("input", verificarCorreos);
document.getElementById("correo2").addEventListener("input", verificarCorreos);

