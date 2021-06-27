<?php

class BaseDatos extends SQLite3
{
    function __construct()
    {
        $this->open("https://lineysoft.s3-website-us-east-1.amazonaws.com/libros.db");
    }


}

$db = new BaseDatos();

if ($db) {
    echo "conecto";
}else{
    echo "no conecto";
}

?>