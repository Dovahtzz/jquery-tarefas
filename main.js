$(document).ready(function () {
    $('#form-tarefa').on('submit', function (e) {
        e.preventDefault();

    const listaDeTarefa = $('#lista-de-tarefa').val();
    const novoItem = $('<li></li>').text(listaDeTarefa).addClass('color');
    novoItem.appendTo('#lista-tarefas');

    $('li').click(function () {
        $(this).css("text-decoration", "line-through").addClass('completado');
    });

    $('#lista-de-tarefa').val("");
    });
});