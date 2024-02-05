const {Model, Datatypes} = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
    {
        location_name: {
        type: Datatypes.STRING
    },
},
{
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'location'
}
);

module.exports = Traveller;