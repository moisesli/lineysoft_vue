<?php

class BaseDatos extends SQLite3
{
    function __construct()
    {
        $this->open("libros.db");
    }


}

$db = new BaseDatos();

if ($db) {
    echo "conecto";
}else{
    echo "no conecto";
}

?>