BEGIN;
DROP TABLE category,
flavor,
candy IF EXISTS;
CREATE TABLE category(
    id SERIAL PRIMARY key,
    name VARCHAR(50) not null,
    img_url VARCHAR(100) not null
);
CREATE TABLE flavor(
    id SERIAL PRIMARY key,
    name VARCHAR(50) not null,
    img_url VARCHAR(100) not null
);
CREATE TABLE candy (
    id SERIAL PRIMARY key,
    name VARCHAR(50) not null,
    quantity INTEGER DEFAULT(10),
    img_url VARCHAR(100) not null,
    category_id INTEGER REFERENCES category(id),
    flavor_id INTEGER REFERENCES flavor(id)
);
COMMIT;