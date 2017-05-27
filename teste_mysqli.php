<?php
    require_once('db.class.php');

    $sql = "SELECT * FROM usuarios WHERE usuario";

    $objDb = new db();
    $link  = $objDb->conecta_mysql();

    $resultado_id = mysqli_query($link, $sql);

    if($resultado_id) {
        $dados_usuario = mysqli_fetch_array($resultado_id, MYSQLI_ASSOC);

        var_dump($dados_usuario);
    }
    else {
        echo '<font color="#ff0000">Erro ao executar a consulta</font>';
    }
?>