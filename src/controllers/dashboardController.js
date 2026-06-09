const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.obterResumo = async (req, res) => {
    try {

        const totalProdutos = await prisma.produto.count();

        const totalClientes = await prisma.cliente.count();

        const totalFornecedores = await prisma.fornecedor.count();

        const totalMovimentacoes = await prisma.movimentacao.count();

        const totalVendas = await prisma.venda.count();

        const valorTotalVendas = await prisma.venda.aggregate({
            _sum: {
                valorTotal: true
            }
        });

        const produtosBaixoEstoque = await prisma.produto.count({
            where: {
                quantidadeEstoque: {
                    lte: 10
                }
            }
        });

        const produtosMaisVendidos = await prisma.itemVenda.groupBy({
    by: ['produtoId'],
    _sum: {
        quantidade: true
    },
    orderBy: {
        _sum: {
            quantidade: 'desc'
        }
    },
    take: 5
});

        const quantidadeTotalItens = await prisma.produto.aggregate({
            _sum: {
                quantidadeEstoque: true
            }
        });

        const ultimasMovimentacoes = await prisma.movimentacao.findMany({
            take: 5,
            orderBy: {
                dataMov: 'desc'
            },
            include: {
                produto: {
                    select: {
                        nome: true,
                        marca: true
                    }
                }
            }
        });

        res.json({
            totalProdutos,
            totalClientes,
            totalFornecedores,
            totalMovimentacoes,
            totalVendas,
            valorTotalVendas:
                valorTotalVendas._sum.valorTotal || 0,
            produtosBaixoEstoque,
            quantidadeTotalItens:
                quantidadeTotalItens._sum.quantidadeEstoque || 0,
            ultimasMovimentacoes
        });

    } catch (error) {
        res.status(500).json({
            erro: error.message
        });
    }
};