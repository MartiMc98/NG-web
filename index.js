import db from './db.js';

db.query('SELECT NOW()')
  .then(res => console.log(res.rows))
  .catch(err => console.error(err));