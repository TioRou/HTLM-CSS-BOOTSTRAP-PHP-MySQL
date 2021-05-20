<?php
require 'class_ingredientes.php';
require 'class_pdo.php';

$pdo = new MyPDO();
$allIngredientes = new Ingredientes($pdo);

$allIngredientes->getAllIngre();

echo json_encode($allIngredientes->ingredientes);

$pdo = null;

?>