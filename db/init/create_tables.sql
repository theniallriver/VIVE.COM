CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    auth_id varchar(200),
    first_name varchar(20),
    last_name varchar(20),
    picture_url text
);
CREATE TABLE IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    product_name varchar(100),
    product_desc text,
    product_img text,
    product_price NUMERIC(10,2)
);

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id int,
    completed_date text,
    fulfilled_date text
);

CREATE TABLE IF NOT EXISTS products_in_order (
    id SERIAL PRIMARY KEY,
    order_id int,
    product_id int,
    qty int
);
