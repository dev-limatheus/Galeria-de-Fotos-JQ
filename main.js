$(document).ready(function(){

    $('header button').click(function(){ //animação para mostrar o slide ao apertar no botão de nova imagem
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){ //animação para sumir com o formulario ao cancelar
        $('form').slideUp();
    })

    $('form').on('submit', function(e){ 
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);

        $(`
            <div class="overlay-link-imagem">
            <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>`
    ).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(2000);
    $('#endereco-imagem-nova').val('');
    })

})