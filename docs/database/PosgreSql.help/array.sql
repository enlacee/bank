select 
user_level_id,
nombres,
apellidos,
dni,
correo
from tb_security_user 
where status = 1
and 1 = ANY (user_level_id) -- Segundo store procedure
and correo = 'acopitan@gmail.com'
and clave = '123'

--
SELECT *FROM tb_security_user;
-- 
SELECT 
user_level_id[1] as one,
user_level_id[2] as two
FROM tb_security_user 
WHERE user_level_id[1] <> user_level_id[2];

-- 2 -- dimension array : num objetos
SELECT 
array_dims(user_level_id)
FROM tb_security_user 


select *from tb_security_user_level;
select *from tb_security_level_permi;

-- select
select ARRAY[1,2] || ARRAY[3,4];

select ARRAY[5,6] || ARRAY[[1,2],[3,4]];

SELECT array_dims(1 || '[0:1]={2,3}'::int[]);


select *from public.sp_security_login('acopitan@gmail.com','123');