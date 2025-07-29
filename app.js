const buttonEls = document.querySelectorAll("button");
const headingTwo = document.querySelectorAll("h2");

for (const button of buttonEls) {
    button.addEventListener("click", (e) => {
        const imgEl = e.currentTarget.querySelector("img");
        const questionBox = e.currentTarget.parentElement;
        const sectionEl = questionBox.parentElement;
        const answer = sectionEl.querySelector("p");

        if (imgEl.className === "plus") {
            displayAnswer(imgEl, answer);
        } else {
            hideAnswer(imgEl, answer);
        }
    })
}

for (const h2 of headingTwo) {
    h2.addEventListener("click", (e) => {
        const questionBox = e.target.parentElement;
        const sectionEl = questionBox.parentElement;
        const answer = sectionEl.querySelector("p");
        const buttonEl = questionBox.querySelector("button");
        const imgEl = buttonEl.querySelector("img");

        if (imgEl.className === "plus") {
            displayAnswer(imgEl, answer);
        } else {
            hideAnswer(imgEl, answer);
        }
    })
}

function displayAnswer(imgEl, answer) {
    // show answer and change image to minus
    answer.classList.remove("close-answer");

    imgEl.className = "minus";
    imgEl.src = "./assets/images/icon-minus.svg";
    imgEl.alt = "minus icon";
}

function hideAnswer(imgEl, answer) {
    // hide answer and change image to plus
    answer.classList.add("close-answer");

    imgEl.className = "plus";
    imgEl.src = "./assets/images/icon-plus.svg";
    imgEl.alt = "plus icon";
}