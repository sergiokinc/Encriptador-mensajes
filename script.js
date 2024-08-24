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

// Asignar funciones a los botones
document.getElementById("encrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const encryptedText = encryptText(inputText);
    document.getElementById("output-text").value = encryptedText;

    // Ocultar la imagen de marcador de posición
    document.getElementById("placeholder-image").style.display = "none";
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    const inputText = document.getElementById("input-text").value;
    const decryptedText = decryptText(inputText);
    document.getElementById("output-text").value = decryptedText;

    // Ocultar la imagen de marcador de posición
    document.getElementById("placeholder-image").style.display = "none";
});

// Mostrar la imagen de marcador de posición si el textarea está vacío
document.getElementById("input-text").addEventListener("input", function() {
    const inputText = this.value;
    const placeholderImage = document.getElementById("placeholder-image");
    if (inputText === "") {
        placeholderImage.style.display = "block"; // Mostrar imagen
    } else {
        placeholderImage.style.display = "none"; // Ocultar imagen
    }
});

