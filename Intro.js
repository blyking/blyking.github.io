const mode = document.querySelector("#mode_selection"); //from first textbox

const heading = document.querySelector("#heading"); //will be title of second textbox

const description = document.querySelector("#description");

const type = document.querySelector("#type"); //what the student should type

const input = document.querySelector("#mode_input"); //typing input

const test = document.querySelector("#test");

var hasClicked = false;

const TopRowKeyboard = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]

const MiddleRowKeyboard = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]

const BottomRowKeyboard = ["z", "x", "c", "v", "b", "n", "m"]

const NumberRowKeyboard = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const Space = "Space"

const numArray = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eigth", "Ninth", "Tenth", "Eleventh",
                  "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth", "Eighteenth", "Nineteenth", "Twentieth"];

let checkWordOrPhrase = "";

var moveForward = true;

if (document.activeElement.nodeName = 'TEXTAREA') {
    if (hasClicked == false) {
        say("yay! To learn the keys and locations, type 1 (second from left, second from top) in the first box below. To test your knowledge by typing out words and phrases, hit 2 (third from left, second from top) in the first box below. To go to test mode, where you will type out full sentences with no hints, hit 3 (fourth from left, second from top). For more information on the game, please type 4 (second from top, fifth from left). The mode can be changed at any time by changing the number in the top box, which can be returned to by selecting the up arrow key (located in lower right area of keyboard) while in modes 1, 2, and 3. The up arrow is situated differently for many keyboard models, so ask an adult or friend for help if needed.")
        hasClicked = true;
    }
}

document.getElementById(mode.id).focus();
document.getElementById(mode.id).select();

if (mode.focus) {
    if (hasClicked == false) {
        say("Yay! To learn the keys and locations, type 1 (second from left, second from top) in the first box below. To test your knowledge by typing out words and phrases, hit 2 (third from left, second from top) in the first box below. To go to test mode, where you will type out full sentences with no hints, hit 3 (fourth from left, second from top). For more information on the game, please type 4 (second from top, fifth from left). The mode can be changed at any time by changing the number in the top box, which can be returned to by selecting the up arrow key (located in lower right area of keyboard) while in modes 1, 2, and 3. The up arrow is situated differently for many keyboard models, so ask an adult or friend for help if needed.")
        hasClicked = true;
    }
}

function say(text) { //taken from gbishop runner example game
    var msg = new SpeechSynthesisUtterance(text);
    if (moveForward == true) {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel()
      }
    }
    window.speechSynthesis.speak(msg);
}

function pickLetter() { //Text generator for mode 1
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789'
    const index = Math.floor(Math.random() * (alphabet.length-1))
    if (index == 26) {
        return "[Space]";
    } else { 
        return alphabet[index].toLowerCase();
    }
}

function testCorrect(answer, key) {
    if (answer.equals(key)) {
        return true;
    } else {
        return false;
    }
}

function pickWordOrPhrase() { //Text generator for mode 2
    var words = ["Hello", "World", "Puppy", "Alphabet", "Chemistry", "Beach", "Kitten", "Teacher", "School", "Fox", "Blue", "Color", "Sky", "Lake", "Skateboard", "Whisper", "President", "Government", "Whom", "No", "Thanks", "Cold", "Weather", "Please", "Math", "Example", "Measure", "Friend", "Country", "Picture", "Women", "Men", "Elephant", "Water", "People", "Dragon", "Animal", "Lunch", "Basket", "Owl", "Nowhere", "Ladder", "Orange", "Blue", "Green", "Blue", "Yellow", "Birthday", "Present", "Letter", "Pencil", "Paper"];
    var phrases = ["Thank you", "Good luck", "What is your name", "Once in a blue moon", "Never say never", "Where is the library", "See you later", "How are you doing", "Best of both worlds", "Happy birthday to you", "My favorite color is red"];
    var wordorphrase = (Math.random() * 2);
    if (wordorphrase <= 1) {
        checkWordOrPhrase = "word";
        return words[Math.floor(Math.random() * (words.length - 1))].toLowerCase()
    } else {
        checkWordOrPhrase = "phrase";
        return phrases[Math.floor(Math.random() * (phrases.length - 1))].toLowerCase()
    }
}

function pickSentence() { //Text generator for mode 3
    var sentences = ["The quick brown fox jumps over the lazy dog", "Would you like to come with me and study at the library", "My dad is tall but my uncle is taller", "I want to study biology when I go to college", "I like to play soccer and football", "Math is my favorite school subject", "Which book should I read tonight", "Can you play my favorite song on the speaker please", "How many push ups can you do", "My mom makes the best macaroni and cheese", "My dog is very fluffy", "The cat is in the tall tree", "I like to run and jump", "I like to play with my ball", "This is my pet fish", "We run in the sun", "The big red hen is fat", "I can dig in the mud", "My pet is at the vet"]
    var index = Math.floor(Math.random() * (sentences.length - 1))
    return sentences[index].toLowerCase()
}

mode.addEventListener("keyup", () => {
    const m = Number.parseInt(mode.value, 10);
    if (m == 1 || m == 2 || m == 3) {
        document.getElementById(input.id).focus();
        document.getElementById(input.id).select();
    }
    if (m == 1) {
        //Practice mode: learn where keys are on keyboard
        heading.textContent = "Tutorial Mode"; //1 = tutorial mode, set heading
        description.textContent = "Type the letter spoken in lower-case. Hit enter (far right, fourth from top) to submit.";
        say("You have selected Tutorial Mode. Type the letter spoken in lower-case. Hit enter (far right, fourth from top) to submit.")
        moveForward = false;
        say("I will now begin reading off letters for you to type.")
        const txt = pickLetter();
        if (txt == "[Space]") {
            say("Space");
            type.textContent = "[Space]";
        } else {
            say(txt);
            type.textContent = txt;
        }
    } else if (m == 2) {
        //Test mode: practice typing words and sentences
        heading.textContent = "Practice Mode"; //2 = practice mode, set heading
        description.textContent = "You have selected practice mode. Type the word or phrase spoken in lower-case letters. Hit enter (far right, fourth from top) to submit.";
        say("You have selected practice mode. Type the word or phrase spoken in lower-case letters. Hit enter (far right, fourth from top) to submit.");
        moveForward = false;
        say("I will now begin reading off words and phrases for you to type.");
        const txt = pickWordOrPhrase();
        say(txt);
        type.textContent = txt;
    } else if (m == 3) {
        heading.textContent = "Test Mode"; //3 = test mode, set heading
        description.textContent = "You have selected test mode. Type the sentence spoken in lower-case letters. Hit enter (far right, fourth from top) to submit.";
        say("You have selected test mode. Type the sentence spoken in lower-case letters. Hit enter (far right, fourth from top) to submit.");
        moveForward = false;
        say("I will now begin reading off sentences for you to type.");
        const txt = pickSentence();
        say(txt);
        type.textContent = txt;
    } else if (m == 4) {
        moveForward = true;
        say("Welcome to Tarheel Typing! This game is designed to help you learn the numerical and alphabetical key locations on your keyboard. Please start with the tutorial mode (mode 1) until you are completely comfortable with the locations of the keys. After that, we recommend practicing on practice mode (mode 2) before progressing to the test mode (mode 3). Our program will read out the last letter typed to help you know what keys you are pressing, and when you hit backspace, the new last letter of your answer will be read out loud. For further instructions and information, please refer to the README.")
    } else {
        heading.textContent = "Invalid mode! Please type 1, 2, 3, or 4."; //can only type 1 or 2, set heading
        description.textContent = "Game will not begin until a valid mode is selected."
        say("Game will not begin until a valid mode is selected. Please type 1, 2, 3, or 4.")
    }
});

function CheckMode1(type, answer) {
    //console.log("String(type) = " + String(type) + ", String(answer) = " + String(answer) + ", String(answer[0]) = " + String(answer[0]));
    //console.log((type == answer[0]).toString());
    moveForward = false;
    const deletePrompt = "Press backspace, located far right, second from top to clear your answer. Now try again.";
    if (type == "[Space]") {
      type = " ";
    }
    if (type == answer) {
        /* Ths line below this doesn't work, so I commented it out */
        //test.textContent = type;
        return(true);
    } else {
        say("Incorrect!");
        if (answer.length > 1) {
            say("You have typed more than 1 letter or number. Please only type 1.")
        }
        // test variable currently not working
        //test.textContent = type;
        if (TopRowKeyboard.indexOf(type) !== -1) {
            say(type)
            say("Is on the third to top row of most keyboards.");
            say("This row, from left to right, is tab, q, w, e, r, t, y, u, i, o, p, open bracket, close bracket, backslash.");
            say(deletePrompt);
        } else if (MiddleRowKeyboard.indexOf(type) !== -1) {
            say(type)
            say("Is on the fourth to top row of most keyboards.");
            say("This row, from left to right, is Caps Lock, a, s, d, f, g, h, j, k, l, semi-colon, apostrophe, enter.");
            say(deletePrompt);
        } else if (BottomRowKeyboard.indexOf(type) !== -1) {
            say(type);
            say("Is on the fifth to top row of most keyboards.");
            say("This row, from left to right, is shift, z, x, c, v, b, n, m, comma, period, slash, shift.");
            say(deletePrompt);
        } else if (NumberRowKeyboard.indexOf(type) !== -1) {
            say(type);
            say("Is on the second to top row of most keyboards.");
            say("This row, from left to right, is tilde, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, minus, equals, backspace.");
            say(deletePrompt);
        } else if (type == " ") {
            say("Space is the long horizontal key at the bottom middle of the keyboard.");
        }
        return(false);
    }
}

function CheckNumberOfErrors(type, answer) {
    var diff = 0;
    var len = 0;
    const alen = answer.length;
    const tlen = type.length;
    let change = answer.length - type.length;
    //test.textContent = alen.toString();
    if (tlen > alen) {
        len = alen;
    } else {
        len = tlen;
    }

    for (i = 0; i <= len-1; i++) {
        if (type[i] != answer[i]) {
            diff++;
        }
    }
    if (change != 0) {
        if (change < 1) {
            change = type.length - answer.length;
            diff = diff + change;
        } else {
            diff = diff + change;
        }
    }

    return(diff);
}

function IndexOfSingleError(type, answer) {
    var diff = 0;
    var len = 0;
    const alen = answer.length;
    const tlen = type.length;
    if (tlen > alen) {
        len = alen;
    } else {
        len = tlen;
    }

    for (i = 0; i <= len-1; i++) {
        if (type[i] != answer[i]) {
            return(i);
        }
    }
    
    return(-1);
}

function findSpaceIndexes(string) {
    let phraseSpaceIndexes = [];
    let j = 0;
    for (i = 0; i <= string.length-1; i++) {                                //fills out phraseSpaceIndexes array 1 by 1 with indexes of where spaces are located.
        if(string[i] == " "){
            phraseSpaceIndexes[j] = i; 
            j++;
        }
    }
    return phraseSpaceIndexes;
}

function findWordIndex(phraseSpaceIndexes, index) {
    let wordIndex = 0;
    for(i = 0; i <= phraseSpaceIndexes.length-1; i++){                  //goes through phraseSpaceIndexes, compares indexes of mistake and indexes of all spaces.  
        if(phraseSpaceIndexes[i] > index){                              //if the index of the mistake is less than the index of a space, then set the wordIndex = to the word before that space.
            wordIndex = i;
            break;
        }
    }
    //console.log("wordIndex is: " + wordIndex);
    if(phraseSpaceIndexes[phraseSpaceIndexes.length-1] < index){        //if wordIndex is never updated because the mistake is in the last word, make wordIndex the last word.
        wordIndex = phraseSpaceIndexes.length;
    }
    return wordIndex;
}

function findLetterIndex(phraseSpaceIndexes, wordIndex, index) {
    if (wordIndex == 0) {                                                 //if the mistake is in the first word, just use the raw mistake index.
        letterIndex = index;
    } else {
        letterIndex = index - (phraseSpaceIndexes[wordIndex-1] + 1);    //phraseSpaceIndexes[wordIndex-1] + 1 gets the index of the beginning of the word that was incorrect and is 
    }
    return letterIndex;
}

function CheckMode2(type, answer){
    moveForward = false;
    if (type == answer) {
        return(true);
    } else {
        say("Incorrect.")
        const diff = CheckNumberOfErrors(type, answer);
        if (diff == 1) {
            const index = IndexOfSingleError(type, answer);
            say("You made one error. You typed");
            if (answer[index] == " ") {
                say("Space");
            } else {
                say(answer[index]);
            }
            say("instead of");
            if (type[index] == " ") {
                say("Space")
            } else {
                say(type[index]);
            }
            if(checkWordOrPhrase == "word"){
                say("at the" + numArray[index] + "letter of the word.");
            }else if(checkWordOrPhrase == "phrase"){
                let phraseSpaceIndexes = findSpaceIndexes(type);
                let wordIndex = findWordIndex(phraseSpaceIndexes, index);  
                let letterIndex = findLetterIndex(phraseSpaceIndexes, wordIndex, index);                                                                //subtracted from the index of the mistake in order to get the correct index in the numArray to be read out for the letter.
                say("on the" + numArray[wordIndex] + "word of the phrase, " + numArray[letterIndex] + "letter of the word.");
            }
            say("Please hit backspace and retype the incorrect letter.")
        } else {
            say("You made");
            say(diff);
            say("errors. I will now spell the answer for you.")
            for (i = 0; i < type.length; i++) {
                if (type[i] === " ") {
                    say("Space"); 
                } else {
                    say(type[i]);
                }
            }
        }
    }
}

function CheckMode3(type, answer) {
    moveForward = false;
    if (type == answer) {
        return true;
    } else {
        say("Incorrect");
        const diff = CheckNumberOfErrors(type, answer);

        if (diff == 1) {
            const index = IndexOfSingleError(type, answer);
            let phraseSpaceIndexes = findSpaceIndexes(type);
            let wordIndex = findWordIndex(phraseSpaceIndexes, index);
            let letterIndex = findLetterIndex(phraseSpaceIndexes, wordIndex, index);

            say("You made one error.")
            say("You typed")
            if (answer[index] == " ") {
                say("Space");
            } else {
                say(answer[index])
            }
            say("instead of")
            say(type[index]);
            say(`on the${numArray[wordIndex]}word of the phrase, ${numArray[letterIndex]}of the word.`)

        } else {
            say("You made");
            say(diff);
            say("errors. Please hold backspace to clear the input and type the answer as I read each letter. I will now spell out the phrase for you.")
            for (i = 0; i < type.length; i++) {
                if (type[i] === " ") {
                    say("Space"); 
                } else {
                    say(type[i]);
                }
            }
            say("I will now spell out your new answer.");
        }
        return false;
    }
}

input.addEventListener("keyup", () => {
    let k = type.textContent;
    let answer = input.value;
    let m = Number.parseInt(mode.value, 10);
    if (answer.length < 1 && event.key === "Enter") {
        say("Please type your answer before submitting.")
    }
    if (event.key == "ArrowUp") {
        document.getElementById(mode.id).focus();
        document.getElementById(mode.id).select();
        input.value = "";
        type.textContent = "";
        moveForward = true;
        heading.textContent = "Please select a valid mode.";
        description.textContent = "You will return back to the answer textbox once you have done so.";
        say("You have returned to the mode selection text box. Please type 1, 2, 3, or 4.");
    }
    if (event.key !== "Enter" && event.key !== "ArrowUp") {
        moveForward = false;
        if (event.key === " ") {
            say("Space");
        } else {
            say(event.key);
        }
    }

    if (event.key === "Backspace") {
        say(answer[answer.length - 1]);
    }

    if (m == 1 && answer.length > 0) {
        if (event.key === "Enter") {
            moveForward = false;
            const Correct = CheckMode1(k, answer);
            if (Correct == true) {
                say("Correct! I will now reset the textbox and read out a new letter.");
                input.value = "";
                const txt = pickLetter();
                type.textContent = txt;
                say(txt);
            }
        }
    } else if (m == 2 && answer.length > 0) {
        if (event.key == "Enter") {
            moveForward = false;
            const correct = CheckMode2(k, answer);
            if (correct == true) {
                say("Correct! I will now reset the textbox and read out a new letter.")
                input.value = "";
                const txt = pickWordOrPhrase();
                type.textContent = txt;
                say(txt);
            }
        }
    } else if (m == 3 && answer.length > 0) {
        if (event.key == "Enter") {
            moveForward = false;
            const correct = CheckMode3(k, answer);
            if (correct == true) {
                say("Correct! I will now reset the textbox and read out a new letter.")
                input.value = "";
                const txt = pickSentence();
                type.textContent = txt;
                say(txt);
            }
        }
    }
})

window.addEventListener("beforeunload", function() {
    this.window.speechSynthesis.cancel();
}, false);
