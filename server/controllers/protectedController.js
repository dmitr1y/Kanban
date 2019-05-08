const jwt    = require('jsonwebtoken');
const config = require('../configurations/config');

exports.ProtectedRoutes = function (req, res, next) {
    console.log(req.path);
    console.log('secret: ' + config.secret);
    if (req.path=== '/auth/login' || req.path === '/auth/signup') {
        console.log("not protected");
        next();
    } else {
        // check header for the token
        var token = req.headers['access-token'];
        console.log('TOKEN: ' + token);

        // decode token
        if (token) {

            // verifies secret and checks if the token is expired
            jwt.verify(token, config.secret, (err, decoded) => {
                console.log(err)
                if (err) {
                    return res.json({message: 'invalid token'});
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });

        } else {

            // if there is no token

            res.send({

                message: 'No token provided.'
            });

        }
    }
};

