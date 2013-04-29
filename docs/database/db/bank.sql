-- SQL BANK

Create table "tb_security_user"
(
	"user_id" Serial NOT NULL,
	"user_level_id" Integer[] DEFAULT ARRAY[0],
	"nombres" Varchar,
	"apellidos" Varchar,
	"dni" Char(10),
	"correo" Varchar UNIQUE,
	"clave" Varchar,
	"status" Integer DEFAULT 1,
	"delete" Integer DEFAULT 0,
 primary key ("user_id")
) Without Oids;


/*
* Login
*/
CREATE FUNCTION sp_security_login(IN _correo character varying, IN _clave character varying) 
RETURNS TABLE(user_id integer, user_level_id integer[], nombres character varying, apellidos character varying, dni character, correo character varying) AS 
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