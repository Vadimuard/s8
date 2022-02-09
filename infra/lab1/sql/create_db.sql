CREATE SCHEMA auto_dealer AUTHORIZATION admin
GRANT SELECT,
  INSERT,
  UPDATE,
  DELETE ON ALL TABLES IN SCHEMA auto_dealer TO master;
-- TODO Fill with columns
CREATE TABLE auto_dealer.auto ();
CREATE TABLE auto_dealer.customers ();
CREATE TABLE auto_dealer.manufacturers ();
CREATE TABLE auto_dealer.personnel ()
