const getMessage = require('./Service').getMessage;

exports.ask = (req, res, next) => {
    return getMessage(req.body)
    .then(output => {
        res.status(200);
        res.send(output);
    })
    .catch(next);
};