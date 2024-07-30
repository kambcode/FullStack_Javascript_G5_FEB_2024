-- Traemos todos los registros de cada tabla
SELECT * FROM tblCountry;
SELECT * FROM tblCity;
SELECT * FROM tblCityCountry;
SELECT * FROM tblUser;
SELECT * FROM tblUserCity;


-- Traemos los registros de la tabla Users donde el genero es Female
SELECT * FROM tblUser WHERE gender = 'Female';

-- Traemos todos los registros de la tabla User ordenados descendientemente por su id
SELECT * FROM tblUser ORDER BY id DESC;

-- Traemos las columnas name como COMPLETE_NAME y gender como SEX de la tabla User para todos los usuarios
SELECT name as COMPLETE_NAME, gender as SEX FROM tblUser;


-- Generamos un JOIN un poco mas complejo donde traemos toda la información de los usuarios con su respectivo
-- país y cuidad con álias para identificarlos en el set resultado.
SELECT
	Users.name,
	age,
	gender,
	birthdate,
	City.name AS City,
	C.name AS Country
FROM
	tblUser as Users
	INNER JOIN tblUserCity as UserCity
	ON Users.id = UserCity.iduser
	INNER JOIN tblCity as City
	ON City.id = UserCity.idCity
	INNER JOIN tblCityCountry AS CC
	ON CC.idcity = City.id
	INNER JOIN tblCountry AS C
	ON CC.idcountry = C.id;

-- Los ejemplos de otros tipos de JOIN están presentes en el documento de la clase con sus respectivas
-- imagenes de tablas ejemplo para entender los resultados y el proceso en general.