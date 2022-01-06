USE bd_animalandia;

SET FOREIGN_KEY_CHECKS=0;
INSERT INTO bd_animalandia.users (firstName,lastName,email,u_password,phone,streetName,postalCode,country,picture) VALUES
	 ('Isaac Alejandro','Barron','isaac.alejandro@outlook.es','$2a$10$LRXhqZ305HR20ycgiU/Df.ONlquAS7ktlPVcSBPLGueYcORqsmSsC','+525517707','Mexico, Ciudad de Mexico','13270','Mexico','img_1641507415750.png'),
	 ('Gabi','Arrioja','iriverab1900@alumno.ipn.mx','$2a$10$J9LA8rn0KHoxWcaRdsdRWuJO4L8ZgwkVoDiurM/2YVZJBVCetLcFO','+525517707','Mexico, Ciudad de Mexico, ','13270','Mexico','img_1641507481885.png'),
	 ('Fernando','Perez','fgh456.7854@gmail.com','$2a$10$jAahJwVWS0lGs.yymfCSuu/xzy5/GBtpgsASU/GU0NyPpQO/pCn9i','+525517707','Mexico, Ciudad de Mexico, Tlahuac,Colonia del Mar,','13270','Mexico','img_1641507520096.png'),
	 ('Salinas','Barron','ricape2001@yahoo.com.mx','$2a$10$fIJZNrJ0.EW/MXCCI5D9MeUqE4ZMrIY6Xe5Q8EXMCjHBY/rPTaPZ6','+525517707','Mexico, Ciudad de Mexico, Tlahuac,Colonia del Mar,','13270','Mexico','img_1641507562375.png'),
	 ('Daniel','Barron','rfbuvbqoaalpjvmgio@upived.online','$2a$10$G9XrECickJJ7ZCNlBhu2cezpttjKGlpnSvWKdTBOgV5WBvhPqKnEi','+525517707','Mexico, Ciudad de Mexico, Tlahuac,Colonia del Mar,','13270','Mexico','img_1641507638395.png');INSERT INTO bd_animalandia.users (firstName,lastName,email,u_password,phone,streetName,postalCode,country,picture) VALUES
	 ('Isaac Alejandro','Barron','isaac.alejandro@outlook.es','$2a$10$LRXhqZ305HR20ycgiU/Df.ONlquAS7ktlPVcSBPLGueYcORqsmSsC','+525517707','Mexico, Ciudad de Mexico','13270','Mexico','img_1641507415750.png'),
	 ('Gabi','Arrioja','iriverab1900@alumno.ipn.mx','$2a$10$J9LA8rn0KHoxWcaRdsdRWuJO4L8ZgwkVoDiurM/2YVZJBVCetLcFO','+525517707','Mexico, Ciudad de Mexico, ','13270','Mexico','img_1641507481885.png'),
	 ('Fernando','Perez','fgh456.7854@gmail.com','$2a$10$jAahJwVWS0lGs.yymfCSuu/xzy5/GBtpgsASU/GU0NyPpQO/pCn9i','+525517707','Mexico, Ciudad de Mexico, Tlahuac,Colonia del Mar,','13270','Mexico','img_1641507520096.png'),
	 ('Salinas','Barron','ricape2001@yahoo.com.mx','$2a$10$fIJZNrJ0.EW/MXCCI5D9MeUqE4ZMrIY6Xe5Q8EXMCjHBY/rPTaPZ6','+525517707','Mexico, Ciudad de Mexico, Tlahuac,Colonia del Mar,','13270','Mexico','img_1641507562375.png'),
	 ('Daniel','Barron','rfbuvbqoaalpjvmgio@upived.online','$2a$10$G9XrECickJJ7ZCNlBhu2cezpttjKGlpnSvWKdTBOgV5WBvhPqKnEi','+525517707','Mexico, Ciudad de Mexico, Tlahuac,Colonia del Mar,','13270','Mexico','img_1641507638395.png');

insert into animals (animal_id, animal_name) values (1, 'Perros');
insert into animals (animal_id, animal_name) values (2, 'Gatos');
insert into animals (animal_id, animal_name) values (3, 'Roedores');
insert into animals (animal_id, animal_name) values (4, 'Aves');
insert into animals (animal_id, animal_name) values (5, 'Peces');
insert into animals (animal_id, animal_name) values (6, 'Reptiles');

insert into categories (category_id, category_name) values (1, 'Alimento');
insert into categories (category_id, category_name) values (2, 'Accesorios');
insert into categories (category_id, category_name) values (3, 'Vivienda');

	
INSERT INTO bd_animalandia.products (animal_id,category_id,image_p,p_name,p_description,caracteristic,specs,price) VALUES
	 (1,1,'img-1641506311750.png','Pro Plan Optiderma Sensitive Skin Alimento Seco pa','Pro Plan Sensitive Skin brinda una nutrición superior, sus croquetas minimizan el riesgo de irritación de la piel asociada con la sensibilidad alimentaria. Formulado con salmón, una fuente alternativa de proteínas, ideal para perros sensibles. Conoce el plan de nutrición de última generación que está revolucionando la forma de alimentar y proteger a los perros.','Formulado con salmón para perros sensibles.
Ácidos grasos Omega, vitaminas y minerales para mantener una piel saludable.
Antioxidantes, vitaminas y proteínas para una protección equilibrada.
Perros adultos de 1 a 7 años con piel sensible con peso mínimo de 10 kg','-Etapa de Vida	Adulto
-Marca	Pro Plan
-Tamaño	Razas Medianas/Grandes',1500.0),
	 (1,1,'img-1641506524991.png','Pro Plan Alimento Húmedo para Perro Adulto Todas l','Pro Plan alimento húmedo sensitive skin le brindará un alimento húmedo completo y balanceado a los perros adultos de todas las razas con piel sensible. Incluye proteína de salmón de alta tolerancia y digestibilidad. Conoce el plan de nutrición de última generación que está revolucionando la forma de alimentar y proteger a los perros.

','Ayuda a promover una piel saludable.
Con proteína de salmón alta en tolerancia y digestibilidad.','-Etapa de Vida	Adulto
-Marca	Pro Plan
-Tamaño	Todas las Razas
-Empaque	Lata',85.0),
	 (1,1,'img-1641506656334.jpg','PEDIGREE alimento húmedo para perros cachorros. Sa','Acerca de este artículo
Alimento 100% Completo y Balanceado. Elaborado con Ingredientes Naturales como proteínas animales y vegetales.
Ayuda al sistema inmune, gracias a la vitamina E que fortalecen la salud de tu perro
Sin sabores, colorantes, ni conservadores artificiales
Fuente de proteína y Balance ideal de fibras
Con Omega 6 y Zinc para un pelo saludable. Combínalo con sus croquetas Pedigree todos los dias','-Marca	PEDIGREE
-Sabor	Ternera','Sin sabores, colorantes, ni conservadores artificiales
',105.0),
	 (1,1,'img-1641506778982.jpg','Perfect Sense Alimento para Perro Adulto de Raza M','Alimento con 24% de proteína
Ingredientes 100% naturales no contiene aromas sabores colorantes ni conservadores artificiales
Elaborado especialmente para perros adultos de raza medianas y grandes
Adicionado con condroprotectores que favorecen la salud de las articulaciones','Con certificación Kosher','Marca	Perfect Sense
Sabor	Pollo
Recomendación de raza	Bóxer, Husky Siberiano, Bulldog inglés, Chow Chow, Samoyedo, Labrador, Dobberman, Dálmata, Pastor Aleman, Gran Danes, Rottweiler, Alaska MalamuteBóxer, Husky Siberiano, Bulldog inglés, Chow Chow, Samoyedo, Labrador, Dobberman, Dálmata, Pastor Aleman, Gran Danes, Rottweiler, Alaska…',1200.0),
	 (1,1,'img-1641506866214.jpg','Perfect Sense Alimento para Perro Cachorro de Raza','Alimento con 28% de porcentaje de proteína
Ingredientes 100% naturales no contiene aromas sabores colorantes ni conservadores artificiales
Elaborado especialmente para cachorros de raza pequeña
Con Omega 3 que mejora la salud de la piel y el pelo','Con certificación Kosher','Marca	Perfect Sense
Sabor	Otro
Recomendación de raza	Razas pequeñas
Usos específicos	Estomago
Etapa de vida de la mascota	Bebé',856.0),
	 (1,1,'img-1641506923705.jpg','Perfect Sense Alimento Senior para Perro Mayor a 7','Alimento Premium con 28% de proteína
Ingredientes 100% naturales no contiene aromas sabores colorantes ni conservadores artificiales
Croqueta suave para la delicada dentadura de los perros de edad avanzada
Adicionada con glucosamina y condroitina','
Marca	Perfect Sense
Sabor	Pollo
Recomendación de raza	Todas las razas y tamaños
Usos específicos	Alimento
Etapa de vida de la mascota	Anciano
Peso	8.7 Kilogramos','Con certificación Kosher',880.0),
	 (2,1,'img-1641506987744.jpg','Perfect Sense Alimento para Gato Adulto de 3 Kilos','limento Premium con 34% de proteína
Alto nivel de fibra insoluble que facilita la expulsión de bolas de pelo
Con minerales orgánicos que contribuyen al óptimo mantenimiento de funciones vitales
Ingredientes 100% naturales no contiene aromas sabores colorantes ni conservadores artificiales','
Marca	Perfect Sense
Sabor	Pollo
Forma del artículo	Dry','Con certificación Kosher',126.0),
	 (2,1,'img-1641507055986.jpg','ONE Gato Adulto Salmon 2kg','Nuestra formula contiene ingredientes naturales y funcionales que Contribuyen a la salud del tracto urinario inferior y fortalecen la flora intestinal.
EL NUEVO PURINA ONE Gato Adulto con Pollo y Salmón es Nutrición Superior para tu mascota.
Formulado por nutricionistas, Purina ONE Gato contiene Carne Real de Pollo y Salmón como ingrediente #1
granos seleccionados, alga y aceite de coco en combinaciones óptimas para la salud de tu mascota, con resultados visibles en 28 días.','Sabor	Salmón','Forma del artículo	Croqueta',260.0),
	 (2,1,'img-1641507134471.jpg','Cat Chow Defense Hydro Esterilizados Carne Aliment','El único alimento húmedo enfocado en proteger la salud de tu gato
Contiene un mix de minerales que ayuda a mantener balanceado el PH de su orina
y un nivel de humedad y minerales adicionados para ayudar a mantenerlo hidratado
con antioxidantes que protegen su sistema inmune','Marca	Purina','Forma del artículo	Wet
Recomendación de raza	Todas las razas y tamaños
Usos específicos	Esterilizados
Etapa de vida de la mascota	Adulto
Peso	2.04 Kilogramos',340.0);

insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (1, 26, 6, 762, '2021-04-11 22:52:44');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (2, 4, 25, 2392, '2020-12-26 18:43:19');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (3, 20, 19, 2893, '2021-07-03 18:30:22');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (4, 30, 25, 75, '2021-08-25 23:34:36');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (5, 10, 8, 3077, '2020-12-16 02:46:01');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (6, 13, 48, 4052, '2020-12-12 11:05:13');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (7, 2, 27, 4593, '2021-06-30 15:43:14');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (8, 5, 34, 4641, '2021-08-28 13:21:19');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (9, 26, 4, 1393, '2021-07-03 07:31:47');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (10, 10, 35, 4623, '2021-01-20 09:15:39');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (11, 25, 3, 344, '2021-07-07 16:10:41');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (12, 3, 26, 2823, '2021-03-23 09:47:27');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (13, 29, 16, 1102, '2021-10-29 18:57:09');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (14, 13, 20, 3042, '2021-01-06 08:28:12');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (15, 16, 38, 3186, '2021-03-02 00:06:42');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (16, 5, 21, 2441, '2021-11-03 21:24:23');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (17, 14, 19, 2819, '2020-12-13 04:21:16');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (18, 27, 20, 1399, '2020-12-17 19:07:45');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (19, 20, 13, 4419, '2021-08-09 02:48:04');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (20, 4, 23, 3962, '2021-08-04 12:08:19');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (21, 8, 37, 1424, '2020-12-27 12:48:11');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (22, 8, 9, 2155, '2021-04-06 02:38:05');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (23, 28, 49, 3067, '2021-05-04 02:52:30');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (24, 3, 27, 2970, '2021-09-13 20:27:53');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (25, 25, 24, 3190, '2021-06-07 18:26:53');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (26, 19, 22, 128, '2021-05-26 14:23:27');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (27, 25, 22, 349, '2021-05-11 11:08:54');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (28, 18, 9, 2494, '2021-08-11 16:43:43');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (29, 7, 30, 3976, '2021-01-05 07:58:09');
insert into carrito (carrito_id, user_id, total_items, total_amount, carrito_date) values (30, 3, 44, 2134, '2021-03-19 04:08:50');

insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (1, 23, 30, 12);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (2, 13, 17, 24);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (3, 6, 15, 6);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (4, 13, 21, 9);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (5, 26, 24, 1);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (6, 12, 18, 41);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (7, 22, 5, 43);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (8, 8, 10, 45);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (9, 25, 16, 5);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (10, 13, 2, 50);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (11, 17, 15, 45);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (12, 5, 27, 22);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (13, 1, 4, 35);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (14, 17, 17, 45);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (15, 29, 26, 21);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (16, 10, 24, 1);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (17, 20, 5, 5);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (18, 5, 8, 35);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (19, 5, 15, 41);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (20, 3, 16, 22);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (21, 12, 16, 3);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (22, 1, 23, 16);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (23, 7, 17, 30);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (24, 14, 5, 22);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (25, 25, 21, 41);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (26, 7, 5, 44);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (27, 11, 22, 33);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (28, 5, 10, 29);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (29, 6, 21, 12);
insert into orderDetail (order_id, carrito_id, product_id, product_quantity) values (30, 12, 28, 18);


