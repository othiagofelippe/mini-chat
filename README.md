# Mini Chat

Uma aplicação de chat em tempo real construída com React, focando em estrutura de código, gerenciamento de estado e interatividade.

## 🚀 Funcionalidades

- ✅ **Carregamento inicial** de mensagens pré-definidas
- ✅ **Envio de mensagens** em tempo real com campo de texto e botão
- ✅ **Simulação de tempo real** - novas mensagens chegam automaticamente a cada 5 segundos
- ✅ **Interface responsiva** com mensagens visualmente distintas para "Você" vs outros usuários
- ✅ **Auto-scroll** para a mensagem mais recente
- ✅ **Estados de loading** durante carregamento inicial

## 🛠️ Tecnologias

- **React** - Framework principal
- **TypeScript** - Tipagem estática
- **Styled Components** - CSS-in-JS para estilização
- **Vite** - Build tool e desenvolvimento

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd mini-chat
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── ChatHeader/      # Header do chat com status online
│   ├── MessageBubble/   # Componente individual de mensagem
│   └── MessageInput/    # Campo de input para envio
├── services/            # Mock APIs e lógica de dados
│   └── chatApi.ts      # Simulação de GET/POST messages
├── types/              # Definições de tipos TypeScript
│   └── message.ts      # Interface Message
├── App.tsx             # Componente principal
└── styles.ts           # Estilos globais da aplicação
```

## ⚙️ Arquitetura

### Mock APIs
A aplicação simula um backend através de funções que retornam Promises:

- **GET /messages**: Carrega mensagens iniciais (300ms de latência)
- **POST /messages**: Envia nova mensagem (300ms de latência)
- **Simulação tempo real**: setInterval adiciona mensagens automaticamente

### Gerenciamento de Estado
- **useState** para lista de mensagens e estados de loading
- **useEffect** para carregamento inicial e simulação tempo real
- **useCallback** para otimização de performance
- **useRef** para auto-scroll das mensagens

### Componentes
- **Composição modular** com responsabilidades bem definidas
- **Props tipadas** com TypeScript para type safety
- **Styled Components** com padrão de nomenclatura consistente

## 🎯 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build de produção
npm run lint         # Executa linting do código
```

## 🔄 Fluxo da Aplicação

1. **Inicialização**: Carrega mensagens iniciais via mock API
2. **Interação**: Usuário digita e envia mensagens
3. **Tempo Real**: A cada 5s, novas mensagens aparecem automaticamente
4. **UX**: Auto-scroll mantém sempre a mensagem mais recente visível

## 🎨 Features de UX

- **Loading state** durante carregamento inicial
- **Diferenciação visual** entre mensagens próprias e recebidas
- **Timestamps** em todas as mensagens
- **Avatars** para identificação dos usuários
- **Status online/offline** no header
- **Scroll automático** para novas mensagens

## 📝 Desenvolvimento

O projeto foi desenvolvido seguindo boas práticas de:

- **Separação de responsabilidades** entre componentes
- **Tipagem rigorosa** com TypeScript
- **Hooks otimizados** para performance
- **Arquitetura escalável** para futuras extensões
