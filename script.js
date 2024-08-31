// Almacenará los votos
let votos = {
    opcion1: 0,
    opcion2: 0,
    opcion3: 0,
    opcion4: 0
};

function submitVote(opcion) {
    // Incrementa el voto para la opción seleccionada
    votos[opcion] += 1;

    // Actualiza los resultados
    document.getElementById('opcion1').innerText = `Camiseta Cosme Villa: ${votos.opcion1} votos`;
    document.getElementById('opcion2').innerText = `Camiseta Cosme Fernandez: ${votos.opcion2} votos`;
    document.getElementById('opcion3').innerText = `Camiseta Lopez Cosme: ${votos.opcion3} votos`;
    document.getElementById('opcion4').innerText = `Camiseta Janampa Cosme: ${votos.opcion4} votos`;
}
