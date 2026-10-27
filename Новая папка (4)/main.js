const text = "Пошёл на хуй ... :)";
const element = document.getElementById("text");

let index = 0;

function typeWriter() {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;

        setTimeout(typeWriter, Math.random() * 150 + 50);

        setTimeout(render, randomSpeed)
    }
}

typeWriter();