-- Need values
--
-- employee: id, first_name varchar(30), LAST_NAME varchar(30), role_id INT, manager_id INT
-- table 1 depart: id and name varchar(30)
INSERT INTO
  department (id, name)
VALUES
  ("1", "Sales"),
  ("2", "Engineering"),
  ("3", "Quaility Insurence"),
  ("4", "Finance"),
  ("5", "HR");
--
  --
  --
  -- table 2 -- role: id, title varchar(30), salary DECIMAL, depart-id.
INSERT INTO
  roles (title, salary, department_id)
VALUES
  ("Software Developer", 100000, 1),
  ("Web Developer", 75000, 2),
  ("Database Admin", 150000, 4),
  ("QA", 60000, 3),
  ("Programer", 55000, 2);
--
  --
  --
  --
INSERT INTO
  employee (id, first_name, last_name, role_id, manager_id)
VALUES
  (1, 'Catherine', 'Cox', 1, NULL),(2, 'Turk', 'Turkleton', 4, NULL);
--
  --
INSERT INTO
  employee (first_name, last_name, role_id, manager_id)
VALUES
  ('DR. Jan', 'Itor', 3, 1),
  ('Elliot', 'Reeds', 2, 2),
  ('JD', '', 2, 2);
--
  --
  --
  -- example code
  -- INSERT INTO favorite_books (book_name, section, in_stock, quantity)
  -- VALUES ("The Great Gatsby", 1, true, 11),
  --        ("Huckleberry Finn", 1, true, 4),
  --        ("100 Years of Solitude", 3, false, 0),
  --        ("Things Fall Apart", 4 , false, 0 ),
  --        ("Crime and Punishment", 1, true, 15),
  --        ("Moby Dick", 2, true, 11),
  --        ("Decameron", 5, false, 0),
  --        ("The Wind and the Willows", 2, true, 11),
  --        ("Ulysses", 3, true, 8),
  --        ("Madame Bovary", 4 , true, 9 ),
  --        ("Catcher in the Rye", 1, true, 23),
  --        ("Catch-12", 5, true, 18),
  --        ("Hamlet", 5, true, 14);