
const grid = new Muuri('.grid', {
  layout: {
    rounding: false
  }
});

window.addEventListener('load', () => {
  grid.refreshItems().layout();
  document.getElementById('grid').classList.add('imagenes-cargadas');

  /*AGREGAMOS LOS LISTENER DE LOS ENLACES PARA FILTRAR POR CATEGORIA.*/
  const enlaces = document.querySelectorAll('#categorias-anillo a');
  enlaces.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
      evento.preventDefault();
      enlaces.forEach((enlace) => enlace.classList.remove('activo'));
      evento.target.classList.add('activo');

      const categoria = evento.target.innerHTML.toLowerCase();
      categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
    });
  });

  /*AGREGAMOS LOS LISTENER PARA LA BARRA DE BUSQUEDA.*/
  document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
    const busqueda = evento.target.value;
    grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda));
  });

  /* AGREGAMOS LISTENER PARA LAS IMAGENES */
  const overlay = document.getElementById('overlay');
  document.querySelectorAll('.grid .item img').forEach((elemento) => {

    elemento.addEventListener('click', () => {
      const ruta = elemento.getAttribute('src');
      const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
      overlay.classList.add('activo');
      document.querySelector('#overlay img').src = ruta;
      document.querySelector('#overlay .descripcion').innerHTML = descripcion;
    });
  });

  /*EventListener del boton de cerrar*/
  document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
    overlay.classList.remove('activo');
  });

  /*EventListener del Overlay*/
  overlay.addEventListener('click', (evento) => {
    evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
  });
});

/****Menu****/
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