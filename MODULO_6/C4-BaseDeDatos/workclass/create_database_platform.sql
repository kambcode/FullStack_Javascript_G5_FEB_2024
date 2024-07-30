-- Sentencia de SQL que crea nuestra base de datos

CREATE DATABASE plataforma_academica
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Tablas iniciales que creamos

CREATE TABLE estudiantes (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	edad INT,
	direccion TEXT
);

CREATE TABLE students (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	age INT,
	address TEXT
);

CREATE TABLE profesores (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100),
	apellido VARCHAR(100),
	profesion VARCHAR(100),
	age INT,
	academia VARCHAR(100)
);

CREATE TABLE estudiantes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    edad INT,
    correo VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE cursos (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	descripcion TEXT,
	activo BOOLEAN DEFAULT TRUE
);

CREATE TABLE inscripciones (
	id SERIAL PRIMARY KEY,
	estudiante_id INT REFERENCES estudiantes(id),
	curso_id INT REFERENCES cursos(id),
	fecha_inscripcion DATE DEFAULT CURRENT_DATE
);

INSERT INTO estudiantes (nombre, edad, correo)
VALUES ('Juan Pérez', 21, 'juan.perez@example.com'),
('María Lopez', 25, 'maria.lopez@example.com'),
('Carlos Garcia', 30, 'carlos.garcia@example.com');

INSERT INTO cursos (nombre, descripcion, activo)
VALUES ('Introducción a Node.js', 'Curso básico de Node.js', TRUE),
('Desarrollo con Express', 'Curso avanzado de Express', TRUE),
('Bases de Datos con PostgreSQL', 'Curso sobre PostgreSQL', FALSE);

UPDATE estudiantes
SET edad = 17
WHERE id = 1;

DELETE FROM estudiantes
WHERE id = 1;