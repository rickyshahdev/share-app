const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

router.get('/', (req, res) => {
    postgres.query('SELECT * FROM festival ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    });
});

router.post('/', (req, res) => {
    postgres.query(`INSERT INTO festival (img, festival, date, name, gift) VALUES ('${req.body.img}', '${req.body.festival}','${req.body.date}','${req.body.name}','${req.body.gift}')`, (err, results) => {
        postgres.query('SELECT * FROM festival ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

router.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM festival WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM festival ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

router.put('/:id', (req, res) => {
    postgres.query(`UPDATE festival SET img = '${req.body.img}', festival = '${req.body.festival}',date='${req.body.date}',name='${req.body.name}',gift='${req.body.gift}' WHERE id = ${req.params.id}`, (err, results) => {
        postgres.query('SELECT * FROM festival ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

module.exports = router;
