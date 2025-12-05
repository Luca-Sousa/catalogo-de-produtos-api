const ProdutoService = require('../services/produtoService');

class ProdutoController {
  static async criar(req, res) {
    try {
      const produto = await ProdutoService.criarProduto(req.body);
      res.status(201).json({
        success: true,
        message: 'Produto criado com sucesso',
        data: produto
      });
    } catch (error) {
      const status = error.status || 500;
      res.status(status).json({
        success: false,
        message: error.message || 'Erro ao criar produto',
        errors: error.errors || []
      });
    }
  }

  static async listar(req, res) {
    try {
      const { categoria, ordenar } = req.query;
      const filters = { categoria, ordenar };
      
      const produtos = await ProdutoService.listarProdutos(filters);
      res.status(200).json({
        success: true,
        count: produtos.length,
        data: produtos
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao listar produtos',
        error: error.message
      });
    }
  }

  static async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const produto = await ProdutoService.buscarProdutoPorId(id);
      res.status(200).json({
        success: true,
        data: produto
      });
    } catch (error) {
      const status = error.status || 500;
      res.status(status).json({
        success: false,
        message: error.message || 'Erro ao buscar produto'
      });
    }
  }

  static async atualizar(req, res) {
    try {
      const { id } = req.params;
      const produto = await ProdutoService.atualizarProduto(id, req.body);
      res.status(200).json({
        success: true,
        message: 'Produto atualizado com sucesso',
        data: produto
      });
    } catch (error) {
      const status = error.status || 500;
      res.status(status).json({
        success: false,
        message: error.message || 'Erro ao atualizar produto',
        errors: error.errors || []
      });
    }
  }

  static async deletar(req, res) {
    try {
      const { id } = req.params;
      const result = await ProdutoService.deletarProduto(id);
      res.status(200).json({
        success: true,
        message: result.message
      });
    } catch (error) {
      const status = error.status || 500;
      res.status(status).json({
        success: false,
        message: error.message || 'Erro ao deletar produto'
      });
    }
  }

  static async listarCategorias(req, res) {
    try {
      const categorias = await ProdutoService.listarCategorias();
      res.status(200).json({
        success: true,
        data: categorias
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao listar categorias',
        error: error.message
      });
    }
  }
}

module.exports = ProdutoController;
