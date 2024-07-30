create table profesores (
	id int primary key auto_increment,
    nombre varchar(255)
);

create table estudiantes (
	id int primary key auto_increment,
    nombre varchar(255) not null,
    id_profesor int,
	foreign key (id_profesor) references profesores(id)
);

insert into estudiantes (nombre, id_profesor) values
('Alice', 1),
('Bob', 3),
('Jack', 4)

