-- dropdb & createdb 
DROP DATABASE IF EXISTS librarian; 
CREATE DATABASE librarian; 

\c librarian; 

DROP TABLE IF EXISTS books; 
CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(45) NOT NULL, 
    description VARCHAR(255) NOT NULL, 
    cover VARCHAR(255),
    price FLOAT NOT NULL
); 

INSERT INTO books(title, description, cover, price) 
VALUES('El Camino del Libertario', 'This is the description', 'https://m.media-amazon.com/images/I/51pn-rOnLsL.jpg', 21.99), ('Pandenomics', 'This is the description', 'https://m.media-amazon.com/images/I/51v7V-c-WeL.jpg', 17.99), ('Libertad, libertad, libertad', 'This is the description', 'https://m.media-amazon.com/images/I/41fB56MGU3L._SY346_.jpg', 5.99), ('La Batalla Cultural', 'This is the description', 'https://m.media-amazon.com/images/I/41Dm1BK+1rL.jpg', 13.99); 

-- push to PSQL: $ psql < database.sql