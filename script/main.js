var botao_menuMobile = document.querySelector('#menu-mobile');
var botao = document.querySelector('#menu-botao');
botao.addEventListener('click', function () {
    botao_menuMobile.classList.toggle('hidden');
});
var cards_animation = document.querySelectorAll('.card-tecnologia');
function intersectionObserver(cards_animation) {
    var obeserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var target = entry.target;
                target.classList.remove('opacity-0', 'translate-y-4');
            }
        });
    });
    cards_animation.forEach(function (card) {
        obeserver.observe(card);
    });
}
;
var header_animation = document.querySelector('header');
window.addEventListener('load', function () {
    header_animation.classList.remove('opacity-0', 'translate-y-[-20px]');
});
var titulo = document.querySelector('h1');
var paragrafo = document.querySelector('main p');
window.addEventListener('load', function () {
    titulo.classList.remove('opacity-0', 'translate-y-4');
    paragrafo.classList.remove('opacity-0', 'translate-y-4');
});
intersectionObserver(cards_animation);
