const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e) {

    e.preventDefault();

    const campoA = Number(document.getElementById('campoA').value);

    const campoB = Number(document.getElementById('campoB').value);

    const mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {

        mensagem.innerHTML = 'Formulário válido! O número B é maior que o número A.';

        mensagem.className = 'mensagem sucesso';

    } else {

        mensagem.innerHTML = 'Formulário inválido! O número B deve ser maior que o número A.';

        mensagem.className = 'mensagem erro';
    }

});