USE cafeteria;

-- Insertar roles --
INSERT INTO rol (nombre) VALUES ('estudiante');
INSERT INTO rol (nombre) VALUES ('empleado');
INSERT INTO rol (nombre) VALUES ('administrador');

-- Insertar categorías de comida --
INSERT INTO categoria (descripcion, imagenCategoria) VALUES ('Desayuno', 'desayuno.jpg');
INSERT INTO categoria (descripcion, imagenCategoria) VALUES ('Almuerzo', 'almuerzo.jpg');
INSERT INTO categoria (descripcion, imagenCategoria) VALUES ('Snacks', 'snacks.jpg');
INSERT INTO categoria (descripcion, imagenCategoria) VALUES ('Bebidas', 'bebidas.jpg');
INSERT INTO categoria (descripcion, imagenCategoria) VALUES ('Postres', 'postres.jpg');
INSERT INTO categoria (descripcion, imagenCategoria) VALUES ('Pasteles', 'pasteles.jpg');
INSERT INTO categoria (descripcion, imagenCategoria) VALUES ('Ensaladas', 'ensaladas.jpg');
INSERT INTO categoria (descripcion, imagenCategoria) VALUES ('Sopas', 'sopas.jpg');

-- Insertar usuarios (user) --
INSERT INTO `user` (nombre, apellido, email, password, rol_id)
VALUES 
('Juan', 'Pérez', 'juan.perez@mail.com', 'password1', 1), -- estudiante
('María', 'Gómez', 'maria.gomez@mail.com', 'password2', 2), -- empleado
('Carlos', 'Rodríguez', 'carlos.rodriguez@mail.com', 'password3', 3); -- administrador

-- Insertar productos para la categoría 'Desayuno' --
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Huevos revueltos', 30.00, 'Huevos revueltos con tocino', 'huevos_revueltos', 50, (SELECT idCategoria FROM categoria WHERE descripcion = 'Desayuno'));
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Pancakes', 40.00, 'Pancakes con jarabe de maple', 'pancakes', 30, (SELECT idCategoria FROM categoria WHERE descripcion = 'Desayuno'));
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Croissant', 15.00, 'Croissant francés', 'croissant', 100, (SELECT idCategoria FROM categoria WHERE descripcion = 'Desayuno'));

-- Insertar productos para la categoría 'Almuerzo' --
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Enchiladas Verdes', 75.00, 'Tortillas rellenas de pollo con salsa verde', 'enchiladas_verdes', 40, (SELECT idCategoria FROM categoria WHERE descripcion = 'Almuerzo'));
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Hamburguesa Clásica', 90.00, 'Hamburguesa de carne con queso y papas fritas', 'hamburguesa_clasica', 25, (SELECT idCategoria FROM categoria WHERE descripcion = 'Almuerzo'));
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Tacos de Bistec', 65.00, 'Tacos con bistec, cebolla y cilantro', 'tacos_bistec', 50, (SELECT idCategoria FROM categoria WHERE descripcion = 'Almuerzo'));

-- Insertar productos para la categoría 'Snacks' --
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Papas Fritas', 25.00, 'Papas fritas con salsa de tomate', 'papas_fritas', 70, (SELECT idCategoria FROM categoria WHERE descripcion = 'Snacks'));
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Nachos', 35.00, 'Nachos con queso derretido', 'nachos', 40, (SELECT idCategoria FROM categoria WHERE descripcion = 'Snacks'));
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Poporopos', 20.00, 'Poporopos de maíz con mantequilla', 'poporopos', 60, (SELECT idCategoria FROM categoria WHERE descripcion = 'Snacks'));

-- Insertar productos para la categoría 'Bebidas' --
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Café Americano', 20, 'Café negro fuerte', 'cafe_americano', 100, (SELECT idCategoria FROM categoria WHERE descripcion = 'Bebidas')),
('Jugo de Naranja', 15.00, 'Jugo de naranja natural', 'jugo_naranja', 80, (SELECT idCategoria FROM categoria WHERE descripcion = 'Bebidas')),
('Limonada', 18.00, 'Limonada con hielo', 'limonada', 90, (SELECT idCategoria FROM categoria WHERE descripcion = 'Bebidas')),
('Té Helado', 22.00, 'Té helado con limón', 'te_helado', 100, (SELECT idCategoria FROM categoria WHERE descripcion = 'Bebidas'));

-- Insertar productos para la categoría 'Postres' --
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Flan', 30.00, 'Flan napolitano', 'flan', 45, (SELECT idCategoria FROM categoria WHERE descripcion = 'Postres'));
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Gelatina', 15.00, 'Gelatina de fresa, naranja, limón o piña', 'gelatina', 60, (SELECT idCategoria FROM categoria WHERE descripcion = 'Postres'));
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Pie de Manzana', 50.00, 'Pie de manzana con canela', 'pie_manzana', 30, (SELECT idCategoria FROM categoria WHERE descripcion = 'Postres'));

-- Insertar productos para la categoría 'Pasteles' --
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Pastel de Chocolate', 70.00, 'Pastel de chocolate con cobertura', 'pastel_chocolate', 20, (SELECT idCategoria FROM categoria WHERE descripcion = 'Pasteles'));
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Pastel de Zanahoria', 65.00, 'Pastel de zanahoria con glaseado', 'pastel_zanahoria', 15, (SELECT idCategoria FROM categoria WHERE descripcion = 'Pasteles'));
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Pastel de Fresa', 75.00, 'Pastel de fresa con crema', 'pastel_fresa', 25, (SELECT idCategoria FROM categoria WHERE descripcion = 'Pasteles'));

-- Insertar productos para la categoría 'Ensaladas' --
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Ensalada César', 50.00, 'Ensalada césar con pollo', 'ensalada_cesar', 35, (SELECT idCategoria FROM categoria WHERE descripcion = 'Ensaladas'));
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Ensalada Griega', 55.00, 'Ensalada con queso feta y aceitunas', 'ensalada_griega', 30, (SELECT idCategoria FROM categoria WHERE descripcion = 'Ensaladas'));
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Ensalada de Atún', 60.00, 'Ensalada de atún con verduras', 'ensalada_atun', 25, (SELECT idCategoria FROM categoria WHERE descripcion = 'Ensaladas'));

-- Insertar productos para la categoría 'Sopas' --
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Sopa de Pollo', 40.00, 'Sopa de pollo con fideos', 'sopa_pollo', 50, (SELECT idCategoria FROM categoria WHERE descripcion = 'Sopas'));
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Sopa de Frijol', 35.00, 'Sopa de frijol', 'sopa_frijol', 40, (SELECT idCategoria FROM categoria WHERE descripcion = 'Sopas'));
INSERT INTO producto (nombre, precio, descripcion, imagenProducto, cantidad, categoriaIdCategoria)
VALUES ('Sopa de Tortilla', 45.00, 'Sopa de tortilla con chile', 'sopa_tortilla', 45, (SELECT idCategoria FROM categoria WHERE descripcion = 'Sopas'));

-- Insertar órdenes (orden) --
INSERT INTO orden (descripcion, total, nombreCLiente, hora, userIdUser)
VALUES 
('Orden de Juan para un café', 20, 'Juan Pérez', '08:30:00', 1),
('Orden de María para un croissant', 15, 'María Gómez', '09:00:00', 2),
('Orden de Carlos para una sopa', 30, 'Carlos Rodríguez', '12:00:00', 3);

-- Insertar ventas (ventas) --
INSERT INTO ventas (fecha, descripcion, ordenNumeroOrden, userIdUser)
VALUES 
('2024-10-11', 'Venta de café para Juan', 1, 1),
('2024-10-11', 'Venta de croissant para María', 2, 2),
('2024-10-11', 'Venta de sopa para Carlos', 3, 3);

-- Insertar auxiliar_producto (auxiliar_producto) --
INSERT INTO auxiliar_producto (cantidad, ordenNumeroOrden, productoIdProducto)
VALUES 
(1, 1, 10), -- Café Americano en la primera orden
(2, 2, 3), -- Croissant en la segunda orden
(1, 3, 24); -- Sopa de frijol en la tercera orden