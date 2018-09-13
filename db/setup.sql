CREATE DATABASE IF NOT EXISTS DogShare_Proj3;
USE DogShare_Proj3;

CREATE TABLE IF NOT EXISTS userInfo(
    user_id int primary key auto_increment,
    user_name varchar(200) not null,
    user_addr varchar(300) not null,
    user_postal varchar(6) not null
);

CREATE TABLE IF NOT EXISTS dogInfo(
    dog_id int primary key auto_increment,
    owner_id int not null,
    dog_name varchar(80) not null,
    size decimal(5,2) not null,
    breed varchar(50) not null,
    activeness int,
    microchip boolean,
    social_children boolean,
    social_ppl int,
    social_dog int,
    foreign key fk_owner_id(owner_id) references userInfo(user_id)
);

CREATE TABLE IF NOT EXISTS bookingInfo(
    booking_id int primary key auto_increment,
    booking_dog_id int not null,
    lender_id int not null,
    borrower_id int not null,
    booking_date datetime not null,
    foreign key fk_dog(booking_dog_id) references dogInfo(dog_id),
    foreign key fk_lender(lender_id) references userInfo(user_id),
    foreign key fk_borrower(borrower_id) references userInfo(user_id)
);