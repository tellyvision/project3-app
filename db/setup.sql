CREATE DATABASE IF NOT EXISTS DogShare_Proj3;
USE DogShare_Proj3;

CREATE TABLE IF NOT EXISTS userInfo(
    user_id int primary key auto_increment,
    user_name varchar(200) not null,
    user_password varchar(20) not null,
    user_email varchar(200) not null,
    user_addr varchar(300) not null,
    user_postal varchar(6) not null
);

CREATE TABLE IF NOT EXISTS dogInfo(
    dog_id int primary key auto_increment,
    owner_id int not null,
    dog_name varchar(80) not null,
    dog_url varchar(500) not null,
    size int not null,
    breed varchar(50) not null,
    activeness int,
    microchip boolean,
    social_children int,
    social_ppl int,
    social_dog int,
    foreign key fk_owner_id(owner_id) references userInfo(user_id)
);

CREATE TABLE IF NOT EXISTS bookingInfo(
    booking_id int primary key auto_increment,
    booking_dog_id int not null,
    lender_id int not null,
    borrower_id int default null,
    booking_date datetime not null,
    foreign key fk_dog(booking_dog_id) references dogInfo(dog_id),
    foreign key fk_lender(lender_id) references userInfo(user_id),
    foreign key fk_borrower(borrower_id) references userInfo(user_id)
);

-- dummy data
insert into userInfo (user_name, user_password, user_email, user_addr, user_postal) values 
    ("Xinyi Zhu", "1111", "xinyizhu@gmail.com", "toronto", "m5v3y4"), 
    ("Victor Ha", "2222", "victor@gmail.com", "somewhere", "m3f5o5"), 
    ("Thy Vo", "3333", "thy@gmail.com", "earth", "m2e8t9");

insert into dogInfo(owner_id, dog_name, dog_url, size, breed, activeness, microchip, social_children, social_ppl, social_dog) values (1, "kuro", "xxxx", 3, "retriever", 5, true, 3, 4, 3);
insert into dogInfo(owner_id, dog_name, dog_url, size, breed, activeness, microchip, social_children, social_ppl, social_dog) values (1, "shiro", "xxxx", 1, "teddy", 4, false, 2, 3, 3);
insert into dogInfo(owner_id, dog_name, dog_url, size, breed, activeness) values (6, "jelly", "xxxx", 3, "german shepherd", 4);

insert into bookingInfo (booking_dog_id, lender_id, borrower_id, booking_date) values (1, 1, 7, "2018-10-11"), (1, 1, 6, "2018-10-14"), (4, 6, 1, "2018-10-12");