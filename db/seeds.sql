-- Need values
-- depart: id and name varchar(30)
-- role: id, title varchar(30), salary DECIMAL, depart-id.
-- employee: id, first_name varchar(30), LAST_NAME varchar(30), role_id INT, manager_id INT
INSERT INTO
  department (id, name)
VALUES
  (" blah blah"),
  (" blah blah"),
  (" blah blah"),
  (" blah blah"),
  (" blah blah"),
  -- table 2
INSERT INTO
  role (title, salary, department_id)
VALUES
  ("Software Developer", 100000, 1),
  (" blah blah"),
  -- table 3
INSERT INTO
  employee (id, first_name, last_name, role_id, manager_id)
VALUES
  (" blah blah"),
  (" blah blah"),
  (" blah blah"),
  (" blah blah"),
  (" blah blah"),
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