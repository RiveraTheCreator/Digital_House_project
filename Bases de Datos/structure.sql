CREATE DATABASE bd_animalandia DEFAULT CHARACTER SET utf8mb4;

USE bd_animalandia;

CREATE TABLE users (
	user_id INT UNSIGNED PRIMARY KEY auto_increment,
	firstName VARCHAR(15),
	lastName VARCHAR(30),
	email VARCHAR(30),
	u_password VARCHAR(12),
	phone VARCHAR(10),
	streetName VARCHAR(20),
	postalCode VARCHAR(5),
	country VARCHAR(30),
	picture VARCHAR(50)
);

CREATE TABLE products (
	product_id INT UNSIGNED PRIMARY KEY auto_increment,
	image_p VARCHAR(50),
	p_name VARCHAR(50),
	animal VARCHAR(50),
	category VARCHAR(50),
	p_description TEXT,
	caracteristic TEXT,
	specs TEXT,
	price float
);

CREATE TABLE carrito (
	order_id INT UNSIGNED PRIMARY KEY auto_increment,
	customer_id INT UNSIGNED,
	detail_id INT UNSIGNED,
	total_items INT,
	total_amount float
);

CREATE TABLE detail_carrito (
	detail_id INT UNSIGNED PRIMARY KEY auto_increment,
	order_id INT UNSIGNED,
	product_id INT UNSIGNED,
	product_name VARCHAR(50),
	quantity INT,
	total_price float
);

ALTER TABLE carrito ADD CONSTRAINT customer_id FOREIGN KEY (customer_id) REFERENCES users(user_id);
ALTER TABLE carrito ADD CONSTRAINT detail_id FOREIGN KEY (detail_id) REFERENCES detail_carrito(detail_id);

ALTER TABLE detail_carrito ADD CONSTRAINT order_id FOREIGN KEY (order_id) REFERENCES carrito(order_id);
ALTER TABLE detail_carrito ADD CONSTRAINT product_id FOREIGN KEY (product_id) REFERENCES products(product_id);