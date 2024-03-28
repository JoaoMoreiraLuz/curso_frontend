$(document).ready(function() {
    const cep = $('#cep');
    const endereco = $('#endereco');
    const bairro = $('#bairro');
    const cidade = $('#cidade');
    const estado = $('#estado');

    $('#cpf').mask('000.000.000-00');
    $('#celular').mask('(00) 00000-0000');
    $('#telefone').mask('(00) 0000-0000');
    $('#cep').mask('00000-000');
    $('#estado').mask('SS');
    $('#numero').mask('00000');

    $('#cep').on('keyup', function(e) {
        var cepnNumber = $('#cep').val()

        if(cepnNumber.length == 9) {
            $.getJSON('https://viacep.com.br/ws/' + cepnNumber + '/json/', function(data) {
                if (!("erro" in data)) {
                    endereco.val(data.logradouro);
                    endereco.prop('disabled', true);
                    bairro.val(data.bairro);
                    bairro.prop('disabled', true);
                    cidade.val(data.localidade);
                    cidade.prop('disabled', true);
                    estado.val(data.uf);
                    estado.prop('disabled', true);
                }
            })
        } else {
            endereco.prop('disabled', false);
            bairro.prop('disabled', false);
            cidade.prop('disabled', false);
            estado.prop('disabled', false);
        }
    });
})

    $('form').on('submit' , function(e) {
        e.preventDefault();
    })

        $('form').validate({
            rules: {
                nome: {required: true},
                sobrenome: {required: true},
                email: {required: true, email:true},
                cpf: {required: true, minlength: 11},
                celular: {required: true, minlength: 15},
                telefone: {minlength: 14},
                cep: {required: true, maxlength: 9},
                estado: {required: true},
                cidade: {required: true},
                bairro: {required: true},
                endereco: {required: true}
            }, messages: {
                nome: 'Campo obrigatório',
                sobrenome: 'Campo obrigatório',
                email: 'Campo obrigatório',
                cpf: 'Campo obrigatório',
                cep: 'Campo obrigatório',
                estado: 'Campo obrigatório',
                cidade: 'Campo obrigatório',
                bairro: 'Campo obrigatório',
                endereco: 'Campo obrigatório',
                celular: { minlength: "Por favor, insira pelo menos 11 números." },
                telefone: { minlength: "Por favor, insira pelo menos 10 números." }
            }, 
        submitHandler: function (form) {
            alert(`Cadastro concluído com sucesso!`);

                nome.value = "";
                sobrenome.value = "";
                email.value = "";
                estado.value = "";
                cidade.value = "";
                bairro.value = "";
                celular.value = "";
                telefone.value = "";
                cpf.value = "";
                endereco.value = "";
                cep.value = ""; 
    }   
})

