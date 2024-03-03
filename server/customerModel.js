// backend/customerModel.js
const pool = require('./db');

const getAllCustomers = async () => {
  const query = 'SELECT * FROM customers';
  const { rows } = await pool.query(query);
  return rows;
};

// Define other CRUD operations as per your requirements

module.exports = {
  getAllCustomers,
};
