<?php
require 'class_ingrediente.php';
class Producto
{
    /* @var MyPDO */
    protected $db;

    public $nombre;

    public $precio;

    public $precio_mitad;

    public $precio_min;

    public $ingredientes = array();

    public $tipo;

    public function getProd($id)
    {        
        $row = $this->db->run("SELECT nom_producto, prec_producto, prec_mitad_producto, prec_min_producto, ingr_producto, tipo_producto 
                               FROM productos WHERE id_producto = ?", [$id])->fetch();

        $this->nombre = $row['nom_producto'];
        $this->precio = $row['prec_producto'];
        $this->precio_mitad = $row['prec_mitad_producto'];
        $this->precio_min = $row['prec_min_producto'];
        $this->tipo = $row['tipo_producto'];

        $arrIngredientes = array();
        $arrIngredientes = explode(', ', $row['ingr_producto']);

        if($arrIngredientes[0] != 0){
            for($x=0; $x < count($arrIngredientes); $x++){
                $objIngrediente = new Ingrediente();
                
                $objIngrediente->getIngre($arrIngredientes[$x], $this->db);
                
                //$this->ingredientes[$objIngrediente->get_name()]=$objIngrediente->get_supl();
                
                $this->ingredientes[] = $objIngrediente;
            }
        }
        
    }

    public function set_db(MyPDO $db) {
        $this->db = $db;
    }
}
?>