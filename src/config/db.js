const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "lucas123",
  database: "catalogoproduto",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✓ Conexão com o banco de dados estabelecida com sucesso!');
    connection.release();
  } catch (error) {
    console.error('✗ Erro ao conectar com o banco de dados:', error.message);
    process.exit(1);
  }
};

module.exports = { pool, testConnection };
