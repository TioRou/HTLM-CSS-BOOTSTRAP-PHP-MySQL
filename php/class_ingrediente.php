<?php
class Ingrediente
{
    /* @var MyPDO */
   // protected $db;

    public $nombre;

    public $suplemento;

    public $tipo;

    public function getIngre($id, MyPDO $db)
    {        
        $row = $db->run("SELECT nom_ingrediente, supl_ingrediente 
                               FROM ingredientes WHERE id_ingrediente = ?", [$id])->fetch();

        $this->nombre = $row['nom_ingrediente'];
        $this->suplemento = $row['supl_ingrediente'];
        if($id != 99){
            $this->tipo = "p";
        }else{
            $this->tipo = "x";
        }
        
    }

    public function get_name() {
        return $this->nombre;
    }

    public function get_supl() {
        return $this->suplemento;
    }

    public function get_tipo() {
        return $this->tipo;
    }

    public function set_name($name) {
        $this->nombre = $name;
    }

    public function set_supl($supl) {
        $this->suplemento = $supl;
    }

    public function set_tipo($tipo) {
        $this->tipo = $tipo;
    }
}
?>