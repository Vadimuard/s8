-- create auto_dealer schema and give rights to master user
CREATE SCHEMA auto_dealer AUTHORIZATION admin
GRANT SELECT,
  INSERT,
  UPDATE,
  DELETE ON ALL TABLES IN SCHEMA auto_dealer TO master;
-- create tables
CREATE TABLE auto_dealer.manufacturers (
  id SERIAL PRIMARY KEY,
  name varchar(50) NOT NULL,
  country varchar(50) NOT NULL,
  description varchar(400) NOT NULL
);
CREATE TABLE auto_dealer.car_body (
  id SERIAL PRIMARY KEY,
  name varchar(30) NOT NULL,
  wiki_link varchar(200) NOT NULL
);
CREATE TABLE auto_dealer.auto (
  id SERIAL PRIMARY KEY,
  manufacturer_id INT NOT NULL,
  FOREIGN KEY (manufacturer_id) REFERENCES auto_dealer.manufacturers (id),
  model varchar(50) NOT NULL,
  body_id INT NOT NULL,
  year_released SMALLINT NOT NULL,
  VIN varchar(20) NOT NULL,
  price INT NOT NULL,
  horse_power SMALLINT DEFAULT 0,
  color varchar(30) DEFAULT ''
);
CREATE TABLE auto_dealer.users (
  id SERIAL PRIMARY KEY,
  full_name varchar(100) NOT NULL,
  phone_number varchar(14) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(250) NOT NULL,
  employee_id INT NOT NULL
);
CREATE TABLE auto_dealer.employees (
  id SERIAL PRIMARY KEY,
  birthday date NOT NULL,
  gender SMALLINT NOT NULL,
  wage INT NOT NULL,
  position varchar(50) NOT NULL
);
CREATE TABLE auto_dealer.orders (
  id SERIAL PRIMARY KEY,
  auto_id INT NOT NULL,
  FOREIGN KEY (auto_id) REFERENCES auto_dealer.auto (id),
  customer_id INT NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES auto_dealer.users (id),
  seller_id INT NOT NULL,
  FOREIGN KEY (seller_id) REFERENCES auto_dealer.users (id),
  created_at timestamp,
  paid_date timestamp DEFAULT NULL
);
