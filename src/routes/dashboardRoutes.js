const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/dashboardController');

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Indicadores e estatísticas do sistema
 */

/**
 * @swagger
 * /dashboard:
 *   get:
 *     summary: Retorna o resumo geral do sistema
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Resumo retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalProdutos:
 *                   type: integer
 *                   example: 25
 *                 totalClientes:
 *                   type: integer
 *                   example: 40
 *                 totalFornecedores:
 *                   type: integer
 *                   example: 12
 *                 totalVendas:
 *                   type: integer
 *                   example: 35
 *                 valorTotalVendas:
 *                   type: number
 *                   example: 5420.50
 *                 estoqueBaixo:
 *                   type: integer
 *                   example: 3
 */
router.get('/', dashboardController.obterResumo);

module.exports = router;