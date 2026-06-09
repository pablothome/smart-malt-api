const prisma = require('../prisma/client');

exports.listar = async (req, res) => {
    const movimentacoes = await prisma.movimentacao.findMany({
        include: {
            produto: true
        }
    });

    res.json(movimentacoes);
};

exports.entrada = async (req, res) => {
    const { produtoId, quantidade } = req.body;

    const produto = await prisma.produto.findUnique({
        where: { id: Number(produtoId) }
    });

    if (!produto) {
        return res.status(404).json({
            erro: 'Produto não encontrado'
        });
    }

    await prisma.produto.update({
        where: { id: Number(produtoId) },
        data: {
            quantidadeEstoque: produto.quantidadeEstoque + quantidade
        }
    });

    const movimentacao = await prisma.movimentacao.create({
        data: {
            tipo: 'ENTRADA',
            quantidade,
            produtoId: Number(produtoId)
        }
    });

    res.status(201).json(movimentacao);
};

exports.saida = async (req, res) => {
    const { produtoId, quantidade } = req.body;

    const produto = await prisma.produto.findUnique({
        where: { id: Number(produtoId) }
    });

    if (!produto) {
        return res.status(404).json({
            erro: 'Produto não encontrado'
        });
    }

    if (produto.quantidadeEstoque < quantidade) {
        return res.status(400).json({
            erro: 'Estoque insuficiente'
        });
    }

    await prisma.produto.update({
        where: { id: Number(produtoId) },
        data: {
            quantidadeEstoque: produto.quantidadeEstoque - quantidade
        }
    });

    const movimentacao = await prisma.movimentacao.create({
        data: {
            tipo: 'SAIDA',
            quantidade,
            produtoId: Number(produtoId)
        }
    });

    res.status(201).json(movimentacao);
};