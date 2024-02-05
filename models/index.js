const Traveller = require('./model/Traveller')
const Location = require('./model/Location')
const Trip = require('./model/Trip')

Traveller.belongstoMany(Location, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'travellers_location'
});

Location.BelongsToMany(Traveller, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'locations_to_travel'
});

module.exports = {Traveller, Location, Trip };