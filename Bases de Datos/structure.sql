CREATE DATABASE bd_animalandia DEFAULT CHARACTER SET utf8mb4;

USE bd_animalandia;

create table users (
	user_id INT UNSIGNED PRIMARY KEY auto_increment,
	firstName VARCHAR(50),
	lastName VARCHAR(50),
	email VARCHAR(50),
	u_password VARCHAR(200),
	phone VARCHAR(50),
	streetName VARCHAR(50),
	postalCode VARCHAR(5),
	country VARCHAR(50),
	picture VARCHAR(50)
);

create table products (
	product_id INT UNSIGNED PRIMARY KEY auto_increment,
	animal_id INT unsigned,
	category_id INT unsigned,
	image_p VARCHAR(50),
	p_name VARCHAR(50),
	p_description TEXT,
	caracteristic TEXT,
	specs TEXT,
	price float
);

create table carrito (
	carrito_id INT UNSIGNED PRIMARY KEY auto_increment,
	user_id INT unsigned,
	total_items INT,
	total_amount INT,
	carrito_date datetime
);

create table orderDetail (
	order_id INT UNSIGNED PRIMARY KEY auto_increment,
	carrito_id INT unsigned,
	product_id INT unsigned,
	product_quantity INT
);

create table categories (
	category_id INT UNSIGNED PRIMARY KEY auto_increment,
	category_name VARCHAR(50)
);

create table animals (
	animal_id INT UNSIGNED PRIMARY KEY auto_increment,
	animal_name VARCHAR(50)
);

ALTER TABLE carrito ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES users(user_id);

ALTER TABLE orderDetail ADD CONSTRAINT carrito_id FOREIGN KEY (carrito_id) REFERENCES carrito(carrito_id);
ALTER TABLE orderDetail ADD CONSTRAINT product_id FOREIGN KEY (product_id) REFERENCES products(product_id);

ALTER TABLE products ADD CONSTRAINT animal_id FOREIGN KEY (animal_id) REFERENCES animals(animal_id);
ALTER TABLE products ADD CONSTRAINT category_id FOREIGN KEY (category_id) REFERENCES categories(category_id);

ALTER TABLE users MODIFY COLUMN phone VARCHAR(10);

