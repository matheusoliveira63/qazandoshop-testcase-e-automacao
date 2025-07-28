# Projeto QAzando Shop - TestCases + Automação (Páginas de Login e Cadastro)
📋 Sobre o Projeto
Este projeto tem como objetivo implementar uma estratégia completa de QA para as páginas de Login e Cadastro do site Automation Practice, abrangendo desde a criação de casos de teste detalhados até a automação completa dos cenários.
🎯 Objetivos Principais

✅ Criar casos de teste detalhados e estruturados
✅ Automatizar cenários de teste críticos
✅ Estabelecer pipeline de testes confiável
✅ Documentar bugs e não-conformidades
✅ Garantir qualidade das funcionalidades de autenticação

🛠️ Tecnologias Utilizadas
Ferramentas de Gestão

TestRail: Criação e gerenciamento de casos de teste
Jira: Gestão do projeto, tracking de bugs e user stories

Automação

Cypress: Framework de automação de testes E2E
JavaScript: Linguagem de programação para os testes
Node.js: Runtime para execução dos testes

📁 Estrutura do Projeto
qaturbo-cypress-web/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js          # Testes automatizados de login
│   │   └── cadastro.cy.js       # Testes automatizados de cadastro
│   ├── fixtures/
│   │   └── example.json         # Dados de teste
│   ├── support/
│   │   ├── commands.js          # Comandos customizados
│   │   └── e2e.js               # Configurações globais
│   └── downloads/
├── evidencias/                  # Imagens gerais do projeto 
├── node_modules/
├── cypress.config.js            # Configuração do Cypress
├── package.json
├── package-lock.json
└── README.md
🔧 Configuração do Ambiente
Pré-requisitos

Node.js (versão 14 ou superior)
npm ou yarn
Git

Instalação

Clone o repositório

bashgit clone <url-do-repositorio>
cd qaturbo-cypress-web

Instale as dependências

bashnpm install

Configure o Cypress

bashnpx cypress open
🧪 Casos de Teste
📝 TestRail - Estrutura dos Test Cases
Página de Login (4 casos de teste)

C1 - Login com sucesso: Validação de login com credenciais válidas
C2 - Senha inválida: Teste de erro com senha incorreta
C3 - E-mail inválido: Validação de formato de email
C4 - Campos vazios: Teste de campos obrigatórios

Página de Cadastro (5 casos de teste)

C5 - Cadastro com sucesso: Fluxo completo de cadastro válido
C6 - E-mail já cadastrado: Validação de email duplicado
C7 - Campos vazios: Teste de campos obrigatórios
C8 - E-mail inválido: Validação de formato de email
C9 - Senha inválida: Teste de critérios de senha
