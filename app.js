// the faq section events

const btns = document.querySelectorAll('.faq__question-btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement.parentElement.parentElement.parentElement;
        question.classList.toggle('show-text');

    })
})