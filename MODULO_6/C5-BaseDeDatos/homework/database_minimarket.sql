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

