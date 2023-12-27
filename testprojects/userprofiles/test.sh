psql --username=freecodecamp --dbname=postgres
CREATE DATABASE player_database;
DROP DATABASE player_database;
ALTER DATABASE player_database RENAME TO Players;
\c Players
CREATE TABLE character;
DROP TABLE character;
CREATE TABLE player();
ALTER TABLE Players ADD COLUMN id SERIAL NOT NULL;
ALTER TABLE Players ADD COLUMN name VARCHAR(30);
ALTER TABLE Players DROP COLUMN name;
ALTER TABLE Players ADD COLUMN last_name VARCHAR(30);
ALTER TABLE Players ADD COLUMN first_name VARCHAR(30);
ALTER TABLE Players ADD COLUMN weight NUMERIC(4, 1);
ALTER TABLE Players RENAME COLUMN id TO player_id;
INSERT INTO Players(last_name, first_name) VALUES("Watson", "Matthew");
SELECT player_id FROM Players;
DELETE FROM Players WHERE last_name="Watson”;
UPDATE Players SET first_name="King" WHERE lastname="Matthew";
SELECT * FROM Players ORDER BY last_name;
ALTER TABLE Players ADD PRIMARY KEY(player_id);
ALTER TABLE Players DROP CONSTRAINT Players_pkey;
ALTER TABLE Players ADD UNIQUE(column_name);
ALTER TABLE Players ADD COLUMN age INT;
ALTER TABLE Players ADD COLUMN ref_id INT REFERENCES referenced_table_name(referenced_column_name);
ALTER TABLE Players ADD FOREIGN KEY(column) REFERENCES referenced_table_name(referenced_column_name);
ALTER TABLE Players ALTER COLUMN last_name SET NOT NULL;
CREATE TABLE actions(action_id SERIAL PRIMARY KEY);
ALTER TABLE actions ADD COLUMN action VARCHAR(20) NOT NULL UNIQUE;