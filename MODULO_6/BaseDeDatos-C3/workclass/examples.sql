-- Esta es la sentencia de creación de tabla usuarios en SQL.

CREATE TABLE usuarios (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100),
	email VARCHAR(100) UNIQUE
);

INSERT INTO usuarios (nombre, email) 
VALUES ('Jose Trespalacios', 'josetrespalaciosbedoya@gmail.com');

INSERT INTO usuarios (nombre, email) 
VALUES ('David Montejo', 'davidmontejo@gmail.com');

INSERT INTO usuarios (nombre, email) 
VALUES ('Oswaldo Mendez', 'oswaldomendez@gmail.com');

CREATE TABLE productos (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100),
	marca VARCHAR(100),
	precio INTEGER,
	categoria_id INTEGER
);

CREATE TABLE cursos(
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL
);

CREATE TABLE estudiantes(
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	curso_id INT,
	FOREIGN KEY (curso_id) REFERENCES cursos(id)
);