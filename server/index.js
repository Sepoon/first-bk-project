const express    = require('express');
const mysql      = require('mysql');
const cors       = require('cors');
const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

const app = express();

app.use(cors({origin: 'http://localhost:3000'}));

// configuration =========================
app.set('port', process.env.PORT || 3001);

app.get('/', (req, res) => {
  res.send('hello node');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM membertbl', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});