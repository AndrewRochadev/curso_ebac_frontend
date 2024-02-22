$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')
    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            email: {
                required: true,
            },
            enderecoCompleto: {
                required: true,
            },
            cep: {
                required: true,
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo'
        },
        messages: {
            telefone: 'Por favor, insira o seu telefone'
        },
        messages: {
            cpf: 'Por favor, insira o seu CPF'
        },
        messages: {
            email: 'Por favor, insira o seu email'
        },
        messages: {
            enderecoCompleto: 'Por favor, insira o seu endereço completo'
        },
        messages: {
            cep: 'Por favor, insira o seu CEP'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos Incorretos`)
            }
        }
        form.addEventListener('submit', function(e) {
        e.preventDefault();
        })
    })
})