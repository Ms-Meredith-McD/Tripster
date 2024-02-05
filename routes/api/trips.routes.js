const router = require('express').Router();
const { Trip } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const tripData = await Trip.findAll;
        res.status(200).json(tripData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const tripData = await Trip.findByPk(req.params.id)

    if (!tripData) {
        res.status(404).json({ message: 'No trip data found id that id!'});
        return;
    }

    res.status(200).json(tripData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const tripData = await Trip.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!tripData) {
            res.status(404).json({ message: 'No trip found with that id!' });
            return;
        }

        res.status(200).json({ message: 'Trip successfully ruined!' });
    } catch (err) {
        res.status(500).json(err);
    }
});