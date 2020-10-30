const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');


router.get('/', (req, res) => {
    postgres.query('SELECT * FROM post ORDER BY id DESC;', (err, results) => {
        res.json(results.rows)
    });
});

router.post('/', (req, res) => {
    postgres.query(`INSERT INTO post (img, title, description) VALUES ('${req.body.img}', '${req.body.title}','${req.body.description}')`, (err, results) => {
        postgres.query('SELECT * FROM post ORDER BY id DESC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

router.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM post WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM post ORDER BY id DESC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

router.put('/:id', (req, res) => {
    postgres.query(`UPDATE post SET img = '${req.body.img}', title = '${req.body.title}', description = '${req.body.description}' WHERE id = ${req.params.id}`, (err, results) => {
        postgres.query('SELECT * FROM post ORDER BY id DESC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

module.exports = router;
