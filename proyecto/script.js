const total = document.querySelector('.total');
const punto = document.querySelectorAll('.punto');

punto.forEach( ( cadaPunto , i )=> {
	punto[i].addEventListener('click', ()=> {
		// Conocer la posición del punto
		let posicion = i;

		// Según la posición, calcular el porcentaje de traslado
		let operacion = posicion * -(100 /3);
		total.style.transform = `translateX(${ operacion }%)`;

		punto.forEach( ( cadaPunto , i ) => {
			punto[i].classList.remove('active');
		})
		punto[i].classList.add('active');
	});
});