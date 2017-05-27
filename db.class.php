<?php
    class db {
        //host
        private $host = 'localhost';

        //usuario
        private $usuario = 'root';

        //senha
        private $senha = '';

        //db
        private $database = 'twitter_clone';

        public function conecta_mysql() {

            //cria conexão
            $con = mysqli_connect($this->host, $this->usuario, $this->senha, $this->database);

            mysqli_set_charset($con, 'utf8');

            //verifica se há erro de conexão
            if(mysqli_connect_errno()) {
                echo 'Erro ao tentar se conectar com o BD MySQL: '.mysqli_connect_error(); 
            }

            return $con;

        }
    }
?>