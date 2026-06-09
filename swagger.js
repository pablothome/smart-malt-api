const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SMART MALT API',
      version: '1.0.0',
      description: 'Sistema Inteligente de Gestão de Estoque para Adegas e Cervejarias'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor Local'
      }
    ]
  },
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;