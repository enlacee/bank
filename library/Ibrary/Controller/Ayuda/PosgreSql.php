<?php

class Ibrary_Controller_Ayuda_PosgreSql
{
	
	private static $instancia = null;

	// singleton
	public static function getInstancia(){
		if(null==self::$instancia){
			self::$instancia = new self();	
		}
		return self::$instancia;

	}


	public function formatDataArray($cadena){
		
		$search 	= array('{','}',',');		
		$data 		= str_replace($search,'',$cadena);
		return str_split($data);	

	}


}