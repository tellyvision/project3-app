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
        // console.log(req.params);
        //str = str.replace(/"/g,"")
        
            let SQLquery = "select * from dogInfo where " + req.query.column + " = " + req.query.columnVar;    

            connection.query(SQLquery, (err, data) => {
                if(err) {
                    console.log(err);
                    return false;
                }
                // resolve(data);
                // res.json(data);  
                
            
                res.json(data)
        
        });
        // let query = `select * from dogInfo where ${connection.escape(req.query.column)} = ${connection.escape(req.query.columnVal)}`;    
        
    });

    // get request for get dog info
    app.get('/api/dog-info', function(req, res) {
        let query = `select * from dogInfo where dog_id = ${req.body}`;
        connection.query(query, (err, data) => {
            if(err) {
                console.log(err);
                return false;
            }
            return true;
        })
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
        var query = `insert into dogInfo (owner_id, dog_name, size, breed, activeness, microchip, social_children, social_ppl, social_dog) values (${req.body})`;
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
        var query = `insert into bookingInfo (booking_dog_id, lender_id, booking_date) values (${req.body})`;
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
    app.put('/api/dog-profile/:id', function(req, res) {
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
    app.put('/api/meet-up/:id', function(req, res) {
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
    app.delete('/api/user-profile/:id', function(req, res) {
        var query = `delete from userInfo where booking_id = ${req.params.id}`;
        connection.query(query, (err, data) => {
            if(err) {
                console.log(err);
                return false;
            }
            return true;
        });
    });

    // delete a dog profile
    app.delete('/api/dog-profile/:id', function(req, res) {
        var query = `delete from dogInfo where booking_id = ${req.params.id}`;
        connection.query(query, (err, data) => {
            if(err) {
                console.log(err);
                return false;
            }
            return true;
        });
    });

    // delete a meet-up entry
    app.delete('/api/meet-up/:id', function(req, res) {
        var query = `delete from bookingInfo where booking_id = ${req.params.id}`;
        connection.query(query, (err, data) => {
            if(err) {
                console.log(err);
                return false;
            }
            return true;
        });
    });

}