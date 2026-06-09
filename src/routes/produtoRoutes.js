/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Lista todos os produtos
 *     responses:
 *       200:
 *         description: Sucesso
 */


const express = require('express');

const router = express.Router();

const controller = require('../controllers/produtoController');

router.post('/', controller.criar);

router.get('/', controller.listar);

router.get('/:id', controller.buscarPorId);

router.put('/:id', controller.atualizar);

router.delete('/:id', controller.deletar);

module.exports = router;