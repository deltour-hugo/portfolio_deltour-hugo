const knowledge = document.querySelector('.knowledge__container');
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
    const sectionPosition = knowledge.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        showKnowledge();
    } else {
        hideKnowledge();
    }
});