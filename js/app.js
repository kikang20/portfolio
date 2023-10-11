const words = ["front-end developer"];
const typer = document.getElementById('typewriter');
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (wordIndex < words.length) {
        if (charIndex <= words[wordIndex].length) {
            typer.textContent = words[wordIndex].substring(0, charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust the typing speed here
        } else {
            setTimeout(erase, 1000); // Wait for a second before erasing
        }
    } else {
        wordIndex = 0; // Start over if you want the animation to loop
    }
}

function erase() {
    if (charIndex >= 0) {
        typer.textContent = words[wordIndex].substring(0, charIndex);
        charIndex--;
        setTimeout(erase, 100); // Adjust the erasing speed here
    } else {
        wordIndex++;
        setTimeout(type, 1000); // Wait for a second before typing the next word
    }
}

type();