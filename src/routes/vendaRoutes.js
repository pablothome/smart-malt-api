const express = require('express');
const router = express.Router();

const vendaController = require('../controllers/vendaController');

/**
 * @swagger
 * tags:
 *   name: Vendas
 *   description: Registro de vendas e baixa automática de estoque
 */

/**
 * @swagger
 * /vendas:
 *   post:
 *     summary: Realiza uma venda
 *     tags: [Vendas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clienteId:
 *                 type: integer
 *                 example: 1
 *               itens:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     produtoId:
 *                       type: integer
 *                       example: 1
 *                     quantidade:
 *                       type: integer
 *                       example: 2
 *     responses:
 *       201:
 *         description: Venda realizada com sucesso
 *       400:
 *         description: Estoque insuficiente ou dados inválidos
 *       404:
 *         description: Cliente ou produto não encontrado
 */
router.post('/', vendaController.criarVenda);

module.exports = router;