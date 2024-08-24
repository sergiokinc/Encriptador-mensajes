// Función para encriptar el texto
function encryptText(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

// Función para desencriptar el texto
function decryptText(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}

// Función para copiar el texto al portapapeles
function copyToClipboard() {
    const outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

// Función para manejar la visibilidad de la imagen de marcador de posición
function togglePlaceholderImage() {
    const placeholderImage = document.getElementById("placeholder-image");
    const outputText = document.getElementById("output-text").value;

    if (outputText === "") {
        placeholderImage.style.display = "block"; // Mostrar imagen
    } else {
        placeholderImage.style.display = "none"; // Ocultar imagen
    }
}

// Asignar funciones a los botones
document.getElementById("encrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const encryptedText = encryptText(inputText);
    document.getElementById("output-text").value = encryptedText;

    togglePlaceholderImage(); // Llamar a la función para mostrar/ocultar imagen
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const decryptedText = decryptText(inputText);
    document.getElementById("output-text").value = decryptedText;

    togglePlaceholderImage(); // Llamar a la función para mostrar/ocultar imagen
});

// Mostrar imagen de marcador de posición al cargar la página si el campo de texto de salida está vacío
window.onload = togglePlaceholderImage;

document.getElementById("copy-btn").addEventListener("click", copyToClipboard);
