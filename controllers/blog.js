const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');


router.get('/', (req, res) => {
    postgres.query('SELECT * FROM post ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    });
});

router.post('/', (req, res) => {
    postgres.query(`INSERT INTO post (img, title, date, likes) VALUES ('${req.body.img}', '${req.body.title}','${req.body.date}','${req.body.likes}')`, (err, results) => {
        postgres.query('SELECT * FROM post ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

router.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM post WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM post ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

router.put('/:id', (req, res) => {
    postgres.query(`UPDATE post SET img = '${req.body.img}', title = '${req.body.title}',date='${req.body.date}',name='${req.body.likes}' WHERE id = ${req.params.id}`, (err, results) => {
        postgres.query('SELECT * FROM post ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

module.exports = router;
