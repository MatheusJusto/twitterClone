$( 'document' ).ready( function () {

//incluindo o tweet ao painel


    $( '#btn_tweet' ).click( function () {
        if( $( '#texto_tweet' ).val().length > 0 ) {

            $.ajax( {
                url: 'inclui_tweet.php',
                method: 'post',
                data: { texto_tweet: $(' #texto_tweet' ).val() },

                    success: function(data) {
                        $( '#texto_tweet' ).val( '' );
                        atualizaTweet();
                    }
            });
        }

    });

    function atualizaTweet() {

        $.ajax( {
            url: 'get_tweet.php',
            success: function( data ) {
                $( '#tweets' ).html( data );
            }
        });
    };
    atualizaTweet();

    
});