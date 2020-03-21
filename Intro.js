const mode = document.querySelector("#mode_selection"); //from first textbox

const heading = document.querySelector("#heading"); //will be title of second textbox

const description = document.querySelector("#description");

const type = document.querySelector("#type");

const input = document.querySelector("#mode_input"); //typing input

function say(text) { //taken from gbishop runner example game
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}

function pickLetter() { //Text generator for mode 1
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 '
    const index = Math.floor(Math.random() * (alphabet.length-1))
    return alphabet[index]
}

function pickWordOrPhrase() { //Text generator for mode 2
    var words = ["Hello", "World", "Puppy", "Alphabet", "Chemistry", "Beach", "Kitten", "Teacher", "School", "Fox", "Blue", "Color", "Sky", "Lake", "Skateboard", "Whisper", "President", "Government", "Whom", "No", "Thanks", "Cold", "Weather", "Please"];
    var phrases = ["Thank you", "Good luck", "What is your name", "Once in a blue moon", "Never say never", "Where is the library"];
    var wordorphrase = Math.floor(Math.random() * 2);
    if (wordorphrase <= 1) {
        return words[Math.floor(Math.random() * (words.length - 1))]
    } else {
        return phrases[Math.floor(Math.random() * (phrases.length - 1))]
    }
}

mode.addEventListener("keyup", () => {
    const m = Number.parseInt(mode.value, 10);
    if (m == 1) {
        //Practice mode: learn where keys are on keyboard
        heading.textContent = "Practice Mode"; //1 = practice mode, set heading
        description.textContent = "Type the letter spoken.";
        const txt = pickLetter();
        if (txt == " ") {
            say("Space")
            type.textContent = "[Space]"
        } else {
            say(txt);
            type.textContent = txt;
        }
    } else if (m == 2) {
        //Test mode: practice typing words and sentences
        heading.textContent = "Test Mode"; //2 = test mode, set heading
        description.textContent = "Type the word or phrase spoken.";
        const txt = pickWordOrPhrase();
        say(txt);
        type.textContent = txt;
    } else {
        heading.textContent = "Invalid mode! Please type 1 or 2."; //can only type 1 or 2, set heading
        description.textContent = "Game will not begin until a valid mode is selected."
    }
});

//input.addEventListener("keyup", () => {
//})
