const { z } = require('zod');

const produtoSchema = z.object({
    nome: z.string()
    .trim()
    .min(1, 'Nome é obrigatório'),

    marca: z.string()
    .trim()
    .min(1, 'Marca é obrigatória'),

    categoria: z.string()
    .trim()
    .min(1, 'Categoria é obrigatória'),

    preco: z.number()
        .positive('Preço deve ser maior que zero'),

    quantidadeEstoque: z.number()
        .int('Estoque deve ser inteiro')
        .min(0, 'Estoque não pode ser negativo')
});

module.exports = produtoSchema;