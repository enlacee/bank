<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{

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


}

