<?php
require 'class_producto.php';
require 'class_pdo.php';

$q = intval($_GET['q']);

$pdo = new MyPDO();
$producto = new Producto();

$producto->set_db($pdo);

$producto->getProd($q);

//echo $producto->nombre . ", " . $producto->precio; 
//echo json_encode($producto->ingredientes);
echo json_encode($producto);

$pdo = null;

?>