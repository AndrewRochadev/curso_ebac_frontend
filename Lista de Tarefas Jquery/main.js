$(document).ready(function() {
    $('.input-form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('.form-add').val();
        const novoItem = $('<li style="display: none"></li>');
        const novaTarefa = $(`
            <div class="new-task">
                ${nomeTarefa} <button class="cancel-button" type="reset"><img src="images/lixeira.png"></button>
            </div>
        `);
        novaTarefa.appendTo(novoItem);
        novoItem.appendTo('.list');
        novoItem.fadeIn(1000);
        $('.form-add').val('');
    });

    $('.list').on('click', '.cancel-button', function() {
        $(this).closest('li').fadeOut(500, function() {
            $(this).remove();
        });
    });

    $('.list').on('click', '.new-task', function() {
        $(this).toggleClass('completed');
    });
});