const prisma = require('../prisma/client');
const clienteSchema = require('../validations/clienteValidation');

exports.listar = async (req, res) => {
    const clientes = await prisma.cliente.findMany();
    res.json(clientes);
};

exports.buscarPorId = async (req, res) => {
    const cliente = await prisma.cliente.findUnique({
        where: { id: Number(req.params.id) }
    });

    if (!cliente) {
        return res.status(404).json({ erro: 'Cliente não encontrado' });
    }

    res.json(cliente);
};

exports.criar = async (req, res) => {

    const validacao = clienteSchema.safeParse(req.body);

    if (!validacao.success) {
        return res.status(400).json({
            erros: validacao.error.issues
        });
    }

    const cliente = await prisma.cliente.create({
        data: req.body
    });

    res.status(201).json(cliente);
};


exports.atualizar = async (req, res) => {
    const cliente = await prisma.cliente.update({
        where: { id: Number(req.params.id) },
        data: req.body
    });

    res.json(cliente);
};

exports.excluir = async (req, res) => {
    await prisma.cliente.delete({
        where: { id: Number(req.params.id) }
    });

    res.status(204).send();
};