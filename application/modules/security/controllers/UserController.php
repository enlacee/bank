<?php

class Security_UserController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        // action body

        //require_once(APPLICATION_PATH.'/modules/security/models/DbTable/User.php');
        $user = new Security_Model_DbTable_User();
        // $persona = new Application_Model_DbTable_User();
        
        $resultSet = $user->fetchAll();       
        
        foreach ($resultSet as $value) {
            # code...
            $dataRow[] = array(
                'user_id'    => $value->user_id,
                'user_level_id'  => $value->user_level_id,
                'nombres'   => $value->nombres,
                'apellidos'   => $value->apellidos,
                'dni'=> $value->dni,
                'correo'=> $value->correo,
                'clave'=> $value->clave,
                'status'=> $value->status,
                'delete'=> $value->delete,                
                );            
        }
        $this->view->user = $dataRow;

        // echo '<pre>  resultSet ';
        // print_r($resultSet);
        // echo '</pre>';

    }


}

