const express = require('express');
module.exports = function(options = {}) { // Router factory
    const router = express.Router();
    router.get('/greet', (req, res, next) => {
        res.end(options.greeting);
    });

    router.get('/nombre', (req, res, next) => {
        res.end(options.nombre);
    });

    return router;
};
