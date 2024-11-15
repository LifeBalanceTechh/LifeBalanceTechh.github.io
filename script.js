document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('calcular');
    if(button){
        button.addEventListener('click', calcularCalorias);
    }

    var scrollToTopButton = document.querySelector('.scroll-to-top');
    if(scrollToTopButton){
        scrollToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    if(scrollToTopButton){
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollToTopButton.classList.add('show');
            } else {
                scrollToTopButton.classList.remove('show');
            }
        });

        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        });
    }

    document.querySelectorAll('#Articulos a').forEach(function(enlace) {
        enlace.addEventListener('click', function(evento) {
            evento.preventDefault(); // Evita que el enlace se abra normalmente
            var url = this.getAttribute('data-link');
            window.open(url, '_blank'); // Abre la URL en una nueva pestaña
        });
    });
});

function calcularCalorias() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var edad = parseInt(document.getElementById('edad').value);
    var actividad = parseFloat(document.getElementById('actividad').value);
    var resultadoElement = document.getElementById('resultados');

    resultadoElement.innerHTML = '';

    if (altura && peso && edad && actividad) {
        var mantenimiento = Math.round((10 * peso + 6.25 * altura - 5 * edad + 5) * actividad);
        var perder = mantenimiento - 500;
        var subir = mantenimiento + 500;

        var resultadoMantener = document.createElement('p');
        resultadoMantener.textContent = 'Para mantener tu peso, necesitas consumir aproximadamente ' + mantenimiento + ' calorías por día.';
        resultadoElement.appendChild(resultadoMantener);

        var resultadoPerder = document.createElement('p');
        resultadoPerder.textContent = 'Para perder peso, necesitas consumir aproximadamente ' + perder + ' calorías por día.';
        resultadoElement.appendChild(resultadoPerder);

        var resultadoSubir = document.createElement('p');
        resultadoSubir.textContent = 'Para subir de peso, necesitas consumir aproximadamente ' + subir + ' calorías por día.';
        resultadoElement.appendChild(resultadoSubir);
    } else {
        var mensajeError = document.createElement('p');
        mensajeError.textContent = 'Por favor, completa todos los campos.';
        resultadoElement.appendChild(mensajeError);
    }
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
