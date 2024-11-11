// Función que obtiene los datos de la API y crea las cards
function obtenerDatos() {
    fetch('https://vgcursos-potrero-default-rtdb.firebaseio.com/cursos.json')
        .then(response => response.json())
        .then(data => {
            const cardDeck = document.getElementById('card-deck');
            cardDeck.innerHTML = '';

            for (let key in data) {
                const objeto = data[key];

                // Crear los elementos HTML para la card
                const card = document.createElement('div');
                card.classList.add('card');

                const imagen = document.createElement('img');
                imagen.classList.add('card-img-top');
                imagen.src = objeto.imagen;

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const titulo = document.createElement('h5');
                titulo.classList.add('card-title');
                titulo.textContent = objeto["nombre"];

                const duracion = document.createElement('p');
                duracion.classList.add('card-text');
                duracion.textContent = 'Duración: ' + objeto.duracion + ' horas';

                const valor = document.createElement('p');
                valor.classList.add('card-text');
                valor.textContent = 'Valor: $' + objeto.valor;

                cardBody.appendChild(titulo);
                cardBody.appendChild(duracion);
                cardBody.appendChild(valor);

                card.appendChild(imagen);
                card.appendChild(cardBody);

                cardDeck.appendChild(card);
            }
        });
}

// Ejecutar la función obtenerDatos al cargar la página
obtenerDatos();

// Ejecutar la función obtenerDatos cada 5 segundos utilizando setInterval
setInterval(obtenerDatos, 5000);
