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

insert into dogInfo(owner_id, dog_name, dog_url, size, breed, activeness, microchip, social_children, social_ppl, social_dog) values (1, "kuro", "https://www.aplaceforanimals.com/wp-content/uploads/2016/03/golden-retriever.png", 3, "Retriever", 5, true, 3, 4, 3);
insert into dogInfo(owner_id, dog_name, dog_url, size, breed, activeness, microchip, social_children, social_ppl, social_dog) values (1, "shiro", "https://www.prestigeanimalhospital.com/sites/default/files/styles/large/adaptive-image/public/english-springer-spaniel-dog-breed-info.jpg?itok=OR7R6snD", 1, "Spaniel", 4, false, 2, 3, 3);
insert into dogInfo(owner_id, dog_name, dog_url, size, breed, activeness, microchip, social_children, social_ppl, social_dog) values 
(1, "Domino", "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12222533/Appenzeller-Sennenhund-On-White-01.jpg", 1, "AppenzellerSennenhunde", 3, true, 2, 1, 5),
(2, "Sundae", "https://cdn3-www.dogtime.com/assets/uploads/gallery/beagle-dog-breed-pictures/6-fullbod3q.jpg", 3, "Beagle", 1, false, 1, 2, 4),
(1, "Snoopy", "https://cdn.shopify.com/s/files/1/2253/9875/products/HTB1Ua4RXdHO8KJjSZFLq6yTqVXaf.jpg?v=1527543055", 2, "  ", 2, true, 2, 3, 4),
(3, "Mickey", "https://cdn1-www.dogtime.com/assets/uploads/gallery/australian-cattle-dog-dog-breed-pictures/3-fieldsitting.jpg", 1, "Cattledog", 3, false, 2, 3, 3),
(1, "Resilient", "https://cdn3-www.dogtime.com/assets/uploads/gallery/chow-chow-dog-breed-pictures/1-face.jpg", 3, "Chowchow", 5, true, 1, 2, 5),
(2, "Splatter", "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Ten-things-you-didn%E2%80%99t-know-about-Border-collies-.jpg?itok=u97F4xc-", 2, "Collie", 4, false, 2, 5, 3),
(1, "Dice", "https://img.buzzfeed.com/buzzfeed-static/static/2014-09/23/12/enhanced/webdr10/longform-original-22600-1411489016-22.jpg?downsize=700:*&output-format=auto&output-quality=auto", 3, "Corgi", 3, false, 2, 3, 5),
(1, "Edwin", "https://cdn-images-1.medium.com/max/2000/1*QiCmaWiCL3LWFqB2h4trUw.jpeg", 1, "Dalmatian", 4, true, 2, 3, 3),
(1, "Majortoes", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9jxKwGNEzj_QCsPAV7Pnw5GEYl6QDo601e-gZxOBLFoAZ9qu", 2, "EskimoDog", 2, true, 3, 3, 1),
(3, "Patchwork", "https://animalsbreeds.com/wp-content/uploads/2015/02/Hamilton-Hound-6.jpg", 1, "Hound", 5, false, 1, 3, 2),
(1, "Figaro", "http://www.dogzone.com/images/breeds/english-mastiff.jpg", 3, "Mastiff", 3, true, 3, 3, 3),
(1, "Desertwumps", "https://images-na.ssl-images-amazon.com/images/I/61hmtaig7lL._SL1164_.jpg", 1, "Mutt", 4, true, 4, 4, 5),
(1, "Eliza", "https://cdn3-www.dogtime.com/assets/uploads/2011/01/file_22920_doberman-pinscher-460x290.jpg", 1, "Pinocher", 3, false, 2, 2, 2),
(2, "Panda", "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225627/Pomeranian-On-White-01.jpg", 2, "Pomeranian", 2, true, 2, 4, 2),
(1, "Piano", "https://vetstreet.brightspotcdn.com/dims4/default/354d0cf/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fdc%2Fc4%2F8ccd3a28438d81b2f2f5d8031a05%2Fpug-ap-r82p3q-645.jpg", 2, "Pug", 4, false, 5, 3, 3),
(3, "Patch", "https://www.theflyer.com/uploads/image/202959001_202959100/akc-golden-retriever-puppies-text-us-216-930-7599-202959066_2641ad254fb9c60d_858X617.jpg", 2, "Retriever", 1, true, 1, 1, 4),
(2, "Puffin", "https://cdn3-www.dogtime.com/assets/uploads/gallery/old-english-sheepdog-dog-breed-pictures/running-7.jpg", 1, "Sheepdog", 1, false, 4, 3, 5),
(1, "Oreo", "https://st2.depositphotos.com/1010176/11795/v/600/depositphotos_117954698-stock-video-belgian-sheppard-dog-outdoors.jpg", 3, "SheppardDog", 5, true, 2, 1, 3),
(3, "Puffins", "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/14-top-terrier-breeds.jpg?itok=gPu9xAwh", 2, "Terrier", 1, true, 5, 3, 1),
(1, "Felix", "https://yt3.ggpht.com/a-/AN66SAwqJtu8jwYkgw9ojlWz9Zo1XR11NGv4VUlyXw=s900-mo-c-c0xffffffff-rj-k-no", 1, "ShihTzu", 4, false, 4, 2, 3),
(3, "Edison", "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/03/12191449/boykin_spaniel_collection_hero.jpg", 2, "Spaniel", 2, true, 5, 3, 1),
(2, "Eduardo", "https://www.rover.com/blog/wp-content/uploads/2014/08/boston-terrier-960x540.jpg", 1, "Terrier", 1, false, 2, 1, 4),
(1, "Tuxedo", "https://vetstreet-brightspot.s3.amazonaws.com/64/214e60c85311e096760050568d6ceb/file/yorkipoo-2-FL-645km081611.jpg", 3, "Yorkipoo", 3, true, 3, 5, 1);




insert into dogInfo(owner_id, dog_name, dog_url, size, breed, activeness) values (6, "jelly", "xxxx", 3, "german shepherd", 4);

insert into bookingInfo (booking_dog_id, lender_id, borrower_id, booking_date) values (1, 1, 7, "2018-10-11"), (1, 1, 6, "2018-10-14"), (4, 6, 1, "2018-10-12");