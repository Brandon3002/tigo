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
 document.addEventListener("DOMContentLoaded", function () {
    const botonEnviar = document.querySelector(".boton-enviar");
    const modalConfirmacion = new bootstrap.Modal(document.getElementById("confirmacionModal"));
    const miFormulario = document.getElementById("miFormulario");

    botonEnviar.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Verificar si el formulario está válido antes de mostrar el modal
        if (miFormulario.checkValidity()) {
            modalConfirmacion.show(); // Abrir modal de confirmación si el formulario es válido
        } else {
            // Si el formulario no es válido, se muestra una alerta
            alert("Debes llenar todos los campos requeridos antes de enviar el formulario.");
        }
    });

    const confirmarEnvio = document.getElementById("confirmarEnvio");
    confirmarEnvio.addEventListener("click", function () {
        modalConfirmacion.hide(); // Cierra el modal de confirmación
        miFormulario.submit(); // Envía el formulari 
    });

    function verificarCorreos() {
        const correo1 = document.getElementById("correo1").value;
        const correo2 = document.getElementById("correo2").value;

        if (correo1 !== "" && correo2 !== "") {
            if (correo1 === correo2) {
                document.getElementById("correo2").setCustomValidity(""); // Correos coinciden, elimina el mensaje de error
            } else {
                document.getElementById("correo2").setCustomValidity("Los correos electrónicos no coinciden."); // Correos no coinciden, establece el mensaje de error
            }
        } else {
            document.getElementById("correo2").setCustomValidity(""); // Uno de los campos está vacío, no hay mensaje de error
        }

        // Actualiza la validación del formulario
        miFormulario.reportValidity();
    }

    document.getElementById("correo1").addEventListener("input", verificarCorreos);
    document.getElementById("correo2").addEventListener("input", verificarCorreos);
})







function validarInput() {
    const input = document.getElementById('letrasInput');
    const inputValue = input.value;

    // Expresión regular para comprobar si solo contiene letras
    const letrasRegExp = /^[a-zA-Z]+$/;

    if (!letrasRegExp.test(inputValue)) {
        input.value = inputValue.replace(/[^a-zA-Z]/g, ''); // Remover caracteres no válidos
    }
}


function validarInput2() {
    const input = document.getElementById('letrasInput2');
    const inputValue = input.value;

    // Expresión regular para comprobar si solo contiene letras
    const letrasRegExp = /^[a-zA-Z]+$/;

    if (!letrasRegExp.test(inputValue)) {
        input.value = inputValue.replace(/[^a-zA-Z]/g, ''); // Remover caracteres no válidos
    }
}


function mostrarAlerta() {
    const campo6 = document.getElementById('campo6');
    const seleccion = campo6.value;

    if (seleccion === "NO") {
        const customAlert = document.getElementById('customAlert');
        customAlert.style.display = 'block';
    }
}

function cerrarAlerta() {
    const customAlert = document.getElementById('customAlert');
    customAlert.style.display = 'none';
}

// En el área donde ya tienes las demás funciones
function mostrarAlertaFormulario() {
    const formularioAlert = document.getElementById('formularioAlert');
    formularioAlert.style.display = 'block';
}

function cerrarAlertaFormulario() {
    const formularioAlert = document.getElementById('formularioAlert');
    formularioAlert.style.display = 'none';
}

//------------------------------------------
function checkAnswer(selectedImage) {
    if (selectedImage === 2) { // Cambia esto a la opción correcta
      showCustomAlert("¡Correcto! Has elegido la imagen correcta.");
    } else {
      showCustomAlert("Incorrecto. Inténtalo de nuevo.");
    }
  }

  function showCustomAlert(message) {
    var alertBox = document.getElementById("customAlert");
    alertBox.querySelector("h2").textContent = message;
    alertBox.style.display = "block";
  }

  function closeAlert() {
    var alertBox = document.getElementById("customAlert");
    alertBox.style.display = "none";
  }

