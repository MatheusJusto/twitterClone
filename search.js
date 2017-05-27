$( 'document' ).ready( function () {

    $( '#btn_procurar_pessoa' ).click( function () {
        if( $( '#nome_pessoa' ).val().length > 0 ) {

            $.ajax( {
                url: 'get_pessoa.php',
                method: 'post',
                data: { texto_tweet: $(' #form_procurar_pessoas' ).val() },

                    success: function(data) {
                        $( '#texto_tweet' ).val( '' );
                        atualizaTweet();
                    }
            });
        }

    });

    
});