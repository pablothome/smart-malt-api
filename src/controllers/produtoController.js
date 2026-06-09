const prisma = require('../prisma/client');
const produtoSchema = require('../validations/produtoValidation');

exports.criar = async (req, res) => {
    try {

        const validacao = produtoSchema.safeParse(req.body);

        if (!validacao.success) {
            return res.status(400).json({
                erros: validacao.error.issues
            });
        }

        const produto = await prisma.produto.create({
            data: req.body
        });

        res.status(201).json(produto);

    } catch (error) {

        res.status(500).json({
            erro: error.message
        });

    }
};

exports.listar = async (req, res) => {
    try {

        const produtos = await prisma.produto.findMany();

        res.json(produtos);

    } catch (error) {

        res.status(500).json({
            erro: error.message
        });

    }
};

exports.buscarPorId = async (req, res) => {
    try {

        const produto = await prisma.produto.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });

        if (!produto) {
            return res.status(404).json({
                erro: 'Produto não encontrado'
            });
        }

        res.json(produto);

    } catch (error) {

        res.status(500).json({
            erro: error.message
        });

    }
};

exports.atualizar = async (req, res) => {
    try {

        const validacao = produtoSchema.safeParse(req.body);

        if (!validacao.success) {
            return res.status(400).json({
                erros: validacao.error.issues
            });
        }

        const produto = await prisma.produto.update({
            where: {
                id: Number(req.params.id)
            },
            data: req.body
        });

        res.json(produto);

    } catch (error) {

        res.status(404).json({
            erro: 'Produto não encontrado'
        });

    }
};

exports.deletar = async (req, res) => {
    try {

        await prisma.produto.delete({
            where: {
                id: Number(req.params.id)
            }
        });

        res.json({
            mensagem: 'Produto removido com sucesso'
        });

    } catch (error) {

        res.status(404).json({
            erro: 'Produto não encontrado'
        });

    }
};