<?php

class Security_IndexController extends Zend_Controller_Action
{

    protected $dataRequest = null;

    public function init()
    {
        /* Initialize action controller here */
        $this->dataRequest = array(
        	'module'	=> $this->getRequest()->getModuleName(),
        	'controller'=> $this->getRequest()->getControllerName(),
        	'action'	=> $this->getRequest()->getActionName(),
        );
      
    }

    public function indexAction()
    {
        // action body
    }

    public function loginAction()
    {
		$this->_helper->viewRenderer->setNoRender();
		//$data = $this->getAllParams();		
		
		// Get parametros enviados por post		
		$pEmail			= $this->_getParam('pUsuario','');
		$pPass			= $this->_getParam('pClave','');

		// singleton
		$userMapp = Security_Model_UserMapper::getInstancia();
		$data = $userMapp->login($pEmail,$pPass);
	

		// user_level_id
    	$AyudaPosgreSql = Ibrary_Controller_Ayuda_PosgreSql::getInstancia();
		

		$i = 0;
		if(is_array($data) && 1 == count($data)){
				// data
				$param  = $data[0]['user_id'];
				$user_level_id 	= $AyudaPosgreSql->formatDataArray($data[0]['user_level_id']);
				
				$response['login'] = true;
				$response['rows'][$i]['id'] 			= $param;
				//$response['rows'][$i]['id_user_level'] 	= $user_level_id;

				$response['rows'][$i]['cell'] =  array( 
					$param,					
					$data[0]['nombres'],
					$data[0]['apellidos'],
					$data[0]['dni'],
					$data[0]['correo'],					
				);

				// Iniciar Data en Session
				$namespace = new Zend_Session_Namespace("UserActive");
				$namespace->setExpirationSeconds(3600*10); // 10 min de Hora
				
				// Todas las peticiones ajax other ajax al servidor
				// son contados y maximo de request.
				//$namespace->setExpirationHops(5); 
				$namespace->idUser 				= $param;
				$namespace->nomUser				= $data[0]['nombres'];
				$namespace->userLevel 			= $user_level_id;
				$namespace->permisos			= '';
				$namespace->roles  				= '';
				$namespace->id_rol				= '';
				$namespace->rol_descripcion  	= '';

				// $namespace->IdCompania			= $row['IDCOMPANIA'];
				// $namespace->NomCompania			= $row['COMPANIA'];		
				
		
		}else{
			$response['login'] = false;

		}


		$response = array_merge($this->dataRequest,$response);
		// -- 02 Cargamos data a Session
		$this->_helper->json->sendJson($response);
    }

    public function loginRolAction()
    {

    	$email 		= $this->_getParam('user','');
    	$password 	= $this->_getParam('pass','');
    	$user_level_id= $this->_getParam('rol','');


    	$namespace = new Zend_Session_Namespace("UserActive");
    	$roles = $namespace->roles;
    	$rol_descripcion = '';


    	for ($i=0; $i < count($roles); $i++) { 
    		if($roles[$i]['user_level_id'] == $user_level_id){
    			$rol_descripcion = $roles[$i]['descripcion'];    			
    			break; 
    		}
    	}
    	
    	//$namespace->rol_descripcion = $rol_descripcion;

    	// -- 01 SP para obtener todos los permisos Y cargar en session
		//$userMapp = Security_Model_UserMapper::getInstancia();
		//$data = $userMapp->permissions($user_level_id);

		
        // action body
        //$response = $this->dataRequest;
        $response['success'] = true;
        $response['id_rol'] = $user_level_id;
        $response['rol_descripcion'] = $rol_descripcion;
        //$response['message'] = 'mensaje OK  '.$rol_descripcion;  
        //action.result.message     
        $this->_helper->json->sendJson($response);
    }

    public function loadComboAction()
    {
    	//echo "hello combo";
		//{"abbr":"1","name":"ADMINISTRADOR","slogan":"ADMINISTRADOR"},

        // action body


		// Cargar combo con Roles definidos.
		$namespace = new Zend_Session_Namespace("UserActive");
		$user_level_id = $namespace->userLevel;
		$response = '';
		$userMapp = Security_Model_UserMapper::getInstancia();
		$data = $userMapp->loadCombo($user_level_id);	
	
		for($i=0;$i<count($data);$i++){
			$response[] = array(
				'abbr'	=> $data[$i]['user_level_id'],
				'name'	=> $data[$i]['descripcion'],
				'slogan'=> $data[$i]['descripcion']
				);
		}			
		

		// Cargar en Session
		$namespace->roles = $data;

				
		//$response = array('abbr'=>1,'name'=>'ADMINISTRADOR','slogan'=>'ADMINISTRADOR');
		$this->_helper->json->sendJson($response);



    }


}





