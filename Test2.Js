let Cont2 = document.querySelector('.Cont2');
let Cont = document.querySelector('.Cont');
let Listion = document.querySelectorAll('.Cont3Line .Li');
let Cont3 = document.querySelector('.Cont3');
let Listion2 = document.querySelectorAll('.Li1');
let Cont4Scroll = document.querySelector('.Cont4Scroll');
let i = 0;


setInterval(() =>{
    if(i == 0){
        Cont3.scrollLeft = 0;
        Listion.forEach(i => i.classList.remove('active3'));
        Listion[0].classList.add('active3');
        i++;
    }
    else if(i == 1){
        Cont3.scrollLeft = 1320;
        Listion.forEach(i => i.classList.remove('active3'));
        Listion[1].classList.add('active3');
        i++;
    }
    else{
        Cont3.scrollLeft = 2650;
        Listion.forEach(i => i.classList.remove('active3'));
        Listion[2].classList.add('active3');
        i = 0;
    }
}, 1500)

Listion2.forEach((item, index) =>{
    item.addEventListener('click', () =>{
        Listion2.forEach(i => i.classList.remove('active4'));
        item.classList.add('active4');
        if(index == 0){
            Cont4Scroll.scrollLeft = 0;
        }else if(index == 1){
            Cont4Scroll.scrollLeft = 450;
        }
        else if(index == 2){
            Cont4Scroll.scrollLeft = 900;
        }else{
            Cont4Scroll.scrollLeft = 1350;
        }
    })
})


Listion.forEach((item, index) => {
    item.addEventListener('click', () => {
        Listion.forEach(i => i.classList.remove('active3'));
        item.classList.add('active3');
        if(index == 0){
            Cont3.scrollLeft = 0;
        }
        if(index == 1){
            Cont3.scrollLeft = 1320;
        }
        if(index == 2){
            Cont3.scrollLeft = 2650;
        }
    })
})

window.addEventListener('scroll', () =>{
   if(window.scrollY > 1){
    Cont2.classList.add('active');
    Cont.classList.add('active2');
   }else{
    Cont2.classList.remove('active');
    Cont.classList.remove('active2');
}
})