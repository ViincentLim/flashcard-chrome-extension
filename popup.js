const titleText = document.querySelector('#title');
const descriptionText = document.querySelector('#description');
const answersText = document.querySelector('#answers');
const nextButton = document.querySelector('#next-button');
const showButton = document.querySelector('#show-button');

const data = [
    {
        "title": "receptor of norepinephrine",
        "answers": "receptor: \nalpha and beta adrenoceptors (non-selective) \n*slight bias towards alpha adrenoceptors"
    },
    {
        "title": "uses of norepinephrine",
        "answers": "uses: \nsevere hypotension"
    },
    {
        "title": "ADRs of norepinephrine",
        "answers": "ADRs: \nhypertension, tachycardia, reflex bradycardia, ventricular arrhythmias, necrosis due to injury at site of injection"
    }
];


let index = Number(window.localStorage.getItem("index")) || 0;

bindCard(data[index]);
showButton.addEventListener('click', evt => {
    answersText.textContent = data[index].answers;
});
nextButton.addEventListener('click', evt => {
    if (index + 1 < data.length) {
        index++;
    } else {
        index = 0;
    }
    window.localStorage.setItem("index", index.toString());
    bindCard(data[index]);
});

function bindCard({title, description, answers}) {
    titleText.textContent = title ?? "";
    descriptionText.textContent = description ?? "";
    answersText.textContent = "";
}