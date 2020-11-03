let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 10000;

window.addEventListener("resize", function () {
  width = sliderIndividual[0].clientWidth;
});

setInterval(function () {
  slides();
}, intervalo);

function slides() {
  slider.style.transform = "translate(" + -width * contador + "px)";
  slider.style.transition = "transform 1.8s";
  contador++;

  if (contador == sliderIndividual.length) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s";
      contador = 1;
    }, 1500);
  }
}

/* Menu */
const enlaces = document.getElementsByClassName("enlaces")[0];
const btn_menu = document.getElementsByClassName("btn_menu")[0];
const menuHamburguesa = document.getElementById("btn_menu");
let abierto = false;

const body = document.querySelector("body");

const toggleMenu = () => {
  enlaces.classList.toggle("enlaces2");
  enlaces.style.transition = "transform 0.5s ease-in-out";
};

btn_menu.addEventListener("click", function () {
  toggleMenu();
  if (document.querySelector(".enlaces.enlaces2")) {
    abierto = true;
    body.style.overflow = "hidden";
  } else {
    abierto = false;
    body.style.overflow = "visible";
  }
});

window.addEventListener("click", function (e) {
  this.console.log(e.target);
  if (abierto) {
    if (e.target !== menuHamburguesa) {
      toggleMenu();
      abierto = false;
      body.style.overflow = "visible";
    }
  }
});

window.addEventListener("resize", function () {
  if (screen.width > 768) {
    if (abierto) {
      toggleMenu();
      enlaces.style.transition = "none";
      abierto = false;
    }
  }
});

/*carousel*/
window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: ".carousel__indicadores",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 520,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
          /*itemWidth: 150,
                duration: 0.25*/
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25,
        },
      },
    ],
  });
});


