const prisma = require('../prisma/client');
const produtoSchema = require('../validations/fornecedorValidation');

const fornecedorSchema = require('../validations/fornecedorValidation')
exports.listar = async (req, res) => {
    const fornecedores = await prisma.fornecedor.findMany();
    res.json(fornecedores);
};

exports.buscarPorId = async (req, res) => {
    const fornecedor = await prisma.fornecedor.findUnique({
        where: { id: Number(req.params.id) }
    });

    if (!fornecedor) {
        return res.status(404).json({ erro: 'Fornecedor não encontrado' });
    }

    res.json(fornecedor);
};

exports.criar = async (req, res) => {

    const validacao =
        fornecedorSchema.safeParse(req.body);

    if (!validacao.success) {
        return res.status(400).json({
            erros: validacao.error.issues
        });
    }

    try {

        const fornecedor = await prisma.fornecedor.create({
            data: req.body
        });

        res.status(201).json(fornecedor);

    } catch (error) {

        if (error.code === 'P2002') {
            return res.status(400).json({
                erro: 'CNPJ já cadastrado'
            });
        }

        res.status(500).json({
            erro: error.message
        });
    }
};

exports.atualizar = async (req, res) => {
    try {

        const fornecedor = await prisma.fornecedor.update({
            where: { id: Number(req.params.id) },
            data: req.body
        });

        res.json(fornecedor);

    } catch (error) {

        res.status(404).json({
            erro: 'Fornecedor não encontrado'
        });
    }
}

    exports.excluir = async (req, res) => {
    try {

        await prisma.fornecedor.delete({
            where: { id: Number(req.params.id) }
        });

        res.status(204).send();

    } catch (error) {

        res.status(404).json({
            erro: 'Fornecedor não encontrado'
        });
    }
};


