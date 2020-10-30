CREATE TABLE festival (id SERIAL, img TEXT, festival VARCHAR(255), date DATE, name VARCHAR(255), gift VARCHAR(255));

INSERT INTO festival (img, festival, date, name, gift) VALUES ('https://www.childrensdiabetesfoundation.org/wp-content/uploads/2017/10/hall.jpg',' HALLOWEEN', '10/12/2020',' jyoti',' watch' );

CREATE TABLE post (id SERIAL, img TEXT NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL);

 INSERT INTO post (img, title, date, likes) VALUES ('https://mediad.publicbroadcasting.net/p/wyprmain/files/styles/x_large/public/201901/general_assembly.jpg', 'Best Bootcamp Ever', 'General Assembly is a pioneer in education and career transformation, specializing in today\'s most in-demand skills. The leading source for training, staffing, and career transitions, we foster a flourishing community of professionals pursuing careers they love.');
