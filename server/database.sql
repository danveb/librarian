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
VALUES('El Camino del Libertario', 'El protagonista de la aparición más fulgurante que se produjo en la política argentina en años cuenta el camino que lo llevó hasta su banca de diputado nacional; a captar y calibrar como nadie el descontento de la sociedad con la casta política.', 'https://m.media-amazon.com/images/I/51pn-rOnLsL.jpg', 27.99), ('Pandenomics', 'Se impusieron cuarentenas cavernícolas que precipitaron una crisis económica sin precedentes a nivel mundial y que también, en muchos casos, destruyeron la legalidad y la democracia.
', 'https://m.media-amazon.com/images/I/51v7V-c-WeL.jpg', 25.99), ('Libertad, libertad, libertad', 'This is the description', 'https://m.media-amazon.com/images/I/41fB56MGU3L._SY346_.jpg', 5.99), ('La Batalla Cultural', 'El libro define el concepto de batalla cultural y muestra hasta qué punto la cultura ha llegado a ser el botín principal del poder, cómo se han desarrollado estas batallas desde los tiempos modernos hasta la actual posmodernidad y cómo enfrentarlas.', 'https://m.media-amazon.com/images/I/41Dm1BK+1rL.jpg', 10.99), ('Argentina Hiperacelerada', 'L a pandemia y la guerra en Ucrania son dos hiperaceleradores de procesos económicos, tecnológicos y sociales que en pocos años están transformando el mundo.', 'https://m.media-amazon.com/images/I/41WY+JcKcRL.jpg', 11.99); 

-- push to PSQL: $ psql < database.sql