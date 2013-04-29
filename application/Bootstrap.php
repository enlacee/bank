<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{

/**
* Iniciar Session Global.
*/
	protected function _initConf(){
		// -- 01 Configuracion zona
		date_default_timezone_set('America/Lima');

		// -- 02 Iniciar Session 
		if(!Zend_Session::isStarted()){
			Zend_Session::start();
			Zend_Session::setOptions();
			// echo "<h1>CREO SESSION</h1>";
		}else{
			// echo "<h1>NO CREO SESSION</h1>";
		}

		// -- 03 other
	}


/**
* Variables de ayuda para JavaScript Ext.
*/
	protected function _initPath(){
		
		define('PATH_IMG','/assets/img/system');
		define('PATH_SCRIPTS','/scripts');
		define('PATH_SCRIPTS_BASIC',PATH_SCRIPTS.'/basic');


	}


/**
* Incluir Librerias Personalizadas u Other. = /library/Ibrary/
*/
	protected function _initIbrary(){

	    $loader = new Zend_Loader_PluginLoader();
	    //$loader->addPrefixPath('Zend_View_Helper', 'Zend/View/Helper/')
	    $loader->addPrefixPath('Ibrary_Controller_Ayuda','Ibrary/Controller/Ayuda/');
	    $ayuditaClass = $loader->load('Ayudita');
	    $loader->load('Array');
	    $loader->load('PosgreSql');	    
	    

	}


}

