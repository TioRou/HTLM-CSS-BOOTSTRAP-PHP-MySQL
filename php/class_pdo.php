<?php
class MyPDO
{
    public $pdo;

    private $db = "bd_la_para";
    private $psw = "T10R0u";
    private $user = "root";
    private $server = "localhost";

    public function __construct()
    {
        $options = [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ];
        
        $dsn = "mysql:host=$this->server;dbname=$this->db";

        try {
            $this->pdo = new PDO($dsn, $this->user, $this->psw, $options);
        } catch (PDOException $e) {
            throw new PDOException($e->getMessage(), (int)$e->getCode());
        }
    }

    public function run($sql, $args = NULL)
    {
        if (!$args)
        {
            return $this->pdo->query($sql);
        }
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($args);
        return $stmt;
    }

    public function prepare($sql)
    {
        $stmt = $this->pdo->prepare($sql);
        return $stmt;
    }
    
}
?>