const {Model, Datatypes} = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init(
    {
        name: {
        type: Datatypes.STRING
    },
    email: {
        type: Datatypes.STRING
    },
},
{
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'traveller'
}
);

module.exports = Traveller;