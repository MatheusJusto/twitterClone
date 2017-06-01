$( 'document' ).ready( function () {

    $( '#btn_procurar_pessoa' ).click( function () {
        if( $( '#nome_pessoa' ).val().length > 0 ) {

            $.ajax( {
                url: 'get_pessoa.php',
                method: 'post',
                data: $( '#form_procurar_pessoas' ).serialize(),
                    success: function (data) {
                        $( '#pessoas' ).html(data);


                        // F O L L O W

                        $( '.btn-seguir' ).click( function() {
                            var id_usuario = $(this).data('id_usuario');

                            $('#btn-seguir-'+id_usuario).hide();
                            $('#btn-deixar-seguir-'+id_usuario).show();


                            $.ajax( {
                                url: 'seguir.php',
                                method: 'post',
                                data: { seguir_id_usuario: id_usuario},
                                success: function (data) {
                                    alert( 'Registro efetuado com sucesso' );
                                }
                            });
                        });

                        // U N F O L L O W

                        $( '.btn-deixar-seguir' ).click( function() {
                            var id_usuario = $(this).data('id_usuario');

                            $('#btn-seguir-'+id_usuario).show();
                            $('#btn-deixar-seguir-'+id_usuario).hide();

                            $.ajax( {
                                url: 'deixar_seguir.php',
                                method: 'post',
                                data: { deixar_seguir_id_usuario: id_usuario},
                                success: function (data) {
                                    alert( 'Registro removido com sucesso' );
                                }
                            });
                        });


                    }
            });
        }

    });

    
});