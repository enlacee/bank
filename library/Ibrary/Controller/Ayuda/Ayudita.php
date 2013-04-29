<?php

/** Zend_Exception */
//require_once 'Zend/Exception.php';

// class Zend_Controller_Exception extends Zend_Exception
// {}


class Ibrary_Controller_Ayuda_Ayudita
{
	
	private static $instancia = null;

	// singleton
	public static function getInstancia(){
		if(null==self::$instancia){
			self::$instancia = new self();	
		}
		return self::$instancia;

	}


	public function hola(){
		return "HOLA MUNDO Ibrary_Controller_Ayuda_Ayudita ";
	}


}