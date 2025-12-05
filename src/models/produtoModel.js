const { pool } = require('../config/db');

class Produto {
  static async create(produtoData) {
    const { nome, preco, descricao, categoria, estoque } = produtoData;
    
    const query = `
      INSERT INTO produtos (nome, preco, descricao, categoria, estoque)
      VALUES (?, ?, ?, ?, ?)
    `;
    
    const [result] = await pool.execute(query, [nome, preco, descricao, categoria, estoque]);
    return result.insertId;
  }

  static async findAll(filters = {}) {
    let query = 'SELECT * FROM produtos WHERE 1=1';
    const params = [];

    if (filters.categoria) {
      query += ' AND categoria = ?';
      params.push(filters.categoria);
    }

    if (filters.ordenar === 'preco_asc') {
      query += ' ORDER BY preco ASC';
    } else if (filters.ordenar === 'preco_desc') {
      query += ' ORDER BY preco DESC';
    } else {
      query += ' ORDER BY id DESC';
    }

    const [rows] = await pool.execute(query, params);
    return rows;
  }

  static async findById(id) {
    const query = 'SELECT * FROM produtos WHERE id = ?';
    const [rows] = await pool.execute(query, [id]);
    return rows[0];
  }

  static async update(id, produtoData) {
    const { nome, preco, descricao, categoria, estoque } = produtoData;
    
    const query = `
      UPDATE produtos 
      SET nome = ?, preco = ?, descricao = ?, categoria = ?, estoque = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;
    
    const [result] = await pool.execute(query, [nome, preco, descricao, categoria, estoque, id]);
    return result.affectedRows;
  }

  static async delete(id) {
    const query = 'DELETE FROM produtos WHERE id = ?';
    const [result] = await pool.execute(query, [id]);
    return result.affectedRows;
  }

  static async getCategorias() {
    const query = 'SELECT DISTINCT categoria FROM produtos ORDER BY categoria';
    const [rows] = await pool.execute(query);
    return rows.map(row => row.categoria);
  }
}

module.exports = Produto;
