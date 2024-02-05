const Traveller = require('./Traveller')
const Location = require('./Location')
const Trip = require('./Trip')

Traveller.belongsToMany(Location, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'travellers_location'
});

Location.belongsToMany(Traveller, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'locations_to_travel'
});

module.exports = {Traveller, Location, Trip };