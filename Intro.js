const mode = document.querySelector("#mode_selection"); //from first textbox

const heading = document.querySelector("#heading"); //will be title of second textbox

const description = document.querySelector("#description");

const type = document.querySelector("#type"); //what the student should type

const input = document.querySelector("#mode_input"); //typing input

const test = document.querySelector("#test")

const TopRowKeyboard = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]

const MiddleRowKeyboard = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]

const BottomRowKeyboard = ["z", "x", "c", "v", "b", "n", "m"]

const NumberRowKeyboard = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const Space = "Space"

function say(text) { //taken from gbishop runner example game
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}

function pickLetter() { //Text generator for mode 1
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 '
    const index = Math.floor(Math.random() * (alphabet.length-1))
    return alphabet[index].toLowerCase()
}

function testCorrect(answer, key) {
    if (answer.equals(key)) {
        return true;
    } else {
        return false;
    }
}

function pickWordOrPhrase() { //Text generator for mode 2
    var words = ["Hello", "World", "Puppy", "Alphabet", "Chemistry", "Beach", "Kitten", "Teacher", "School", "Fox", "Blue", "Color", "Sky", "Lake", "Skateboard", "Whisper", "President", "Government", "Whom", "No", "Thanks", "Cold", "Weather", "Please"];
    var phrases = ["Thank you", "Good luck", "What is your name", "Once in a blue moon", "Never say never", "Where is the library"];
    var wordorphrase = Math.floor(Math.random() * 2);
    if (wordorphrase <= 1) {
        return words[Math.floor(Math.random() * (words.length - 1))].toLowerCase()
    } else {
        return phrases[Math.floor(Math.random() * (phrases.length - 1))].toLowerCase()
    }
}

function pickSentence() { //Text generator for mode 3
    var sentences = ["The quick brown fox jumps over the lazy dog", "Would you like to come with me and study at the library", "My dad is tall but my uncle is taller", "I want to study biology when I go to college", "I like to play soccer and football", "Math is my favorite school subject", "Which book should I read tonight"]
    var index = Math.floor(Math.random() * (sentences.length - 1))
    return sentences[index].toLowerCase()
}

mode.addEventListener("keyup", () => {
    const m = Number.parseInt(mode.value, 10);
    if (m == 1) {
        //Practice mode: learn where keys are on keyboard
        heading.textContent = "Tutorial Mode"; //1 = tutorial mode, set heading
        description.textContent = "Type the letter spoken in lower-case. Hit enter (far right, fourth from top) to submit.";
        say("Type the letter spoken in lower-case. Hit enter (far right, fourth from top) to submit.")
        say("I will now begin reading off letters for you to type.")
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
        heading.textContent = "Practice Mode"; //2 = practice mode, set heading
        description.textContent = "Type the word or phrase spoken in lower-case letters. Hit enter (far right, fourth from top) to submit.";
        say("Type the word or phrase spoken in lower-case letters. Hit enter (far right, fourth from top) to submit.");
        say("I will now begin reading off words and phrases for you to type.");
        const txt = pickWordOrPhrase();
        say(txt);
        type.textContent = txt;
    } else if (m == 3) {
        heading.textContent = "Test Mode"; //3 = test mode, set heading
        description.textContent = "Type the sentence spoken in lower-case letters. Hit enter (far right, fourth from top) to submit.";
        say("Type the sentence spoken in lower-case letters. Hit enter (far right, fourth from top) to submit.");
        say("I will now begin reading off sentences for you to type.");
        const txt = pickSentence();
        say(txt);
        type.textContent = txt;
    } else {
        heading.textContent = "Invalid mode! Please type 1 or 2."; //can only type 1 or 2, set heading
        description.textContent = "Game will not begin until a valid mode is selected."
        say("Game will not begin until a valid mode is selected.")
    }
});

function CheckMode1(type, answer) {
    if (type == answer[0]) {
        test.textContent = type;
        return(True);
    } else {
        say("Incorrect!");
        test.textContent = type;
        if (TopRowKeyboard.indexOf(type) !== -1) {
            say(type)
            say("Is on the second to third row of most keyboards.");
            say("This row, from left to right, is tab, q, w, e, r, t, y, u, i, o, p, bracket, bracket, backslash.")
        } else if (MiddleRowKeyboard.indexOf(type) !== -1) {
            say(type)
            say("Is on the fourth to top row of most keyboards.");
            say("This row, from left to right, is Caps Lock, a, s, d, f, g, h, j, k, l, semi-colon, apostrophe, enter.");
        } else if (BottomRowKeyboard.indexOf(type) !== -1) {
            say(type);
            say("Is on the fifth to top row of most keyboards.");
            say("This row, from left to right, is shift, z, x, c, v, b, n, m, comma, period, slash, shift.");
        } else if (NumberRowKeyboard.indexOf(type) !== -1) {
            say(type);
            say("Is on the second to top row of most keyboards.");
            say("This row, from left ro right, is tilde, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, minus, equals, backspace.");
        }
        return(False);
    }
}

input.addEventListener("keyup", () => {
    let k = type.value;
    let answer = input.value;
    let m = Number.parseInt(mode.value, 10);
    say(answer[answer.length - 1]);
    if (m == 1) {
        if (event.key === "Enter") {
            const Correct = CheckMode1(k, answer);
            if (Correct == True) {
                say("Correct! I will now reset the textbox and read out a new letter.")
                input.reset()
                const txt = pickLetter();
                type.textContent = txt;
                say(txt);
            }
        }
    }
})
