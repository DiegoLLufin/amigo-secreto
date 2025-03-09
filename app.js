let amigos = [];
let amigosDisponibles = [];

function agregarAmigo() {
    let ingreso = document.getElementById('amigo').value;
    
    if (ingreso === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }

    if (amigos.includes(ingreso)) {
        alert('Este amigo ya fue agregado');
        return;
    }

    amigos.push(ingreso);
    limpiar();
    actualizarLista();
}

function limpiar() {
    document.getElementById('amigo').value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        let item = document.createElement('li');
        item.textContent = amigo;
        item.setAttribute('data-id', index);
        lista.appendChild(item);
    });
}

function eliminarAmigo() {
    amigos.slice(index, 1);
    actualizarLista();
}

function validarSorteo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    sortearAmigo();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        validarSorteo();
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    amigos.splice(indiceAleatorio, 1);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`;
    
    sorteado = true;
    actualizarLista();
}