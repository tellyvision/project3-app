var path = require('path');
var connection = require('../db/connection.js');

module.exports = function(app){

    ///////////////////
    // GET requests ///
    ///////////////////

    // get request for search bar
    app.get('/api/search*', function(req, res) {
        console.log(req.query.column);
        console.log(req.query.columnVar);

            let SQLquery = "select * from dogInfo where " + req.query.column + " = " + req.query.columnVar;    


            connection.query(SQLquery, (err, data) => {
                console.log(SQLquery)
                if(err) {
                    console.log(err);
                    return false;
                }
                res.json(data);

        });
    });

    // get request for get 1 dog info
    app.get('/api/dog-info/:id', function(req, res) {
        let query = `select * from dogInfo where dog_id = ${req.body}`;
        connection.query(query, (err, data) => {
            if(err) {
                console.log(err);
                return false;
            }
            return true;
        })
    });


    // get request for getting all dogs info owned a specific user
    app.get('/api/ownerDogSearch', function(req, res) {
        let query = "select * from dogInfo where owner_id = " + req.query.userID;
        connection.query(query, (err, data) => {
            if(err) {
                console.log(err);
                return false;
            }
            console.log(data);
            res.json(data);
        });
    });


    // get request for user information, data used to populate form
    app.get('/api/user-profile', function(req, res) {
        let query = `select * from userInfo where user_id = ${state.user_id}`;
        connection.query(query, (err, data) => {
            if(err) {
                console.log(err);
                return false;
            }
            return true;
        })
        res.json('test')
    })

    ///////////////////
    // POST requests //
    ///////////////////

    // creating new user - handled by PASSPORT
    // app.post('/api/user-profile', function(req, res) {
    // });

    // create new dog profile
    app.post('/api/dog-profile', function(req, res) {
        var query = `insert into dogInfo (owner_id, dog_name, size, breed, activeness, microchip, social_children, social_ppl, social_dog, dog_url) values (${req.body.owner_id}, '${req.body.dog_name}', ${req.body.size}, '${req.body.breed}', ${req.body.activeness}, ${req.body.microchip}, ${req.body.social_children}, ${req.body.social_ppl}, ${req.body.social_dog}, '${req.body.dog_url}')`;
        // see if data can be passed as string
        connection.query(query, (err, data) => {
            if(err) {
                console.log(err);
                return false;
            }
            return true;
        })
    });

    // create new booking/meetup - for dog owner
    // owner submit new booking
    app.post('/api/meet-up', function(req, res) {
        let query = `insert into bookingInfo (booking_dog_id, lender_id, booking_date) values (${req.body})`;
        console.log(query);
        connection.query(query, (err, data) => {
            if(err) {
                console.log(err);
                return false;
            }
            return true;
        })
    });

    ///////////////////
    // PUT requests ///
    ///////////////////

    // modifying existing user profile
    app.put('/api/user-profile/:id', function(req, res) {
        var query = `update userInfo () values () where user_id = ${req.params.id}`;
        connection.query(query, (err, data) => {
            if(err) {
                console.log(err);
                return false;
            }
            return true;
        });
    });

    // modifying existing dog profile
    app.put('/dog-profile/:id', function(req, res) {
        var query = `update dogInfo () values () where dog_id = ${req.params.id}`;
        connection.query(query, (err, data) => {
            if(err) {
                console.log(err);
                return false;
            }
            return true;
        });
    });

    // updating existing/unfulfilled meetup - for borrower
    app.put('/meet-up/:id', function(req, res) {
        var query = `update userInfo (lender_id) values () where booking_id = ${req.params.id}`;
        connection.query(query, (err, data) => {
            if(err) {
                console.log(err);
                return false;
            }
            return true;
        });
    });

    /////////////////////
    // DELETE requests //
    /////////////////////

    // delete a user profile
    // app.delete('/api/user-profile/:id', function(req, res) {
    //     var query = `delete from userInfo where booking_id = ${req.params.id}`;
    //     connection.query(query, (err, data) => {
    //         if(err) {
    //             console.log(err);
    //             return false;
    //         }
    //         return true;
    //     });
    // });

    // delete a dog profile
    // app.delete('/api/dog-profile/:id', function(req, res) {
    //     var query = `delete from dogInfo where booking_id = ${req.params.id}`;
    //     connection.query(query, (err, data) => {
    //         if(err) {
    //             console.log(err);
    //             return false;
    //         }
    //         return true;
    //     });
    // });

    // delete a meet-up entry
    // app.delete('/api/meet-up/:id', function(req, res) {
    //     var query = `delete from bookingInfo where booking_id = ${req.params.id}`;
    //     connection.query(query, (err, data) => {
    //         if(err) {
    //             console.log(err);
    //             return false;
    //         }
    //         return true;
    //     });
    // });

}