CREATE TABLE festival (id SERIAL, img TEXT, festival VARCHAR(255), date DATE, name VARCHAR(255), gift VARCHAR(255));

INSERT INTO festival (img, festival, date, name, gift) VALUES ('https://www.childrensdiabetesfoundation.org/wp-content/uploads/2017/10/hall.jpg',' HALLOWEEN', '10/12/2020',' jyoti',' watch' );

CREATE TABLE post (id SERIAL, img TEXT NOT NULL, title TEXT NOT NULL, date date, likes INT DEFAULT 0);

 INSERT INTO post (img, title, date, likes) VALUES ('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrt52oJmGg3mme-HgKMmfygxzoDzsKAlMgRA&usqp=CAU', 'Best Bootcamp Ever', '11/10/2020', 100);
