const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');

    const sucessMessage = 'O numero B é maior que o numero A';
    const errorMessage = 'O numero B NÃO é maior que o numero A';

    if (campoB.value > campoA.value) {
        alert(sucessMessage);
    } else {
        alert(errorMessage);
    }
})