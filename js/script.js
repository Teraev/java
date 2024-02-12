let open_buttons = document.querySelectorAll('[data-modal]')
let close_buttons = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')


function open_close_modal(arr , open) {
    arr.forEach(button => {
      button.onclick = () => {
        modal.classList[open ? "add" : "remove"] ('show' , 'fade')
        document.body.style.overflow = open ? "hidden" : "scroll"
      }  
    });
}

open_close_modal(open_buttons , true)
open_close_modal(close_buttons , false)



const slides = document.querySelectorAll('.offer__slide');
let slidesindex = 0;

let num_picture = document.querySelector('#current')


slides.forEach(slide => slide.classList.add('hide', 'fade'));
slides[slidesindex].classList.remove('hide');

const next_btn = document.querySelector('.offer__slider-next');
const prev_btn = document.querySelector('.offer__slider-prev');




function slidesshow(n) {
    slides.forEach(slide => {
        slide.classList.add('hide', 'fade')
    });

    slidesindex = (slides.length + slidesindex + n) % slides.length;
    slides[slidesindex].classList.remove('hide');
}

next_btn.onclick = () => {
    slidesshow(1);
    num_picture.innerText =  "0" + slidesindex
};

prev_btn.onclick = () => {
    slidesshow(-1);
    num_picture.innerText =  "0" + slidesindex

};


