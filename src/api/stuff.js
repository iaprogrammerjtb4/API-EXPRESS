const express = require('express');
const router = express.Router();
const mysqlConnection  = require('../database.js');

// GET all stuffs
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM app_stuffs', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET an  stuff
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM app_stuffs WHERE stu_id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An stuff
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM app_stuffs WHERE stu_id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Stuff deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An stuff
router.post('/', (req, res) => {
  const { stu_name, stu_state, stu_quantity } = req.body;
  const stu_id = 0;
  console.log(stu_name,stu_state, stu_quantity);
  const query = `INSERT INTO app_stuffs VALUES(?,?,?,?);`;
  mysqlConnection.query(query, [stu_id,stu_name, stu_state,stu_quantity], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'stuff saved'});
    } else {
      console.log(err);
    }
  });

});

/**Update an staff */
router.put('/:id', (req, res) => {
  const { name, state, quantity} = req.body;
  const { id } = req.params;
  const query = `
    UPDATE app_stuff 
      SET stu_name = name,
      SET stu_state = state,
      SET stu_quantity = quantity
    WHERE stu_id = id;    
  `;
  mysqlConnection.query(query,[name, state, quantity], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'stuff updated'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;