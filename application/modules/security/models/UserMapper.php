<?php

class Security_Model_UserMapper
{

    protected $_dbTable;
    private static $instancia = null;

    // singleton
    public static function getInstancia()
    {
        if (null == self::$instancia) {
            self::$instancia = new self();
            self::$instancia->getDbTable();            
        }        
        return self::$instancia;
    }
 
    private function setDbTable($dbTable)
    {   
        if (is_string($dbTable)) {
            $dbTable = new $dbTable();
        }
        if (!$dbTable instanceof Zend_Db_Table_Abstract) {
            throw new Exception('Invalid table data gateway provided');
        }
        $this->_dbTable = $dbTable;
        return $this;
    }
 
    private function getDbTable()
    {
        if (null === $this->_dbTable) {
            $this->setDbTable('Security_Model_DbTable_User');
        }
        return $this->_dbTable;
    }

    /*
    * --------- Funciones Action
    */
 
	public function login($email,$password){		
        
        $db = Zend_Db_Table::getDefaultAdapter();      
        $query = "select * from public.sp_security_login(?,?)";

        try{
            $db->beginTransaction();
            $cmd = $db->prepare($query);
            $cmd->bindValue(1,$email);
            $cmd->bindValue(2,$password);
            $cmd->execute();
            $db->commit();
            $data = $cmd->fetchAll();

            if($cmd->rowCount()==1){
                $response = $data;
            }else{
                $response = false;
            }                    

        }catch(Exception $e){
            $db->rollback();
            echo($e->getMessage());
        }
        
        if($db->isConnected()){ $db->closeConnection(); }

        return $response;

	}

    public function permissions($idlevel){  


        $db = Zend_Db_Table::getDefaultAdapter();        
        $query = "".
        "
        SELECT 
        lp.level_permi_id,
        lp.module,
        lp.controller,
        lp.action
        FROM tb_security_level_permi AS lp
        WHERE user_level_id = ?
        ";
        $cmd = $db->prepare($query);
        $cmd->bindValue(1,$idlevel);
        $cmd->execute();
        $data = $cmd->fetchAll();

        $response = ($cmd->rowCount()>=1) ? $data : false;
        return $response;
    }


    public function loadCombo($user_level_id){

        $ayuda_array = Ibrary_Controller_Ayuda_Array::getInstancia();
        $string = $ayuda_array->toString($user_level_id);

        $db = Zend_Db_Table::getDefaultAdapter();      
        $query = "
        SELECT *FROM tb_security_user_level
        WHERE user_level_id IN ($string);
        ";
             
        
        $cmd = $db->prepare($query);
        //$cmd->bindValue(1,$x);
        $cmd->execute();        
        $data = $cmd->fetchAll();

        return $data;
    }     





}

