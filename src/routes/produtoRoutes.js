const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/produtoController');

router.get('/categorias', ProdutoController.listarCategorias);
router.post('/', ProdutoController.criar);
router.get('/', ProdutoController.listar);
router.get('/:id', ProdutoController.buscarPorId);
router.put('/:id', ProdutoController.atualizar);
router.delete('/:id', ProdutoController.deletar);

module.exports = router;
