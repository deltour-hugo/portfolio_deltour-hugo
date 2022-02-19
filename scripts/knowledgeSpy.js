const knowledges = [
    {
        name: "H.T.M.L",
        img: "HTML.png",
        value: 100
    },
    {
        name: "C.S.S",
        img: "CSS.svg",
        value: 90
    },
    {
        name: "JavaScript",
        img: "JavaScript.svg",
        value: 60
    },
    {
        name: "React",
        img: "React.svg",
        value: 40
    },
    {
        name: "NodeJS",
        img: "NodeJS.svg",
        value: 20
    },
    {
        name: "PHP",
        img: "PHP.svg",
        value: 50
    },
    {
        name: "MySQL",
        img: "MySQL.svg",
        value: 50
    },
    {
        name: "Outils GIT",
        img: "Git.png",
        value: 30
    }
];

const knowledgeContainer = document.querySelector('.knowledge__container');

for (let index = 0; index < knowledges.length; index++) {
    let knowledgeCard = `<div class="knowledge__card">
                            <img class="card__image" src="../assets/icons/${knowledges[index].img}" alt="CSS Logo">
                            <p class="card__text">${knowledges[index].name}</p>
                            <span class="card__knowledge" data-progress="${knowledges[index].value}"></span>
                        </div>`;
    knowledgeContainer.insertAdjacentHTML('beforeend', knowledgeCard);
}

const progressBars = document.querySelectorAll('.card__knowledge');

function showKnowledge ()
{
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.width = `${value}%`;
    });
}

function hideKnowledge ()
{
    progressBars.forEach(progressBar => {
        progressBar.style.width = 0;
    });
}

window.addEventListener('scroll', () => {
    const sectionPosition = knowledgeContainer.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        showKnowledge();
    } else {
        hideKnowledge();
    }
});