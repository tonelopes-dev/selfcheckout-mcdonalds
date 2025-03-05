# README - Self-Checkout McDonald's (FullStackWeek)

![App Screenshot](/public/banner-project-mcdonalds.jpg)

## 🍔 Visão Geral

O **Self-Checkout McDonald's** é uma aplicação desenvolvida durante a FullStackWeek, permitindo que clientes realizem pedidos de forma autônoma e eficiente. Inspirado nos terminais de autoatendimento, o projeto visa melhorar a experiência do usuário em restaurantes, reduzindo filas e otimizando o processo de compra.

## 🚀 Tecnologias Utilizadas

- **Next.js 15**: Framework React para renderização no servidor e client-side.
- **Tailwind CSS**: Framework de estilização rápida e responsiva.
- **Prisma ORM**: Gerenciamento do banco de dados com facilidade.
- **Radix UI**: Componentes acessíveis e estilizáveis.
- **React Hook Form**: Gerenciamento de formulários otimizado.
- **Zod**: Validação de formulários com TypeScript.
- **Lucide React**: Ícones modernos e customizáveis.
- **React Context API**: Gerenciamento de estado global.
- **Sonner**: Sistema de notificações otimizado.

## 🛠️ Funcionalidades

- **Escolha de Produtos**: Interface intuitiva para seleção de itens do cardápio.
- **Carrinho de Compras**: Adição e remoção de produtos.
- **Gestão de Pedidos**: Acompanhamento do status do pedido em tempo real.

## 📦 Instalação e Uso

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/selfcheckout-mcdonalds.git
   cd selfcheckout-mcdonalds
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env.local`:

   ```env
   DATABASE_URL=<sua-url-do-banco>
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=<seu-segredo>
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse no navegador:
   ```bash
   http://localhost:3000
   ```

## 📂 Estrutura do Projeto

```bash
src/
├── app/            # Estrutura principal da aplicação
│   ├── [slug]/     # Rotas dinâmicas para menus
│   │   ├── [productId]/ # Página de detalhes do produto
│   │   └── actions/  # Ações relacionadas aos pedidos
├── components/     # Componentes reutilizáveis
├── contexts/       # Context API para gerenciamento de estado
├── helpers/        # Funções auxiliares
├── orders/        # Gerenciamento de pedidos
├── prisma/        # Configuração do ORM Prisma
└── public/        # Arquivos estáticos (imagens, logos, etc.)
```

## 📌 Próximos Passos

- Melhorar a acessibilidade (a11y) com atributos ARIA.
- Implementar suporte para cupons de desconto.
- Criar dashboard para administração de pedidos.
- Integração com sistemas de estoque.
- Suporte para diferentes idiomas.

## 🌐 Acesso à Aplicação

Caso não queira clonar o repositório, você pode acessar a aplicação diretamente por este link: [Self-Checkout McDonald's](https://selfcheckout-mcdonalds.vercel.app/)

## 🤝 Contribuição

Se deseja contribuir, sinta-se à vontade para abrir um PR ou reportar issues.

## 📩 Contato

Para mais informações sobre o projeto ou parcerias:
📌 LinkedIn: [Tone Lopes](https://www.linkedin.com/in/tonelopesdev)
📧 Email: [tonelopes.dev@gmail.com](mailto:tonelopes.dev@gmail.com)

---

## 📝 Licença

Este projeto está sob a [licença MIT](LICENSE).
