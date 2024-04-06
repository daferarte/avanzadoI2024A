const {response, request} = require('express');

const viewUsers = async (req = request, res = response) => {
    res.json({
        'msg':'exito'
    })
};

module.exports = {
    viewUsers
}