const express = require('express');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');

const produtoRoutes = require('./routes/produtoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const fornecedorRoutes = require('./routes/fornecedorRoutes');
const movimentacaoRoutes = require('./routes/movimentacaoRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const vendaRoutes = require('./routes/vendaRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        sistema: 'SMART MALT API',
        versao: '1.0.0',
        status: 'Online'
    });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/produtos', produtoRoutes);
app.use('/clientes', clienteRoutes);
app.use('/fornecedores', fornecedorRoutes);
app.use('/movimentacoes', movimentacaoRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/vendas', vendaRoutes);

module.exports = app;