$(document).ready(function() {
    //console.log(document.querySelector('header button'));
    //console.log($('#cancelButton'));

    //document.querySelector('header button').addEventListener('click', function() {

    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#cancelButton').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const enderecoNovaImagem = $('#imagemNova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`
        <div class="overlayImagemLink">
            <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em outra guia">
                Ver imagem em outra guia
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#imagemNova').val('');
    })
})