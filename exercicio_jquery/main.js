$(document).ready(function() {
    $('#starterButton').click(function() {
        $('form').slideDown()
    })

    $('#addButton').click(function() {
        $('.lista').slideDown()
    })
    
    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#novaTarefa').val();
        $('ul').append(`<li><span class="pendente"> </span> ${novaTarefa}</li>`);

        $("ul").on('click', 'li', function() {
            $(this).toggleClass("completo");
        })
    })

})