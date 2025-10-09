const skull_img = document.querySelector(".skull_img");
const shift_1 = document.querySelector(".shift_img-1");
const shift_2 = document.querySelector(".shift_img-2");
const shift_3 = document.querySelector(".shift_img-3");
const shift_4 = document.querySelector(".shift_img-4");
let animated_skull_down = false;
let window_width = document.documentElement.clientWidth;

function skull_animation_down () {
    skull_img.style.animation = "skull_down 0.5s ease-in-out forwards 0.5s";
    shift_2.style.animation = "shift-down 0.5s ease-in-out forwards 1.2s";
    shift_4.style.animation = "shift-down 0.5s ease-in-out forwards 1.4s";
    shift_1.style.animation = "shift-down 0.5s ease-in-out forwards 1.6s";
    shift_3.style.animation = "shift-down 0.5s ease-in-out forwards 1.8s";
}

function skull_animation_jump () { 

    shift_2.style.transform = 'translateY(0)';
    shift_4.style.transform = 'translateY(0)';
    shift_1.style.transform = 'translateY(0)';
    shift_3.style.transform = 'translateY(0)';

    shift_2.style.animation = "shift-jump 6s ease-in-out infinite 0.1s";
    shift_4.style.animation = "shift-jump 6s ease-in-out infinite 0.2s";
    shift_1.style.animation = "shift-jump 6s ease-in-out infinite 0.3s";
    shift_3.style.animation = "shift-jump 6s ease-in-out infinite 0.4s";
}


function skull_animation() {
    if (window_width >= 1194 && !animated_skull_down) {
        skull_animation_down();
        animated_skull_down = true;
        setTimeout(skull_animation_jump, 3000);
    }
    else {
        if (window.scrollY > 200 && !animated_skull_down) {
            skull_animation_down();
            anideted_skull_down = true;
            setTimeout(skull_animation_jump, 3000);
        }
    }
}

window.addEventListener("scroll", skull_animation);
skull_animation();