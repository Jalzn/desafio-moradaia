# Desafio Técnico Morada.ai: Caixa Eletrônico API

## Descrição
Esta API simula o funcionamento de um caixa eletrônico. Ela recebe um valor de
saque desejado e retorna a quantidade de cédulas de cada valor necessárias para
compor esse saque, utilizando a menor quantidade de cédulas possível. As cédulas
consideradas são: 100, 50, 20, 10, 5 e 2.

## Tecnologias Utilizadas
- Node.js: Plataforma de execução de código JavaScript no servidor.
- Express.js: Framework web para Node.js que simplifica o desenvolvimento de APIs.
- Jest: Framework de testes para JavaScript que facilita a criação de testes automatizados.

## Estrutura do Projeto
```
/api-project
│
├── src/
│   ├── controllers/
│   │   └── ...  // Controladores da API
│   │
│   ├── middleware/
│   │   └── ...  // Middlewares da API
│   │
│   ├── models/
│   │   └── ...  // Modelos de dados da aplicação
│   │
│   ├── routes/
│   │   └── ...  // Definição das rotas da API
│   │
│   ├── schema/
│   │   └── ...  // Esquemas de validação
│   │
│   ├── libs/
│   │   └── ...  // bibliotecas e utilitários
│   │
│   └── index.ts  // Ponto de entrada da aplicação
│
├── package.json  // Arquivo de configuração do npm/yarn
├── tsconfig.json  // Configuração do TypeScript
└── README.md  // Documentação do projeto
```

## Desafios Encontrados no Projeto

Durante o desenvolvimento deste projeto, alguns desafios foram identificados e
superados para garantir o funcionamento adequado da API:

### Tratamento de Entradas Inválidas

Foi criada uma biblioteca de validação chamada `valiation`, que permite a definição
de esquemas de validação. Dessa forma, somos capaz de validar diferentes tipos de entrada
conforme os requisitos específicos da API, retornando um registro de erros detalhado
em caso de falha na validação. Essa abordagem melhorou a robustez da validação de dados
e simplificou expansão futura da lógica de validação no projeto.


## Instalação
Certifique-se de ter o Node.js e npm instalados na sua máquina.
Este projeto foi desenvolvido utilizando Node.js versão 22.3.0 e npm versão 10.8.1.

- Clone o repositório:
```
git clone https://github.com/jalzn/desafio-moradaia.git
cd seu-projeto
```
- Instale as dependências necessárias:
```
npm install
```

## Executando o Projeto
Para iniciar o servidor localmente:
```
npm start
```
O servidor estará acessível em `http://localhost:5000`.

## Testes
Para executar os testes automatizados:
```
npm test
```
Este comando executará todos os testes unitários definidos para garantir que a
lógica de saque esteja funcionando corretamente.
