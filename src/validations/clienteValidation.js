const { z } = require('zod');

const clienteSchema = z.object({
    nome: z.string()
    .trim()
    .min(1, 'Nome é obrigatório'),

    telefone: z.string()
    .trim()
    .regex(/^\d+$/, 'Telefone deve conter apenas números')
    .min(8, 'Telefone inválido'),

    email: z.union([
    z.string().email('Email inválido'),
    z.literal('')
]).optional()
});

module.exports = clienteSchema;