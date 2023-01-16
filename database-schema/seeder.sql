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
"EnochArden_512kb", 
"old", 
"This is a test, made to have a testvideo to see if it runs and I could display. Lorem ipsum, blah blah blah, no yes, lorem ipum",
"director noone",
"Really old people");

INSERT INTO movies (content_id, path)
VALUES(1, "http://localhost:5000/EnochArden_512kb.mp4");

INSERT INTO content(
    type_of_content, 
    title, category, 
    description,
    director, 
    actors)
VALUES("movie", 
"video", 
"test", 
"This is a test, made to have a testvideo to see if it runs and I could display. Lorem ipsum, blah blah blah, no yes, lorem ipum",
"director noone",
"test person");

INSERT INTO movies (content_id, path)
VALUES(2, "http://localhost:5000/video.mp4");

SELECT title, category, description, type_of_content, path FROM content AS A join movies AS B ON A.id =
content_id;
