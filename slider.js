const next = document.querySelector('#next');
const prev = document.querySelector('#previous');
const strip = document.querySelector('.strip');

let dots = document.querySelector('.dots');
let imgs = Array.from(document.querySelectorAll('.im'));
let dotelems = [];
let offs = 0;
let index = 0;

const appendDots = (i) => {
    for (i=0; i < imgs.length; i++){
        dots.innerHTML += `
            <div class="dot" onclick="activeDot(${i})"></div>
        `;
        dotelems = document.querySelectorAll('.dot');
    }
};
appendDots();
dotelems[index].classList.add('active');

const activeDot = (i) => {
    for(let dot of dotelems) {
        dot.classList.remove('active')
    };
    dotelems[i].classList.add('active');
};

next.addEventListener('click', function(){
    offs +=200;
    index +=1;
    if (offs>800 && index>imgs.length-1){
        offs = 0;
        index = 0;
    }
    strip.style.left = -offs + 'px';
    activeDot(index);
});
prev.addEventListener('click', function(){
    offs -=200;
    index -=1;
    if (offs<0 && index<0){
        offs = 800;
        index = imgs.length-1;
    }
    strip.style.left = -offs + 'px';
    activeDot(index);
});
