const prisma = require('../prisma/client');
const vendaSchema = require('../validations/vendaValidation');

exports.criarVenda = async (req, res) => {

    

    try {

        const validacao = vendaSchema.safeParse(req.body);

        if (!validacao.success) {
            return res.status(400).json({
                erros: validacao.error.issues
            });
        }

        const { clienteId, itens } = req.body;

        const cliente = await prisma.cliente.findUnique({
            where: { id: clienteId }
        });

        if (!cliente) {
            return res.status(404).json({
                erro: 'Cliente não encontrado'
            });
        }

        let valorTotal = 0;

        for (const item of itens) {

            const produto = await prisma.produto.findUnique({
                where: { id: item.produtoId }
            });

            if (!produto) {
                return res.status(404).json({
                    erro: `Produto ${item.produtoId} não encontrado`
                });
            }

            if (produto.quantidadeEstoque < item.quantidade) {
                return res.status(400).json({
                    erro: `Estoque insuficiente para ${produto.nome}`
                });
            }

            valorTotal += produto.preco * item.quantidade;
        }

        await prisma.$transaction(async (tx) => {
            data: {
                clienteId,
                valorTotal
            }
        });

        {

            const produto = await prisma.produto.findUnique({
                where: { id: item.produtoId }
            });

            await prisma.itemVenda.create({
                data: {
                    vendaId: venda.id,
                    produtoId: item.produtoId,
                    quantidade: item.quantidade,
                    precoVenda: produto.preco
                }
            });

            await prisma.produto.update({
                where: { id: item.produtoId },
                data: {
                    quantidadeEstoque:
                        produto.quantidadeEstoque - item.quantidade
                }
            });

            await prisma.movimentacao.create({
                data: {
                    tipo: 'SAIDA',
                    quantidade: item.quantidade,
                    produtoId: item.produtoId
                }
            });
        }

        res.status(201).json({
            mensagem: 'Venda realizada com sucesso',
            vendaId: venda.id,
            valorTotal
        });

    } catch (error) {
        console.error(error)
        res.status(500).json({
            erro: 'Erro interno do servidor'
        });

    }
};