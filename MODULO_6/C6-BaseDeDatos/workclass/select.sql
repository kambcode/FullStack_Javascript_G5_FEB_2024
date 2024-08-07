SELECT * FROM categorias;

SELECT cursos.nombre AS curso, COUNT(inscripciones.estudiante_id) AS cantidad_estudiantes
FROM cursos
JOIN inscripciones ON cursos.id = inscripciones.curso_id
GROUP BY cursos.nombre;

SELECT nombre, edad
FROM estudiantes
ORDER BY edad DESC;

SELECT nombre
FROM cursos
ORDER BY nombre ASC;

SELECT nombre
FROM cursos
WHERE activo = TRUE
ORDER BY nombre ASC
LIMIT 3;

SELECT nombre, salario
FROM empleados
ORDER BY salario DESC
LIMIT 5 OFFSET 10;

INSERT INTO estudiantes (nombre, edad, correo)
VALUES 
    ('Juan Pérez', 21, 'juan.perez@example.com'),
    ('María López', 25, 'maria.lopez@example.com'),
    ('Carlos García', 30, 'carlos.garcia@example.com'),
    ('Ana Torres', 22, 'ana.torres@example.com'),
    ('Luis Ramírez', 28, 'luis.ramirez@example.com'),
    ('Elena Fernández', 24, 'elena.fernandez@example.com'),
    ('Miguel Martínez', 27, 'miguel.martinez@example.com'),
    ('Sofía Jiménez', 26, 'sofia.jimenez@example.com'),
    ('Pedro Sánchez', 23, 'pedro.sanchez@example.com'),
    ('Laura Ruiz', 29, 'laura.ruiz@example.com'),
    ('Andrés Gómez', 31, 'andres.gomez@example.com'),
    ('Paula Herrera', 20, 'paula.herrera@example.com'),
    ('Ricardo Castillo', 32, 'ricardo.castillo@example.com'),
    ('Lucía Morales', 22, 'lucia.morales@example.com'),
    ('Tomás Díaz', 26, 'tomas.diaz@example.com');

INSERT INTO inscripciones (estudiante_id, curso_id)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (1, 3);

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

CREATE TABLE instructores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    especialidad VARCHAR(100)
);

CREATE TABLE asignaciones (
    id SERIAL PRIMARY KEY,
    instructor_id INT REFERENCES instructores(id),
    curso_id INT REFERENCES cursos(id)
);

INSERT INTO estudiantes (nombre, edad, correo)
VALUES ('Juan Pérez', 21, 'juan.perez@example.com'),
       ('María López', 25, 'maria.lopez@example.com'),
       ('Carlos García', 30, 'carlos.garcia@example.com');

INSERT INTO cursos (nombre, descripcion, activo)
VALUES ('Introducción a Node.js', 'Curso básico de Node.js', TRUE),
       ('Desarrollo con Express', 'Curso avanzado de Express', TRUE),
       ('Bases de Datos con PostgreSQL', 'Curso sobre PostgreSQL', TRUE);

INSERT INTO instructores (nombre, especialidad)
VALUES ('Ana Martínez', 'Node.js'),
       ('Luis Gómez', 'Express'),
       ('Carmen Rodríguez', 'PostgreSQL');

INSERT INTO inscripciones (estudiante_id, curso_id)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (1, 3);

INSERT INTO asignaciones (instructor_id, curso_id)
VALUES (1, 1),
       (2, 2),
       (3, 3);


