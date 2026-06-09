const { z } = require('zod');

const vendaSchema = z.object({
    clienteId: z.number({
        required_error: 'Cliente é obrigatório'
    }).positive('Cliente inválido'),

    itens: z.array(
        z.object({
            produtoId: z.number({
                required_error: 'Produto é obrigatório'
            }).positive('Produto inválido'),

            quantidade: z.number({
                required_error: 'Quantidade é obrigatória'
            })
            .int('Quantidade deve ser inteira')
            .positive('Quantidade deve ser maior que zero')
        })
    )
    .min(1, 'A venda deve possuir pelo menos um item')
});

module.exports = vendaSchema;