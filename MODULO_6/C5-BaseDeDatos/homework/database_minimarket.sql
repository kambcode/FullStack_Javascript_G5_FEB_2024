CREATE TABLE productos (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	precio DECIMAL(10, 2) NOT NULL,
	stock INT NOT NULL
);

CREATE TABLE categorias (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL
);

CREATE TABLE clientes (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	correo VARCHAR(100) UNIQUE NOT NULL,
	telefono VARCHAR(15)
);

CREATE TABLE pedidos (
	id SERIAL PRIMARY KEY,
	cliente_id INT REFERENCES clientes(id),
	fecha DATE DEFAULT CURRENT_DATE,
	total DECIMAL(10, 2) NOT NULL
);

CREATE TABLE detalles_pedido (
	id SERIAL PRIMARY KEY,
	pedido_id INT REFERENCES pedidos(id),
	producto_id INT REFERENCES productos(id),
	cantidad INT NOT NULL,
	precio DECIMAL(10, 2) NOT NULL
);

CREATE TABLE productos_categorias (
    producto_id INT REFERENCES productos(id),
    categoria_id INT REFERENCES categorias(id),
    PRIMARY KEY (producto_id, categoria_id)
);

INSERT INTO clientes (nombre, correo, telefono)
VALUES ('Juan Perez', 'juan.perez@gmail.com', '3004526985'),
('Jose Trespalacios', 'jose.trespalacios@gmail.com', '3104526985'),
('David Montejo', 'david.montejo@gmail.com', '3144526985'),
('David Echenagucia', 'david.echenagucia@gmail.com', '3164526985')

INSERT INTO clientes (nombre, correo, telefono)
VALUES 
('Ana Martínez', 'ana.martinez@gmail.com', '3204526985'),
('Carlos González', 'carlos.gonzalez@gmail.com', '3214526985'),
('María Rodríguez', 'maria.rodriguez@gmail.com', '3224526985'),
('Luis Hernández', 'luis.hernandez@gmail.com', '3234526985'),
('Laura López', 'laura.lopez@gmail.com', '3244526985'),
('Pedro Ramírez', 'pedro.ramirez@gmail.com', '3254526985'),
('Carmen Fernández', 'carmen.fernandez@gmail.com', '3264526985'),
('Jorge García', 'jorge.garcia@gmail.com', '3274526985'),
('Sofía Pérez', 'sofia.perez@gmail.com', '3284526985'),
('Gabriel Torres', 'gabriel.torres@gmail.com', '3294526985'),
('Valentina Morales', 'valentina.morales@gmail.com', '3304526985'),
('Miguel Rivera', 'miguel.rivera@gmail.com', '3314526985'),
('Paola Castro', 'paola.castro@gmail.com', '3324526985'),
('Ricardo Ortiz', 'ricardo.ortiz@gmail.com', '3334526985'),
('Luisa Vázquez', 'luisa.vazquez@gmail.com', '3344526985'),
('Andrés Castillo', 'andres.castillo@gmail.com', '3354526985'),
('Claudia Ramírez', 'claudia.ramirez@gmail.com', '3364526985'),
('Fernando Díaz', 'fernando.diaz@gmail.com', '3374526985'),
('Patricia Jiménez', 'patricia.jimenez@gmail.com', '3384526985'),
('Javier Cruz', 'javier.cruz@gmail.com', '3394526985');

SELECT telefono, correo FROM clientes WHERE id=21 OR id=22 OR id=1;

INSERT INTO pedidos (cliente_id , total)
VALUES (1, 5.000),
	   (2, 30.000);

INSERT INTO pedidos (cliente_id, total)
VALUES 
(3, 15.000),
(4, 22.500),
(5, 12.000),
(6, 45.000),
(7, 18.750),
(8, 27.000),
(9, 35.500),
(10, 40.000),
(11, 50.000),
(12, 23.750),
(13, 19.000),
(14, 28.500),
(15, 33.000),
(16, 24.000),
(17, 21.500),
(18, 37.750),
(19, 26.000),
(20, 31.250),
(1, 16.500),  -- Añadiendo un pedido adicional para el cliente_id 1
(2, 10.000);  -- Añadiendo un pedido adicional para el cliente_id 2

SELECT cliente_id, total FROM pedidos WHERE cliente_id=1;

INSERT INTO productos (nombre, precio, stock)
VALUES ('Manzana', 0.50, 100),
       ('Leche', 1.20, 50),
       ('Pan', 1.00, 30);


INSERT INTO detalles_pedido (pedido_id, producto_id, cantidad, precio)
VALUES (1, 1, 4, 0.50),
       (1, 2, 2, 1.20),
       (2, 3, 3, 1.00);

INSERT INTO categorias (nombre)
VALUES ('Frutas'),
       ('Lácteos'),
       ('Panadería');

INSERT INTO productos_categorias (producto_id, categoria_id)
VALUES (1, 1),
       (2, 2),
       (3, 3);

SELECT * FROM pedidos WHERE cliente_id=1;

UPDATE clientes
SET telefono = '11225589648'
WHERE correo = 'maria.rodriguez@gmail.com'

SELECT * FROM clientes WHERE correo= 'maria.rodriguez@gmail.com'

SELECT * FROM productos WHERE nombre = 'Pan';
	
DELETE FROM productos
WHERE nombre = 'Pan';
