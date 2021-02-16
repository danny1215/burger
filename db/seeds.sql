INSERT INTO burgers (burger_name, devoured) VALUES ("Cheese Burger", false);   
INSERT INTO burgers (burger_name, devoured) VALUES ("Bacon Burger", false);   
INSERT INTO burgers (burger_name, devoured) VALUES ("Chicken Burger", false);   
INSERT INTO burgers (burger_name) VALUES ("Vegan Burger");

SELECT * FROM burgers;
UPDATE burgers SET devoured = 1 WHERE id = 1;