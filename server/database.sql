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
    price NUMERIC NOT NULL, -- if needed remove from table
    author VARCHAR(255) NOT NULL, 
    publisher VARCHAR(255) NOT NULL
); 

INSERT INTO books(title, description, cover, price, author, publisher) 
VALUES('El Camino del Libertario', 'El protagonista de la aparición más fulgurante que se produjo en la política argentina en años cuenta el camino que lo llevó hasta su banca de diputado nacional; a captar y calibrar como nadie el descontento de la sociedad con la casta política.', 'https://m.media-amazon.com/images/I/51pn-rOnLsL.jpg', 27.99, 'Javier Milei', 'Planeta'), ('Pandenomics', 'Se impusieron cuarentenas cavernícolas que precipitaron una crisis económica sin precedentes a nivel mundial y que también, en muchos casos, destruyeron la legalidad y la democracia.', 'https://m.media-amazon.com/images/I/51v7V-c-WeL.jpg', 25.99, 'Javier Milei', 'Galerna'), ('Libertad, libertad, libertad', 'Nosotros queremos exponer a la gente a las ideas libertarias; en forma directa; sin intermediarios. Aunque logremos solo acercarnos un poco más a la libertad; es necesario empezar. ', 'https://m.media-amazon.com/images/I/41fB56MGU3L._SY346_.jpg', 24.95, 'Javier Milei', 'Galerna'), ('La Batalla Cultural', 'El libro define el concepto de batalla cultural y muestra hasta qué punto la cultura ha llegado a ser el botín principal del poder, cómo se han desarrollado estas batallas desde los tiempos modernos hasta la actual posmodernidad y cómo enfrentarlas.', 'https://m.media-amazon.com/images/I/41Dm1BK+1rL.jpg', 10.99, 'Agustin Laje', 'Sekotia'), ('Argentina Hiperacelerada', 'La pandemia y la guerra en Ucrania son dos hiperaceleradores de procesos económicos, tecnológicos y sociales que en pocos años están transformando el mundo.', 'https://m.media-amazon.com/images/I/41WY+JcKcRL.jpg', 11.99, 'Federico Dominguez', 'Planeta Argentina'); 

-- push to PSQL: $ psql < database.sql