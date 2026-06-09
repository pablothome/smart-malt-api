const express = require('express');
const router = express.Router();

const fornecedorController = require('../controllers/fornecedorController');

/**
 * @swagger
 * tags:
 *   name: Fornecedores
 *   description: Gerenciamento de fornecedores
 */

/**
 * @swagger
 * /fornecedores:
 *   get:
 *     summary: Lista todos os fornecedores
 *     tags: [Fornecedores]
 *     responses:
 *       200:
 *         description: Lista de fornecedores retornada com sucesso
 */
router.get('/', fornecedorController.listar);

/**
 * @swagger
 * /fornecedores/{id}:
 *   get:
 *     summary: Busca um fornecedor pelo ID
 *     tags: [Fornecedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Fornecedor encontrado
 *       404:
 *         description: Fornecedor não encontrado
 */
router.get('/:id', fornecedorController.buscarPorId);

/**
 * @swagger
 * /fornecedores:
 *   post:
 *     summary: Cadastra um novo fornecedor
 *     tags: [Fornecedores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Distribuidora ABC
 *               cnpj:
 *                 type: string
 *                 example: 12345678000199
 *               telefone:
 *                 type: string
 *                 example: 19999999999
 *               email:
 *                 type: string
 *                 example: contato@abc.com
 *     responses:
 *       201:
 *         description: Fornecedor criado com sucesso
 *       400:
 *         description: Dados inválidos ou CNPJ já cadastrado
 */
router.post('/', fornecedorController.criar);

/**
 * @swagger
 * /fornecedores/{id}:
 *   put:
 *     summary: Atualiza um fornecedor
 *     tags: [Fornecedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Fornecedor atualizado com sucesso
 *       404:
 *         description: Fornecedor não encontrado
 */
router.put('/:id', fornecedorController.atualizar);

/**
 * @swagger
 * /fornecedores/{id}:
 *   delete:
 *     summary: Remove um fornecedor
 *     tags: [Fornecedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Fornecedor removido com sucesso
 *       404:
 *         description: Fornecedor não encontrado
 */
router.delete('/:id', fornecedorController.excluir);

module.exports = router;