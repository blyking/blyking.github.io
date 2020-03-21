let mode = document.querySelector("#mode_selection");
let modetitle = document.querySelector("#answer1");

mode.addEventListener("keyup", () => {
    Number.parseInt(mode, 10);
    if (mode == 1) {
        //Practice mode: learn where keys are on keyboard
        answer1.textContent = "Practice Mode"
    } else if (mode == 2) {
        //Test mode: practice typing words and sentences
        answer1.textContent = "Test Mode"
    } else {
        answer1.textContent = "Invalid mode! Please type 1 or 2."
    }
})
