
/**
* @description: Login basico obtiene los datos basicos del usuario
* @param _correo: type character correo electronico
* @param _clave: type character clave
* @
* @copyright  Copyright (c) 2013 Infinity 24. (http://www.acopitan.com)
* @athor: Anibal Copitan
* @version 2013-04-25 13:41:02 
*/
CREATE FUNCTION sp_security_login(IN _correo character varying, IN _clave character varying) 
RETURNS TABLE(user_id integer, user_level_id integer[], nombres character varying, apellidos character varying, dni character varying, correo character varying) AS 
$$
<<sp_security_login>>
DECLARE
    
BEGIN

	RETURN QUERY SELECT
	u.user_id,
	u.user_level_id,
	u.nombres,
	u.apellidos,
	u.dni,
	u.correo
	FROM tb_security_user AS u 
	WHERE u.status = 1	
	AND u.correo = _correo
	AND u.clave = _clave
	LIMIT 1;

END;
$$ LANGUAGE plpgsql;