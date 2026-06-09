const express = require('express');
const router = express.Router();

const movimentacaoController = require('../controllers/movimentacaoController');

/**
 * @swagger
 * tags:
 *   name: Movimentações
 *   description: Controle de entrada e saída de estoque
 */

/**
 * @swagger
 * /movimentacoes:
 *   get:
 *     summary: Lista todas as movimentações de estoque
 *     tags: [Movimentações]
 *     responses:
 *       200:
 *         description: Lista de movimentações retornada com sucesso
 */
router.get('/', movimentacaoController.listar);

/**
 * @swagger
 * /movimentacoes/entrada:
 *   post:
 *     summary: Registra entrada de estoque
 *     tags: [Movimentações]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               produtoId:
 *                 type: integer
 *                 example: 1
 *               quantidade:
 *                 type: integer
 *                 example: 50
 *     responses:
 *       201:
 *         description: Entrada registrada com sucesso
 *       404:
 *         description: Produto não encontrado
 */
router.post('/entrada', movimentacaoController.entrada);

/**
 * @swagger
 * /movimentacoes/saida:
 *   post:
 *     summary: Registra saída de estoque
 *     tags: [Movimentações]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               produtoId:
 *                 type: integer
 *                 example: 1
 *               quantidade:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       201:
 *         description: Saída registrada com sucesso
 *       400:
 *         description: Estoque insuficiente
 *       404:
 *         description: Produto não encontrado
 */
router.post('/saida', movimentacaoController.saida);

module.exports = router;