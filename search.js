$( 'document' ).ready( function () {

    $( '#btn_procurar_pessoa' ).click( function () {
        if( $( '#nome_pessoa' ).val().length > 0 ) {

            $.ajax( {
                url: 'get_pessoa.php',
                method: 'post',
                data: $( '#form_procurar_pessoas' ).serialize(),
                    success: function (data) {
                        alert($( '#pessoas' ).html(data));
                    }
            });
        }

    });

    
});