const heading = document.querySelector("#heading");
const mode = document.querySelector("#mode_selection");

mode.addEventListener("keyup", () => {
    const m = Number.parseInt(mode, 10);
    if (m == 1) {
        //Practice mode: learn where keys are on keyboard
        heading.textContent = "Practice Mode";
    } else if (m == 2) {
        //Test mode: practice typing words and sentences
        heading.textContent = "Test Mode";
    } else {
        heading.textConstant = "Invalid mode! Please type 1 or 2.";
    }
});
