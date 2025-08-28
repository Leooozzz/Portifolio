const botao_menuMobile=document.querySelector('#menu-mobile') as HTMLBodyElement;
const botao=document.querySelector('#menu-botao') as HTMLButtonElement;
botao.addEventListener('click',()=>{
    botao_menuMobile.classList.toggle('hidden')
});
const cards_animation=document.querySelectorAll('.card-tecnologia') as NodeListOf<HTMLElement>;

function intersectionObserver(cards_animation){
    const obeserver= new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                const target=entry.target as HTMLElement;
                target.classList.remove('opacity-0','translate-y-4')
            }
        })
    })
    cards_animation.forEach((card)=>{
        obeserver.observe(card);
    });
};
const header_animation=document.querySelector('header') as HTMLElement;
window.addEventListener('load', () => {
  header_animation.classList.remove('opacity-0', 'translate-y-[-20px]');
});
const titulo = document.querySelector('h1') as HTMLElement;
const paragrafo = document.querySelector('main p') as HTMLElement;

window.addEventListener('load', () => {
  titulo.classList.remove('opacity-0', 'translate-y-4');
  paragrafo.classList.remove('opacity-0', 'translate-y-4');
});


intersectionObserver(cards_animation)