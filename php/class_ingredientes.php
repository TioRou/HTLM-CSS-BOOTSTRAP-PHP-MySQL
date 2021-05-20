<?php
require 'class_ingrediente.php';
class Ingredientes
{
    /* @var MyPDO */
    protected $db;

    public $ingredientes = array();

    public function __construct(MyPDO $db)
    {
        $this->db = $db;
    }

    public function getAllIngre()
    {        
        $stmt = $this->db->prepare("SELECT nom_ingrediente, supl_ingrediente FROM ingredientes");

        $stmt->execute();

        while($row = $stmt->fetch(PDO::FETCH_OBJ)){
            //$this->ingredientes[$row->nom_ingrediente] = $row->supl_ingrediente;
            $objIngrediente = new Ingrediente();
            $objIngrediente->set_name($row->nom_ingrediente);
            $objIngrediente->set_supl($row->supl_ingrediente);
            $objIngrediente->set_tipo("s");
            $this->ingredientes[] = $objIngrediente;
        }

    }

}
?>