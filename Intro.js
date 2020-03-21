const mode = document.querySelector("#mode_selection"); //from first textbox

const heading = document.querySelector("#heading"); //will be title of second textbox

const description = document.querySelector("#description")

const input = document.querySelector("#mode_input") //typing input

mode.addEventListener("keyup", () => {
    const m = Number.parseInt(mode.value, 10);
    if (m == 1) {
        //Practice mode: learn where keys are on keyboard
        heading.textContent = "Practice Mode"; //1 = practice mode, set heading
        description.textContent = "Type the letter spoken."
    } else if (m == 2) {
        //Test mode: practice typing words and sentences
        heading.textContent = "Test Mode"; //2 = test mode, set heading
        description.textContent = "Type the word or phrase spoken."
    } else {
        heading.textContent = "Invalid mode! Please type 1 or 2."; //can only type 1 or 2, set heading
    }
});
