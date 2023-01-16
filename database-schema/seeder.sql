USE stream_db;

TRUNCATE movies;
TRUNCATE content;

INSERT INTO content(
    type_of_content, 
    title, category, 
    description,
    director, 
    actors)
VALUES("movie", 
"test movie", 
"old", 
"This is a test, made to have a testvideo to see if it runs and I could display. Lorem ipsum, blah blah blah, no yes, lorem ipum",
"director noone",
"Really old people");

INSERT INTO movies (content_id, path)
VALUES(1, "http://localhost:5000/EnochArden_512kb.mp4");

SELECT title, category, description, type_of_content, path FROM content AS A join movies AS B ON A.id =
content_id;
