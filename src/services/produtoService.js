const Produto = require('../models/produtoModel');

class ProdutoService {
  static validateProduto(data) {
    const errors = [];

    if (!data.nome || data.nome.trim() === '') {
      errors.push('Nome é obrigatório');
    }

    if (!data.preco || isNaN(data.preco) || parseFloat(data.preco) < 0) {
      errors.push('Preço deve ser um número válido maior ou igual a zero');
    }

    if (!data.categoria || data.categoria.trim() === '') {
      errors.push('Categoria é obrigatória');
    }

    if (data.estoque === undefined || isNaN(data.estoque) || parseInt(data.estoque) < 0) {
      errors.push('Estoque deve ser um número válido maior ou igual a zero');
    }

    return errors;
  }

  static async criarProduto(data) {
    const errors = this.validateProduto(data);
    
    if (errors.length > 0) {
      throw { status: 400, message: 'Dados inválidos', errors };
    }

    const produtoId = await Produto.create(data);
    const produto = await Produto.findById(produtoId);
    return produto;
  }

  static async listarProdutos(filters) {
    const produtos = await Produto.findAll(filters);
    return produtos;
  }

  static async buscarProdutoPorId(id) {
    const produto = await Produto.findById(id);
    
    if (!produto) {
      throw { status: 404, message: 'Produto não encontrado' };
    }

    return produto;
  }

  static async atualizarProduto(id, data) {
    await this.buscarProdutoPorId(id);
    const errors = this.validateProduto(data);
    
    if (errors.length > 0) {
      throw { status: 400, message: 'Dados inválidos', errors };
    }

    await Produto.update(id, data);
    const produto = await Produto.findById(id);
    return produto;
  }

  static async deletarProduto(id) {
    await this.buscarProdutoPorId(id);

    const affectedRows = await Produto.delete(id);
    
    if (affectedRows === 0) {
      throw { status: 404, message: 'Produto não encontrado' };
    }

    return { message: 'Produto deletado com sucesso' };
  }

  static async listarCategorias() {
    const categorias = await Produto.getCategorias();
    return categorias;
  }
}

module.exports = ProdutoService;
