const consonants = ['Б', 'В', 'Г', 'Д', 'Ж', 'З', 'Й', 'К', 'Л', 'М', 'Н', 'П', 'Р', 'С', 'Т', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ'];

const vowels = ['А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'];

let consonantIndex = 0;
let vowelIndex = 0;

function displaySyllable() {
    const syllable = consonants[consonantIndex] + vowels[vowelIndex];
    document.getElementById("syllable").innerText = syllable;
    document.getElementById("consonant").innerText = consonants[consonantIndex];
    document.getElementById("vowel").innerText = vowels[vowelIndex];
}

// Обработчик для кнопки "Согласная вверх"
document.getElementById("consonantUp1").addEventListener("click", function() {
    if (consonantIndex > 0 ) {
        consonantIndex--;
    }
    document.getElementById("consonant1").innerText = consonants[consonantIndex];
});

// Обработчик для кнопки "Согласная вниз"
document.getElementById("consonantDown1").addEventListener("click", function() {
    if (consonantIndex < consonants.length - 1) {
        consonantIndex++;
    }
    document.getElementById("consonant1").innerText = consonants[consonantIndex];
});

// Обработчик для кнопки "Согласная вверх"
document.getElementById("consonantUp2").addEventListener("click", function() {
    if (consonantIndex > 0 ) {
        consonantIndex--;
    }
    document.getElementById("consonant2").innerText = consonants[consonantIndex];
});

// Обработчик для кнопки "Согласная вниз"
document.getElementById("consonantDown2").addEventListener("click", function() {
    if (consonantIndex < consonants.length - 1) {
        consonantIndex++;
    }
    document.getElementById("consonant2").innerText = consonants[consonantIndex];
});

// Обработчик для кнопки "Гласная вверх"
document.getElementById("vowelUp").addEventListener("click", function() {
    if (vowelIndex > 0) {
        vowelIndex--;
    }
    document.getElementById("vowel").innerText = vowels[vowelIndex];
});

// Обработчик для кнопки "Гласная вниз"
document.getElementById("vowelDown").addEventListener("click", function() {
    if (vowelIndex < vowels.length - 1) {
        vowelIndex++;
    }
    document.getElementById("vowel").innerText = vowels[vowelIndex];
});

