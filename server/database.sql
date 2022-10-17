-- dropdb & createdb 
DROP DATABASE IF EXISTS librarian; 
CREATE DATABASE librarian; 

\c librarian; 

DROP TABLE IF EXISTS books; 
CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(45) NOT NULL, 
    description VARCHAR(255) NOT NULL, 
    cover VARCHAR(45)
); 

INSERT INTO books(title, description, cover) 
VALUES('El Camino del Libertario', 'This is the description', 'cover.png'), ('Pandenomics', 'This is the description', 'cover.png'), ('Freedom Chasers', 'This is the description', 'cover.png'); 

-- push to PSQL: $ psql < database.sql