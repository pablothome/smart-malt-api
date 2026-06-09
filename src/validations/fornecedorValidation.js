const { z } = require('zod');

const fornecedorSchema = z.object({
    nome: z.string()
        .trim()
        .min(1, 'Nome é obrigatório')
        .max(100, 'Nome muito grande'),

    cnpj: z.string()
        .trim()
        .regex(/^\d{14}$/, 'CNPJ deve conter exatamente 14 números'),

    telefone: z.string()
        .trim()
        .regex(/^\d+$/, 'Telefone deve conter apenas números')
        .min(8, 'Telefone inválido')
        .max(15, 'Telefone inválido'),

    email: z.union([
        z.string().email('Email inválido'),
        z.literal('')
    ]).optional()
});

module.exports = fornecedorSchema;