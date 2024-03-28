$(document).ready(function() {
    $('#carouselImagens').slick({
        autoplay: true
    });
})

$('.hamburguer').click(function() {
    $('nav').slideToggle();
})

$('#telefone').mask('(00) 00000-0000')

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        mensagem: {
            required: true
        },
        VeiculoInteresse: {
            required: false
        }
    },
    messages: {
        nome: 'Campo obrigatório'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})

    $('.listaVeiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculoInteresse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })