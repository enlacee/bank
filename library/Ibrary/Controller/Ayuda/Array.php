<?php

class Ibrary_Controller_Ayuda_Array
{
	
	private static $instancia = null;

	// singleton
	public static function getInstancia(){
		if(null==self::$instancia){
			self::$instancia = new self();	
		}
		return self::$instancia;

	}


	public function toString($data){
		
        $cnt_data = count($data);

        $string = -1;        
        if(is_array($data) && $cnt_data>0){
            $string = '';
            for($i=0;$i<$cnt_data;$i++){
                if($i==($cnt_data-1)){
                    $string .= $data[$i];
                }else{
                    $string .= $data[$i].",";                    
                }
            }
        }

        return $string;
	}


}